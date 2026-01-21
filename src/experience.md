---
layout: layouts/base.njk
title: Experience
---
<section class="page">
  <h1>Experience</h1>
</section>

<section class="experience">
  <div class="experience-grid">
    <div class="card timeline-card">
      <h3>Education</h3>
      <ol class="timeline-list">
        <li class="timeline-item">
          <div class="timeline-header">
            <h4>UCL</h4>
            <span class="timeline-meta">2025-2028</span>
          </div>
          <p class="timeline-role">BSc (Hons) Computer Science</p>
        </li>
        <li class="timeline-item">
          <div class="timeline-header">
            <h4>Robert College</h4>
            <span class="timeline-meta">2020-2025</span>
          </div>
          <p class="timeline-role">Private American Secondary School Diploma · Istanbul</p>
          <ul class="timeline-details">
            <li>GPA: 96.45/100 · SAT 1510 · IELTS 8.5</li>
            <li>AP Scores: 5/5 on Calculus BC, Computer Science, Statistics, Physics C (Mechanics &amp; E&amp;M), Chem, Bio</li>
            <li>Relevant Coursework: Linear Algebra, Multivariable Calculus, Discrete Mathematics</li>
            <li>Ranked in the top 0.07% in Turkiye's National High School Entrance Examination</li>
          </ul>
        </li>
      </ol>
    </div>
    <div class="card timeline-card">
      <h3>Side projects</h3>
      <ol class="timeline-list no-timeline">
        <li class="timeline-item">
          <div class="timeline-header">
            <h4>Vocal Web</h4>
          </div>
          <p class="timeline-role">Voice-controlled browser extension for fast, natural language web navigation.</p>
          <ul class="timeline-details">
            <li>LLM translates natural language commands into high-level action plans.</li>
            <li>Lightweight, heuristic-based execution keeps interactions fast and reliable.</li>
            <li>Blazing fast vs compute-heavy tools like Claude in Chrome, with some performance tradeoffs.</li>
          </ul>
          <div class="demo-grid" aria-label="Vocal Web demos">
            <figure class="demo-card">
              <video
                class="demo-video"
                controls
                muted
                playsinline
                preload="metadata"
                poster="/assets/demos/book_flight_demo.jpg"
                data-lazy="true"
              >
                <source data-src="/assets/demos/book_flight_demo.webm" type="video/webm" />
                <source data-src="/assets/demos/book_flight_demo.mp4" type="video/mp4" />
              </video>
              <figcaption class="demo-caption">
                <span class="demo-label">Demo #1</span>
                <p>Booking a flight ticket.</p>
              </figcaption>
            </figure>
            <figure class="demo-card">
              <video
                class="demo-video"
                controls
                muted
                playsinline
                preload="metadata"
                poster="/assets/demos/shopping_demo.jpg"
                data-lazy="true"
              >
                <source data-src="/assets/demos/shopping_demo.webm" type="video/webm" />
                <source data-src="/assets/demos/shopping_demo.mp4" type="video/mp4" />
              </video>
              <figcaption class="demo-caption">
                <span class="demo-label">Demo #2</span>
                <p>Buying a speaker on eBay.</p>
              </figcaption>
            </figure>
            <figure class="demo-card">
              <video
                class="demo-video"
                controls
                muted
                playsinline
                preload="metadata"
                poster="/assets/demos/youtubePodcast.jpg"
                data-lazy="true"
              >
                <source data-src="/assets/demos/youtubePodcast.webm" type="video/webm" />
                <source data-src="/assets/demos/youtubePodcast.mp4" type="video/mp4" />
              </video>
              <figcaption class="demo-caption">
                <span class="demo-label">Demo #3</span>
                <p>Opening a podcast on YouTube.</p>
              </figcaption>
            </figure>
            <figure class="demo-card">
              <video
                class="demo-video"
                controls
                muted
                playsinline
                preload="metadata"
                poster="/assets/demos/wikipediaSearch.jpg"
                data-lazy="true"
              >
                <source data-src="/assets/demos/wikipediaSearch.webm" type="video/webm" />
                <source data-src="/assets/demos/wikipediaSearch.mp4" type="video/mp4" />
              </video>
              <figcaption class="demo-caption">
                <span class="demo-label">Demo #4</span>
                <p>Searching for a Wikipedia article.</p>
              </figcaption>
            </figure>
          </div>
        </li>
      </ol>
    </div>
  </div>
</section>
