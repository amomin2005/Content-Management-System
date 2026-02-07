import './App.css'

const features = [
  {
    title: 'Clean Layout',
    description: 'A simple visual hierarchy with generous spacing and balanced sections.',
    emoji: '🧼',
  },
  {
    title: 'Modern Styling',
    description: 'Soft gradients, subtle shadows, and rounded cards for a polished look.',
    emoji: '🎨',
  },
  {
    title: 'Fast & Responsive',
    description: 'Looks great on desktop and mobile with flexible responsive design.',
    emoji: '⚡',
  },
]

function App() {
  return (
    <main className="app">
      <section className="hero">
        <p className="badge">Simple React Frontend</p>
        <h1>Beautiful, Minimal, and Ready to Use</h1>
        <p className="subtitle">
          This page was redesigned to be visually clean and modern while staying very simple.
        </p>
        <button type="button" className="cta">
          Get Started
        </button>
      </section>

      <section className="features" aria-label="Key features">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <span className="feature-icon" aria-hidden="true">
              {feature.emoji}
            </span>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
