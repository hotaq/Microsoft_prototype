# CoreCast: Product Backlog

Here is the **Product Backlog** for the **CoreCast** project in English, structured using Agile/Scrum methodology. It is broken down into **Epics**, **User Stories**, **Acceptance Criteria**, and **Priorities** so it can be dropped into sprint planning tools.

---

## Epic A: Slide Detection & Vision Processing

**Goal:** Extract slide images and text from video files to establish the visual context.

| ID | User Story | Acceptance Criteria | Priority |
| :--- | :--- | :--- | :--- |
| **A1** | **As the** system,<br>**I want to** detect slide transitions,<br>**so that** I can segment the video timeline based on slide changes. | - System captures and records the start and end timestamps of each slide.<br>- Accuracy of slide transition detection is at least 90%. | High |
| **A2** | **As the** system,<br>**I want to** extract text from slide images using OCR,<br>**so that** I can provide additional visual context to the AI. | - System successfully extracts text (Thai and English) from the captured slide images.<br>- Extracted text is stored and mapped correctly to the timestamp of that specific slide. | High |

## Epic B: Audio Transcription & Voice Processing

**Goal:** Convert lecture audio into highly accurate text and identify different speakers.

| ID | User Story | Acceptance Criteria | Priority |
| :--- | :--- | :--- | :--- |
| **B1** | **As a** learner,<br>**I want the** system to transcribe audio to text (Speech-to-Text),<br>**so that** I have a complete and searchable written record of the lecture. | - Accurately transcribes Thai/English, including specific technical terms.<br>- Timestamps are attached to each transcribed sentence or block of text. | High |
| **B2** | **As a** learner,<br>**I want the** system to differentiate speakers (Diarization),<br>**so that** I can distinguish between the main lecture and Q&A sessions. | - System can differentiate between Speaker 1 (e.g., Lecturer) and Speaker 2 (e.g., Student).<br>- The final transcript includes clear speaker labels. | Medium |

## Epic C: LLM Integration & Summarization

**Goal:** Merge visual (OCR) and audio (Transcript) data to generate high-quality, interconnected summaries.

| ID | User Story | Acceptance Criteria | Priority |
| :--- | :--- | :--- | :--- |
| **C1** | **As the** system,<br>**I want to** process OCR data and Transcripts together,<br>**so that** the LLM fully understands the complete context of the presentation. | - A robust data pipeline pairs the transcript segments with the corresponding slide text (based on timestamps) before sending it to the LLM. | High |
| **C2** | **As a** learner,<br>**I want a** slide-by-slide summary,<br>**so that** I can quickly review the key takeaways of each specific page. | - AI generates concise, easy-to-read summaries mapped to each slide.<br>- The summary synthesizes what the lecturer *said* about the slide, rather than just copying the OCR text. | High |
| **C3** | **As a** learner,<br>**I want a** digital Table of Contents (TOC),<br>**so that** I know exactly at what time each slide was discussed. | - System auto-generates a TOC linked to the slide segments.<br>- Each TOC item displays a clear and accurate start timestamp. | High |
| **C4** | **As a** learner,<br>**I want** overall Key Takeaways,<br>**so that** I can grasp the most critical points of the entire lecture at a glance. | - AI extracts core concepts (bullet points) that accurately summarize a full 2-3 hour video. | Medium |

## Epic D: Output & Delivery (User Experience)

**Goal:** Create a unified Multimodal UI where learners can consume video, slides, and summaries seamlessly.

| ID | User Story | Acceptance Criteria | Priority |
| :--- | :--- | :--- | :--- |
| **D1** | **As a** learner,<br>**I want a** multimodal display interface,<br>**so that** I can watch the video, see the current slide, and read the summary simultaneously. | - UI integrates a video player, the active slide image, and the corresponding summary text on a single screen.<br>- As the video plays, the slide image and summary auto-update to match the current timestamp. | High |
| **D2** | **As a** learner,<br>**I want to** click a timestamp or summary to jump the video to that exact point,<br>**so that** I save time searching for specific content. | - Clicking a TOC item or a slide's summary instantly seeks the video player to that exact designated time. | High |
| **D3** | **As a** learner,<br>**I want an** AI Q&A chatbot linked to the video,<br>**so that** I can ask questions about parts of the lecture I didn't understand. | - Users can type questions into a chat interface.<br>- The AI answers based *strictly* on the context of that specific lecture, citing the relevant slide number in its response. | Low |

---

## Recommended Implementation Roadmap (Next Steps)

1. **Phase 1 (MVP - Minimum Viable Product):** Focus strictly on the **High Priority** items (A1, A2, B1, C1, C2, C3, D1, D2). This will prove the core concept: ensuring the system can successfully sync vision, audio, and text into a usable summary interface.
2. **Phase 2 (Enhancements):** Integrate the **Medium Priority** items (B2, C4) to improve the reading experience, add speaker context (Diarization), and provide high-level executive summaries of the whole class.
3. **Phase 3 (Interactive Learning):** Develop the **Low Priority** item (D3 - Q&A Chatbot). This advanced feature shifts the product from a "summarization tool" to a "personalized AI tutor."
