import portPic from '../assets/images/portPicBNW.png'

function About() {

  return (
    
    <section className='aboutPage flex justify-center items-center w-full' id='aboutSection'>
      <div className='flex m-24 w-1/2'>
        <p>
          I am a full stack web developer specializing in the MERN stack and a recent
          recipiant of a full stack web development certificate from Michigan State University.
          I am also a part time student working towards obtaining a Bachelor's Degree in Computer Science.
          <br></br>
          <br></br>
          Through my years of working, mainly in the service industry, I have aquired numerous skills that
          cannot be taught and are typically only obtained by those that put years within said industry. I 
          fully plan on leveraging these skills to help create unique experiences from someone who knows exactly
          what the customer wants.
        </p>
      </div>
      <div className='w-1/2 m-24'>
        <img src={portPic} alt='Cory Hall'></img>
      </div>
    </section>
  )
}

export default About;