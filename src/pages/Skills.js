import { images } from '../assets/logos';
import { checkmark } from '../assets/images/check-mark.png';

function Skills() {

  return (
    <section className="skillsSection skillsPage w-full flex flex-col items-center">
      <h1 className='skillHeading text-center w-full mb-12'>What I Do.</h1>
      <div className='flex m-auto w-5/6 items-center justify-center'>
        <div className='flex items-center justify-center w-1/2'>
          <ul className='text-2xl'>
            <li>Adaptive Design</li>
            <li>Mobile First Development</li>
            <li>Single Page Applications</li>
            <li>Test Driven Development</li>
          </ul>
        </div>
        <div className='flex flex-wrap w-1/2 items-center justify-center'>
          {images.map((image) => (
            <img key={image.imageName} className='m-4 logoImg' src={image.imageName} title={image.imageTitle} alt='technology logo'></img>
          ))}
        </div>
      </div>

    </section>
  )
};

export default Skills;