<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                "surface-bright": "#fcf8fb",
                "tertiary": "#140c15",
                "inverse-surface": "#313032",
                "on-surface-variant": "#47464d",
                "on-secondary-container": "#5d617d",
                "on-tertiary-fixed-variant": "#4e434e",
                "surface-dim": "#ddd9db",
                "surface-container-low": "#f6f2f5",
                "primary": "#0d0c25",
                "surface-container-lowest": "#ffffff",
                "error-container": "#ffdad6",
                "surface-container": "#f1edef",
                "outline-variant": "#c8c5ce",
                "outline": "#78767e",
                "on-tertiary": "#ffffff",
                "surface-tint": "#5c5c78",
                "primary-fixed-dim": "#c5c3e4",
                "on-tertiary-container": "#958793",
                "on-background": "#1c1b1d",
                "on-error-container": "#93000a",
                "on-error": "#ffffff",
                "on-tertiary-fixed": "#221922",
                "inverse-on-surface": "#f4f0f2",
                "primary-container": "#22223b",
                "on-secondary-fixed": "#161a32",
                "on-secondary": "#ffffff",
                "secondary-fixed-dim": "#c1c4e5",
                "secondary": "#595d78",
                "on-surface": "#1c1b1d",
                "on-secondary-fixed-variant": "#414560",
                "error": "#ba1a1a",
                "tertiary-fixed": "#eedeeb",
                "tertiary-fixed-dim": "#d2c2cf",
                "on-primary": "#ffffff",
                "background": "#fcf8fb",
                "secondary-container": "#dbdeff",
                "tertiary-container": "#2b212b",
                "primary-fixed": "#e2dfff",
                "surface-variant": "#e5e1e4",
                "secondary-fixed": "#dee0ff",
                "surface": "#fcf8fb",
                "on-primary-fixed": "#191932",
                "inverse-primary": "#c5c3e4",
                "surface-container-highest": "#e5e1e4",
                "on-primary-fixed-variant": "#44445f",
                "on-primary-container": "#8a89a7",
                "surface-container-high": "#ebe7ea"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "xl": "64px",
                "md": "24px",
                "gutter": "24px",
                "base": "8px",
                "xs": "4px",
                "container-padding": "32px",
                "lg": "40px",
                "sm": "12px"
            },
            "fontFamily": {
                "h3": ["Inter"],
                "h2": ["Inter"],
                "body-lg": ["Inter"],
                "h1": ["Inter"],
                "body-md": ["Inter"],
                "label-sm": ["Inter"]
            },
            "fontSize": {
                "h3": ["24px", {"lineHeight": "1.3", "letterSpacing": "0", "fontWeight": "500"}],
                "h2": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
                "h1": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                "body-md": ["16px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
                "label-sm": ["13px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "500"}]
            }
          },
        },
      }
    </script>
<style>
        .glass-panel {
            background: rgba(242, 233, 228, 0.6); /* Updated to linen base */
            backdrop-filter: blur(16px);
            border: 1px solid rgba(34, 34, 59, 0.1); /* Slightly darker border for contrast */
        }
        .contribution-grid {
            display: grid;
            grid-template-columns: repeat(53, 1fr);
            gap: 4px;
        }
        .contribution-cell {
            aspect-ratio: 1/1;
            border-radius: 2px;
        }
        .intensity-0 { background-color: #e6ded9; } /* Slightly darker linen for base intensity */
        .intensity-1 { background-color: #c9ada7; opacity: 0.4; }
        .intensity-2 { background-color: #c9ada7; opacity: 0.7; }
        .intensity-3 { background-color: #4a4e69; opacity: 0.6; }
        .intensity-4 { background-color: #4a4e69; }
    </style>
</head>
<body class="bg-[#f2e9e4] font-body-md text-[#22223b] selection:bg-[#c9ada7]/30 min-h-screen">
<!-- TopNavBar -->
<header class="bg-[#f2e9e4]/95 dark:bg-slate-950/80 backdrop-blur-xl text-[#22223b] font-inter tracking-tight antialiased docked full-width top-0 z-50 sticky border-b border-[#22223b]/10 shadow-[0_4px_30px_rgba(34,34,59,0.05)] flex justify-between items-center h-16 px-8 w-full">
<div class="flex items-center gap-x-12">
<h1 class="text-xl font-black tracking-tighter text-[#22223b]">CoreCast</h1>
<nav class="hidden md:flex gap-x-8 items-center">
<a class="text-[#4a4e69] font-medium hover:text-[#22223b] transition-all duration-300 py-1" href="#">Library</a>
<a class="text-[#4a4e69] font-medium hover:text-[#22223b] transition-all duration-300 py-1" href="#">Projects</a>
<a class="text-[#22223b] font-bold border-b-2 border-[#22223b] py-1" href="#">Analytics</a>
<a class="text-[#4a4e69] font-medium hover:text-[#22223b] transition-all duration-300 py-1" href="#">Team</a>
</nav>
</div>
<div class="flex items-center gap-x-6">
<div class="relative group hidden lg:block">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#4a4e69]">search</span>
<input class="bg-[#22223b]/5 border-none rounded-full pl-10 pr-4 py-1.5 w-64 text-sm focus:ring-1 focus:ring-[#4a4e69] placeholder-[#4a4e69]/60 text-[#22223b]" placeholder="Search analytics..." type="text"/>
</div>
<button class="material-symbols-outlined text-[#4a4e69] hover:bg-[#22223b]/5 p-2 rounded-full transition-all">notifications</button>
<button class="material-symbols-outlined text-[#4a4e69] hover:bg-[#22223b]/5 p-2 rounded-full transition-all">settings</button>
<img alt="User Profile Avatar" class="w-8 h-8 rounded-full border border-[#22223b]/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc4fdwUvu8Tr0McueArkHPP2B--vts1lv_PuNMAI2sr955YKNNxK7v9MzjaBGtfs05F7-JDx6-np7u-jB6BcLZaSJ8Da51uqWpNV6Ur3altR3Aii1P1OtT232Wt8V-Qjty23HLWebT3ZsH1o9ewuigIngA7WTUyoEW3aKbGqdHohc1WJHHr7QFcDgQYDW0kGGcSrbbsYnTio1PwkF5jfs8twzLHIdPCMa2eJ3wQGrAAFOZqTZfx6oGfNIvENTVjDP7eEZACbAZfp4"/>
</div>
</header>
<main class="max-w-[1440px] mx-auto px-container-padding py-lg flex flex-col gap-lg">
<!-- Header Section -->
<section class="flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<span class="text-[#4a4e69] font-label-sm uppercase tracking-widest block mb-xs opacity-90">Performance Suite</span>
<h2 class="font-h2 text-h2 text-[#22223b]">Knowledge Intelligence</h2>
<p class="text-[#4a4e69] max-w-xl mt-xs font-body-md">Visualize your learning velocity and conceptual mastery across all analyzed streams.</p>
</div>
<div class="flex items-center gap-base bg-[#22223b]/5 p-1 rounded-lg">
<button class="px-md py-sm text-label-sm rounded bg-[#f2e9e4] shadow-sm text-[#22223b] font-bold">Week</button>
<button class="px-md py-sm text-label-sm rounded text-[#4a4e69] hover:text-[#22223b] transition-colors">Month</button>
<button class="px-md py-sm text-label-sm rounded text-[#4a4e69] hover:text-[#22223b] transition-colors">Year</button>
</div>
</section>
<!-- Bento Grid Analytics -->
<div class="grid grid-cols-12 gap-gutter">
<!-- Learning Velocity Chart -->
<div class="col-span-12 lg:col-span-8 glass-panel rounded-xl p-md shadow-[0_8px_30px_rgba(34,34,59,0.06)] overflow-hidden">
<div class="flex justify-between items-center mb-lg">
<div>
<h3 class="font-h3 text-h3 text-[#22223b]">Knowledge Acquisition</h3>
<p class="text-label-sm text-[#4a4e69]">Cumulative topics mastered vs target velocity</p>
</div>
<div class="flex gap-md items-center">
<div class="flex items-center gap-xs">
<span class="w-3 h-3 rounded-full bg-[#4a4e69]"></span>
<span class="text-label-sm font-medium text-[#22223b]">Active Learning</span>
</div>
<div class="flex items-center gap-xs">
<span class="w-3 h-3 rounded-full bg-[#c9ada7]"></span>
<span class="text-label-sm font-medium text-[#22223b]">Projection</span>
</div>
</div>
</div>
<div class="relative h-[300px] w-full mt-md">
<svg class="w-full h-full" viewbox="0 0 800 300">
<line stroke="#22223b" stroke-opacity="0.1" x1="0" x2="800" y1="50" y2="50"></line>
<line stroke="#22223b" stroke-opacity="0.1" x1="0" x2="800" y1="150" y2="150"></line>
<line stroke="#22223b" stroke-opacity="0.1" x1="0" x2="800" y1="250" y2="250"></line>
<path d="M0 280 Q 100 240, 200 250 T 400 180 T 600 120 T 800 50 L 800 300 L 0 300 Z" fill="url(#grad1)" fill-opacity="0.15"></path>
<path d="M0 280 Q 100 240, 200 250 T 400 180 T 600 120 T 800 50" fill="none" stroke="#4a4e69" stroke-linecap="round" stroke-width="3"></path>
<path d="M0 290 Q 150 270, 300 280 T 600 240 T 800 220" fill="none" stroke="#c9ada7" stroke-dasharray="8,4" stroke-width="2"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style="stop-color:#4a4e69;stop-opacity:1"></stop>
<stop offset="100%" style="stop-color:#4a4e69;stop-opacity:0"></stop>
</lineargradient>
</defs>
</svg>
<div class="absolute bottom-0 left-0 w-full flex justify-between px-xs text-label-sm text-[#4a4e69] font-medium">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
</div>
<!-- Stats Column -->
<div class="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
<!-- Learning Streak -->
<div class="bg-[#22223b] text-white rounded-xl p-md flex items-center justify-between shadow-xl relative overflow-hidden">
<div class="relative z-10">
<span class="text-label-sm text-[#c9ada7] uppercase tracking-widest font-bold">Active Streak</span>
<div class="flex items-baseline gap-xs mt-xs">
<span class="text-[56px] font-black leading-none">12</span>
<span class="text-body-lg font-medium opacity-80">Days</span>
</div>
</div>
<div class="relative z-10">
<span class="material-symbols-outlined text-[64px] text-[#c9ada7]" style="font-variation-settings: 'FILL' 1;">local_fire_department</span>
</div>
<div class="absolute -right-8 -bottom-8 w-32 h-32 bg-[#4a4e69] rounded-full opacity-40 blur-3xl"></div>
</div>
<!-- Mastery Distribution -->
<div class="glass-panel rounded-xl p-md flex flex-col gap-md flex-grow shadow-[0_8px_30px_rgba(34,34,59,0.06)]">
<h4 class="font-bold text-[#22223b]">Topic Distribution</h4>
<div class="space-y-sm">
<div class="space-y-xs">
<div class="flex justify-between text-label-sm font-medium">
<span class="text-[#4a4e69]">Deep Learning</span>
<span class="text-[#22223b]">74%</span>
</div>
<div class="h-1.5 w-full bg-[#22223b]/10 rounded-full overflow-hidden">
<div class="h-full bg-[#4a4e69] w-[74%]"></div>
</div>
</div>
<div class="space-y-xs">
<div class="flex justify-between text-label-sm font-medium">
<span class="text-[#4a4e69]">Signal Analysis</span>
<span class="text-[#22223b]">42%</span>
</div>
<div class="h-1.5 w-full bg-[#22223b]/10 rounded-full overflow-hidden">
<div class="h-full bg-[#4a4e69] w-[42%]"></div>
</div>
</div>
<div class="space-y-xs">
<div class="flex justify-between text-label-sm font-medium">
<span class="text-[#4a4e69]">Core Architecture</span>
<span class="text-[#22223b]">18%</span>
</div>
<div class="h-1.5 w-full bg-[#22223b]/10 rounded-full overflow-hidden">
<div class="h-full bg-[#c9ada7] w-[18%]"></div>
</div>
</div>
</div>
</div>
</div>
<!-- Learning Discipline (Contribution Grid) -->
<div class="col-span-12 glass-panel rounded-xl p-lg shadow-[0_8px_30px_rgba(34,34,59,0.06)]">
<div class="flex flex-col md:flex-row justify-between md:items-center mb-lg gap-md">
<div>
<h3 class="font-h3 text-h3 text-[#22223b]">Learning Discipline</h3>
<p class="text-label-sm text-[#4a4e69]">Chronological density of analysis sessions and content consumption</p>
</div>
<div class="flex items-center gap-md">
<div class="flex items-center gap-base">
<span class="text-label-sm text-[#4a4e69] font-medium">Less</span>
<div class="flex gap-1">
<div class="w-3 h-3 contribution-cell intensity-0"></div>
<div class="w-3 h-3 contribution-cell intensity-1"></div>
<div class="w-3 h-3 contribution-cell intensity-2"></div>
<div class="w-3 h-3 contribution-cell intensity-3"></div>
<div class="w-3 h-3 contribution-cell intensity-4"></div>
</div>
<span class="text-label-sm text-[#4a4e69] font-medium">More</span>
</div>
</div>
</div>
<div class="overflow-x-auto pb-md">
<div class="min-w-[800px]">
<div class="contribution-grid">
<script>
                            const grid = document.querySelector('.contribution-grid');
                            if(grid) {
                                for(let i=0; i<371; i++) {
                                    const intensity = Math.floor(Math.random() * 5);
                                    const cell = document.createElement('div');
                                    cell.className = `contribution-cell intensity-${intensity}`;
                                    grid.appendChild(cell);
                                }
                            }
                        </script>
</div>
</div>
</div>
</div>
<!-- Contextual Insight Card -->
<div class="col-span-12 lg:col-span-7 relative group cursor-pointer overflow-hidden rounded-xl h-[400px] shadow-[0_8px_40px_rgba(34,34,59,0.15)]">
<img alt="Knowledge Intelligence Conceptual Image" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfOMWVMJz_wxG8UGezENIlQYLdWCzZTVsZmJIg1_5-BLIDEUPKAMBn_7IRzkoNK8kA0DM1iKNCrA38L6aay8_E9bRFN5z04tfcec2Lzb5J6uUW8ALMzqj4CuDCOt-jvJTgT2jdSYNQ92Wa8JYkOzYEeXTSoZL3DnBdGXSJHi25PFZCt7Gk6pVDmxwQPeEMPT-vOz2Y1jhH5aUnnvocVqQi_vtBDhi8QXEGPts6ZtucCGH1N4eEc2iOY8AfprjdWqx99XOsaJ4PcIs"/>
<div class="absolute inset-0 bg-gradient-to-t from-[#22223b]/90 via-[#22223b]/20 to-transparent flex flex-col justify-end p-lg">
<span class="text-[#c9ada7] text-label-sm font-bold uppercase tracking-widest mb-xs">Neural Insight</span>
<h3 class="text-white font-h2 text-h3 leading-tight max-w-md">Your focus on 'Asymmetric Processing' increased by 140% this week.</h3>
<div class="mt-md flex gap-base">
<button class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-md py-sm rounded-lg text-label-sm font-bold hover:bg-white/20 transition-all">Review Topics</button>
<button class="material-symbols-outlined text-white p-2 border border-white/20 rounded-lg">arrow_forward</button>
</div>
</div>
</div>
<!-- Recent Highlights -->
<div class="col-span-12 lg:col-span-5 glass-panel rounded-xl p-md overflow-hidden shadow-[0_8px_30px_rgba(34,34,59,0.06)]">
<div class="flex justify-between items-center mb-md">
<h4 class="font-bold text-[#22223b]">Key Observations</h4>
<button class="text-label-sm text-[#4a4e69] font-bold hover:underline">View all</button>
</div>
<div class="space-y-base">
<div class="p-base rounded-lg hover:bg-[#22223b]/5 transition-all group flex items-start gap-md">
<div class="w-10 h-10 rounded bg-[#4a4e69]/10 flex items-center justify-center text-[#4a4e69] shrink-0">
<span class="material-symbols-outlined">auto_graph</span>
</div>
<div>
<p class="text-body-md font-bold text-[#22223b]">Peak Cognition identified at 10:15 AM</p>
<p class="text-label-sm text-[#4a4e69]">Based on interaction speed and accuracy metrics across 4 sessions.</p>
</div>
</div>
<div class="p-base rounded-lg hover:bg-[#22223b]/5 transition-all group flex items-start gap-md">
<div class="w-10 h-10 rounded bg-[#c9ada7]/10 flex items-center justify-center text-[#c9ada7] shrink-0">
<span class="material-symbols-outlined">psychology</span>
</div>
<div>
<p class="text-body-md font-bold text-[#22223b]">New mastery path: Vector Dynamics</p>
<p class="text-label-sm text-[#4a4e69]">Foundation blocks completed. Ready for advanced conceptual synthesis.</p>
</div>
</div>
<div class="p-base rounded-lg hover:bg-[#22223b]/5 transition-all group flex items-start gap-md">
<div class="w-10 h-10 rounded bg-[#4a4e69]/10 flex items-center justify-center text-[#4a4e69] shrink-0">
<span class="material-symbols-outlined">verified</span>
</div>
<div>
<p class="text-body-md font-bold text-[#22223b]">Certification eligibility unlocked</p>
<p class="text-label-sm text-[#4a4e69]">Content Analysis Tier 1 requirements met through sustained engagement.</p>
</div>
</div>
</div>
</div>
</div>
</main>
<footer class="mt-xl py-lg border-t border-[#22223b]/10 text-[#4a4e69] text-label-sm">
<div class="max-w-[1440px] mx-auto px-container-padding flex justify-between items-center font-medium">
<p>© 2024 CoreCast Analysis Engine</p>
<div class="flex gap-md">
<a class="hover:text-[#22223b] transition-colors" href="#">Privacy</a>
<a class="hover:text-[#22223b] transition-colors" href="#">Terms</a>
<a class="hover:text-[#22223b] transition-colors" href="#">Support</a>
</div>
</div>
</footer>
</body></html>
