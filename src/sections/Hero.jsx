import AnimatedCounter from "../components/AnimatedCounter"
import Button from "../components/Button"
import HeroExperience from "../components/HeroModels/HeroExperience"
import { words } from "../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(".hero-text", 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, stagger: 0.5, duration: 1.5, ease: "power2.inOut" }
        )
    })
    
  return (
    <section id="hero" className='relative overflow-hidden'>
        <div className="absolute top-0 left-0 z-10">
            <img src='/images/bg.png' alt='background' />
        </div>

        <div className="hero-layout">
            {/* LEFT: HERO CONTENT */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>
                            Shaping <span className="slide h-10 md:h-20">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.id} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img 
                                              src={word.image} 
                                              alt={word.text} 
                                              className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white50" 
                                            />
                                            
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>into Real Projects</h1>
                        <h1>that Delivers Results</h1>
                    </div>

                    <p className="text-white50 md:text-xl relative z-10 pointer-events-none">
                        Hi, I'm Ace Taiwo, a developer based in Nigeria with a passion for code.
                    </p>

                    <Button  
                      className="md:w-80 md:h-16 w-60 h-12"
                      id='button'  
                      text='See my Work'
                    />
                </div>
            </header>


            {/* RIGHT: 3D MODEL */}
            <figure>
                <div className="hero-3d-layout">
                    {/* <HeroExperience /> */}
                </div>
            </figure>
        </div>

        <AnimatedCounter />
    </section>
  )
}

export default Hero