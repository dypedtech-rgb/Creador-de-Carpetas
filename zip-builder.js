/* ============================================================
   zip-builder.js — Genera imágenes placeholder y ZIP con JSZip
   ============================================================ */

/**
 * Genera una imagen negra placeholder en canvas.
 * @param {string} filename  nombre del archivo (solo el basename)
 * @param {number} w         ancho en px
 * @param {number} h         alto en px
 * @param {string} ext       "png" o "jpg"
 * @returns {Promise<Blob>}
 */
function generatePlaceholder(filename, w, h, ext) {
  const canvas = document.createElement('canvas');
  canvas.width  = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  // Fondo negro
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, w, h);

  // Texto centrado — calcula tamaño de fuente proporcional
  const maxFontPx = Math.min(h * 0.22, w * 0.07, 36);
  const fontSize  = Math.max(10, Math.floor(maxFontPx));
  ctx.fillStyle   = '#ffffff';
  ctx.textAlign   = 'center';
  ctx.textBaseline = 'middle';

  // Línea 1: nombre del archivo
  ctx.font = `bold ${fontSize}px monospace`;
  const maxW = w * 0.9;
  // Si el texto es muy largo, reducir fuente
  let fs = fontSize;
  while (ctx.measureText(filename).width > maxW && fs > 8) {
    fs--;
    ctx.font = `bold ${fs}px monospace`;
  }
  ctx.fillText(filename, w / 2, h / 2 - fontSize * 0.6);

  // Línea 2: dimensiones
  const dimText = `${w} × ${h} px · ${ext.toUpperCase()}`;
  const fs2 = Math.max(8, Math.floor(fs * 0.7));
  ctx.font = `${fs2}px monospace`;
  ctx.fillStyle = '#888888';
  ctx.fillText(dimText, w / 2, h / 2 + fontSize * 0.8);

  // Borde sutil
  ctx.strokeStyle = '#333333';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, w - 2, h - 2);

  return new Promise(resolve => {
    const mime = ext === 'jpg' ? 'image/jpeg' : 'image/png';
    const quality = ext === 'jpg' ? 0.92 : undefined;
    canvas.toBlob(blob => resolve(blob), mime, quality);
  });
}

/**
 * Recorre el árbol de estructura procesado y genera el ZIP.
 * @param {object} structure  árbol generado por processTemplate()
 * @param {string} codeLower  código en minúsculas (ej: "fot-511")
 * @param {function} onProgress  callback(pct, msg)
 * @returns {Promise<Blob>}  ZIP blob
 */
async function buildZip(structure, codeLower, onProgress) {
  if (typeof JSZip === 'undefined') {
    throw new Error('JSZip no está cargado');
  }
  const zip = new JSZip();

  // Cuenta total de archivos imagen para progreso
  let totalImages = 0;
  let doneImages  = 0;

  function countImages(node) {
    if (node.type === 'file') {
      const ext = node.name.split('.').pop().toLowerCase();
      if (['png','jpg','jpeg'].includes(ext)) totalImages++;
    }
    if (node.children) node.children.forEach(countImages);
  }
  countImages(structure);

  /**
   * Recursivo: añade carpetas y archivos al zip.
   * @param {object} node
   * @param {string} zipPath  ruta acumulada dentro del zip
   */
  async function addNode(node, zipPath) {
    const nodePath = zipPath ? zipPath + '/' + node.name : node.name;

    if (node.type === 'folder') {
      zip.folder(nodePath);
      if (node.children) {
        for (const child of node.children) {
          await addNode(child, nodePath);
        }
      }
    } else {
      // Es archivo
      const ext = node.name.split('.').pop().toLowerCase();

      if (['png','jpg','jpeg'].includes(ext)) {
        // Buscar dimensiones — clave relativa desde la raíz (sin root folder)
        // El nodePath es "ROOT/sub/file.png", quitamos el primer segmento (root)
        const relKey = nodePath.split('/').slice(1).join('/');
        const dims = lookupDims(relKey, codeLower);
        const w = dims ? dims.w : 800;
        const h = dims ? dims.h : 400;
        const realExt = (ext === 'jpeg') ? 'jpg' : ext;

        onProgress && onProgress(
          Math.round((doneImages / Math.max(totalImages,1)) * 100),
          `Generando: ${node.name}`
        );

        const blob = await generatePlaceholder(node.name, w, h, realExt);
        zip.file(nodePath, blob);
        doneImages++;

        onProgress && onProgress(
          Math.round((doneImages / Math.max(totalImages,1)) * 100),
          `Generando: ${node.name}`
        );
      } else {
        // Archivos no-imagen: añadir vacío (xlsx, db, etc.)
        zip.file(nodePath, '');
      }
    }
  }

  onProgress && onProgress(0, 'Iniciando...');
  await addNode(structure, '');
  onProgress && onProgress(100, 'Comprimiendo ZIP...');

  const zipBlob = await zip.generateAsync(
    { type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 6 } },
    meta => onProgress && onProgress(Math.round(meta.percent), 'Comprimiendo...')
  );

  return zipBlob;
}

/**
 * Resuelve las dimensiones de un archivo dado su path relativo dentro del ZIP
 * (sin la carpeta raíz), usando el código en minúsculas.
 * Convierte barras y resuelve el template key.
 */
function lookupDims(relPath, codeLower) {
  // relPath ejemplo: "fot-511_comun/fot-511_semana.png"
  // Convertimos al template key reemplazando codeLower → "{code}"
  const re = new RegExp(escapeRegexStr(codeLower), 'gi');
  const templateKey = relPath.replace(re, '{code}');
  return IMG_DIMS[templateKey] || null;
}

function escapeRegexStr(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
