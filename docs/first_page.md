<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(242, 233, 228, 0.8);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "on-secondary-container": "#5d617d",
                      "surface-container": "#f1edef",
                      "on-secondary-fixed-variant": "#414560",
                      "on-primary-fixed": "#191932",
                      "surface-container-high": "#ebe7ea",
                      "surface-container-highest": "#e5e1e4",
                      "tertiary-fixed-dim": "#d2c2cf",
                      "primary-container": "#22223b",
                      "on-secondary-fixed": "#161a32",
                      "tertiary-container": "#2b212b",
                      "on-secondary": "#ffffff",
                      "primary-fixed-dim": "#c5c3e4",
                      "on-background": "#1c1b1d",
                      "surface-bright": "#fcf8fb",
                      "surface-container-low": "#f6f2f5",
                      "background": "#fcf8fb",
                      "tertiary-fixed": "#eedeeb",
                      "on-primary-fixed-variant": "#44445f",
                      "inverse-surface": "#313032",
                      "surface-tint": "#5c5c78",
                      "on-tertiary-fixed-variant": "#4e434e",
                      "outline-variant": "#c8c5ce",
                      "surface": "#fcf8fb",
                      "error": "#ba1a1a",
                      "on-tertiary": "#ffffff",
                      "on-primary": "#ffffff",
                      "surface-container-lowest": "#ffffff",
                      "primary": "#0d0c25",
                      "outline": "#78767e",
                      "on-error": "#ffffff",
                      "secondary-fixed": "#dee0ff",
                      "on-primary-container": "#8a89a7",
                      "on-tertiary-fixed": "#221922",
                      "primary-fixed": "#e2dfff",
                      "on-surface-variant": "#47464d",
                      "surface-dim": "#ddd9db",
                      "secondary-container": "#dbdeff",
                      "inverse-primary": "#c5c3e4",
                      "tertiary": "#140c15",
                      "on-error-container": "#93000a",
                      "error-container": "#ffdad6",
                      "secondary": "#595d78",
                      "on-surface": "#1c1b1d",
                      "secondary-fixed-dim": "#c1c4e5",
                      "inverse-on-surface": "#f4f0f2",
                      "surface-variant": "#e5e1e4",
                      "on-tertiary-container": "#958793"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "xl": "64px",
                      "xs": "4px",
                      "lg": "40px",
                      "sm": "12px",
                      "container-padding": "32px",
                      "md": "24px",
                      "gutter": "24px",
                      "base": "8px"
              },
              "fontFamily": {
                      "h3": ["Inter"],
                      "body-md": ["Inter"],
                      "h1": ["Inter"],
                      "h2": ["Inter"],
                      "body-lg": ["Inter"],
                      "label-sm": ["Inter"]
              },
              "fontSize": {
                      "h3": ["24px", {"lineHeight": "1.3", "letterSpacing": "0", "fontWeight": "500"}],
                      "body-md": ["16px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
                      "h1": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                      "h2": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                      "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
                      "label-sm": ["13px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "500"}]
              }
            },
          },
        }
    </script>
</head>
<body class="bg-[#f2e9e4] font-body-md text-[#22223b] min-h-screen">
<!-- Sidebar Shell -->
<aside class="fixed left-0 top-0 h-screen w-64 bg-[#f2e9e4]/90 dark:bg-slate-900/90 backdrop-blur-xl border-r border-[#9a8c98]/20 shadow-[10px_0_30px_-15px_rgba(201,173,167,0.2)] flex flex-col h-full py-8 px-4 space-y-6 z-50">
<div class="flex items-center space-x-3 px-2 mb-8">
<div class="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
<span class="material-symbols-outlined text-white" data-icon="folder_special">folder_special</span>
</div>
<div>
<h1 class="text-lg font-black text-[#4a4e69] dark:text-slate-100 uppercase tracking-widest leading-none">CoreCast</h1>
<p class="text-[10px] text-[#9a8c98] font-semibold tracking-widest">PRO ANALYSIS</p>
</div>
</div>
<nav class="flex-1 space-y-2">
<a class="flex items-center space-x-3 px-4 py-3 text-[#9a8c98] dark:text-slate-500 hover:text-[#4a4e69] dark:hover:text-white hover:translate-x-1 transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="video_library">video_library</span>
<span class="font-medium">Library</span>
</a>
<!-- Active State Navigation -->
<a class="flex items-center space-x-3 px-4 py-3 text-[#22223b] dark:text-white bg-[#c9ada7]/20 rounded-lg tap-highlight-transparent" href="#">
<span class="material-symbols-outlined" data-icon="folder_special">folder_special</span>
<span class="font-medium">Projects</span>
</a>
<a class="flex items-center space-x-3 px-4 py-3 text-[#9a8c98] dark:text-slate-500 hover:text-[#4a4e69] dark:hover:text-white hover:translate-x-1 transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="group">group</span>
<span class="font-medium">Team</span>
</a>
<a class="flex items-center space-x-3 px-4 py-3 text-[#9a8c98] dark:text-slate-500 hover:text-[#4a4e69] dark:hover:text-white hover:translate-x-1 transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="insert_chart">insert_chart</span>
<span class="font-medium">Analytics</span>
</a>
</nav>
<div class="pt-8 border-t border-[#9a8c98]/20 space-y-2">
<a class="flex items-center space-x-3 px-4 py-3 text-[#9a8c98] hover:text-[#4a4e69] transition-all" href="#">
<span class="material-symbols-outlined" data-icon="help_outline">help_outline</span>
<span class="font-medium text-sm">Help</span>
</a>
<a class="flex items-center space-x-3 px-4 py-3 text-[#9a8c98] hover:text-[#4a4e69] transition-all" href="#">
<span class="material-symbols-outlined" data-icon="logout">logout</span>
<span class="font-medium text-sm">Logout</span>
</a>
</div>
</aside>
<!-- Main Canvas -->
<main class="ml-64 p-xl">
<!-- Top Navigation Shell -->
<header class="flex justify-between items-center h-16 px-gutter w-full sticky top-0 bg-[#f2e9e4]/80 backdrop-blur-lg z-40 border-b border-[#9a8c98]/10 mb-lg">
<div class="flex items-center space-x-4">
<h2 class="text-h3 font-h3 text-[#22223b]">Workspace Projects</h2>
</div>
<div class="flex items-center space-x-base">
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#9a8c98]" data-icon="search">search</span>
<input class="bg-[#c9ada7]/10 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#4a4e69] w-64 transition-all" placeholder="Search analyses..." type="text"/>
</div>
<button class="p-2 rounded-full hover:bg-[#c9ada7]/10 text-[#4a4e69] transition-all">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button class="p-2 rounded-full hover:bg-[#c9ada7]/10 text-[#4a4e69] transition-all">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div class="w-8 h-8 rounded-full overflow-hidden border border-[#9a8c98]/30">
<img alt="User Profile" class="w-full h-full object-cover" data-alt="A professional headshot of a creative director in a minimalist studio setting. The lighting is soft and cinematic, emphasizing clean lines and high-contrast editorial style. The background is a muted, warm gray that complements the light mode UI of the application. The subject wears modern dark attire that provides a sharp visual anchor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_2a-JcOVn1-GLtr-7fO5So-3jG8TIrw0LwgP-57vEIdBv2PQEIXdYRrLM8ytLjCFGDDKoemtqOPGR0SV1lEb26Yu1z4MDgZGtj2U-oul8Meja0q7_4vyk27xkC8D3oBD_0OqpaH6tSkOcbWtJcOSP58F73hUDvxV2__196p8iW43Pt5AiUc6XrtUGoNwbUMGLqYF1nEzEFVerddtcIwSsGkvoYTpd0xiQWh3amleXsMJhDdSzznYUz0uqPgMuP6eNcc6psrdCdEI"/>
</div>
</div>
</header>
<!-- Category Bento Grid -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl">
<!-- Science Card -->
<div class="group relative overflow-hidden bg-[#c9ada7]/5 rounded-xl p-lg border border-[#9a8c98]/10 shadow-[0_4px_20px_0px_rgba(201,173,167,0.15)] hover:shadow-[0_10px_30px_0px_rgba(201,173,167,0.25)] transition-all duration-500 cursor-pointer">
<div class="relative z-10">
<div class="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-md group-hover:scale-110 transition-transform duration-500">
<span class="material-symbols-outlined text-[#4a4e69] text-3xl" data-icon="science">science</span>
</div>
<h3 class="text-h3 font-h3 mb-xs">Science</h3>
<p class="text-[#9a8c98] text-sm font-medium tracking-wide">12 LECTURES</p>
</div>
<div class="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
<span class="material-symbols-outlined text-[140px]" data-icon="biotech">biotech</span>
</div>
</div>
<!-- Math Card -->
<div class="group relative overflow-hidden bg-[#c9ada7]/5 rounded-xl p-lg border border-[#9a8c98]/10 shadow-[0_4px_20px_0px_rgba(201,173,167,0.15)] hover:shadow-[0_10px_30px_0px_rgba(201,173,167,0.25)] transition-all duration-500 cursor-pointer">
<div class="relative z-10">
<div class="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-md group-hover:scale-110 transition-transform duration-500">
<span class="material-symbols-outlined text-[#4a4e69] text-3xl" data-icon="functions">functions</span>
</div>
<h3 class="text-h3 font-h3 mb-xs">Mathematics</h3>
<p class="text-[#9a8c98] text-sm font-medium tracking-wide">8 LECTURES</p>
</div>
<div class="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
<span class="material-symbols-outlined text-[140px]" data-icon="calculate">calculate</span>
</div>
</div>
<!-- Coding Card -->
<div class="group relative overflow-hidden bg-[#c9ada7]/5 rounded-xl p-lg border border-[#9a8c98]/10 shadow-[0_4px_20px_0px_rgba(201,173,167,0.15)] hover:shadow-[0_10px_30px_0px_rgba(201,173,167,0.25)] transition-all duration-500 cursor-pointer">
<div class="relative z-10">
<div class="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-md group-hover:scale-110 transition-transform duration-500">
<span class="material-symbols-outlined text-[#4a4e69] text-3xl" data-icon="terminal">terminal</span>
</div>
<h3 class="text-h3 font-h3 mb-xs">Coding</h3>
<p class="text-[#9a8c98] text-sm font-medium tracking-wide">24 LECTURES</p>
</div>
<div class="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
<span class="material-symbols-outlined text-[140px]" data-icon="code">code</span>
</div>
</div>
</section>
<!-- Recent Projects Section -->
<section>
<div class="flex justify-between items-end mb-md">
<div>
<h2 class="text-h2 font-h2 text-[#22223b]">Recent Projects</h2>
<p class="text-on-secondary-container">Continue your deep-focus analysis</p>
</div>
<button class="text-sm font-semibold text-[#4a4e69] hover:underline transition-all">View All Activity</button>
</div>
<div class="space-y-sm">
<!-- Project Item 1 -->
<div class="group flex items-center justify-between p-md bg-white/50 rounded-xl border border-transparent hover:border-[#9a8c98]/20 hover:bg-white hover:shadow-[0_4px_20px_0px_rgba(201,173,167,0.1)] transition-all duration-300">
<div class="flex items-center space-x-md">
<div class="w-24 h-14 rounded-lg overflow-hidden bg-slate-200">
<img alt="Quantum Analysis" class="w-full h-full object-cover" data-alt="A high-resolution scientific visualization of quantum particle interactions. The image features glowing blue and violet data points against a deep, dark background, representing complex computational analysis. The visual style is crisp, clean, and perfectly aligned with a professional video analysis dashboard aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQPMptMNuxtLaykqs1xJaSofe0EKQ-hPDK8eVuliWHxgR0yKZamPjPe1PkoIO0Lap0YbN0h7c3QsGd9nleDAbTG6zzFFU9dntKSAfFhS5jednoX9p1s1BhlHCytD4ezF64PYbFnF5gRz_qhDB0qEtPMWjVlDMYIDEIma6h9pVwaPSQhEK-B5aMaG-RgJfrcvMPK1yIldT0Zfs6xsEF0PpJ_fA0cQS_CR0eaS9AVZRqkfHmh1nHqnX6fCZb16xMTXiu34CarDohBZo"/>
</div>
<div>
<h4 class="font-semibold text-lg text-[#22223b] mb-1">Quantum Superposition Fundamentals</h4>
<div class="flex items-center space-x-3">
<span class="px-2 py-0.5 rounded-full bg-[#c9ada7]/10 text-[#4a4e69] text-[10px] font-bold uppercase tracking-wider">Science</span>
<span class="text-[#9a8c98] text-xs">Last edited Oct 24, 2023</span>
</div>
</div>
</div>
<div class="flex items-center space-x-lg">
<div class="text-right">
<p class="text-xs font-bold text-[#9a8c98] uppercase tracking-widest mb-1">Status</p>
<p class="text-sm font-medium text-[#4a4e69]">92% Processed</p>
</div>
<button class="w-10 h-10 rounded-full border border-[#9a8c98]/20 flex items-center justify-center text-[#4a4e69] hover:bg-primary-container hover:text-white transition-all">
<span class="material-symbols-outlined text-xl" data-icon="play_arrow">play_arrow</span>
</button>
</div>
</div>
<!-- Project Item 2 -->
<div class="group flex items-center justify-between p-md bg-white/50 rounded-xl border border-transparent hover:border-[#9a8c98]/20 hover:bg-white hover:shadow-[0_4px_20px_0px_rgba(201,173,167,0.1)] transition-all duration-300">
<div class="flex items-center space-x-md">
<div class="w-24 h-14 rounded-lg overflow-hidden bg-slate-200">
<img alt="Calculus Lecture" class="w-full h-full object-cover" data-alt="A minimalist overhead shot of a light-colored wooden desk with a black mathematical notebook. A single pen rests on the page containing neat calculus equations. The lighting is bright and airy, creating a sense of calm focus and academic precision, reflecting the high-end editorial aesthetic of the CoreCast brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoMYCnrK9yjLFmIDpWOshKw6XHQuZPlNJyQ5EGzARdo3tRx1u0DaZyd58tcQ0g5u6qOdF2WoX7w9MiuYA69moG3Pcrv3V2DRC-vc3eqHaN63z_CEXZS7SirYRMDLcFbtkp8hjMvkBFAS83MK8o_ZPLw744eomaGeIDJREifOUgV-RzER51p3Y_7fp4iwGUWSnSx9seYBpomXnSxkwWzcfW_mBBLidJ_la-mfeMjEA6vhg0V4S3IMHSkCypltta1u1eELzwtxtSu5Y"/>
</div>
<div>
<h4 class="font-semibold text-lg text-[#22223b] mb-1">Advanced Vector Calculus: Module 4</h4>
<div class="flex items-center space-x-3">
<span class="px-2 py-0.5 rounded-full bg-[#c9ada7]/10 text-[#4a4e69] text-[10px] font-bold uppercase tracking-wider">Mathematics</span>
<span class="text-[#9a8c98] text-xs">Last edited Oct 22, 2023</span>
</div>
</div>
</div>
<div class="flex items-center space-x-lg">
<div class="text-right">
<p class="text-xs font-bold text-[#9a8c98] uppercase tracking-widest mb-1">Status</p>
<p class="text-sm font-medium text-[#4a4e69]">Completed</p>
</div>
<button class="w-10 h-10 rounded-full border border-[#9a8c98]/20 flex items-center justify-center text-[#4a4e69] hover:bg-primary-container hover:text-white transition-all">
<span class="material-symbols-outlined text-xl" data-icon="analytics">analytics</span>
</button>
</div>
</div>
<!-- Project Item 3 -->
<div class="group flex items-center justify-between p-md bg-white/50 rounded-xl border border-transparent hover:border-[#9a8c98]/20 hover:bg-white hover:shadow-[0_4px_20px_0px_rgba(201,173,167,0.1)] transition-all duration-300">
<div class="flex items-center space-x-md">
<div class="w-24 h-14 rounded-lg overflow-hidden bg-slate-200">
<img alt="Coding Session" class="w-full h-full object-cover" data-alt="Close-up of a high-end laptop screen displaying clean, syntax-highlighted code in a dark mode IDE. The surrounding workspace is minimalist and softly lit, with warm wooden textures. The focus is on the precision of the code, emphasizing technical mastery and the sophisticated environment of a professional developer." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2fR544bRNUQO47HniTlODyrOs2UPGbiAy0T92o_3pSjz91CXgGmuov0IAdsCd649Uq9z8iezN2J6F1-L5NAevXKbHBK6ORm4RKK4dUQCIetr-Ni7m2Gi1pWP1oIMBYFZ_m8iP-1RnIrzwJfV8sjaZQosjjg_U1VfojQZBdOL_przk-HBBTncWCOsStjqMQyK-8zs2XzMVWnQCNAKvDGm_dC_ALfN3_g7yrD8ymOyWZmx818jywYauZbyFZ1wYnhNGwp7fRGzltjs"/>
</div>
<div>
<h4 class="font-semibold text-lg text-[#22223b] mb-1">React Native Performance Optimization</h4>
<div class="flex items-center space-x-3">
<span class="px-2 py-0.5 rounded-full bg-[#c9ada7]/10 text-[#4a4e69] text-[10px] font-bold uppercase tracking-wider">Coding</span>
<span class="text-[#9a8c98] text-xs">Last edited Oct 19, 2023</span>
</div>
</div>
</div>
<div class="flex items-center space-x-lg">
<div class="text-right">
<p class="text-xs font-bold text-[#9a8c98] uppercase tracking-widest mb-1">Status</p>
<p class="text-sm font-medium text-[#4a4e69]">In Progress</p>
</div>
<button class="w-10 h-10 rounded-full border border-[#9a8c98]/20 flex items-center justify-center text-[#4a4e69] hover:bg-primary-container hover:text-white transition-all">
<span class="material-symbols-outlined text-xl" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
</div>
</section>
</main>
<!-- FAB: Contextual to Home/Dashboard -->
<button class="fixed bottom-lg right-lg w-16 h-16 bg-primary-container text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 z-50">
<span class="material-symbols-outlined text-3xl" data-icon="add">add</span>
</button>
</body></html>
