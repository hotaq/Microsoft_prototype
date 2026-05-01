<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CoreCast - Video Analysis Workspace</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "secondary": "#595d78",
                        "surface-container-low": "#f6f2f5",
                        "on-secondary": "#ffffff",
                        "surface-variant": "#e5e1e4",
                        "error-container": "#ffdad6",
                        "on-tertiary-fixed-variant": "#4e434e",
                        "on-primary": "#ffffff",
                        "on-surface-variant": "#47464d",
                        "tertiary-fixed-dim": "#d2c2cf",
                        "on-tertiary-container": "#958793",
                        "on-primary-fixed-variant": "#44445f",
                        "tertiary-container": "#2b212b",
                        "primary": "#0d0c25",
                        "surface-container-lowest": "#ffffff",
                        "on-primary-container": "#8a89a7",
                        "primary-fixed": "#e2dfff",
                        "on-secondary-fixed": "#161a32",
                        "surface-dim": "#ddd9db",
                        "on-primary-fixed": "#191932",
                        "on-background": "#1c1b1d",
                        "inverse-surface": "#313032",
                        "secondary-fixed-dim": "#c1c4e5",
                        "outline-variant": "#c8c5ce",
                        "primary-container": "#22223b",
                        "surface-tint": "#5c5c78",
                        "outline": "#78767e",
                        "surface": "#fcf8fb",
                        "on-secondary-fixed-variant": "#414560",
                        "inverse-primary": "#c5c3e4",
                        "surface-bright": "#fcf8fb",
                        "tertiary-fixed": "#eedeeb",
                        "error": "#ba1a1a",
                        "surface-container-high": "#ebe7ea",
                        "surface-container-highest": "#e5e1e4",
                        "tertiary": "#140c15",
                        "on-tertiary": "#ffffff",
                        "on-tertiary-fixed": "#221922",
                        "on-error-container": "#93000a",
                        "surface-container": "#f1edef",
                        "secondary-container": "#dbdeff",
                        "inverse-on-surface": "#f4f0f2",
                        "primary-fixed-dim": "#c5c3e4",
                        "background": "#fcf8fb",
                        "secondary-fixed": "#dee0ff",
                        "on-error": "#ffffff",
                        "on-secondary-container": "#5d617d",
                        "on-surface": "#1c1b1d"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "lg": "40px",
                        "base": "8px",
                        "sm": "12px",
                        "xs": "4px",
                        "xl": "64px",
                        "container-padding": "32px",
                        "gutter": "24px",
                        "md": "24px"
                    },
                    "fontFamily": {
                        "h1": ["Inter"],
                        "body-lg": ["Inter"],
                        "h3": ["Inter"],
                        "h2": ["Inter"],
                        "label-sm": ["Inter"],
                        "body-md": ["Inter"]
                    },
                    "fontSize": {
                        "h1": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
                        "h3": ["24px", {"lineHeight": "1.3", "letterSpacing": "0", "fontWeight": "500"}],
                        "h2": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "label-sm": ["13px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "500"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}]
                    }
                },
            },
        }
    </script>
<style>
        body {
            background-color: #f2e9e4;
            color: #22223b;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(242, 233, 228, 0.5);
            backdrop-filter: blur(12px);
        }
        .shadow-tinted {
            box-shadow: 0 10px 30px -5px rgba(201, 173, 167, 0.25);
        }
    </style>
</head>
<body class="font-body-md text-on-background min-h-screen">
<!-- TopAppBar from JSON -->
<header class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 h-16 bg-[#f2e9e4]/80 backdrop-blur-xl border-b border-[#9a8c98]/20 shadow-[0_4px_20px_rgba(201,173,167,0.15)]">
<div class="flex items-center gap-xl">
<span class="text-xl font-light tracking-[0.2em] uppercase text-[#22223b]">CoreCast</span>
<nav class="hidden md:flex gap-md items-center">
<a class="text-[#22223b] font-semibold border-b-2 border-[#4a4e69] cursor-pointer transition-colors duration-300 py-1" href="#">Library</a>
<a class="text-[#9a8c98] font-medium hover:text-[#4a4e69] cursor-pointer transition-colors duration-300 py-1" href="#">Projects</a>
<a class="text-[#9a8c98] font-medium hover:text-[#4a4e69] cursor-pointer transition-colors duration-300 py-1" href="#">Team</a>
<a class="text-[#9a8c98] font-medium hover:text-[#4a4e69] cursor-pointer transition-colors duration-300 py-1" href="#">Analytics</a>
</nav>
</div>
<div class="flex items-center gap-md">
<div class="relative group">
<span class="material-symbols-outlined text-[#22223b] cursor-pointer">notifications</span>
</div>
<span class="material-symbols-outlined text-[#22223b] cursor-pointer">settings</span>
<img alt="User profile" class="w-8 h-8 rounded-full border border-[#9a8c98]/30" data-alt="A clean, minimalist portrait of a professional individual with soft studio lighting. The person has a neutral expression, photographed against a low-saturation beige background that perfectly matches the high-end editorial aesthetic of the workspace. The image is crisp with high contrast and subtle warm tones, reflecting a premium and sophisticated brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKNN4KDRi1vDlVqkZNfpgFwG0_v-izowSv6G_ITtwryny98IgWWskSZqNYoPuic_V-eFi8PzWlnEswtpkX4KBqEU86HuvLnT3U2vLTu_4dj25-_xfAgJT5l9JjPgagdVfxKkcep3nd3seFF3CE6lYfpQg-TfA5GsO6wVUlPRe1ZZNL2bp3t165h-Ryo2G99JvCGTi5mx_8fYvJKTVOyIekIfgNWsodx_QIZT90PQ7nwo25yYe2PXNu0oYZghUbAJYDPS_YdvhVVwc"/>
</div>
</header>
<!-- SideNavBar from JSON -->
<aside class="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 z-40 flex flex-col justify-between bg-[#f2e9e4]/50 backdrop-blur-lg border-r border-[#9a8c98]/10">
<div class="py-lg">
<div class="px-6 mb-8">
<h3 class="text-xs uppercase tracking-widest text-[#9a8c98] font-semibold">Workspace</h3>
<p class="text-[10px] text-[#9a8c98]/60 uppercase tracking-tighter">Premium Analysis</p>
</div>
<nav class="flex flex-col gap-xs">
<div class="bg-[#c9ada7]/20 text-[#22223b] border-r-2 border-[#22223b] cursor-pointer flex items-center gap-3 px-6 py-4 hover:translate-x-1 transition-transform duration-200">
<span class="material-symbols-outlined" data-icon="video_library">video_library</span>
<span class="font-medium">Library</span>
</div>
<div class="text-[#9a8c98] hover:bg-[#f2e9e4] cursor-pointer flex items-center gap-3 px-6 py-4 hover:translate-x-1 transition-transform duration-200">
<span class="material-symbols-outlined" data-icon="folder_special">folder_special</span>
<span class="font-medium">Projects</span>
</div>
<div class="text-[#9a8c98] hover:bg-[#f2e9e4] cursor-pointer flex items-center gap-3 px-6 py-4 hover:translate-x-1 transition-transform duration-200">
<span class="material-symbols-outlined" data-icon="group">group</span>
<span class="font-medium">Team</span>
</div>
<div class="text-[#9a8c98] hover:bg-[#f2e9e4] cursor-pointer flex items-center gap-3 px-6 py-4 hover:translate-x-1 transition-transform duration-200">
<span class="material-symbols-outlined" data-icon="monitoring">monitoring</span>
<span class="font-medium">Analytics</span>
</div>
</nav>
<div class="mt-lg px-6">
<button class="w-full py-3 px-4 bg-[#4a4e69] text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 shadow-tinted hover:opacity-90 transition-opacity">
<span class="material-symbols-outlined text-sm">add</span>
                    New Project
                </button>
</div>
</div>
<div class="py-lg border-t border-[#9a8c98]/10">
<div class="text-[#9a8c98] hover:bg-[#f2e9e4] cursor-pointer flex items-center gap-3 px-6 py-4 hover:translate-x-1 transition-transform duration-200">
<span class="material-symbols-outlined" data-icon="archive">archive</span>
<span class="font-medium">Archive</span>
</div>
<div class="text-[#9a8c98] hover:bg-[#f2e9e4] cursor-pointer flex items-center gap-3 px-6 py-4 hover:translate-x-1 transition-transform duration-200">
<span class="material-symbols-outlined" data-icon="help_outline">help_outline</span>
<span class="font-medium">Help</span>
</div>
</div>
</aside>
<!-- Main Canvas -->
<main class="ml-64 pt-16 min-h-screen">
<div class="p-xl max-w-7xl mx-auto">
<!-- Video Section -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-lg">
<div class="lg:col-span-8 space-y-lg">
<!-- Video Slide Card -->
<div class="relative group">
<div class="bg-[#22223b] rounded-xl overflow-hidden aspect-video shadow-tinted relative">
<img alt="Video Content" class="w-full h-full object-cover opacity-80" data-alt="A cinematic, high-contrast video still capturing a wide, misty landscape at dawn. The scene is dominated by deep blues and soft earthy tones, creating a tranquil yet precise mood. Thin, elegant playhead overlays and minimalist technical data markers are visible in the foreground, suggesting a professional video analysis interface in a premium light-mode environment." src="https://placeholder.pics/svg/300"/>
<!-- Keyframe Slide Out Visualizer -->
<div class="absolute bottom-6 right-6 w-48 aspect-video rounded-lg border-2 border-[#c9ada7] overflow-hidden shadow-2xl transition-all group-hover:scale-105 group-hover:-translate-y-2">
<div class="absolute inset-0 bg-[#c9ada7]/20 backdrop-blur-sm z-10"></div>
<img alt="Keyframe Highlight" class="w-full h-full object-cover" data-alt="A detailed, zoomed-in keyframe from a professional video edit. The lighting is crisp and moody, focusing on a specific technical detail within a larger sequence. The color palette is low-saturation, primarily utilizing muted beige and deep obsidian tones, perfectly integrated into a high-end glassmorphic UI design." src="https://placeholder.pics/svg/300"/>
<div class="absolute top-2 left-2 px-2 py-0.5 bg-[#22223b] text-[#f2e9e4] text-[10px] uppercase font-bold tracking-widest rounded-sm z-20">Key Frame</div>
</div>
<!-- Playback Controls (Simplified) -->
<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div class="w-16 h-16 rounded-full bg-[#f2e9e4]/20 backdrop-blur-md flex items-center justify-center cursor-pointer border border-[#f2e9e4]/30 shadow-lg">
<span class="material-symbols-outlined text-white text-3xl" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
</div>
<!-- Timeline Bar -->
<div class="mt-4 h-1 bg-[#9a8c98]/20 rounded-full relative overflow-hidden">
<div class="absolute top-0 left-0 h-full w-1/3 bg-[#4a4e69]"></div>
<div class="absolute top-0 left-1/3 w-2 h-2 bg-[#c9ada7] rounded-full -mt-0.5 shadow-md"></div>
</div>
</div>
<!-- Description Section -->
<div class="bg-[#f2e9e4] rounded-xl relative">
<div class="flex justify-between items-start mb-base">
<h2 class="font-h2 text-h2 text-[#22223b]">Physics 101: Classical Mechanics - Lecture 12</h2>
<span class="font-label-sm text-label-sm text-[#9a8c98] mt-2">02:45</span>
</div>
<p class="font-body-md text-body-md text-[#4a4e69] leading-relaxed max-w-3xl">This section covers the derivation of Newton's Second Law in a vacuum, focusing on the relationship between force, mass, and acceleration as demonstrated in the current experiment.</p>
<div class="flex gap-sm mt-md">
<span class="px-3 py-1 bg-[#c9ada7]/10 text-[#4a4e69] text-[10px] font-bold uppercase tracking-widest border border-[#c9ada7]/30 rounded-full">Composition</span>
<span class="px-3 py-1 bg-[#c9ada7]/10 text-[#4a4e69] text-[10px] font-bold uppercase tracking-widest border border-[#c9ada7]/30 rounded-full">Color Grade</span>
<span class="px-3 py-1 bg-[#c9ada7]/10 text-[#4a4e69] text-[10px] font-bold uppercase tracking-widest border border-[#c9ada7]/30 rounded-full">Technical</span>
</div>
</div>
</div>
<!-- Interaction Section (Sidebar Content) -->
<div class="lg:col-span-4 flex flex-col gap-lg">
<!-- Interactive Transcript Panel -->
<div class="bg-white/40 backdrop-blur-xl border border-[#9a8c98]/10 rounded-xl shadow-tinted flex flex-col h-[600px]">
<div class="p-md border-b border-[#9a8c98]/10 flex justify-between items-center">
<div class="flex gap-md">
<span class="font-label-sm text-[#22223b] border-b-2 border-[#4a4e69] pb-1 cursor-pointer">Transcript</span>
<span class="font-label-sm text-[#9a8c98] pb-1 cursor-pointer hover:text-[#4a4e69] transition-colors">Markers</span>
</div>
<span class="material-symbols-outlined text-[#9a8c98] text-sm cursor-pointer">search</span>
</div>
<div class="flex-1 overflow-y-auto p-md space-y-md custom-scrollbar">
<div class="group cursor-pointer">
<div class="flex justify-between items-start">
<span class="text-[10px] font-bold text-[#9a8c98] mb-1">00:00 - 00:45</span>
<span class="material-symbols-outlined text-[#9a8c98] text-xs opacity-0 group-hover:opacity-100">link</span>
</div>
<p class="text-sm text-[#9a8c98] group-hover:text-[#22223b] transition-colors">Initial establishing shot of the valley. Camera moves from left to right at a steady 24fps with a shallow depth of field focusing on the foreground moss.</p>
</div>
<!-- Active Playing Line -->
<div class="cursor-pointer bg-[#c9ada7]/15 p-sm rounded-lg border-l-4 border-[#4a4e69]">
<div class="flex justify-between items-start">
<span class="text-[10px] font-bold text-[#4a4e69] mb-1">02:45 - 03:12</span>
<span class="material-symbols-outlined text-[#4a4e69] text-xs">play_circle</span>
</div>
<p class="text-sm text-[#4a4e69] font-medium leading-relaxed">The subject enters from the lower third. Notice the immediate shift in the viewer's focus as the tracking shot accelerates slightly to maintain eye-line contact.</p>
</div>
<div class="group cursor-pointer">
<div class="flex justify-between items-start">
<span class="text-[10px] font-bold text-[#9a8c98] mb-1">03:12 - 04:00</span>
<span class="material-symbols-outlined text-[#9a8c98] text-xs opacity-0 group-hover:opacity-100">link</span>
</div>
<p class="text-sm text-[#9a8c98] group-hover:text-[#22223b] transition-colors">Transition into the wider expanse. The horizon line is perfectly bisected to create a sense of vastness and isolation for the subject.</p>
</div>
<div class="group cursor-pointer">
<div class="flex justify-between items-start">
<span class="text-[10px] font-bold text-[#9a8c98] mb-1">04:00 - 05:25</span>
<span class="material-symbols-outlined text-[#9a8c98] text-xs opacity-0 group-hover:opacity-100">link</span>
</div>
<p class="text-sm text-[#9a8c98] group-hover:text-[#22223b] transition-colors">Fade to black with a lingering focus on the central silhouette. End of primary sequence analysis.</p>
</div>
</div>
<div class="p-md bg-[#c9ada7]/5 border-t border-[#9a8c98]/10">
<div class="flex items-center gap-base">
<div class="w-2 h-2 rounded-full bg-green-400"></div>
<span class="text-[10px] font-bold uppercase tracking-widest text-[#4a4e69]">Live Transcription Active</span>
</div>
</div>
</div>
<!-- Meta Details Card -->
<div class="p-md bg-[#22223b] text-[#f2e9e4] rounded-xl shadow-tinted flex justify-between items-center">
<div class="flex flex-col">
<span class="text-[10px] uppercase font-bold tracking-[0.2em] text-[#c9ada7]">Location</span>
<span class="text-lg font-light tracking-tight">Room 402, Science Building</span>
</div>
<div class="flex flex-col text-right">
<span class="text-[10px] uppercase font-bold tracking-[0.2em] text-[#c9ada7]">Recording Date</span>
<span class="text-lg font-light tracking-tight">Oct 24, 2023</span>
</div>
</div><div class="p-md bg-[#4a4e69]/20 border border-[#9a8c98]/10 rounded-xl mt-4">
<div class="flex justify-between items-center">
<span class="text-[10px] uppercase font-bold tracking-[0.2em] text-[#4a4e69]">Course</span>
<span class="text-sm font-medium text-[#22223b]">PHY101 - Introductory Physics</span>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- Contextual FAB - Restricted to Dashboard/Main Context -->
<div class="fixed bottom-8 right-8 z-50">
<button class="w-14 h-14 bg-[#4a4e69] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-2xl">comment</span>
</button>
</div>
</body></html>
