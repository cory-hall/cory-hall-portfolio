import { TagCloud } from 'react-tagcloud';

function Skills() {

  const randColor = () => {
    return "#" + ((1<<24)*Math.random() | 0).toString(16)
  }

  const skills = [
    { value: 'JavaScript', count: 1 },
    { value: 'React', count: 1 },
    { value: 'HTML', count: 1 },
    { value: 'CSS', count: 1 },
    { value: 'jQuery', count: 1 },
    { value: 'Express', count: 1 },
    { value: 'Node', count: 1 },
    { value: 'MonogoDB', count: 1 },
    { value: 'Mongoose', count: 1 },
    { value: 'MySQL', count: 1 },
    { value: 'MySQL2', count: 1 },
    { value: 'Sequelize', count: 1 },
    { value: 'Apollo GQL', count: 1 },
    { value: 'Authy', count: 1 },
    { value: 'Stripe', count: 1 },
    { value: 'Git', count: 1 },
    { value: 'Bootstrap', count: 1 },
    { value: 'Tailwind', count: 1 },
    { value: 'bcrypt', count: 1 },
    { value: 'IndexedDB', count: 1 },
    { value: 'Heroku', count: 1 },
  ];

  const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        animation: 'blinker 3s linear infinite',
        animationDelay: `${Math.random() * 2}s`,
        margin: '6px',
        padding: '3px',
        display: 'inline-block',
        color: randColor(),
      }}
    >
      {tag.value}
    </span>
  )


  return (
    <section className="skillsSection skillsPage w-full flex flex-col items-center">
      <h1 className='skillHeading text-center mb-12'>What I Know</h1>
      <TagCloud
        className='wordCloud flex flex-wrap'
        tags={skills}
        renderer={customRenderer}
      />
    </section>
  )
};

export default Skills;