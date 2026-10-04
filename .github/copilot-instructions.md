# Vivek K Saklathi — Personal Portfolio

## Build Instructions for GitHub Copilot

## 1. Objective

Build a **single-page React portfolio website** for Vivek K Saklathi.

The portfolio should NOT feel like a generic developer portfolio.

The primary objective is to create an **authentic professional image** of Vivek:

> A young software engineer who builds things, experiments, learns continuously, works on real production systems, enjoys exploring ideas, and is actively growing beyond just writing code.

The website should make a visitor feel that they have **met the person behind the resume**, without turning the website into a personal/lifestyle blog.

The portfolio should communicate:

- Professional credibility
- Technical ability
- Real-world engineering experience
- Curiosity and experimentation
- Personal character and individuality
- A sense of someone who is actively trying to improve
- A clear path to LinkedIn, GitHub, projects and resume

The site should feel **intentional, cinematic, slightly experimental and personal**, while remaining professional enough for recruiters and engineering managers.

---

# 2. Core Design Direction

## Visual Theme

Start with **dark mode only**.

The visual direction should combine:

- Dark cinematic interface
- Minimal typography
- Strong contrast
- Subtle motion
- Smooth scrolling
- Horizontal storytelling
- Film/movie-inspired transitions
- Occasional dramatic typography
- Large visual sections
- Generous negative space

Do NOT make it look like a typical:

- SaaS landing page
- Corporate website
- Template portfolio
- Developer dashboard
- Gaming website
- Overly futuristic "AI developer" website

Avoid excessive:

- Neon colors
- Glowing cards
- Gradients everywhere
- Glassmorphism
- Floating 3D objects everywhere
- Excessive animations
- Huge skill lists

The website should feel **cinematic rather than flashy**.

---

# 3. Important Inspiration

Use these portfolios as design references, NOT as templates to copy.

### Inspiration 1

https://khushi-portfolio-orcin.vercel.app/

Important inspiration:

- Scroll-based storytelling
- Animation between sections
- The feeling that the website is revealing itself as the user scrolls
- Smooth transitions

### Inspiration 2

https://developer-portfolio-1hanzla100.vercel.app/#hero

Important inspiration:

- Clean background
- Clear hierarchy
- Strong hero section
- Professional presentation

### Inspiration 3

https://mohdsuhel.suhel-f75.workers.dev/

Important inspiration:

- How projects are presented
- Project storytelling
- Visual treatment of individual projects

### Inspiration 4

https://www.sunnypatel.net/

Important inspiration:

- Ambition
- Experimental/complex interaction
- Strong visual identity
- Cinematic feeling

Do NOT simply reproduce any of these websites.

Create a unique identity for Vivek.

---

# 4. Navigation / Page Structure

This is a **single-page application**.

Do not create separate pages for:

- About
- Experience
- Projects
- Contact
- Resume

Everything should exist within one continuous experience.

The preferred interaction model is:

> Vertical entry → horizontal storytelling

The main portfolio should feel like the visitor is moving through a cinematic timeline.

Possible structure:

```text
INTRO
  ↓
WHO I AM
  ↓
MY JOURNEY
  ↓
EXPERIENCE
  ↓
SELECTED WORK
  ↓
EXPLORATORY / RESEARCH
  ↓
THE DUMP
  ↓
EDUCATION / ORIGIN
  ↓
CONNECT
```

The exact implementation can vary if a better interaction is discovered.

---

# 5. Hero Section

The hero is extremely important.

It should immediately establish identity.

Suggested content:

```text
VIVEK K SAKLATHI

Software Developer

I build software.
I experiment with ideas.
I keep trying to get better.

[ LinkedIn ]
[ GitHub ]
[ Resume ]
```

Do not use generic text such as:

> "Passionate software engineer with a passion for developing scalable applications."

Avoid corporate buzzwords.

The hero should feel like a person is speaking.

Potential visual concept:

- Black/dark background
- Large typography
- Subtle cinematic movement
- Film-like opening
- Small metadata such as:

```text
CHENNAI, INDIA
JAVA / SPRING / REACT
2025 → PRESENT
```

The visitor should immediately understand:

**Who is this? What does he do? Where can I find his work?**

---

# 6. Personal Identity / "Who I Am"

Do NOT create a conventional "About Me" paragraph.

Instead create a visually interesting introduction.

Possible heading:

```text
SO, WHO AM I?
```

Then reveal information progressively.

Example:

```text
Software developer.

Currently building enterprise applications at Lennox.

Started with backend development.
Moved into full-stack engineering.

Still figuring things out.

Still building things.
```

This section should communicate personality without becoming a biography.

---

# 7. Authenticity Principle

This is one of the most important requirements.

The portfolio should NOT try to make Vivek appear:

- Perfect
- Ultra-successful
- Like a senior engineer
- Like a startup founder
- Like an AI researcher
- Like a design influencer

Instead it should communicate:

> "This is a young engineer who is genuinely figuring things out, building things, experimenting, learning and improving."

The website should feel honest.

Avoid phrases such as:

- "10x engineer"
- "technology enthusiast"
- "passionate coder"
- "problem solver"
- "results-driven professional"
- "innovative technologist"

unless there is a genuinely meaningful reason to use them.

---

# 8. Professional Experience

This must be one of the most structured sections.

Do not bury professional experience under animations.

The experience section should clearly communicate the progression:

```text
Lennox India Technology Centre

Student Intern
Feb 2025 → Jul 2025

Graduate Engineer Trainee
Jul 2025 → Mar 2026

Associate Developer
Mar 2026 → Present
```

Show this as a timeline or progression.

The transition itself is important.

The story should communicate:

```text
Intern
   ↓
Backend
   ↓
Full Stack
   ↓
Production Engineering
```

Use actual resume information.

Important achievements to surface visually:

- 50+ customer-requested user stories
- 30%+ reduction in production incidents
- 50% reduction in Playwright regression runtime
- 26 → 13 minutes
- 45 hours → 7 hours through automation
- 20+ production defects resolved
- Spring AMQP / RabbitMQ printer pipeline
- Enterprise platform migration with zero cutover downtime

Do not display every bullet from the resume immediately.

Use progressive disclosure.

For example:

```text
50+
USER STORIES

30%+
FEWER PRODUCTION INCIDENTS

50%
FASTER REGRESSION

45h → 7h
VALIDATION AUTOMATION
```

Then allow the visitor to expand/read the detailed engineering story.

---

# 9. Experience Storytelling

Each major experience should answer:

```text
What was the problem?
What did I build/change?
What technologies did I use?
What was the impact?
```

Example:

```text
THE PROBLEM

Printing depended on an external service.

THE BUILD

Designed an asynchronous Spring AMQP pipeline
to route print jobs directly to target printers.

THE RESULT

Reduced dependency on the external printing service.
```

Do this for only the most interesting work.

Do NOT turn the page into a wall of resume bullets.

---

# 10. Projects

Create a strong **Selected Projects** section.

Projects should be visually prominent.

Each project should contain:

```text
PROJECT NAME

One-line description

TECH STACK

What I built

Why I built it

What I learned

[ GitHub ]
[ Live Demo ] (if available)
```

Projects should feel like **case studies**, not GitHub links.

---

# 11. Known Projects

Use the following projects where appropriate.

## Learning & Development Management Application

Stack:

```text
Spring Boot
REST API
JWT
Spring Security
JPA/Hibernate
```

Focus on:

- REST APIs
- JWT authentication
- Role-based authorization
- Persistence layer

---

## GuideSphere

Stack:

```text
Flask
Python
JavaScript
MongoDB
Node.js
```

Description:

Learning material and job search platform.

Interesting technical aspect:

```text
Bag-of-Words
+
Cosine Similarity
```

for content recommendation.

---

## DistriTube

This is an exploratory project and should receive special treatment.

Do NOT present it like a finished corporate product if it is still evolving.

Present it as:

```text
DISTriTUBE

What happens when I try to build my own
distributed video platform?

```

Show:

```text
React
NestJS
PostgreSQL
Prisma
MinIO
Docker
```

Potential features:

- Video upload
- Video streaming
- Authentication
- Refresh/access token architecture
- Object storage
- Metadata management

This project represents experimentation and curiosity.

---

# 12. Exploratory / Research Section

This should be different from the normal Projects section.

Heading idea:

```text
THINGS I STARTED BECAUSE
I WANTED TO KNOW IF I COULD
```

This section represents:

- Experiments
- Research
- Side projects
- Ideas
- Technical exploration
- Things that may not be finished

The purpose is NOT to show successful products.

The purpose is to show:

> curiosity + experimentation + learning

Possible categories:

```text
BUILT
EXPERIMENTED
RESEARCHED
ABANDONED
LEARNING
```

Do not make unfinished projects look artificially polished.

That honesty is part of the identity.

---

# 13. "THE DUMP"

This is a special section.

It should intentionally break the structured nature of the portfolio.

Heading:

```text
THE DUMP
```

or:

```text
EVERYTHING ELSE
```

or:

```text
RANDOM THINGS I'VE BEEN WORKING ON
```

This section should feel like opening Vivek's working notebook.

It can contain:

- Small experiments
- Things learned
- Technical notes
- Random ideas
- Research
- Failed experiments
- Small utilities
- Interesting bugs
- Things being explored
- Screenshots
- GitHub repositories
- Articles
- Technical rabbit holes
- Small UI experiments
- Ideas for future projects

The layout should intentionally NOT be perfectly structured.

For example:

```text
RabbitMQ
     ↓
Why did I use it?

YOLOv8
     ↓
Road damage detection experiment

Gemma 2B
     ↓
Tried running an LLM locally on Android

DistriTube
     ↓
What happens if I build YouTube myself?

Playwright
     ↓
26 min → 13 min

Random idea:
Build something that...
```

This section should feel like a **digital notebook / wall / film credits / production board**.

But it should still remain visually clean.

---

# 14. Personality Without a Hobby Section

Do NOT create a section called:

```text
MY HOBBIES
```

Do not explicitly list:

- Movies
- Gym
- Theatre
- Reading
- etc.

Instead let personality emerge indirectly.

The visitor should get a sense that Vivek:

- Experiments
- Tries new things
- Doesn't always follow a fixed plan
- Likes building things
- Is curious
- Is actively working on communication
- Is comfortable trying something unfamiliar
- Has interests outside pure software

The portfolio should **show the vibe rather than explain the vibe**.

---

# 15. Desired Personality / Vibe

The portfolio should communicate something similar to:

> Curious. Restless. Experimental. Practical. Self-aware. Always trying something.

Not:

> Corporate. Perfect. Over-polished. Artificially inspirational.

A visitor should leave thinking:

> "This person actually does things."

rather than:

> "This person knows how to write a good resume."

---

# 16. Origin / Education

Include a compact section explaining the journey.

Current factual information:

```text
Native:
Sirsi, Karnataka, India

Education:
SDM College of Engineering and Technology
Bachelor of Engineering
Computer Science and Engineering
CGPA: 8.35
2021 → 2025
```

Potential storytelling:

```text
SIRSI
KARNATAKA

        ↓

DHARWAD
ENGINEERING

        ↓

CHENNAI
SOFTWARE ENGINEERING
```

The purpose is not to give a detailed autobiography.

It is to show the journey.

If adding the Karnataka → Chennai story, keep it authentic and concise.

Do not invent reasons or personal details that have not been provided.

---

# 17. Movie Theme

Use the movie/cinema influence subtly.

Do NOT turn the website into a movie fan website.

Instead borrow concepts from cinema:

### Opening

The hero behaves like the opening shot.

### Scenes

Each major section feels like a new scene.

### Timeline

Experience feels like a timeline in a film.

### Credits

The final section can subtly resemble movie credits.

Example:

```text
VIVEK K SAKLATHI

Software Developer

Built with:
Java
Spring Boot
React
TypeScript
and an unreasonable amount of curiosity.

THE END?
```

The movie theme should be discovered rather than announced.

---

# 18. Horizontal Scrolling

Horizontal scrolling is encouraged.

However:

**Do not sacrifice usability for the effect.**

Use horizontal scrolling primarily for major storytelling sections.

Possible implementation:

```text
Normal vertical scroll
        ↓
Pinned section
        ↓
Horizontal content moves
        ↓
Section completes
        ↓
Return to vertical scroll
```

Do NOT make the entire website permanently horizontal if it creates usability/accessibility issues.

The user should still be able to:

- Scroll naturally
- Navigate with keyboard
- Use touch devices
- Use mobile devices
- Click navigation links
- Access all content

---

# 19. Animation

Animation is a MUST.

But animation should communicate structure.

Use:

- Fade
- Slide
- Scale
- Reveal
- Horizontal movement
- Text reveal
- Parallax where appropriate
- Image movement
- Number counters
- Section transitions

Avoid:

- Constant floating objects
- Random bouncing
- Excessive particle effects
- Animations that delay content
- Animation on every single element

The animation should feel like:

> cinematic editing

rather than:

> UI effects showcase.

Respect `prefers-reduced-motion`.

---

# 20. Technical Stack

Use:

```text
React
TypeScript
Vite
```

Preferred:

```text
Tailwind CSS
```

For animations:

```text
Framer Motion
```

If horizontal scroll requires more advanced scroll control, use an appropriate library only when necessary.

Do NOT introduce unnecessary dependencies.

Keep the application maintainable.

---

# 21. Code Architecture

Use a clean component structure.

Suggested:

```text
src/
├── components/
│   ├── Navbar
│   ├── Hero
│   ├── Intro
│   ├── Journey
│   ├── Experience
│   ├── ImpactStats
│   ├── Projects
│   ├── ProjectCard
│   ├── Exploratory
│   ├── TheDump
│   ├── Education
│   ├── Connect
│   └── Footer
│
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── experiments.ts
│
├── hooks/
├── assets/
├── styles/
└── App.tsx
```

Keep content separated from UI wherever practical.

Do not hardcode every piece of portfolio content directly inside JSX.

---

# 22. Responsive Design

Desktop is the primary experience.

However, the website MUST work properly on:

```text
Desktop
Laptop
Tablet
Mobile
```

On mobile:

Do not force complex horizontal scrolling if it makes the website difficult to use.

Adapt the experience.

Possible:

```text
Desktop → cinematic horizontal sections

Mobile → vertical cinematic sections
```

---

# 23. Navigation

Navigation should remain minimal.

Possible:

```text
VIVEK

WORK
PROJECTS
EXPERIMENTS
DUMP
ABOUT

[ RESUME ]
```

Do not create a giant navigation menu.

Navigation can change appearance while scrolling.

For example:

```text
Hero:
minimal

After scrolling:
small floating navigation
```

---

# 24. Resume

Provide an obvious resume button.

It should support:

```text
VIEW RESUME
DOWNLOAD RESUME
```

The resume should open/download the actual PDF.

Do not create a fake HTML resume page unless useful.

---

# 25. Social Links

Make these clearly accessible:

```text
LinkedIn
GitHub
Email
Resume
```

Do not hide them at the bottom of the page only.

At least GitHub + LinkedIn + Resume should be available near the hero.

Use actual links provided during implementation.

Do not invent URLs.

---

# 26. GitHub Projects

Every project that has a GitHub repository should have a direct GitHub link.

Example:

```text
DistriTube

[ VIEW PROJECT ]
[ GITHUB ]
```

Do not create fake project URLs.

Use placeholders until real URLs are provided.

---

# 27. Content Rules

Very important:

### Do not invent:

- Job experience
- Achievements
- Companies
- Projects
- Statistics
- Technologies
- Personal stories
- Reasons for decisions
- Awards
- Client names

If information is missing:

```text
TODO
```

or create a clear placeholder in the data file.

---

# 28. Content Source

Use the uploaded resume as the factual source for:

- Professional experience
- Dates
- Technologies
- Project descriptions
- Education
- Skills
- Achievements

Current verified resume information includes:

```text
Lennox India Technology Centre
Associate Developer
Mar 2026 – Present

Graduate Engineer Trainee
Jul 2025 – Mar 2026

Student Intern
Feb 2025 – Jul 2025
```

and:

```text
SDM College of Engineering and Technology
B.E. Computer Science and Engineering
CGPA: 8.35
2021 – 2025
```

Do not alter these facts unless explicitly instructed.

---

# 29. Typography

Typography should carry much of the visual identity.

Use:

- One strong display font
- One clean body font

Prefer large typography for section titles.

Examples:

```text
I BUILD THINGS.

THINGS I TRIED.

WHAT I ACTUALLY DO.

THE WORK.

THE EXPERIMENTS.

THE DUMP.
```

Typography should occasionally occupy significant screen space.

---

# 30. Color

Start with a dark palette.

Suggested foundation:

```text
Background:
near-black

Primary text:
off-white

Secondary text:
muted gray

Accent:
ONE carefully selected accent color
```

Do not use 5–6 accent colors.

The accent should be used sparingly for:

- Links
- Important numbers
- Hover states
- Timeline indicators
- Interactive elements

---

# 31. Images

Do not use generic stock photos of:

- Programmers
- Laptops
- Code
- Office buildings

Prefer:

- Actual screenshots
- Project interfaces
- Diagrams
- GitHub/project visuals
- Personal artifacts where appropriate
- Abstract cinematic visuals created specifically for the site

If no useful image exists, use typography rather than stock photography.

---

# 32. Micro-interactions

Add small details that make the website feel alive.

Examples:

```text
Cursor interaction
Project hover
Text reveal
Image zoom
Timeline progress
Scroll progress
Magnetic buttons
```

Use these sparingly.

The website should feel polished, not overloaded.

---

# 33. Performance

This is a professional developer portfolio.

Performance matters.

Requirements:

- Lazy-load heavy images
- Avoid unnecessarily large assets
- Avoid unnecessary libraries
- Minimize JavaScript where possible
- Avoid animation causing layout shifts
- Optimize images
- Use semantic HTML
- Maintain good Lighthouse performance

The portfolio itself should demonstrate good engineering.

---

# 34. Accessibility

Must support:

- Keyboard navigation
- Semantic HTML
- Visible focus states
- Accessible buttons
- Accessible links
- Appropriate contrast
- Reduced-motion preference
- Screen-reader-friendly labels

Do not sacrifice accessibility for cinematic effects.

---

# 35. SEO

Include:

```text
<title>Vivek K Saklathi — Software Developer</title>
<meta description="...">
Open Graph metadata
Favicon
```

Use semantic headings.

The website should be discoverable by:

```text
Vivek K Saklathi
Software Developer
Java Developer
Spring Boot Developer
React Developer
```

Do not keyword-stuff.

---

# 36. Footer

The footer should feel like the ending of a film.

Example concept:

```text
VIVEK K SAKLATHI

Software Developer

Java · Spring Boot · React · TypeScript

GitHub
LinkedIn
Email
Resume


ROLL CREDITS

Designed & built by Vivek.

2026
```

Keep it subtle.

---

# 37. Overall Experience

The website should tell this story:

```text
WHO IS THIS?

        ↓

WHERE DID HE COME FROM?

        ↓

WHAT DOES HE ACTUALLY DO?

        ↓

WHAT HAS HE BUILT?

        ↓

WHAT DOES HE EXPERIMENT WITH?

        ↓

WHAT ELSE IS HE CURIOUS ABOUT?

        ↓

WHERE CAN I FIND HIM?
```

The visitor should not need to read every word to understand Vivek.

A recruiter should understand the professional profile within approximately 30 seconds.

A developer/engineering manager who explores further should discover technical depth.

A normal visitor should get a sense of personality.

---

# 38. Most Important Design Principle

Do not optimize the portfolio to make Vivek look impressive.

Optimize it to make Vivek look **real**.

The goal is:

```text
Professional
        +
Technical
        +
Curious
        +
Experimental
        +
Human
```

without explicitly saying:

> "I am professional, technical, curious, experimental and human."

The design and content should make the visitor arrive at that conclusion themselves.

---

# 39. Development Process

Build the portfolio incrementally.

### Phase 1 — Foundation

Implement:

- React + TypeScript + Vite
- Dark theme
- Global typography
- Navigation
- Hero
- Basic responsive layout

### Phase 2 — Story

Implement:

- Intro
- Journey
- Experience
- Impact statistics
- Projects

### Phase 3 — Personality

Implement:

- Exploratory projects
- The Dump
- Education/origin
- Cinematic transitions
- Movie-inspired ending

### Phase 4 — Polish

Implement:

- Advanced animations
- Horizontal scrolling
- Micro-interactions
- Responsive refinements
- Accessibility
- SEO
- Performance optimization

---

# 40. Copilot Working Rules

When implementing this project:

1. Do not generate the entire application in one huge file.
2. Create reusable React components.
3. Keep content separate from presentation.
4. Keep animations reusable.
5. Do not add libraries without a reason.
6. Do not copy the referenced portfolios.
7. Do not invent personal information.
8. Do not add generic portfolio clichés.
9. Prefer simple engineering solutions.
10. Test each major section before moving to the next.
11. Ensure the site remains usable without animations.
12. Ensure mobile remains usable.
13. Keep the code clean enough that another developer can understand it.
14. Use TypeScript properly.
15. Avoid `any` unless absolutely necessary.
16. Keep the visual system consistent.

---

# 41. First Implementation Task

Start by creating the application foundation.

Do NOT immediately implement every section.

First build:

```text
App
 ├── Navbar
 ├── Hero
 ├── Intro
 └── basic page structure
```

Establish:

- Dark visual system
- Typography
- Spacing
- Navigation
- Responsive layout
- Animation system
- Basic scroll behavior

Then stop and inspect the visual result.

After the foundation is stable, continue section by section.

---

# 42. Final Quality Bar

Before considering the portfolio complete, ask:

### Professional

Can a recruiter understand what I do within 30 seconds?

### Technical

Can an engineer understand what I have actually built?

### Authentic

Does this feel like a real person rather than a portfolio template?

### Personality

Can someone get a sense of my character without seeing a "Hobbies" section?

### Exploration

Does the website show that I experiment and learn?

### Navigation

Can someone easily reach:

- LinkedIn
- GitHub
- Resume
- Email
- Projects

### Visual

Does the website feel cinematic without becoming distracting?

### Engineering

Is the portfolio itself well-engineered?

### Mobile

Does it remain usable on a phone?

### Performance

Does the animation-heavy experience remain fast?

---

# FINAL INSTRUCTION TO COPILOT

Build this portfolio as if you are designing a **digital introduction to a person**, not a webpage containing a resume.

The resume tells people what Vivek has done.

The portfolio should make them understand **who Vivek is as a builder**.

Start with the foundation and implement the site incrementally.
