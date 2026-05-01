<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "tertiary-container": "#2b212b",
                    "surface": "#fcf8fb",
                    "primary": "#0d0c25",
                    "error-container": "#ffdad6",
                    "secondary": "#595d78",
                    "on-primary-fixed": "#191932",
                    "on-secondary": "#ffffff",
                    "on-tertiary": "#ffffff",
                    "surface-dim": "#ddd9db",
                    "primary-fixed-dim": "#c5c3e4",
                    "on-secondary-fixed": "#161a32",
                    "outline-variant": "#c8c5ce",
                    "on-surface": "#1c1b1d",
                    "inverse-primary": "#c5c3e4",
                    "surface-bright": "#fcf8fb",
                    "tertiary": "#140c15",
                    "on-secondary-fixed-variant": "#414560",
                    "error": "#ba1a1a",
                    "surface-container-highest": "#e5e1e4",
                    "on-tertiary-fixed-variant": "#4e434e",
                    "surface-container": "#f1edef",
                    "inverse-on-surface": "#f4f0f2",
                    "surface-container-lowest": "#ffffff",
                    "primary-container": "#22223b",
                    "on-error-container": "#93000a",
                    "primary-fixed": "#e2dfff",
                    "on-tertiary-fixed": "#221922",
                    "on-primary-fixed-variant": "#44445f",
                    "on-background": "#1c1b1d",
                    "on-surface-variant": "#47464d",
                    "tertiary-fixed": "#eedeeb",
                    "on-tertiary-container": "#958793",
                    "inverse-surface": "#313032",
                    "tertiary-fixed-dim": "#d2c2cf",
                    "secondary-fixed-dim": "#c1c4e5",
                    "on-error": "#ffffff",
                    "on-secondary-container": "#5d617d",
                    "on-primary": "#ffffff",
                    "background": "#fcf8fb",
                    "outline": "#78767e",
                    "surface-variant": "#e5e1e4",
                    "surface-container-low": "#f6f2f5",
                    "surface-container-high": "#ebe7ea",
                    "secondary-fixed": "#dee0ff",
                    "on-primary-container": "#8a89a7",
                    "secondary-container": "#dbdeff",
                    "surface-tint": "#5c5c78"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "xs": "4px",
                    "gutter": "24px",
                    "lg": "40px",
                    "base": "8px",
                    "md": "24px",
                    "container-padding": "32px",
                    "sm": "12px",
                    "xl": "64px"
            },
            "fontFamily": {
                    "label-sm": ["Inter"],
                    "h1": ["Inter"],
                    "h3": ["Inter"],
                    "body-lg": ["Inter"],
                    "body-md": ["Inter"],
                    "h2": ["Inter"]
            },
            "fontSize": {
                    "label-sm": ["13px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "500"}],
                    "h1": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                    "h3": ["24px", {"lineHeight": "1.3", "letterSpacing": "0", "fontWeight": "500"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
                    "h2": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}]
            }
          },
        },
      }
    </script>
<style>
        .glass-panel {
            background: rgba(242, 233, 228, 0.8);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
        .tinted-shadow {
            box-shadow: 0 20px 40px -10px rgba(201, 173, 167, 0.25);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md min-h-screen flex flex-col">
<!-- TopNavBar -->
<header class="bg-[#f2e9e4]/80 backdrop-blur-xl border-b border-[#9a8c98]/20 shadow-[0_4px_20px_rgba(201,173,167,0.15)] sticky top-0 z-50 w-full">
<div class="flex justify-between items-center h-16 px-8 w-full">
<div class="flex items-center gap-md">
<span class="text-xl font-bold tracking-tighter text-[#22223b] font-h2">CoreCast</span>
<nav class="hidden md:flex items-center ml-lg gap-lg">
<a class="text-[#22223b] font-semibold border-b-2 border-[#4a4e69] px-2 py-1 font-body-md" href="#">Library</a>
<a class="text-[#9a8c98] font-medium hover:bg-[#c9ada7]/10 transition-all duration-300 px-2 py-1 font-body-md rounded" href="#">Projects</a>
<a class="text-[#9a8c98] font-medium hover:bg-[#c9ada7]/10 transition-all duration-300 px-2 py-1 font-body-md rounded" href="#">Team</a>
</nav>
</div>
<div class="flex items-center gap-base">
<div class="relative flex items-center">
<span class="material-symbols-outlined absolute left-3 text-[#9a8c98]" data-icon="search">search</span>
<input class="bg-surface-container border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#4a4e69] w-64" placeholder="Search projects..." type="text"/>
</div>
<button class="p-2 text-[#4a4e69] hover:bg-[#c9ada7]/10 rounded-full transition-all active:scale-95">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button class="p-2 text-[#4a4e69] hover:bg-[#c9ada7]/10 rounded-full transition-all active:scale-95">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<img alt="User Profile Avatar" class="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" data-alt="A high-quality professional headshot of a person with a friendly expression. The lighting is soft and directional, typical of a studio setting. The background is a clean, minimalist neutral gray that complements the light mode UI of the application. The image conveys professionalism and technical expertise suitable for a high-end analysis platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfigfouy-4KH-6l6cYgGAuxsSbfpBHafV8zDllxYybpQxyrNTwA3BRDkmCKvwpRQCdQwIqlToL_XmnrGummDkYDBtTgGaZz0LAk0AzPQf_VZAaEYU0JQxInfcdrYPI2ITlS5oivieLdPeAJ-TyLafj3UCGz6sPPtxDDNlxG5hRU_uDOC_IJ8fmb9vlm7CFsjZd1n8P-6p82ne2RF9AUePkGFDFW1RoRcQkeEeEsC9ce2PAlEgEgSMDJHanQ1o4XEl2BjAvRAgwqB4"/>
</div>
</div>
</header>
<main class="flex-grow p-container-padding relative">
<!-- Projects Overview Background (Simulated) -->
<div class="max-w-7xl mx-auto opacity-40 pointer-events-none">
<div class="flex justify-between items-end mb-xl">
<div>
<h1 class="font-h1 text-h1 text-primary-container">Projects Overview</h1>
<p class="font-body-lg text-secondary mt-2">Manage and analyze your recent lecture captures.</p>
</div>
<div class="flex gap-sm">
<span class="px-4 py-2 bg-surface-container-high rounded-full font-label-sm text-label-sm text-secondary">ALL PROJECTS (24)</span>
<span class="px-4 py-2 bg-surface-container-high rounded-full font-label-sm text-label-sm text-secondary">RECENT</span>
</div>
</div>
<!-- Bento Grid Layout for Projects -->
<div class="grid grid-cols-12 gap-gutter">
<div class="col-span-8 h-96 bg-surface-container-highest rounded-xl border border-outline-variant/30 flex items-center justify-center">
<span class="material-symbols-outlined text-6xl text-outline-variant" data-icon="video_library">video_library</span>
</div>
<div class="col-span-4 h-96 bg-surface-container-highest rounded-xl border border-outline-variant/30 flex items-center justify-center">
<span class="material-symbols-outlined text-6xl text-outline-variant" data-icon="analytics">analytics</span>
</div>
<div class="col-span-4 h-64 bg-surface-container-highest rounded-xl border border-outline-variant/30"></div>
<div class="col-span-4 h-64 bg-surface-container-highest rounded-xl border border-outline-variant/30"></div>
<div class="col-span-4 h-64 bg-surface-container-highest rounded-xl border border-outline-variant/30"></div>
</div>
</div>
<!-- MODAL OVERLAY -->
<div class="fixed inset-0 z-[60] flex items-center justify-center p-md bg-primary-container/20 backdrop-blur-sm">
<!-- Upload Modal Panel -->
<div class="glass-panel w-full max-w-2xl rounded-xl tinted-shadow overflow-hidden border border-[#9a8c98]/20 flex flex-col">
<!-- Modal Header -->
<div class="px-xl pt-xl pb-base">
<div class="flex justify-between items-start mb-base">
<h2 class="font-h2 text-h2 text-[#22223b]">Upload Lecture</h2>
<button class="p-2 text-[#9a8c98] hover:text-[#22223b] transition-colors">
<span class="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
<p class="font-body-md text-secondary">Start your analysis by adding a video file or a link.</p>
</div>
<!-- Tabs -->
<div class="px-xl mt-base">
<div class="flex border-b border-[#9a8c98]/20">
<button class="px-6 py-4 text-[#22223b] font-semibold border-b-2 border-[#4a4e69] flex items-center gap-sm transition-all">
<span class="material-symbols-outlined text-[20px]" data-icon="upload_file">upload_file</span>
                            File Upload
                        </button>
<button class="px-6 py-4 text-[#9a8c98] font-medium hover:text-[#22223b] flex items-center gap-sm transition-all">
<span class="material-symbols-outlined text-[20px]" data-icon="link">link</span>
                            YouTube URL
                        </button>
</div>
</div>
<!-- Modal Content: File Upload View -->
<div class="px-xl py-lg flex-grow">
<!-- Drag & Drop Area -->
<div class="border-2 border-dashed border-[#9a8c98]/40 rounded-xl p-xl flex flex-col items-center justify-center gap-md group hover:border-[#4a4e69]/60 transition-all cursor-pointer bg-white/30">
<div class="w-16 h-16 rounded-full bg-[#c9ada7]/10 flex items-center justify-center text-[#4a4e69] group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-4xl" data-icon="cloud_upload">cloud_upload</span>
</div>
<div class="text-center">
<p class="font-h3 text-body-lg text-[#22223b] font-semibold">Drag and drop your video file</p>
<p class="text-secondary font-body-md mt-1">MP4, MOV, or WEBM up to 2GB</p>
</div>
<button class="mt-base px-8 py-2 border border-[#9a8c98] text-[#22223b] rounded-lg font-medium hover:bg-[#c9ada7]/10 transition-all">
                            Browse Files
                        </button>
</div>
<!-- YouTube URL View (Hidden by default in static mockup, but styled here) -->
<div class="hidden space-y-md">
<label class="block font-label-sm text-label-sm text-secondary uppercase tracking-wider">Paste Lecture Link</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#9a8c98]" data-icon="smart_display">smart_display</span>
<input class="w-full bg-white/50 border-b border-[#9a8c98] focus:border-[#22223b] focus:ring-0 pl-12 py-4 transition-all font-body-md outline-none" placeholder="https://youtube.com/watch?v=..." type="text"/>
</div>
<p class="text-xs text-secondary italic">CoreCast will automatically fetch video metadata and transcripts if available.</p>
</div>
</div>
<!-- Modal Footer -->
<div class="px-xl pb-xl pt-base flex justify-end items-center gap-md">
<button class="px-8 py-3 text-[#9a8c98] font-medium hover:text-[#22223b] transition-colors">
                        Cancel
                    </button>
<button class="px-10 py-3 bg-[#4a4e69] text-white rounded-lg font-semibold shadow-lg shadow-[#4a4e69]/20 hover:bg-[#22223b] transition-all active:scale-95 flex items-center gap-base">
                        Process Lecture
                        <span class="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
</main>
<!-- SideNavBar (Hidden/Suppressed due to modal task focus as per guidelines, but showing skeleton for context) -->
<aside class="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-20 bg-[#f2e9e4] border-r border-[#9a8c98]/20 p-6 items-center gap-y-8 z-40">
<div class="w-10 h-10 bg-[#22223b] rounded-xl flex items-center justify-center">
<span class="text-white font-black text-xs">CC</span>
</div>
<div class="flex flex-col gap-y-6 text-[#9a8c98]">
<span class="material-symbols-outlined cursor-pointer hover:text-[#4a4e69]" data-icon="video_library">video_library</span>
<span class="material-symbols-outlined cursor-pointer hover:text-[#4a4e69]" data-icon="folder_open">folder_open</span>
<span class="material-symbols-outlined cursor-pointer hover:text-[#4a4e69]" data-icon="groups">groups</span>
<span class="material-symbols-outlined cursor-pointer hover:text-[#4a4e69]" data-icon="analytics">analytics</span>
</div>
</aside>
</body></html>
