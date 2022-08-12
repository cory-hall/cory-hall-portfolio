import portPic from '../assets/images/portPicBNW.png'

function About() {

  return (

    <section className='aboutPage justify-center items-center w-full' id='aboutSection'>
      <h1 className='aboutHeading w-full text-center'>Who Am I?</h1>
      <div className='w-5/6 items-center justify-center m-auto lg:flex'>
          <p className='aboutText'>
            I am a full stack web developer specializing in the MERN stack and a recent
            recipiant of a full stack web development certificate from Michigan State University.
            I am also a part time student working towards obtaining a Bachelor's Degree in Computer Science.
            <br></br>
            <br></br>
            Throughout my years of working, mainly in the service industry, I have aquired numerous skills that
            cannot be taught and are typically only obtained by those that put years within said industry. I
            fully plan on leveraging these skills to help create unique experiences from someone who knows exactly
            what the customer wants.
          </p>
          <img className='portPic pt-4' src={portPic} alt='Cory Hall'></img>
      </div>
    </section>
  )
}

export default About;