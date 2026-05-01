import { useEffect, useState } from 'react'
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

const libraryAvatarImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDKNN4KDRi1vDlVqkZNfpgFwG0_v-izowSv6G_ITtwryny98IgWWskSZqNYoPuic_V-eFi8PzWlnEswtpkX4KBqEU86HuvLnT3U2vLTu_4dj25-_xfAgJT5l9JjPgagdVfxKkcep3nd3seFF3CE6lYfpQg-TfA5GsO6wVUlPRe1ZZNL2bp3t165h-Ryo2G99JvCGTi5mx_8fYvJKTVOyIekIfgNWsodx_QIZT90PQ7nwo25yYe2PXNu0oYZghUbAJYDPS_YdvhVVwc'

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

const projects = [
  {
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
      <div className="brand-lockup">
        <div className="brand-icon">
          <MaterialIcon>folder_special</MaterialIcon>
        </div>
        <div>
          <p className="brand-name">CoreCast</p>
          <p className="brand-kicker">PRO ANALYSIS</p>
        </div>
      </div>

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

function ProjectRow({ project }) {
  return (
    <article className="project-row">
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
        <button className="project-action" type="button" aria-label={`${project.title} action`}>
          <MaterialIcon>{project.actionIcon}</MaterialIcon>
        </button>
      </div>
    </article>
  )
}

function ProjectsPage({ activePage, onNavigate }) {
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
            {projects.map((project) => (
              <ProjectRow project={project} key={project.title} />
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

function LibraryTopbar({ activePage, onNavigate }) {
  return (
    <header className="library-topbar">
      <div className="library-topbar-left">
        <span className="library-logo">CoreCast</span>
        <nav className="library-topnav" aria-label="Top navigation">
          {pages.map((item) => (
            <NavButton
              activePage={activePage}
              className="library-topnav-link"
              item={{ ...item, icon: null }}
              key={item.label}
              onNavigate={onNavigate}
            />
          ))}
        </nav>
      </div>

      <div className="library-topbar-actions">
        <button className="icon-button" type="button" aria-label="Notifications">
          <MaterialIcon>notifications</MaterialIcon>
        </button>
        <button className="icon-button" type="button" aria-label="Settings">
          <MaterialIcon>settings</MaterialIcon>
        </button>
        <img className="avatar" src={libraryAvatarImage} alt="User profile" />
      </div>
    </header>
  )
}

function LibrarySidebar({ activePage, onNavigate, onNewProject }) {
  const lowerItems = [
    { icon: 'archive', label: 'Archive' },
    { icon: 'help_outline', label: 'Help' },
  ]

  return (
    <aside className="library-sidebar" aria-label="Workspace navigation">
      <div>
        <div className="library-sidebar-heading">
          <h2>Workspace</h2>
          <p>Premium Analysis</p>
        </div>
        <nav className="library-side-nav">
          {pages.map((item) => (
            <NavButton
              activePage={activePage}
              className="library-side-link"
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
      </div>

      <div className="library-sidebar-footer">
        {lowerItems.map((item) => (
          <button className="library-side-link" type="button" key={item.label}>
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

function SlideToc({ activeSlide, onSelect }) {
  return (
    <section className="sync-card slide-toc-card" aria-labelledby="slide-toc-title">
      <div className="sync-card-header">
        <div>
          <p className="eyebrow">Digital TOC</p>
          <h2 id="slide-toc-title">Slide Timeline</h2>
        </div>
        <span>{slideSegments.length} slides</span>
      </div>
      <div className="slide-toc-list">
        {slideSegments.map((slide, index) => {
          const active = activeSlide.id === slide.id

          return (
            <button
              className={`slide-toc-item${active ? ' active' : ''}`}
              type="button"
              key={slide.id}
              onClick={() => onSelect(index)}
            >
              <span className="slide-time">{slide.time}</span>
              <span className="slide-copy">
                <strong>{slide.label}</strong>
                <em>{slide.title}</em>
              </span>
              <MaterialIcon>{active ? 'play_circle' : 'arrow_forward'}</MaterialIcon>
            </button>
          )
        })}
      </div>
    </section>
  )
}

function SlideInsightPanel({ activeSlide, onSeek }) {
  return (
    <section className="slide-insight-grid">
      <article className="sync-card ocr-card">
        <div className="sync-card-header">
          <div>
            <p className="eyebrow">Active Slide OCR</p>
            <h2>{activeSlide.title}</h2>
          </div>
          <span>{activeSlide.confidence}</span>
        </div>
        <div className="ocr-lines">
          {activeSlide.ocr.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </article>

      <button className="sync-card summary-card" type="button" onClick={onSeek}>
        <div className="sync-card-header">
          <div>
            <p className="eyebrow">AI Slide Summary</p>
            <h2>{activeSlide.label}</h2>
          </div>
          <span>Seek {activeSlide.time}</span>
        </div>
        <p>{activeSlide.summary}</p>
        <div className="paired-context">
          <MaterialIcon>hub</MaterialIcon>
          <span>Paired OCR + transcript segment: {activeSlide.range}</span>
        </div>
      </button>
    </section>
  )
}


function UploadLectureModal({
  mode,
  onClose,
  onModeChange,
  onProcess,
  onReset,
  processingStep,
}) {
  const isProcessing = processingStep >= 0 && processingStep < processingSteps.length
  const isComplete = processingStep >= processingSteps.length

  return (
    <div className="upload-overlay" role="dialog" aria-modal="true" aria-labelledby="upload-title">
      <div className="upload-backdrop-context" aria-hidden="true">
        <div>
          <h2>Projects Overview</h2>
          <p>Manage and analyze your recent lecture captures.</p>
        </div>
        <div className="upload-background-grid">
          <span className="wide"><MaterialIcon>video_library</MaterialIcon></span>
          <span><MaterialIcon>analytics</MaterialIcon></span>
          <span />
          <span />
          <span />
        </div>
      </div>

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
                <div className="drop-zone">
                  <div className="drop-icon">
                    <MaterialIcon>cloud_upload</MaterialIcon>
                  </div>
                  <div>
                    <h3>Drag and drop your video file</h3>
                    <p>MP4, MOV, or WEBM up to 2GB</p>
                  </div>
                  <button type="button">Browse Files</button>
                </div>
              ) : (
                <div className="youtube-panel">
                  <label htmlFor="youtube-url">Paste Lecture Link</label>
                  <div className="youtube-input-wrap">
                    <MaterialIcon>smart_display</MaterialIcon>
                    <input
                      id="youtube-url"
                      placeholder="https://youtube.com/watch?v=..."
                      type="url"
                    />
                  </div>
                  <p>CoreCast will automatically fetch video metadata and transcripts if available.</p>
                </div>
              )}

              <div className="upload-options">
                <label>
                  Lecture title
                  <input defaultValue="Physics 101: Classical Mechanics - Lecture 12" />
                </label>
                <label>
                  Language profile
                  <select defaultValue="mixed">
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
                    ? 'Slides, OCR, transcript, TOC, and summaries are prepared in the Library workspace.'
                    : 'Building the synchronized learning workspace from the uploaded lecture.'}
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
              <button className="upload-primary" type="button" onClick={onProcess}>
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

function LibraryPage({ activePage, onNavigate }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1)
  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  const [uploadMode, setUploadMode] = useState('file')
  const [processingStep, setProcessingStep] = useState(-1)
  const activeSlide = slideSegments[activeSlideIndex]

  useEffect(() => {
    if (!uploadModalOpen || processingStep < 0 || processingStep >= processingSteps.length) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setProcessingStep((step) => step + 1)
    }, 650)

    return () => window.clearTimeout(timer)
  }, [uploadModalOpen, processingStep])

  const closeUploadModal = () => {
    setUploadModalOpen(false)
    setProcessingStep(-1)
    setUploadMode('file')
  }

  return (
    <div className="library-shell">
      <LibraryTopbar activePage={activePage} onNavigate={onNavigate} />
      <LibrarySidebar
        activePage={activePage}
        onNavigate={onNavigate}
        onNewProject={() => setUploadModalOpen(true)}
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
                <h1 id="library-title">Physics 101: Classical Mechanics - Lecture 12</h1>
                <time>{activeSlide.time}</time>
              </div>
              <p>
                CoreCast is syncing the lecture video, current slide image, OCR text,
                transcript segment, and AI summary into one review workspace.
              </p>
              <div className="lecture-actions">
                {['Slide synced', 'OCR mapped', 'Transcript paired'].map((tag) => (
                  <span className="tag outline" key={tag}>
                    {tag}
                  </span>
                ))}
                <button className="sync-action" type="button" onClick={() => setActiveSlideIndex(1)}>
                  <MaterialIcon>sync_alt</MaterialIcon>
                  <span>Sync Current Slide</span>
                </button>
              </div>
            </div>

            <div className="mvp-sync-grid">
              <SlideToc activeSlide={activeSlide} onSelect={setActiveSlideIndex} />
              <SlideInsightPanel
                activeSlide={activeSlide}
                onSeek={() => setActiveSlideIndex(activeSlideIndex)}
              />
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

            <section className="course-card">
              <span>Course</span>
              <strong>PHY101 - Introductory Physics</strong>
            </section>
          </aside>
        </div>
      </main>

      <button className="library-fab" type="button" aria-label="Open comments">
        <MaterialIcon>comment</MaterialIcon>
      </button>

      {uploadModalOpen ? (
        <UploadLectureModal
          mode={uploadMode}
          onClose={closeUploadModal}
          onModeChange={setUploadMode}
          onProcess={() => setProcessingStep(0)}
          onReset={() => setProcessingStep(-1)}
          processingStep={processingStep}
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

  if (activePage === 'library') {
    return <LibraryPage activePage={activePage} onNavigate={setActivePage} />
  }

  if (activePage === 'projects') {
    return <ProjectsPage activePage={activePage} onNavigate={setActivePage} />
  }

  return <PlaceholderPage activePage={activePage} onNavigate={setActivePage} />
}

export default App
