import { useEffect, useRef, useState } from 'react'
import './App.css'

const pages = [
  { page: 'library', icon: 'video_library', label: 'Library' },
  { page: 'projects', icon: 'folder_special', label: 'Projects' },
  { page: 'team', icon: 'group', label: 'Team' },
  { page: 'analytics', icon: 'monitoring', label: 'Analytics' },
]

const projectFooterItems = [
  { icon: 'help_outline', label: 'Help' },
  { icon: 'logout', label: 'Logout' },
]

const projectAvatarImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB_2a-JcOVn1-GLtr-7fO5So-3jG8TIrw0LwgP-57vEIdBv2PQEIXdYRrLM8ytLjCFGDDKoemtqOPGR0SV1lEb26Yu1z4MDgZGtj2U-oul8Meja0q7_4vyk27xkC8D3oBD_0OqpaH6tSkOcbWtJcOSP58F73hUDvxV2__196p8iW43Pt5AiUc6XrtUGoNwbUMGLqYF1nEzEFVerddtcIwSsGkvoYTpd0xiQWh3amleXsMJhDdSzznYUz0uqPgMuP6eNcc6psrdCdEI'

const libraryVideoImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDeGyes1h5bvKhfyLSrB_6E-_G1cKgvT9kt_jUC2qMSqT0Y32CpoNEoohO2vr7DSnVrlifb68uFVXEd27I8u1c97WUbckBh-pVjhjyHr4N_4lChbG7t87KlQxVSRXzXVLiI4-oVpkoB4P-lXh5yAOG2r48HyYWEvW-vDeGA1CC-B90x3XmJsU8HhZY3jcuMUxrni1s0lxMkssV1YDALdgRZO8DHziDMgnKcO1L16Eg-5PyK_dXTL4sLIwu2EkVmNRooWPYHzjo6t-o'

const libraryKeyframeImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAtaCNgGiKd1zsSG6vZGnSe3BQs7bEfx50PHyXFB3SGB7gN5OcrHyToVc2E-U_mv-zrbE_CXaGmYZKgBQgWEqog3XDGBSLIsOEIgLr2DKDa2ifvWzt3hpsH1tqQJyPENjij8ltLuCKgu6Cv__SLk-dUmbx25eNKp2A98EDw1jP-rJ4pJ7e-omt91U74dc6tyi99gJ6l77ze6ihvE1uAqJu73wODgQJ0zCol-pM082gjSCeTva_Q2IV6beIyy0JCbqHE2FAjne_0ycM'

const categories = [
  {
    icon: 'science',
    ghostIcon: 'biotech',
    title: 'Science',
    count: '12 lectures',
  },
  {
    icon: 'functions',
    ghostIcon: 'calculate',
    title: 'Mathematics',
    count: '8 lectures',
  },
  {
    icon: 'terminal',
    ghostIcon: 'code',
    title: 'Coding',
    count: '24 lectures',
  },
]

const defaultLectureTitle = 'Physics 101: Classical Mechanics - Lecture 12'

const initialProjects = [
  {
    id: 'quantum-superposition-fundamentals',
    title: 'Quantum Superposition Fundamentals',
    category: 'Science',
    edited: 'Last edited Oct 24, 2023',
    status: '92% Processed',
    actionIcon: 'play_arrow',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQPMptMNuxtLaykqs1xJaSofe0EKQ-hPDK8eVuliWHxgR0yKZamPjPe1PkoIO0Lap0YbN0h7c3QsGd9nleDAbTG6zzFFU9dntKSAfFhS5jednoX9p1s1BhlHCytD4ezF64PYbFnF5gRz_qhDB0qEtPMWjVlDMYIDEIma6h9pVwaPSQhEK-B5aMaG-RgJfrcvMPK1yIldT0Zfs6xsEF0PpJ_fA0cQS_CR0eaS9AVZRqkfHmh1nHqnX6fCZb16xMTXiu34CarDohBZo',
    alt: 'Scientific visualization of blue and violet particle interactions',
  },
  {
    id: 'advanced-vector-calculus-module-4',
    title: 'Advanced Vector Calculus: Module 4',
    category: 'Mathematics',
    edited: 'Last edited Oct 22, 2023',
    status: 'Completed',
    actionIcon: 'analytics',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCoMYCnrK9yjLFmIDpWOshKw6XHQuZPlNJyQ5EGzARdo3tRx1u0DaZyd58tcQ0g5u6qOdF2WoX7w9MiuYA69moG3Pcrv3V2DRC-vc3eqHaN63z_CEXZS7SirYRMDLcFbtkp8hjMvkBFAS83MK8o_ZPLw744eomaGeIDJREifOUgV-RzER51p3Y_7fp4iwGUWSnSx9seYBpomXnSxkwWzcfW_mBBLidJ_la-mfeMjEA6vhg0V4S3IMHSkCypltta1u1eELzwtxtSu5Y',
    alt: 'Notebook with mathematical equations on a bright desk',
  },
  {
    id: 'react-native-performance-optimization',
    title: 'React Native Performance Optimization',
    category: 'Coding',
    edited: 'Last edited Oct 19, 2023',
    status: 'In Progress',
    actionIcon: 'more_vert',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA2fR544bRNUQO47HniTlODyrOs2UPGbiAy0T92o_3pSjz91CXgGmuov0IAdsCd649Uq9z8iezN2J6F1-L5NAevXKbHBK6ORm4RKK4dUQCIetr-Ni7m2Gi1pWP1oIMBYFZ_m8iP-1RnIrzwJfV8sjaZQosjjg_U1VfojQZBdOL_przk-HBBTncWCOsStjqMQyK-8zs2XzMVWnQCNAKvDGm_dC_ALfN3_g7yrD8ymOyWZmx818jywYauZbyFZ1wYnhNGwp7fRGzltjs',
    alt: 'Laptop screen showing syntax-highlighted code',
  },
]

const languageLabels = {
  mixed: 'Thai + English mixed',
  thai: 'Thai',
  english: 'English',
}

const defaultLecture = {
  title: defaultLectureTitle,
  sourceLabel: 'Sample lecture video',
  languageProfile: languageLabels.mixed,
}

function formatFileSize(bytes = 0) {
  if (!bytes) {
    return '0 MB'
  }

  const units = ['B', 'KB', 'MB', 'GB']
  const unitIndex = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1)
  const value = bytes / 1024 ** unitIndex

  return `${value.toFixed(value >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`
}

function inferLectureTitle(fileName = '') {
  return (
    fileName
      .replace(/\.[^/.]+$/, '')
      .replace(/[-_]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim() || defaultLectureTitle
  )
}

function createUploadedProject({ languageProfile, mode, selectedFile, title, youtubeUrl }) {
  const sourceLabel = mode === 'file' ? selectedFile?.name : youtubeUrl.trim()

  return {
    id: `uploaded-${Date.now()}`,
    title: title.trim() || defaultLectureTitle,
    category: languageLabels[languageProfile] ?? 'Uploaded',
    edited: `${sourceLabel || 'Manual upload'} · Added just now`,
    sourceLabel: sourceLabel || 'Uploaded lecture source',
    languageProfile: languageLabels[languageProfile] ?? languageLabels.mixed,
    status: 'Completed',
    actionIcon: 'analytics',
    image: libraryVideoImage,
    alt: 'Uploaded lecture ready for multimodal review',
  }
}

function projectToLecture(project) {
  return {
    title: project.title,
    sourceLabel: project.sourceLabel ?? project.edited,
    languageProfile: project.languageProfile ?? project.category,
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function slugifyFileName(value) {
  return (
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60) || 'corecast-lecture'
  )
}

function buildExtractedSlidesDeck({ lecture, slides }) {
  const slideMarkup = slides
    .map(
      (slide, index) => `
        <article class="slide">
          <p class="eyebrow">Extracted slide ${String(index + 1).padStart(2, '0')} · ${escapeHtml(slide.range)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
          <img src="${libraryKeyframeImage}" alt="${escapeHtml(slide.label)} extracted slide preview" />
          <section>
            <h3>OCR text</h3>
            <ul>
              ${slide.ocr.map((line) => `<li>${escapeHtml(line)}</li>`).join('')}
            </ul>
          </section>
        </article>`,
    )
    .join('')

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(lecture.title)} · Extracted Slides</title>
    <style>
      body {
        margin: 0;
        background: #f2e9e4;
        color: #22223b;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      main {
        max-width: 1120px;
        margin: 0 auto;
        padding: 48px 24px;
      }
      header {
        margin-bottom: 32px;
      }
      h1, h2, h3, p {
        margin: 0;
      }
      h1 {
        font-size: clamp(32px, 6vw, 56px);
        letter-spacing: -0.05em;
      }
      .eyebrow {
        color: #9a8c98;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.16em;
        text-transform: uppercase;
      }
      .slides {
        display: grid;
        gap: 28px;
      }
      .slide {
        border: 1px solid rgba(154, 140, 152, 0.24);
        border-radius: 24px;
        background: rgba(255, 255, 255, 0.58);
        box-shadow: 0 18px 42px rgba(34, 34, 59, 0.12);
        padding: 28px;
      }
      .slide h2 {
        margin-top: 8px;
        font-size: clamp(24px, 4vw, 38px);
        letter-spacing: -0.04em;
      }
      .slide img {
        display: block;
        width: 100%;
        max-height: 460px;
        object-fit: cover;
        border-radius: 18px;
        margin: 24px 0;
      }
      .slide section {
        border-radius: 16px;
        background: rgba(74, 78, 105, 0.08);
        padding: 18px 22px;
      }
      .slide h3 {
        color: #4a4e69;
        font-size: 13px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }
      .slide ul {
        margin: 12px 0 0;
        padding-left: 20px;
      }
      .slide li {
        margin: 8px 0;
      }
    </style>
  </head>
  <body>
    <main>
      <header>
        <p class="eyebrow">CoreCast extracted slides · ${escapeHtml(lecture.sourceLabel)}</p>
        <h1>${escapeHtml(lecture.title)}</h1>
      </header>
      <section class="slides">${slideMarkup}</section>
    </main>
  </body>
</html>`
}

function downloadExtractedSlides(lecture, slides) {
  const deck = buildExtractedSlidesDeck({ lecture, slides })
  const blob = new Blob([deck], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = `${slugifyFileName(lecture.title)}-extracted-slides.html`
  document.body.append(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 0)
}

const slideSegments = [
  {
    id: 'slide-01',
    label: 'Slide 01',
    title: 'Classical Mechanics Recap',
    time: '00:00',
    range: '00:00 - 02:44',
    progress: '12%',
    confidence: '94%',
    ocr: ['แรงและการเคลื่อนที่', 'Motion depends on net force', 'Review: velocity, acceleration, inertia'],
    summary:
      'The lecture opens by reconnecting force and motion, then defines acceleration as the measurable change that will be used throughout the experiment.',
  },
  {
    id: 'slide-02',
    label: 'Slide 02',
    title: 'Newton’s Second Law in Vacuum',
    time: '02:45',
    range: '02:45 - 05:25',
    progress: '33%',
    confidence: '97%',
    ocr: ['F = m × a', 'แรงลัพธ์ = มวล × ความเร่ง', 'Vacuum chamber removes air resistance'],
    summary:
      'The lecturer explains that when air resistance is removed, acceleration is directly proportional to net force and inversely related to mass. The slide equation becomes the anchor for the experiment.',
  },
  {
    id: 'slide-03',
    label: 'Slide 03',
    title: 'Experiment Results Table',
    time: '05:26',
    range: '05:26 - 08:10',
    progress: '58%',
    confidence: '91%',
    ocr: ['Mass (kg) | Force (N) | Acceleration', 'Slope confirms F/m relationship', 'Error margin: ±2.1%'],
    summary:
      'The results table supports the equation by showing acceleration rising as force increases. The lecturer notes the small error margin and connects the data back to the slide formula.',
  },
]

const transcriptSegments = [
  {
    slideId: 'slide-01',
    time: '00:00 - 00:45',
    text: 'Today we will connect the idea of motion to the forces that produce measurable acceleration in a controlled setting.',
  },
  {
    slideId: 'slide-02',
    time: '02:45 - 03:12',
    text: 'In the vacuum chamber, the relationship becomes easier to see: net force equals mass multiplied by acceleration, without air drag confusing the result.',
  },
  {
    slideId: 'slide-02',
    time: '03:12 - 04:00',
    text: 'Notice how changing the applied force changes acceleration while mass stays constant. This is the part you should map directly to the slide equation.',
  },
  {
    slideId: 'slide-03',
    time: '05:26 - 06:20',
    text: 'The data table confirms the pattern. The slope is consistent with the predicted force over mass relationship within the measured error range.',
  },
]

const processingSteps = [
  {
    label: 'Detecting slide transitions',
    detail: 'Finding start and end timestamps for each slide segment.',
    icon: 'auto_awesome_motion',
  },
  {
    label: 'Extracting Thai/English OCR',
    detail: 'Reading slide text and mapping it to the captured timestamp.',
    icon: 'document_scanner',
  },
  {
    label: 'Transcribing lecture audio',
    detail: 'Creating searchable transcript blocks with timestamps.',
    icon: 'record_voice_over',
  },
  {
    label: 'Generating TOC + summaries',
    detail: 'Pairing OCR and transcript context for slide-by-slide review.',
    icon: 'summarize',
  },
]

function MaterialIcon({ children, className = '' }) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>
      {children}
    </span>
  )
}

function BrandLockup() {
  return (
    <div className="brand-lockup">
      <div className="brand-icon">
        <MaterialIcon>hub</MaterialIcon>
      </div>
      <div>
        <p className="brand-name">CoreCast</p>
        <p className="brand-kicker">PRO ANALYSIS</p>
      </div>
    </div>
  )
}

function NavButton({ item, activePage, onNavigate, className = '' }) {
  const active = activePage === item.page

  return (
    <button
      className={`${className}${active ? ' active' : ''}`}
      type="button"
      onClick={() => onNavigate(item.page)}
      aria-current={active ? 'page' : undefined}
    >
      {item.icon ? <MaterialIcon>{item.icon}</MaterialIcon> : null}
      <span>{item.label}</span>
    </button>
  )
}

function ProjectSidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar" aria-label="Primary navigation">
      <BrandLockup />

      <nav className="sidebar-nav">
        {pages.map((item) => (
          <NavButton
            activePage={activePage}
            className="nav-link"
            item={item}
            key={item.label}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <div className="sidebar-footer">
        {projectFooterItems.map((item) => (
          <button className="nav-link footer-link" type="button" key={item.label}>
            <MaterialIcon>{item.icon}</MaterialIcon>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}

function ProjectHeader() {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Dashboard</p>
        <h1>Workspace Projects</h1>
      </div>

      <div className="topbar-actions">
        <label className="search-field" aria-label="Search analyses">
          <MaterialIcon>search</MaterialIcon>
          <input placeholder="Search analyses..." type="search" />
        </label>
        <button className="icon-button" type="button" aria-label="Notifications">
          <MaterialIcon>notifications</MaterialIcon>
        </button>
        <button className="icon-button" type="button" aria-label="Settings">
          <MaterialIcon>settings</MaterialIcon>
        </button>
        <img className="avatar" src={projectAvatarImage} alt="User profile" />
      </div>
    </header>
  )
}

function CategoryCard({ category }) {
  return (
    <article className="category-card">
      <div className="category-content">
        <div className="category-icon">
          <MaterialIcon>{category.icon}</MaterialIcon>
        </div>
        <h2>{category.title}</h2>
        <p>{category.count}</p>
      </div>
      <MaterialIcon className="category-ghost">{category.ghostIcon}</MaterialIcon>
    </article>
  )
}

function ProjectRow({ onOpen, project }) {
  const openProject = () => onOpen(project)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openProject()
    }
  }

  return (
    <article
      className="project-row"
      onClick={openProject}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="project-main">
        <img className="project-thumb" src={project.image} alt={project.alt} />
        <div>
          <h3>{project.title}</h3>
          <div className="project-meta">
            <span className="tag">{project.category}</span>
            <span>{project.edited}</span>
          </div>
        </div>
      </div>

      <div className="project-status">
        <div>
          <p>Status</p>
          <strong>{project.status}</strong>
        </div>
        <span className="project-action" aria-label={`Open ${project.title}`}>
          <MaterialIcon>open_in_new</MaterialIcon>
        </span>
      </div>
    </article>
  )
}

function ProjectsPage({ activePage, onNavigate, onProjectOpen, projectItems }) {
  return (
    <div className="app-shell">
      <ProjectSidebar activePage={activePage} onNavigate={onNavigate} />
      <main className="workspace">
        <ProjectHeader />

        <section className="category-grid" aria-label="Lecture categories">
          {categories.map((category) => (
            <CategoryCard category={category} key={category.title} />
          ))}
        </section>

        <section className="recent-section" aria-labelledby="recent-title">
          <div className="section-heading">
            <div>
              <h2 id="recent-title">Recent Projects</h2>
              <p>Continue your deep-focus analysis</p>
            </div>
            <button type="button">View All Activity</button>
          </div>

          <div className="project-list">
            {projectItems.map((project) => (
              <ProjectRow
                onOpen={onProjectOpen}
                project={project}
                key={project.id ?? project.title}
              />
            ))}
          </div>
        </section>
      </main>

      <button className="fab" type="button" aria-label="Add new analysis">
        <MaterialIcon>add</MaterialIcon>
      </button>
    </div>
  )
}

function LibrarySidebar({ activePage, onNavigate, onNewProject }) {
  const lowerItems = [
    { icon: 'archive', label: 'Archive' },
    { icon: 'help_outline', label: 'Help' },
  ]

  return (
    <aside className="sidebar library-sidebar" aria-label="Primary navigation">
      <BrandLockup />

      <nav className="sidebar-nav">
        {pages.map((item) => (
          <NavButton
            activePage={activePage}
            className="nav-link"
            item={item}
            key={item.label}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <div className="library-cta-wrap">
        <button className="library-new-project" type="button" onClick={onNewProject}>
          <MaterialIcon>add</MaterialIcon>
          <span>New Project</span>
        </button>
      </div>

      <div className="sidebar-footer">
        {lowerItems.map((item) => (
          <button className="nav-link footer-link" type="button" key={item.label}>
            <MaterialIcon>{item.icon}</MaterialIcon>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}

function TranscriptSegment({ segment, active, onSelect }) {
  return (
    <button
      className={`transcript-segment${active ? ' active' : ''}`}
      type="button"
      onClick={onSelect}
    >
      <div className="transcript-time-row">
        <span>{segment.time}</span>
        <MaterialIcon>{active ? 'play_circle' : 'link'}</MaterialIcon>
      </div>
      <p>{segment.text}</p>
    </button>
  )
}

function UploadLectureModal({
  canProcess,
  languageProfile,
  lectureTitle,
  mode,
  onClose,
  onFileSelect,
  onLanguageProfileChange,
  onLectureTitleChange,
  onModeChange,
  onProcess,
  onReset,
  onYoutubeUrlChange,
  processingStep,
  selectedFile,
  youtubeUrl,
}) {
  const fileInputRef = useRef(null)
  const isProcessing = processingStep >= 0 && processingStep < processingSteps.length
  const isComplete = processingStep >= processingSteps.length
  const sourceLabel = mode === 'file' ? selectedFile?.name : youtubeUrl.trim()

  const handleFileChange = (event) => {
    onFileSelect(event.target.files?.[0] ?? null)
  }

  const handleFileDrop = (event) => {
    event.preventDefault()
    onFileSelect(event.dataTransfer.files?.[0] ?? null)
  }

  return (
    <div className="upload-overlay" role="dialog" aria-modal="true" aria-labelledby="upload-title">
      <section className="upload-modal">
        <header className="upload-header">
          <div>
            <h2 id="upload-title">Upload Lecture</h2>
            <p>Start your analysis by adding a video file or a link.</p>
          </div>
          <button className="upload-close" type="button" onClick={onClose} aria-label="Close upload modal">
            <MaterialIcon>close</MaterialIcon>
          </button>
        </header>

        {processingStep < 0 ? (
          <>
            <div className="upload-tabs" role="tablist" aria-label="Upload source">
              <button
                className={mode === 'file' ? 'active' : ''}
                type="button"
                onClick={() => onModeChange('file')}
                role="tab"
                aria-selected={mode === 'file'}
              >
                <MaterialIcon>upload_file</MaterialIcon>
                <span>File Upload</span>
              </button>
              <button
                className={mode === 'youtube' ? 'active' : ''}
                type="button"
                onClick={() => onModeChange('youtube')}
                role="tab"
                aria-selected={mode === 'youtube'}
              >
                <MaterialIcon>link</MaterialIcon>
                <span>YouTube URL</span>
              </button>
            </div>

            <div className="upload-content">
              {mode === 'file' ? (
                <div
                  className={`drop-zone${selectedFile ? ' has-file' : ''}`}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={handleFileDrop}
                >
                  <input
                    accept="video/mp4,video/quicktime,video/webm,.mp4,.mov,.webm"
                    className="visually-hidden"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    type="file"
                  />
                  <div className="drop-icon">
                    <MaterialIcon>{selectedFile ? 'movie' : 'cloud_upload'}</MaterialIcon>
                  </div>
                  <div>
                    <h3>{selectedFile ? 'Video file selected' : 'Drag and drop your video file'}</h3>
                    <p>{selectedFile ? 'Ready to run CoreCast processing' : 'MP4, MOV, or WEBM up to 2GB'}</p>
                  </div>
                  {selectedFile ? (
                    <div className="selected-file-card">
                      <MaterialIcon>description</MaterialIcon>
                      <span>
                        <strong>{selectedFile.name}</strong>
                        <em>
                          {formatFileSize(selectedFile.size)}
                          {selectedFile.type ? ` · ${selectedFile.type}` : ''}
                        </em>
                      </span>
                    </div>
                  ) : null}
                  <button type="button" onClick={() => fileInputRef.current?.click()}>
                    {selectedFile ? 'Replace File' : 'Browse Files'}
                  </button>
                </div>
              ) : (
                <div className="youtube-panel">
                  <label htmlFor="youtube-url">Paste Lecture Link</label>
                  <div className="youtube-input-wrap">
                    <MaterialIcon>smart_display</MaterialIcon>
                    <input
                      id="youtube-url"
                      onChange={(event) => onYoutubeUrlChange(event.target.value)}
                      placeholder="https://youtube.com/watch?v=..."
                      type="url"
                      value={youtubeUrl}
                    />
                  </div>
                  <p>CoreCast will automatically fetch video metadata and transcripts if available.</p>
                </div>
              )}

              <div className="upload-options">
                <label>
                  Lecture title
                  <input
                    onChange={(event) => onLectureTitleChange(event.target.value)}
                    value={lectureTitle}
                  />
                </label>
                <label>
                  Language profile
                  <select
                    onChange={(event) => onLanguageProfileChange(event.target.value)}
                    value={languageProfile}
                  >
                    <option value="mixed">Thai + English mixed</option>
                    <option value="thai">Thai</option>
                    <option value="english">English</option>
                  </select>
                </label>
              </div>
            </div>
          </>
        ) : (
          <div className="processing-panel">
            <div className="processing-hero">
              <div className={isComplete ? 'processing-ring complete' : 'processing-ring'}>
                <MaterialIcon>{isComplete ? 'check' : 'sync'}</MaterialIcon>
              </div>
              <div>
                <p className="eyebrow">CoreCast Pipeline</p>
                <h3>{isComplete ? 'Lecture ready for review' : 'Processing lecture'}</h3>
                <p>
                  {isComplete
                    ? `${lectureTitle || defaultLectureTitle} is now added to your workspace.`
                    : `Building the synchronized learning workspace${sourceLabel ? ` from ${sourceLabel}` : ''}.`}
                </p>
              </div>
            </div>

            <div className="processing-steps">
              {processingSteps.map((step, index) => {
                const complete = processingStep > index
                const active = processingStep === index

                return (
                  <div
                    className={`processing-step${complete ? ' complete' : ''}${active ? ' active' : ''}`}
                    key={step.label}
                  >
                    <div>
                      <MaterialIcon>{complete ? 'check_circle' : step.icon}</MaterialIcon>
                    </div>
                    <span>
                      <strong>{step.label}</strong>
                      <em>{step.detail}</em>
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <footer className="upload-footer">
          {processingStep < 0 ? (
            <>
              <button className="upload-cancel" type="button" onClick={onClose}>Cancel</button>
              <button className="upload-primary" type="button" onClick={onProcess} disabled={!canProcess}>
                <span>Process Lecture</span>
                <MaterialIcon>arrow_forward</MaterialIcon>
              </button>
            </>
          ) : (
            <>
              <button className="upload-cancel" type="button" onClick={onReset} disabled={isProcessing}>
                Upload Another
              </button>
              <button className="upload-primary" type="button" onClick={onClose} disabled={!isComplete}>
                <span>Open Processed Library</span>
                <MaterialIcon>arrow_forward</MaterialIcon>
              </button>
            </>
          )}
        </footer>
      </section>
    </div>
  )
}

function LibraryPage({ activePage, currentLecture, onNavigate, onProjectCreated }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1)
  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  const [uploadMode, setUploadMode] = useState('file')
  const [processingStep, setProcessingStep] = useState(-1)
  const [selectedFile, setSelectedFile] = useState(null)
  const [lectureTitle, setLectureTitle] = useState(defaultLectureTitle)
  const [languageProfile, setLanguageProfile] = useState('mixed')
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const processedProjectRef = useRef(null)
  const activeSlide = slideSegments[activeSlideIndex]
  const canProcess =
    lectureTitle.trim().length > 0 &&
    (uploadMode === 'file' ? Boolean(selectedFile) : youtubeUrl.trim().length > 0)

  useEffect(() => {
    if (!uploadModalOpen || processingStep < 0 || processingStep >= processingSteps.length) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setProcessingStep((step) => step + 1)
    }, 650)

    return () => window.clearTimeout(timer)
  }, [uploadModalOpen, processingStep])

  useEffect(() => {
    if (!uploadModalOpen || processingStep !== processingSteps.length || processedProjectRef.current) {
      return
    }

    const project = createUploadedProject({
      languageProfile,
      mode: uploadMode,
      selectedFile,
      title: lectureTitle,
      youtubeUrl,
    })
    const sourceLabel = uploadMode === 'file' ? selectedFile?.name : youtubeUrl.trim()

    onProjectCreated(project, {
      title: project.title,
      sourceLabel: sourceLabel || 'Uploaded lecture source',
      languageProfile: languageLabels[languageProfile] ?? languageLabels.mixed,
    })
    processedProjectRef.current = project
  }, [
    languageProfile,
    lectureTitle,
    onProjectCreated,
    processingStep,
    selectedFile,
    uploadModalOpen,
    uploadMode,
    youtubeUrl,
  ])

  const resetUploadForm = () => {
    setProcessingStep(-1)
    setUploadMode('file')
    setSelectedFile(null)
    setLectureTitle(defaultLectureTitle)
    setLanguageProfile('mixed')
    setYoutubeUrl('')
    processedProjectRef.current = null
  }

  const openUploadModal = () => {
    resetUploadForm()
    setUploadModalOpen(true)
  }

  const closeUploadModal = () => {
    setUploadModalOpen(false)
    resetUploadForm()
  }

  const handleFileSelect = (file) => {
    if (!file) {
      return
    }

    setSelectedFile(file)
    if (!lectureTitle.trim() || lectureTitle === defaultLectureTitle) {
      setLectureTitle(inferLectureTitle(file.name))
    }
  }

  const startProcessing = () => {
    if (canProcess) {
      setProcessingStep(0)
    }
  }

  return (
    <div className="library-shell">
      <LibrarySidebar
        activePage={activePage}
        onNavigate={onNavigate}
        onNewProject={openUploadModal}
      />

      <main className="library-main">
        <div className="library-grid">
          <section className="video-column" aria-labelledby="library-title">
            <div className="video-card">
              <img
                className="video-still"
                src={libraryVideoImage}
                alt="Cinematic lecture video frame currently synced to the active slide"
              />
              <div className="keyframe-card active-slide-card">
                <div className="keyframe-scrim" />
                <img src={libraryKeyframeImage} alt="Active slide keyframe preview" />
                <span>{activeSlide.label}</span>
              </div>
              <button className="play-control" type="button" aria-label="Play lecture video">
                <MaterialIcon>play_arrow</MaterialIcon>
              </button>
            </div>
            <div className="timeline" aria-label="Playback progress">
              <span className="timeline-progress" style={{ width: activeSlide.progress }} />
              <span className="timeline-pin" style={{ left: activeSlide.progress }} />
            </div>

            <div className="lecture-summary">
              <div className="lecture-title-row">
                <h1 id="library-title">{currentLecture.title}</h1>
                <time>{activeSlide.time}</time>
              </div>
              <p>
                CoreCast is syncing the lecture video, current slide image, OCR text,
                transcript segment, and AI summary from {currentLecture.sourceLabel} into one review workspace.
              </p>
              <div className="lecture-actions">
                {['Slide synced', 'OCR mapped', 'Transcript paired', currentLecture.languageProfile].map((tag) => (
                  <span className="tag outline" key={tag}>
                    {tag}
                  </span>
                ))}
                <button
                  className="download-action"
                  type="button"
                  onClick={() => downloadExtractedSlides(currentLecture, slideSegments)}
                >
                  <MaterialIcon>download</MaterialIcon>
                  <span>Download</span>
                </button>
              </div>
            </div>

          </section>

          <aside className="analysis-column" aria-label="Interactive transcript and metadata">
            <section className="transcript-panel">
              <header className="transcript-header">
                <div>
                  <button className="transcript-tab active" type="button">
                    Transcript
                  </button>
                  <button className="transcript-tab" type="button">
                    Markers
                  </button>
                </div>
                <button className="transcript-search" type="button" aria-label="Search transcript">
                  <MaterialIcon>search</MaterialIcon>
                </button>
              </header>

              <div className="transcript-list">
                {transcriptSegments.map((segment) => {
                  const targetIndex = slideSegments.findIndex((slide) => slide.id === segment.slideId)
                  const active = segment.slideId === activeSlide.id

                  return (
                    <TranscriptSegment
                      active={active}
                      segment={segment}
                      key={segment.time}
                      onSelect={() => setActiveSlideIndex(targetIndex)}
                    />
                  )
                })}
              </div>

              <footer className="transcript-live">
                <span className="live-dot" />
                <strong>Live Transcription Active</strong>
              </footer>
            </section>

            <section className="metadata-card">
              <div>
                <span>Location</span>
                <strong>Room 402, Science Building</strong>
              </div>
              <div>
                <span>Recording Date</span>
                <strong>Oct 24, 2023</strong>
              </div>
            </section>

          </aside>
        </div>
      </main>

      <button className="library-fab" type="button" aria-label="Open comments">
        <MaterialIcon>comment</MaterialIcon>
      </button>

      {uploadModalOpen ? (
        <UploadLectureModal
          canProcess={canProcess}
          languageProfile={languageProfile}
          lectureTitle={lectureTitle}
          mode={uploadMode}
          onClose={closeUploadModal}
          onFileSelect={handleFileSelect}
          onLanguageProfileChange={setLanguageProfile}
          onLectureTitleChange={setLectureTitle}
          onModeChange={setUploadMode}
          onProcess={startProcessing}
          onReset={resetUploadForm}
          onYoutubeUrlChange={setYoutubeUrl}
          processingStep={processingStep}
          selectedFile={selectedFile}
          youtubeUrl={youtubeUrl}
        />
      ) : null}
    </div>
  )
}

function PlaceholderPage({ activePage, onNavigate }) {
  const label = pages.find((page) => page.page === activePage)?.label ?? 'Workspace'

  return (
    <div className="app-shell">
      <ProjectSidebar activePage={activePage} onNavigate={onNavigate} />
      <main className="workspace placeholder-page">
        <ProjectHeader />
        <section className="placeholder-card">
          <MaterialIcon>construction</MaterialIcon>
          <p className="eyebrow">Coming Soon</p>
          <h2>{label}</h2>
          <p>This section is ready for the next documented page spec.</p>
        </section>
      </main>
    </div>
  )
}

function App() {
  const [activePage, setActivePage] = useState('library')
  const [projectItems, setProjectItems] = useState(initialProjects)
  const [currentLecture, setCurrentLecture] = useState(defaultLecture)

  const handleProjectCreated = (project, lecture) => {
    setProjectItems((items) => [project, ...items])
    setCurrentLecture(lecture)
  }

  const handleProjectOpen = (project) => {
    setCurrentLecture(projectToLecture(project))
    setActivePage('library')
  }

  if (activePage === 'library') {
    return (
      <LibraryPage
        activePage={activePage}
        currentLecture={currentLecture}
        onNavigate={setActivePage}
        onProjectCreated={handleProjectCreated}
      />
    )
  }

  if (activePage === 'projects') {
    return (
      <ProjectsPage
        activePage={activePage}
        onNavigate={setActivePage}
        onProjectOpen={handleProjectOpen}
        projectItems={projectItems}
      />
    )
  }

  return <PlaceholderPage activePage={activePage} onNavigate={setActivePage} />
}

export default App
