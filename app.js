/* ============================================================
   Online Creador de Carpetas — Application Logic
   ============================================================ */

// ---- Template Structure Definition ----
// Complete folder model extracted from "Carpeta Modelo"
const TEMPLATE_STRUCTURE = {
    name: "{CODE}-{FULLNAME} {TIPO}",
    type: "folder",
    children: [
        {
            name: "{code}_comun",
            type: "folder",
            children: [
                { name: "{code}_com_docente.png", type: "file" },
                { name: "{code}_comunicado.jpg", type: "file" },
                { name: "{code}_logo_footer.png", type: "file" },
                { name: "{code}_logo_mediano.png", type: "file" },
                { name: "{code}_semana.png", type: "file" },
                {
                    name: "afianzamiento",
                    type: "folder",
                    children: [
                        { name: "{code}_banner_afi_s01.png", type: "file" }
                    ]
                },
                {
                    name: "aplicacion",
                    type: "folder",
                    children: [
                        { name: "{code}_banner_aplic_s01.png", type: "file" }
                    ]
                },
                {
                    name: "contenido",
                    type: "folder",
                    children: [
                        { name: "{code}_banner_cont_s01.png", type: "file" },
                        { name: "{code}_banner_mat_com_s01.png", type: "file" },
                        { name: "{code}_banner_mat_ob_s01.png", type: "file" },
                        { name: "{code}_biblioteca.png", type: "file" },
                        { name: "{code}_icono_audiolibros.png", type: "file" },
                        { name: "{code}_icono_grafico.png", type: "file" },
                        { name: "{code}_icono_libro.png", type: "file" },
                        { name: "{code}_icono_presentacion.png", type: "file" },
                        { name: "{code}_icono_resumenes.png", type: "file" },
                        { name: "{code}_icono_video.png", type: "file" },
                        { name: "{code}_semana.png", type: "file" }
                    ]
                },
                {
                    name: "foro",
                    type: "folder",
                    children: [
                        { name: "{code}_banner_foro_s01.png", type: "file" }
                    ]
                },
                {
                    name: "gamificacion",
                    type: "folder",
                    children: [
                        { name: "{code}_banner_gam_s01.png", type: "file" }
                    ]
                },
                {
                    name: "plan",
                    type: "folder",
                    children: [
                        { name: "{code}_banner_plan_s01.png", type: "file" }
                    ]
                },
                {
                    name: "preg_reflexiva",
                    type: "folder",
                    children: [
                        { name: "{code}_banner_reflex_s01.png", type: "file" }
                    ]
                },
                {
                    name: "proyecto",
                    type: "folder",
                    children: [
                        { name: "{code}_banner_proyecto_s01.png", type: "file" }
                    ]
                }
            ]
        },
        // Hitos 1-5
        ...generateHitos(),
        {
            name: "{code}_img",
            type: "folder",
            children: []
        },
        {
            name: "{code}_inicio",
            type: "folder",
            children: [
                { name: "{code}_aprendizaje_h1.png", type: "file" },
                { name: "{code}_aprendizaje_h2.png", type: "file" },
                { name: "{code}_aprendizaje_h3.png", type: "file" },
                { name: "{code}_aprendizaje_h4.png", type: "file" },
                { name: "{code}_aprendizaje_h5.png", type: "file" },
                { name: "{code}_com_docente.png", type: "file" },
                { name: "{code}_header.png", type: "file" },
                { name: "{code}_pestana1.png", type: "file" },
                { name: "{code}_pestana2.png", type: "file" },
                { name: "{code}_pestana3.png", type: "file" },
                { name: "{code}_pestana4.png", type: "file" },
                { name: "{code}_pestana5.png", type: "file" },
                { name: "{code}_pestana6.png", type: "file" },
                { name: "{code}_pestana7.png", type: "file" },
                { name: "{code}_ruta_inicio.png", type: "file" },
                { name: "{code}_tar_hito1.png", type: "file" },
                { name: "{code}_tar_hito2.png", type: "file" },
                { name: "{code}_tar_hito3.png", type: "file" },
                { name: "{code}_tar_hito4.png", type: "file" },
                { name: "{code}_tar_hito5.png", type: "file" }
            ]
        },
        {
            name: "{code}_tarjeta",
            type: "folder",
            children: [
                { name: "{code}_tarjeta.png", type: "file" }
            ]
        },
        {
            name: "trabajo_colaborativo {code}",
            type: "folder",
            children: [
                {
                    name: "01 Planillas de Orientación Académica (Inducción) - {code}",
                    type: "folder",
                    children: []
                },
                {
                    name: "02 Herramientas de Docente - {code}",
                    type: "folder",
                    children: [
                        { name: "00 Plan global de formación - {CODE}.xlsx", type: "file" },
                        {
                            name: "{CODE} Contenidos",
                            type: "folder",
                            children: [
                                { name: "HITO 1", type: "folder", children: [] },
                                { name: "HITO 2", type: "folder", children: [] },
                                {
                                    name: "HITO 3",
                                    type: "folder",
                                    children: [
                                        { name: "Solucionario", type: "folder", children: [] }
                                    ]
                                },
                                {
                                    name: "HITO 4",
                                    type: "folder",
                                    children: [
                                        { name: "Solucionarios", type: "folder", children: [] }
                                    ]
                                },
                                {
                                    name: "HITO 5",
                                    type: "folder",
                                    children: [
                                        { name: "Solucionador", type: "folder", children: [] }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Templates docentes",
                            type: "folder",
                            children: [
                                { name: "Copia de Hoja de cálculo.xlsx", type: "file" }
                            ]
                        }
                    ]
                },
                {
                    name: "03 Herramientas de Diseño - {code}",
                    type: "folder",
                    children: []
                },
                {
                    name: "04 Herramientas de Audio Visual - {code}",
                    type: "folder",
                    children: [
                        {
                            name: "02 Contenido Vimeo {code}",
                            type: "folder",
                            children: [
                                { name: "Links audiovisuales {CODE}.xlsx", type: "file" }
                            ]
                        }
                    ]
                },
                {
                    name: "05 Herramientas de TI - {code}",
                    type: "folder",
                    children: []
                },
                {
                    name: "06 Herramientas de control - {code}",
                    type: "folder",
                    children: [
                        { name: "02. Inventario de Contenidos {code}.xlsx", type: "file" },
                        { name: "03. PLANTILLA MAQUETA DISEÑO INSTRUCCIONAL.xlsx", type: "file" }
                    ]
                }
            ]
        }
    ]
};

// Generate hito structures (1-5)
function generateHitos() {
    const hitos = [];
    for (let i = 1; i <= 5; i++) {
        const hitoChildren = [
            { name: `{code}_banner_h${i}.png`, type: "file" },
        ];
        
        // Pestañas — hito 1 has 6 (plus a variant), hitos 2-5 have 7
        const numPestanas = i === 1 ? 6 : 7;
        for (let p = 1; p <= numPestanas; p++) {
            hitoChildren.push({ name: `{code}_pestana${p}_h${i}.png`, type: "file" });
        }
        if (i === 1) {
            hitoChildren.push({ name: `{code}_pestana6_h1-07.png`, type: "file" });
        }
        
        hitoChildren.push({ name: `{code}_ruta_h${i}.png`, type: "file" });
        hitoChildren.push({ name: `{code}_semana.png`, type: "file" });
        
        // Sub-folders inside each hito
        const subFolders = ["actividad", "contenido", "foro", "gamificacion", "proyecto", "test"];
        for (const sf of subFolders) {
            const folder = { name: sf, type: "folder", children: [] };
            // Hito 2 gamificacion has an s02 subfolder
            if (i === 2 && sf === "gamificacion") {
                folder.children.push({ name: "s02", type: "folder", children: [] });
            }
            hitoChildren.push(folder);
        }
        
        hitos.push({
            name: `{code}_hito${i}`,
            type: "folder",
            children: hitoChildren
        });
    }
    return hitos;
}

// ---- State ----
let currentStructure = null;
let stats = { folders: 0, files: 0, images: 0 };

// ---- DOM References ----
const $newCode = document.getElementById('newCode');
const $newName = document.getElementById('newName');
const $tipo = document.getElementById('tipo');
const $btnGenerate = document.getElementById('btnGenerate');
const $btnReset = document.getElementById('btnReset');
const $treeContent = document.getElementById('treeContent');
const $statsBar = document.getElementById('statsBar');
const $statFolders = document.getElementById('statFolders');
const $statFiles = document.getElementById('statFiles');
const $statReplacements = document.getElementById('statReplacements');
const $statImages = document.getElementById('statImages');
const $btnDownloadZip = document.getElementById('btnDownloadZip');
const $progressContainer = document.getElementById('progressContainer');
const $progressBar = document.getElementById('progressBar');
const $progressMsg = document.getElementById('progressMsg');
const $progressPct = document.getElementById('progressPct');
const $btnExportBAT = document.getElementById('btnExportBAT');
const $btnExportSH = document.getElementById('btnExportSH');
const $btnExpandAll = document.getElementById('btnExpandAll');
const $btnCollapseAll = document.getElementById('btnCollapseAll');
const $toast = document.getElementById('toast');
const $toastText = document.getElementById('toastText');
const $btnThemeToggle = document.getElementById('btnThemeToggle');

// ---- Template Processing ----
function processTemplate(node, codeNew, codeLower, codeUpper, fullName, tipo) {
    const originalName = node.name;
    let newName = originalName
        .replace(/\{CODE\}/g, codeUpper)
        .replace(/\{code\}/g, codeLower)
        .replace(/\{FULLNAME\}/g, fullName)
        .replace(/\{TIPO\}/g, tipo);
    
    if (node.type === 'folder') {
        stats.folders++;
    } else {
        stats.files++;
        const ext = node.name.split('.').pop().toLowerCase();
        if (['png','jpg','jpeg'].includes(ext)) stats.images++;
    }
    
    const result = {
        name: newName,
        type: node.type,
        isChanged: false
    };
    
    if (node.children) {
        result.children = node.children
            .filter(child => {
                if (child.type === 'file') {
                    const ext = child.name.split('.').pop().toLowerCase();
                    return !['xls', 'xlsx'].includes(ext);
                }
                return true;
            })
            .map(child => 
                processTemplate(child, codeNew, codeLower, codeUpper, fullName, tipo)
            );
    }
    
    return result;
}

// ---- Tree Rendering ----
function renderTree(node, depth = 0) {
    const div = document.createElement('div');
    div.className = 'tree-node';
    
    const isFolder = node.type === 'folder';
    const hasChildren = isFolder && node.children && node.children.length > 0;
    
    // Header row
    const header = document.createElement('div');
    header.className = 'tree-node-header' + (node.isChanged ? ' is-changed' : '');
    
    // Toggle arrow
    const toggle = document.createElement('span');
    toggle.className = 'tree-toggle' + (hasChildren ? ' expanded' : ' hidden');
    toggle.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;
    header.appendChild(toggle);
    
    // Icon
    const icon = document.createElement('span');
    icon.className = 'tree-icon ' + (isFolder ? 'folder-icon' : 'file-icon');
    if (isFolder) {
        icon.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`;
    } else {
        // Detect file type by extension
        const ext = node.name.split('.').pop().toLowerCase();
        let fileColor = 'var(--file-color)';
        if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(ext)) {
            fileColor = '#66bb6a';
        } else if (['xlsx', 'xls', 'csv'].includes(ext)) {
            fileColor = '#42a5f5';
        }
        icon.style.color = fileColor;
        icon.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;
    }
    header.appendChild(icon);
    
    // Name
    const nameSpan = document.createElement('span');
    nameSpan.className = 'tree-name';
    if (node.isChanged) {
        // Highlight the changed parts
        nameSpan.innerHTML = highlightNewCode(node.name);
    } else {
        nameSpan.textContent = node.name;
    }
    header.appendChild(nameSpan);
    
    div.appendChild(header);
    
    // Children container
    if (hasChildren) {
        const childrenDiv = document.createElement('div');
        childrenDiv.className = 'tree-children';
        
        node.children.forEach(child => {
            childrenDiv.appendChild(renderTree(child, depth + 1));
        });
        
        div.appendChild(childrenDiv);
        
        // Toggle click
        header.addEventListener('click', () => {
            const isExpanded = toggle.classList.contains('expanded');
            if (isExpanded) {
                toggle.classList.remove('expanded');
                childrenDiv.classList.add('collapsed');
            } else {
                toggle.classList.add('expanded');
                childrenDiv.classList.remove('collapsed');
            }
        });
    } else if (!isFolder) {
        // File click — show preview for images
        const ext = node.name.split('.').pop().toLowerCase();
        if (['png','jpg','jpeg'].includes(ext)) {
            header.classList.add('is-image-file');
            
            const eyeIcon = document.createElement('div');
            eyeIcon.className = 'tree-eye-icon';
            eyeIcon.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
            header.appendChild(eyeIcon);

            header.addEventListener('click', (e) => {
                e.stopPropagation();
                showPreview(node.name, ext);
            });
        }
    }
    
    return div;
}

// Highlight the new code/name in the rendered name
function highlightNewCode(name) {
    const newCode = $newCode.value.trim();
    const newCodeLower = newCode.toLowerCase();
    const newCodeUpper = newCode.toUpperCase();
    const newName = $newName.value.trim().toLowerCase();
    
    let result = escapeHtml(name);
    
    // Highlight code occurrences (case-insensitive)
    if (newCode) {
        const regex = new RegExp(escapeRegex(newCodeLower) + '|' + escapeRegex(newCodeUpper), 'gi');
        result = result.replace(regex, match => `<span class="highlight">${match}</span>`);
    }
    
    // Highlight name occurrences
    if (newName) {
        const regex = new RegExp(escapeRegex(newName), 'gi');
        result = result.replace(regex, match => `<span class="highlight">${match}</span>`);
    }
    
    return result;
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ---- Generate Structure ----
function generate() {
    const newCode = $newCode.value.trim();
    const newName = $newName.value.trim();
    const tipo = $tipo.value.trim() || 'cpu-teorica par';
    
    if (!newCode) {
        $newCode.focus();
        $newCode.style.borderColor = 'var(--accent)';
        setTimeout(() => $newCode.style.borderColor = '', 1500);
        return;
    }
    
    if (!newName) {
        $newName.focus();
        $newName.style.borderColor = 'var(--accent)';
        setTimeout(() => $newName.style.borderColor = '', 1500);
        return;
    }
    
    // Reset stats
    stats = { folders: 0, files: 0, images: 0 };
    
    const codeLower = newCode.toLowerCase();
    const codeUpper = newCode.toUpperCase();
    
    // Process template
    currentStructure = processTemplate(
        TEMPLATE_STRUCTURE, newCode, codeLower, codeUpper, newName.toLowerCase(), tipo
    );
    
    // Render tree
    $treeContent.innerHTML = '';
    $treeContent.appendChild(renderTree(currentStructure));
    
    // Update stats
    $statFolders.textContent = stats.folders;
    $statFiles.textContent = stats.files;
    $statImages.textContent = stats.images;
    $btnDownloadZip.disabled = false;
    
    // Animate stats
    animateValue($statFolders, stats.folders);
    animateValue($statFiles, stats.files);
    animateValue($statImages, stats.images);
}

function animateValue(el, target) {
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 20));
    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        el.textContent = current;
    }, 25);
}

// ---- Reset ----
function resetAll() {
    $newCode.value = '';
    $newName.value = '';
    $treeContent.innerHTML = `
        <div class="tree-placeholder">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.3">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
            <p>Ingresa el nuevo código y nombre de materia</p>
            <p class="sub">La estructura se generará automáticamente</p>
        </div>
    `;
    $statFolders.textContent = '0';
    $statFiles.textContent = '0';
    $statReplacements.textContent = '0';
    $statImages.textContent = '0';
    $btnDownloadZip.disabled = true;
    $progressContainer.style.display = 'none';
    $comparisonPanel.style.display = 'none';
    currentStructure = null;
}



// ---- Export BAT ----
function exportBat() {
    if (!currentStructure) return;
    
    const lines = ['@echo off', 'chcp 65001 >nul', 'echo Creando estructura de carpetas...', ''];
    const rootName = currentStructure.name;
    
    function collectFolders(node, path) {
        if (node.type === 'folder') {
            lines.push(`mkdir "${path}\\${node.name}"`);
            if (node.children) {
                node.children.forEach(child => {
                    collectFolders(child, `${path}\\${node.name}`);
                });
            }
        }
        // Files are just structure — we create empty files as placeholders
        if (node.type === 'file') {
            lines.push(`type nul > "${path}\\${node.name}"`);
        }
    }
    
    // Create root folder
    lines.push(`mkdir "${rootName}"`);
    if (currentStructure.children) {
        currentStructure.children.forEach(child => {
            collectFolders(child, rootName);
        });
    }
    
    lines.push('', 'echo.', 'echo ¡Estructura creada exitosamente!', 'pause');
    
    downloadFile(lines.join('\r\n'), `crear_${$newCode.value.trim().toLowerCase()}.bat`, 'application/bat');
    showToast('Archivo .BAT descargado');
}



// ---- Export SH (Mac/Linux) ----
function exportSH() {
    if (!currentStructure) return;
    
    const lines = [
        '#!/bin/bash',
        '# Online Creador de Carpetas — Mac/Linux Script',
        `# Materia: ${$newCode.value.trim().toUpperCase()} - ${$newName.value.trim()}`,
        `# Generado: ${new Date().toLocaleDateString('es-CL')}`,
        '',
        'echo "Creando estructura de carpetas..."',
        ''
    ];
    
    function collectPaths(node, path) {
        const fullPath = path ? `${path}/${node.name}` : node.name;
        if (node.type === 'folder') {
            lines.push(`mkdir -p "${fullPath}"`);
            if (node.children) {
                node.children.forEach(child => collectPaths(child, fullPath));
            }
        } else {
            lines.push(`touch "${fullPath}"`);
        }
    }
    
    collectPaths(currentStructure, '');
    
    lines.push('', 'echo "[OK] Estructura creada exitosamente!"');
    
    downloadFile(lines.join('\n'), `crear_${$newCode.value.trim().toLowerCase()}.sh`, 'application/x-sh');
    showToast('Archivo .SH descargado');
}

// ---- Download File Helper ----
function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ---- Expand / Collapse All ----
function expandAll() {
    document.querySelectorAll('.tree-toggle').forEach(t => t.classList.add('expanded'));
    document.querySelectorAll('.tree-children').forEach(c => c.classList.remove('collapsed'));
}

function collapseAll() {
    document.querySelectorAll('.tree-toggle:not(.hidden)').forEach(t => t.classList.remove('expanded'));
    document.querySelectorAll('.tree-children').forEach(c => c.classList.add('collapsed'));
}

// ---- Toast ----
function showToast(message) {
    $toastText.textContent = message;
    $toast.classList.add('show');
    setTimeout(() => $toast.classList.remove('show'), 2500);
}

// ---- Theme Toggle ----
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('isrx-theme', next);
}

// ---- Download ZIP ----
async function downloadZip() {
    if (!currentStructure) return;
    const codeLower = $newCode.value.trim().toLowerCase();
    $btnDownloadZip.disabled = true;
    $progressContainer.style.display = '';
    try {
        const blob = await buildZip(currentStructure, codeLower, (pct, msg) => {
            $progressBar.style.width = pct + '%';
            $progressMsg.textContent = msg;
            $progressPct.textContent = pct + '%';
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = currentStructure.name + '.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('ZIP descargado exitosamente ✓');
    } catch(e) {
        showToast('Error al generar ZIP: ' + e.message);
        console.error(e);
    } finally {
        $btnDownloadZip.disabled = false;
        setTimeout(() => { $progressContainer.style.display = 'none'; }, 2000);
    }
}

// ---- Event Listeners ----
$btnGenerate.addEventListener('click', generate);
$btnReset.addEventListener('click', resetAll);
$btnExportBAT.addEventListener('click', exportBat);
$btnExportSH.addEventListener('click', exportSH);
$btnDownloadZip.addEventListener('click', downloadZip);
$btnExpandAll.addEventListener('click', expandAll);
$btnCollapseAll.addEventListener('click', collapseAll);
$btnThemeToggle.addEventListener('click', toggleTheme);

// ---- Image Preview ----
const $previewOverlay = document.getElementById('previewOverlay');
const $previewTitle = document.getElementById('previewTitle');
const $previewDims = document.getElementById('previewDims');
const $previewCanvas = document.getElementById('previewCanvas');
const $previewClose = document.getElementById('previewClose');

function showPreview(filename, ext) {
    const codeLower = ($newCode.value.trim() || 'xxx-000').toLowerCase();
    // Find dims by building all possible relative paths and matching
    let dims = null;
    // Try to find matching dimensions from IMG_DIMS
    if (typeof IMG_DIMS !== 'undefined') {
        const re = new RegExp(escapeRegex(codeLower), 'gi');
        for (const key in IMG_DIMS) {
            const resolved = key.replace(/\{code\}/g, codeLower);
            if (resolved.endsWith('/' + filename) || resolved === filename) {
                dims = IMG_DIMS[key];
                break;
            }
        }
    }
    const w = dims ? dims.w : 800;
    const h = dims ? dims.h : 400;
    const realExt = (ext === 'jpeg') ? 'jpg' : ext;

    // Draw on canvas
    $previewCanvas.width = w;
    $previewCanvas.height = h;
    const ctx = $previewCanvas.getContext('2d');

    // Black background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, w, h);

    // Filename text
    const maxFontPx = Math.min(h * 0.22, w * 0.07, 36);
    let fs = Math.max(10, Math.floor(maxFontPx));
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${fs}px monospace`;
    const maxW = w * 0.9;
    while (ctx.measureText(filename).width > maxW && fs > 8) {
        fs--;
        ctx.font = `bold ${fs}px monospace`;
    }
    ctx.fillText(filename, w / 2, h / 2 - fs * 0.6);

    // Dimensions text
    const dimText = `${w} × ${h} px · ${realExt.toUpperCase()}`;
    const fs2 = Math.max(8, Math.floor(fs * 0.7));
    ctx.font = `${fs2}px monospace`;
    ctx.fillStyle = '#888888';
    ctx.fillText(dimText, w / 2, h / 2 + fs * 0.8);

    // Border
    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, w - 2, h - 2);

    // Update modal info
    $previewTitle.textContent = filename;
    $previewDims.textContent = `${w} × ${h} px — ${realExt.toUpperCase()}`;
    $previewOverlay.classList.add('active');
}

function closePreview() {
    $previewOverlay.classList.remove('active');
}

$previewClose.addEventListener('click', closePreview);
$previewOverlay.addEventListener('click', (e) => {
    if (e.target === $previewOverlay) closePreview();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePreview();
});


// Keyboard shortcut: Enter to generate
[$newCode, $newName, $modalidad, $tipo].forEach(input => {
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') generate();
    });
});

// ---- Init ----
(function init() {
    // Restore theme
    const savedTheme = localStorage.getItem('isrx-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();
