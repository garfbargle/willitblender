document.addEventListener('DOMContentLoaded', () => {
    // Full shortcut data from markdown
    const shortcutsData = [
        {
            category: "General",
            shortcuts: [
                { action: "Toolbar", keys: "T" },
                { action: "Properties", keys: "N" },
                { action: "Add Object/Node", keys: "Shift + A" },
                { action: "Delete", keys: "X or Delete" },
                { action: "Search", keys: "F3" },
                { action: "Move", keys: "G" },
                { action: "Scale", keys: "S" },
                { action: "Rotate", keys: "R" },
                { action: "Rotate along axis", keys: "R then X/Y/Z" },
                { action: "Rotate along local axis", keys: "R then X,X/Y,Y/Z,Z" },
                { action: "Trackball Rotate", keys: "R, R" },
                { action: "Precise movement", keys: "Shift (hold)" },
                { action: "Incremental movement", keys: "Ctrl (hold)" },
                { action: "Duplicate", keys: "Shift + D" },
                { action: "Duplicate Linked", keys: "Alt + D" },
                { action: "Hide", keys: "H" },
                { action: "Unhide All", keys: "Alt + H" },
                { action: "Hide all Except Selected", keys: "Shift + H" },
                { action: "Annotate", keys: "D (hold) + LMB (drag)" },
                { action: "Erase Annotation", keys: "D (hold) + RMB (drag)" },
                { action: "Quick favs menu", keys: "Q" }
            ]
        },
        {
            category: "Navigation",
            shortcuts: [
                { action: "Orbit", keys: "MMB" },
                { action: "Pan", keys: "Shift + MMB" },
                { action: "Zoom In/Out", keys: "Scroll or Ctrl + MMB" },
                { action: "Fly", keys: "Shift + ~" }
            ]
        },
        {
            category: "View",
            shortcuts: [
                { action: "Top View", keys: "Numpad 7" },
                { action: "Front View", keys: "Numpad 1" },
                { action: "Side View", keys: "Numpad 3" },
                { action: "Camera View", keys: "Numpad 0" },
                { action: "Toggle Perspective/Orthographic", keys: "Numpad 5" },
                { action: "View Pie Menu", keys: "~" },
                { action: "Fast View Switch", keys: "Alt + MMB (drag)" },
                { action: "Show All Objects", keys: "Home" },
                { action: "Focus to region", keys: "Shift + B" },
                { action: "Focus on Selection", keys: "Numpad ." }
            ]
        },
        {
            category: "Object Mode",
            shortcuts: [
                { action: "Mode Pie Menu", keys: "Ctrl + TAB" },
                { action: "Edit/Object mode toggle", keys: "TAB" },
                { action: "Mirror", keys: "Ctrl + M then X/Y/Z (or MMB drag)" },
                { action: "Set Parent", keys: "Ctrl + P" },
                { action: "Clear Parent", keys: "Alt + P" },
                { action: "Toggle Snapping", keys: "Shift + TAB" },
                { action: "Clear Location", keys: "Alt + G" },
                { action: "Clear Rotation", keys: "Alt + R" },
                { action: "Clear Scale", keys: "Alt + S" },
                { action: "Apply Location / Scale / Rotation", keys: "Ctrl + A" },
                { action: "Join Selected Objects", keys: "Ctrl + J" },
                { action: "Copy Attributes to New Objects", keys: "Ctrl + L" },
                { action: "Add Subdivision level", keys: "Ctrl + 0/1/2/3/4/5" },
                { action: "Mask view to region / Clear mask", keys: "Alt + B" },
                { action: "Center 3D cursor", keys: "Shift + C" },
                { action: "Move active object to Collection", keys: "M" },
                { action: "Move Active Camera to view", keys: "Ctrl + Alt + Numpad 0" },
                { action: "Set as Active Camera", keys: "Ctrl + Numpad 0" }
            ]
        },
        {
            category: "Selection",
            shortcuts: [
                { action: "Select", keys: "LMB" },
                { action: "Select All", keys: "A" },
                { action: "Deselect All", keys: "Alt + A" },
                { action: "Marquee Box Select", keys: "B" },
                { action: "Circle Select", keys: "C" },
                { action: "Lasso Select", keys: "Ctrl + RMB" },
                { action: "Invert Selection", keys: "Ctrl + i" },
                { action: "Select Linked", keys: "Shift + L" },
                { action: "Select Similar", keys: "Shift + G" },
                { action: "Select specific object", keys: "Alt + LMB" },
                { action: "Select Connected Mesh", keys: "Ctrl + L" },
                { action: "Select Connected Mesh Under Cursor", keys: "L" },
                { action: "Select Edge/Face Loop", keys: "Alt + LMB" },
                { action: "Select Edge Ring", keys: "Ctrl + Alt + RMB" },
                { action: "Vertex Select Mode", keys: "1" },
                { action: "Edge Select Mode", keys: "2" },
                { action: "Face Select Mode", keys: "3" },
                { action: "Mirror current selection", keys: "Ctrl + Shift + M" },
                { action: "Select More/Less", keys: "Ctrl +/-" }
            ]
        },
        {
            category: "Shading",
            shortcuts: [
                { action: "Shading Pie Menu", keys: "Z" },
                { action: "Toggle X-Ray", keys: "Alt + Z" }
            ]
        },
        {
            category: "Pie Menus",
            shortcuts: [
                { action: "Pivot point pie menu", keys: "." },
                { action: "Snap pie menu", keys: "Shift + S" },
                { action: "Orientation pie menu", keys: "," }
            ]
        },
        {
            category: "Modeling",
            shortcuts: [
                { action: "Extrude", keys: "E" },
                { action: "Inset", keys: "i" },
                { action: "Bevel", keys: "Ctrl + B" },
                { action: "Bevel Vertices", keys: "Ctrl + Shift + B" },
                { action: "Loop cut", keys: "Ctrl + R" },
                { action: "Vertex/Edge Slide", keys: "G,G" },
                { action: "Knife", keys: "K" },
                { action: "Fill Face", keys: "F" },
                { action: "Shear", keys: "Ctrl + Shift + Alt + S" },
                { action: "Bend", keys: "Shift + W" },
                { action: "Split", keys: "Y" },
                { action: "Rip", keys: "V" },
                { action: "Rip Fill", keys: "Alt + V" },
                { action: "Merge", keys: "M" },
                { action: "Recalculate Normals", keys: "Shift + N" },
                { action: "Flip Normals", keys: "Ctrl + Shift + N" },
                { action: "Proportional Editing On/Off", keys: "O" },
                { action: "Proportional Falloff Type", keys: "Shift + O" },
                { action: "Separate selection to new object", keys: "P" },
                { action: "Edge Crease", keys: "Shift + E" }
            ]
        },
        {
            category: "Curve Editing",
            shortcuts: [
                { action: "Add new handle", keys: "E or Ctrl + RMB" },
                { action: "Change handle type", keys: "V" },
                { action: "Delete but maintain connection", keys: "Ctrl + X" },
                { action: "Close curve", keys: "Alt + C" },
                { action: "Tilt", keys: "Ctrl + T" },
                { action: "Clear Tilt", keys: "Alt + T" }
            ]
        },
        {
            category: "Texturing",
            shortcuts: [
                { action: "Unwrap", keys: "U" },
                { action: "Mark Seam", keys: "Ctrl + E" }
            ]
        },
        {
            category: "UV Editor",
            shortcuts: [
                { action: "Select Island", keys: "L (under cursor) or Ctrl + L" },
                { action: "Stitch", keys: "V" },
                { action: "Weld", keys: "Shift + W" },
                { action: "Pin", keys: "P" },
                { action: "Unpin", keys: "Alt + P" },
                { action: "Select Pinned", keys: "Shift + P" }
            ]
        },
        {
            category: "Image Editor (View)",
            shortcuts: [
                { action: "Properties, Scopes, Slots and Metadata", keys: "N" },
                { action: "View at 100%", keys: "1 (Numpad)" },
                { action: "View to Fit", keys: "Shift + Home" },
                { action: "Next Render Slot", keys: "J" },
                { action: "Previous Render Slot", keys: "Alt + J" },
                { action: "Select Render Slot", keys: "1-8" },
                { action: "Save Image", keys: "Alt + S" },
                { action: "Save Image As", keys: "Shift + S" }
            ]
        },
        {
            category: "Image Editor (Paint)",
            shortcuts: [
                { action: "Create New Blank Image", keys: "Alt + N" },
                { action: "Open Image", keys: "Alt + O" },
                { action: "Brush Properties", keys: "N" },
                { action: "Brush Size", keys: "F" },
                { action: "Brush Strength", keys: "Shift + F" },
                { action: "Sample Color", keys: "S" },
                { action: "Flip Color", keys: "X" }
            ]
        },
        {
            category: "Nodes",
            shortcuts: [
                { action: "Cut Connection", keys: "Ctrl + RMB (drag)" },
                { action: "Reroute Connection", keys: "Shift + RMB (drag)" },
                { action: "Connect selected", keys: "F" },
                { action: "Properties", keys: "N" },
                { action: "Delete selected but maintain connection", keys: "Ctrl + X" },
                { action: "Duplicate selected and maintain connection", keys: "Ctrl + Shift + D" },
                { action: "Mute Selected", keys: "M" },
                { action: "Group Selected", keys: "Ctrl + G" },
                { action: "Ungroup Selected", keys: "Ctrl + Alt + G" },
                { action: "Edit Group (Toggle)", keys: "TAB" },
                { action: "Frame Selected Nodes", keys: "Ctrl + J" },
                { action: "Show/Hide inactive node slots", keys: "Ctrl + H" }
            ]
        },
        {
            category: "Compositor",
            shortcuts: [
                { action: "Move backdrop", keys: "Alt + MMB" },
                { action: "Zoom backdrop", keys: "V / Alt + V" },
                { action: "Properties and performance", keys: "N" }
            ]
        },
        {
            category: "Sculpting",
            shortcuts: [
                { action: "Brush Selection", keys: "Shift + Space" },
                { action: "Brush Size", keys: "F" },
                { action: "Brush Strength", keys: "Shift + F" },
                { action: "Brush Angle", keys: "Ctrl + F" },
                { action: "Angle Control", keys: "R" },
                { action: "Stroke Control", keys: "E" },
                { action: "Mask (box)", keys: "B" },
                { action: "Mask (brush)", keys: "M" },
                { action: "Clear Mask", keys: "Alt + M" },
                { action: "Invert Mask", keys: "Ctrl + i" },
                { action: "Hide (box)", keys: "H" }
            ]
        },
        {
            category: "Rendering",
            shortcuts: [
                { action: "Render", keys: "F12" },
                { action: "Render Animation", keys: "Ctrl + F12" },
                { action: "Playback rendered animation", keys: "Ctrl + F11" },
                { action: "Set Render Region", keys: "Ctrl + B" },
                { action: "Clear Render Region", keys: "Ctrl + Alt + B" }
            ]
        },
        {
            category: "Animation",
            shortcuts: [
                { action: "Play/Pause Playback", keys: "Space" },
                { action: "Reverse Play", keys: "Ctrl + Shift + Space" },
                { action: "Scroll through frames", keys: "Alt + Scroll" },
                { action: "Next/Previous Frame", keys: "Left/Right arrow" },
                { action: "First/Last Frame", keys: "Shift + Left/Right arrow" },
                { action: "Jump to Keyframe", keys: "Up/Down arrow" },
                { action: "Add Keyframe on current frame", keys: "i" },
                { action: "Delete Keyframe on current frame", keys: "Alt + i" },
                { action: "Toggle Dopesheet", keys: "Ctrl + TAB" },
                { action: "Toggle Frames/Seconds", keys: "Ctrl + T" },
                { action: "Zoom to fit active keyframes", keys: "Home or . (Numpad)" },
                { action: "Set Keyframe Interpolation", keys: "T" },
                { action: "Set Keyframe Handle Type", keys: "V" },
                { action: "Set Keyframe Extrapolation", keys: "Shift + E" },
                { action: "Mirror Keyframes", keys: "Ctrl + M" },
                { action: "Set Preview Range", keys: "P then LMB (drag)" },
                { action: "Auto set preview range", keys: "Ctrl + Alt + P" },
                { action: "Clear Preview", keys: "Alt + P" },
                { action: "Marker", keys: "M" },
                { action: "Rename Marker", keys: "Ctrl + M" },
                { action: "Bind Selected Camera to Selected Marker", keys: "Ctrl + B" },
                { action: "Select keyframes before/after current frame", keys: "[ / ]" },
                { action: "Select all keyframes on current frame", keys: "Ctrl + K" }
            ]
        },
        {
            category: "Graph Editor",
            shortcuts: [
                { action: "Add Keyframe at Cursor", keys: "Ctrl + RMB" },
                { action: "Properties and Modifiers", keys: "N" },
                { action: "Lock Selected Channel", keys: "TAB" }
            ]
        },
        {
            category: "Rigging",
            shortcuts: [
                { action: "Add new bone", keys: "E" },
                { action: "Duplicate bone", keys: "Shift + D" },
                { action: "Bone Settings", keys: "Shift + W" },
                { action: "Roll", keys: "Ctrl + R" },
                { action: "Clear Roll", keys: "Alt + R" },
                { action: "Recalculate Roll", keys: "Shift + N" },
                { action: "Align bone", keys: "Ctrl + Alt + A" },
                { action: "Switch bone direction", keys: "Alt + F" },
                { action: "Dissolve Bone", keys: "Ctrl + X" },
                { action: "Dissolve bones", keys: "Ctrl + X" },
                { action: "Split", keys: "Y" },
                { action: "Separate", keys: "P" },
                { action: "Scroll Hierarchy", keys: "] and [" }
            ]
        },
        {
            category: "Posing Mode",
            shortcuts: [
                { action: "Add Keyframe", keys: "i" },
                { action: "Clear Location", keys: "Alt + G" },
                { action: "Clear Rotation", keys: "Alt + R" },
                { action: "Clear Scale", keys: "Alt + S" },
                { action: "Apply Pose", keys: "Ctrl + A" },
                { action: "Propagate Pose", keys: "Alt + P" },
                { action: "Push Pose from Breakdown", keys: "Ctrl + E" },
                { action: "Relax Pose to Breakdown", keys: "Alt + E" },
                { action: "Pose Breakdowner", keys: "Shift + E" },
                { action: "Copy Pose", keys: "Ctrl + C" },
                { action: "Paste Pose", keys: "Ctrl + V" },
                { action: "Add IK", keys: "Shift + i" },
                { action: "Add Pose to Library", keys: "Shift + L" },
                { action: "Paste Pose Flipped", keys: "Ctrl + Shift + V" },
                { action: "Add Constraint", keys: "Ctrl + Shift + C" }
            ]
        },
        {
            category: "Window General",
            shortcuts: [
                { action: "Toolbar", keys: "T" },
                { action: "Properties bar", keys: "N" },
                { action: "Maximise Area (but keep toolbar)", keys: "Ctrl + Space" },
                { action: "Fullscreen Area", keys: "Ctrl + Alt + Space" },
                { action: "Quad view", keys: "Ctrl + Alt + Q" },
                { action: "Movie Clip", keys: "Shift + F2" },
                { action: "Nodes", keys: "Shift + F3" },
                { action: "Python Console", keys: "Shift + F4" },
                { action: "3d Viewport", keys: "Shift + F5" },
                { action: "Graph", keys: "Shift + F6" },
                { action: "Properties", keys: "Shift + F7" },
                { action: "Video Sequencer", keys: "Shift + F8" },
                { action: "Outliner", keys: "Shift + F9" },
                { action: "UV/Image", keys: "Shift + F10" },
                { action: "Text", keys: "Shift + F11" },
                { action: "Dope Sheet", keys: "Shift + F12" }
            ]
        }
    ];

    const shortcutsContainer = document.getElementById('shortcuts');
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search');
    const themeToggle = document.getElementById('theme-toggle');
    const keysDisplay = document.getElementById('keys-display');
    let activeKey = null;
    let currentTheme = localStorage.getItem('theme') || 'dark';

    // Initialize the theme
    document.body.className = currentTheme;
    updateThemeIcon();

    // Initialize category filter
    function initializeCategoryFilter() {
        // Add "All" option
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = 'All Categories';
        categoryFilter.appendChild(allOption);

        // Add each category
        shortcutsData.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat.category.toLowerCase().replace(/\s+/g, '-');
            option.textContent = cat.category;
            categoryFilter.appendChild(option);
        });

        // Event listener for category filter
        categoryFilter.addEventListener('change', filterShortcuts);
    }

    // Function to render shortcuts based on current filters
    function renderShortcuts() {
        const query = searchInput.value.toLowerCase();
        const categoryValue = categoryFilter.value;
        
        shortcutsContainer.innerHTML = '';
        
        let filteredData = shortcutsData;
        
        // Filter by category if not "all"
        if (categoryValue !== 'all') {
            filteredData = shortcutsData.filter(cat => 
                cat.category.toLowerCase().replace(/\s+/g, '-') === categoryValue
            );
        }
        
        // Then filter by search term
        filteredData = filteredData.map(cat => ({
            category: cat.category,
            shortcuts: cat.shortcuts.filter(sc => 
                sc.action.toLowerCase().includes(query) || 
                sc.keys.toLowerCase().includes(query)
            )
        })).filter(cat => cat.shortcuts.length > 0);

        // Render the filtered shortcuts
        filteredData.forEach(cat => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';
            categoryDiv.innerHTML = `<h2>${cat.category}</h2>`;

            const shortcutsGrid = document.createElement('div');
            shortcutsGrid.className = 'shortcuts-grid';

            cat.shortcuts.forEach(sc => {
                const shortcutDiv = document.createElement('div');
                shortcutDiv.className = 'shortcut';
                
                // Format the keys for better display
                const formattedKeys = formatKeys(sc.keys);
                
                shortcutDiv.innerHTML = `
                    <div class="action">${sc.action}</div>
                    <div class="keys">${formattedKeys}</div>
                `;
                
                // Add click event to display key in larger format
                shortcutDiv.addEventListener('click', () => {
                    displayKeys(sc.action, sc.keys);
                });
                
                shortcutsGrid.appendChild(shortcutDiv);
            });

            categoryDiv.appendChild(shortcutsGrid);
            shortcutsContainer.appendChild(categoryDiv);
        });
        
        // Hide or show the keys display
        if (activeKey) {
            keysDisplay.style.display = 'flex';
        } else {
            keysDisplay.style.display = 'none';
        }
    }

    // Function to format keys for better display
    function formatKeys(keys) {
        return keys.replace(/\+/g, ' <span class="plus">+</span> ')
                  .replace(/or/g, ' <span class="or">or</span> ')
                  .replace(/then/g, ' <span class="then">then</span> ')
                  .replace(/\(/g, '<span class="paren">(</span>')
                  .replace(/\)/g, '<span class="paren">)</span>')
                  .replace(/MMB/g, '<span class="mouse">MMB</span>')
                  .replace(/LMB/g, '<span class="mouse">LMB</span>')
                  .replace(/RMB/g, '<span class="mouse">RMB</span>')
                  .replace(/Ctrl/g, '<span class="modifier">Ctrl</span>')
                  .replace(/Alt/g, '<span class="modifier">Alt</span>')
                  .replace(/Shift/g, '<span class="modifier">Shift</span>')
                  .replace(/drag/g, '<span class="action-desc">drag</span>')
                  .replace(/hold/g, '<span class="action-desc">hold</span>');
    }

    // Display keys in a larger format
    function displayKeys(action, keys) {
        activeKey = { action, keys };
        
        const keyDisplay = document.getElementById('key-detail');
        keyDisplay.innerHTML = `
            <h3>${action}</h3>
            <div class="key-combo">${formatKeys(keys)}</div>
        `;
        
        keysDisplay.style.display = 'flex';
    }

    // Close the keys display
    document.getElementById('close-keys').addEventListener('click', () => {
        keysDisplay.style.display = 'none';
        activeKey = null;
    });

    // Filter shortcuts based on search and category
    function filterShortcuts() {
        renderShortcuts();
    }

    // Toggle between light and dark themes
    function toggleTheme() {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.className = currentTheme;
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon();
    }

    // Update the theme toggle icon
    function updateThemeIcon() {
        themeToggle.innerHTML = currentTheme === 'dark' 
            ? '<span class="material-icons">light_mode</span>' 
            : '<span class="material-icons">dark_mode</span>';
    }

    // Event listeners
    searchInput.addEventListener('input', filterShortcuts);
    themeToggle.addEventListener('click', toggleTheme);

    // Initialize the page
    initializeCategoryFilter();
    renderShortcuts();
    
    // Add a keyboard shortcut for search (Ctrl+F or Cmd+F)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            searchInput.focus();
        }
        
        // Escape key to close key display
        if (e.key === 'Escape' && keysDisplay.style.display === 'flex') {
            keysDisplay.style.display = 'none';
            activeKey = null;
        }
    });
}); 