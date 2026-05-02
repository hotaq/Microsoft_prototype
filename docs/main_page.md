<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-tertiary": "#ffffff",
                    "on-primary-fixed": "#191932",
                    "primary": "#0d0c25",
                    "surface-bright": "#fcf8fb",
                    "outline-variant": "#c8c5ce",
                    "on-secondary": "#ffffff",
                    "tertiary-container": "#2b212b",
                    "surface-dim": "#ddd9db",
                    "on-secondary-container": "#5d617d",
                    "surface-container-high": "#ebe7ea",
                    "surface-tint": "#5c5c78",
                    "surface-container-highest": "#e5e1e4",
                    "surface-variant": "#e5e1e4",
                    "on-secondary-fixed": "#161a32",
                    "outline": "#78767e",
                    "on-secondary-fixed-variant": "#414560",
                    "error": "#ba1a1a",
                    "tertiary-fixed-dim": "#d2c2cf",
                    "tertiary": "#140c15",
                    "on-tertiary-container": "#958793",
                    "on-primary": "#ffffff",
                    "on-background": "#1c1b1d",
                    "secondary-fixed-dim": "#c1c4e5",
                    "on-error-container": "#93000a",
                    "on-primary-container": "#8a89a7",
                    "error-container": "#ffdad6",
                    "primary-fixed-dim": "#c5c3e4",
                    "on-surface": "#1c1b1d",
                    "background": "#fcf8fb",
                    "surface": "#fcf8fb",
                    "surface-container": "#f1edef",
                    "surface-container-lowest": "#ffffff",
                    "primary-container": "#22223b",
                    "on-primary-fixed-variant": "#44445f",
                    "secondary-container": "#dbdeff",
                    "tertiary-fixed": "#eedeeb",
                    "inverse-primary": "#c5c3e4",
                    "surface-container-low": "#f6f2f5",
                    "inverse-surface": "#313032",
                    "secondary-fixed": "#dee0ff",
                    "on-tertiary-fixed": "#221922",
                    "on-surface-variant": "#47464d",
                    "on-tertiary-fixed-variant": "#4e434e",
                    "inverse-on-surface": "#f4f0f2",
                    "on-error": "#ffffff",
                    "secondary": "#595d78",
                    "primary-fixed": "#e2dfff"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "xs": "4px",
                    "sm": "12px",
                    "md": "24px",
                    "container-padding": "32px",
                    "xl": "64px",
                    "gutter": "24px",
                    "base": "8px",
                    "lg": "40px"
            },
            "fontFamily": {
                    "h1": ["Inter"],
                    "h3": ["Inter"],
                    "h2": ["Inter"],
                    "label-sm": ["Inter"],
                    "body-lg": ["Inter"],
                    "body-md": ["Inter"]
            },
            "fontSize": {
                    "h1": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                    "h3": ["24px", {"lineHeight": "1.3", "letterSpacing": "0", "fontWeight": "500"}],
                    "h2": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "label-sm": ["13px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "500"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            backdrop-filter: blur(20px);
            background: rgba(242, 233, 228, 0.8);
        }
    </style>
</head>
<body class="bg-[#f2e9e4] text-[#22223b] font-body-md overflow-x-hidden">
<!-- TopNavBar -->
<header class="fixed top-0 w-full z-50 border-b border-[#9a8c98]/20 bg-[#f2e9e4]/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(201,173,167,0.15)]">
<div class="flex justify-between items-center h-16 px-8 max-w-screen-2xl mx-auto">
<div class="text-xl font-bold tracking-tighter text-[#22223b]">CoreCast</div>
<nav class="hidden md:flex gap-lg items-center">
<a class="text-[#22223b] border-b-2 border-[#4a4e69] font-['Inter'] tracking-tight" href="#">Product</a>
<a class="text-[#9a8c98] hover:text-[#4a4e69] transition-all duration-300 font-['Inter'] tracking-tight" href="#">Features</a>
<a class="text-[#9a8c98] hover:text-[#4a4e69] transition-all duration-300 font-['Inter'] tracking-tight" href="#">Pricing</a>
</nav>
<div class="flex items-center gap-md">
<button class="hidden sm:block text-[#4a4e69] text-label-sm uppercase tracking-widest hover:text-[#22223b] transition-colors">Log In</button>
<button class="bg-[#4a4e69] text-white px-md py-xs rounded-full font-label-sm uppercase tracking-widest active:scale-95 transition-transform">Get Started</button>
</div>
</div>
</header>
<main class="pt-xl">
<!-- Hero Section -->
<section class="relative px-container-padding py-xl flex flex-col items-center text-center max-w-5xl mx-auto">
<div class="mb-sm">
<span class="inline-block py-1 px-3 rounded-full bg-[#4a4e69]/10 text-[#4a4e69] text-label-sm uppercase tracking-widest">A New Era of Learning</span>
</div>
<h1 class="font-h1 text-h1 text-[#22223b] mb-md max-w-4xl">
                Turn hours of lectures into minutes of insight.
            </h1>
<p class="font-body-lg text-body-lg text-[#4a4e69] mb-lg max-w-2xl">
                CoreCast uses multimodal AI to sync your slides with transcripts, providing interactive summaries that let you jump to the most important parts of your lecture instantly.
            </p>
<div class="flex flex-col sm:flex-row gap-md mb-xl">
<button class="bg-[#4a4e69] text-on-tertiary px-lg py-md rounded-lg font-h3 shadow-lg hover:shadow-xl transition-all">
                    Get Started for Free
                </button>
<button class="border border-[#9a8c98] text-[#4a4e69] px-lg py-md rounded-lg font-h3 hover:bg-[#c9ada7]/10 transition-all flex items-center justify-center gap-xs">
<span class="material-symbols-outlined" data-icon="play_circle">play_circle</span>
                    Watch Demo
                </button>
</div>
<!-- Main Visual: Interface Mockup -->
<div class="w-full mt-md relative">
<div class="relative rounded-xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(74,78,105,0.2)] border border-[#9a8c98]/20 bg-white">
<img alt="Interface Mockup" class="w-full aspect-[1.75] object-cover" data-alt="A sophisticated digital dashboard for academic lecture analysis. The interface features a physics professor on a split-screen video player, mathematical equations on a whiteboard, and a synced high-fidelity text transcript scrolling on the right side. The overall aesthetic is clean and minimalist, using a soft palette of muted creams and deep navy blues. Soft, diffused lighting illuminates the professional workspace environment." src="https://lh3.googleusercontent.com/aida/ADBb0ugymVSsZKDJslNPnezvn00brwWy7ej0tknEgQr1Bmm6gM7jYOIOac5cRtfOxGlPCVR88AO-5V6hH5Z5wxXJwe3XNFOwR9L8TNQF0o0ogue8OuZJKrj8CPwTGe5wWWxKww78nFELWZKO58w7FDcxFDUaVSaOCufWnV6aCK9PAm5-4OK7HuMZUjhGnluUYz7dMkiUsMd4bHxnqaBayVHPBi2PbAipEkvWFi1xNG85T-3gS9kM4U0yMDz2CZU"/>
<!-- Decorative Glassmorphism Overlay Elements -->
<div class="absolute bottom-md left-md p-md glass-panel rounded-lg border border-white/40 shadow-sm max-w-xs text-left hidden lg:block">
<div class="flex items-center gap-xs mb-xs">
<span class="material-symbols-outlined text-[#4a4e69]" data-icon="bolt">bolt</span>
<span class="text-label-sm font-bold uppercase tracking-widest text-[#22223b]">Core Insight</span>
</div>
<p class="text-xs text-[#4a4e69] leading-relaxed">AI detected a key formula change at 12:45. Click here to view the related slide and derivation.</p>
</div>
</div>
</div>
</section>
<!-- Social Proof -->
<section class="py-lg px-container-padding bg-white/30 backdrop-blur-sm">
<div class="max-w-screen-xl mx-auto text-center">
<p class="text-label-sm uppercase tracking-widest text-[#9a8c98] mb-lg">Trusted by students at leading universities</p>
<div class="flex flex-wrap justify-center items-center gap-xl opacity-60 grayscale">
<span class="font-h3 text-[#22223b] tracking-tighter">STANFORD</span>
<span class="font-h3 text-[#22223b] tracking-tighter">MIT</span>
<span class="font-h3 text-[#22223b] tracking-tighter">OXFORD</span>
<span class="font-h3 text-[#22223b] tracking-tighter">HARVARD</span>
<span class="font-h3 text-[#22223b] tracking-tighter">ETH ZURICH</span>
</div>
</div>
</section>
<!-- Key Features Section (Bento Style) -->
<section class="py-xl px-container-padding max-w-screen-2xl mx-auto">
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Feature 1 -->
<div class="p-lg rounded-xl bg-white/50 border border-[#c9ada7]/20 shadow-[0_8px_24px_rgba(201,173,167,0.1)] flex flex-col gap-md hover:translate-y-[-4px] transition-transform">
<div class="w-12 h-12 rounded-lg bg-[#4a4e69]/5 flex items-center justify-center">
<span class="material-symbols-outlined text-[#4a4e69] text-3xl" data-icon="sync_alt">sync_alt</span>
</div>
<div>
<h3 class="font-h3 text-h3 text-[#22223b] mb-sm">Multimodal Syncing</h3>
<p class="text-[#4a4e69] font-body-md">Your slides, transcripts, and video live in perfect harmony. When the professor speaks, the relevant slide appears automatically.</p>
</div>
</div>
<!-- Feature 2 -->
<div class="p-lg rounded-xl bg-white shadow-[0_12px_48px_rgba(74,78,105,0.1)] border border-[#c9ada7]/30 flex flex-col gap-md md:scale-105 z-10">
<div class="w-12 h-12 rounded-lg bg-[#4a4e69] flex items-center justify-center">
<span class="material-symbols-outlined text-white text-3xl" data-icon="auto_awesome">auto_awesome</span>
</div>
<div>
<h3 class="font-h3 text-h3 text-[#22223b] mb-sm">Interactive Summaries</h3>
<p class="text-[#4a4e69] font-body-md">Don't just watch—interact. Our AI generates semantic summaries with deep links that jump directly to the lecture's pivotal moments.</p>
</div>
</div>
<!-- Feature 3 -->
<div class="p-lg rounded-xl bg-white/50 border border-[#c9ada7]/20 shadow-[0_8px_24px_rgba(201,173,167,0.1)] flex flex-col gap-md hover:translate-y-[-4px] transition-transform">
<div class="w-12 h-12 rounded-lg bg-[#4a4e69]/5 flex items-center justify-center">
<span class="material-symbols-outlined text-[#4a4e69] text-3xl" data-icon="query_stats">query_stats</span>
</div>
<div>
<h3 class="font-h3 text-h3 text-[#22223b] mb-sm">Engagement Analytics</h3>
<p class="text-[#4a4e69] font-body-md">Visualize your learning journey. Track which segments you've mastered and where you might need to re-watch based on AI assessment.</p>
</div>
</div>
</div>
</section>
<!-- Call to Action Section -->
<section class="py-xl px-container-padding">
<div class="max-w-4xl mx-auto p-xl rounded-2xl bg-[#22223b] text-center text-white relative overflow-hidden">
<!-- Decorative background flare -->
<div class="absolute top-0 right-0 w-64 h-64 bg-[#4a4e69] rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>
<h2 class="font-h2 text-h2 mb-md relative z-10">Ready to master your curriculum?</h2>
<p class="font-body-lg text-body-lg text-[#c9ada7] mb-lg max-w-xl mx-auto relative z-10">
                    Join over 50,000 students who have transformed their study habits with CoreCast's precision analysis tools.
                </p>
<div class="relative z-10">
<button class="bg-[#f2e9e4] text-[#22223b] px-lg py-md rounded-lg font-h3 hover:bg-white transition-colors">
                        Create Your Free Account
                    </button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-12 border-t border-[#9a8c98]/10 bg-[#f2e9e4] text-[#4a4e69]">
<div class="flex flex-col md:flex-row justify-between items-center px-12 gap-6 max-w-screen-2xl mx-auto">
<div class="text-lg font-black text-[#22223b]">CoreCast</div>
<div class="flex flex-wrap justify-center gap-md">
<a class="font-['Inter'] text-sm uppercase tracking-widest text-[#9a8c98] hover:text-[#4a4e69] transition-colors" href="#">Privacy Policy</a>
<a class="font-['Inter'] text-sm uppercase tracking-widest text-[#9a8c98] hover:text-[#4a4e69] transition-colors" href="#">Terms of Service</a>
<a class="font-['Inter'] text-sm uppercase tracking-widest text-[#9a8c98] hover:text-[#4a4e69] transition-colors" href="#">Contact</a>
<a class="font-['Inter'] text-sm uppercase tracking-widest text-[#9a8c98] hover:text-[#4a4e69] transition-colors" href="#">Twitter</a>
<a class="font-['Inter'] text-sm uppercase tracking-widest text-[#9a8c98] hover:text-[#4a4e69] transition-colors" href="#">LinkedIn</a>
</div>
<div class="font-['Inter'] text-sm uppercase tracking-widest opacity-80">© 2024 CoreCast. Precision in every frame.</div>
</div>
</footer>
</body></html>
