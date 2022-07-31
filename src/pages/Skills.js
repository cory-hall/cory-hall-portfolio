import { TagCloud } from 'react-tagcloud';

function Skills() {
  const skills = [
    { value: 'JavaScript', count: 5 },
    { value: 'React', count: 3 },
    { value: 'HTML', count: 4 },
    { value: 'CSS', count: 4 }
  ]

  const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        animation: 'blinker 3s linear infinite',
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size / 2}em`,
        border: `2px solid ${color}`,
        margin: '3px',
        padding: '3px',
        display: 'inline-block',
        color: 'black',
      }}
    >
      {tag.value}
    </span>
  )


  return (
    <section className="skillsSection skillsPage bg-white">
      <TagCloud
        tags={skills}
        minSize={1}
        maxSize={5}
        renderer={customRenderer}
      />
    </section>
  )
};

export default Skills;