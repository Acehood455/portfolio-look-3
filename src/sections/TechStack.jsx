import { useGSAP } from '@gsap/react'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import gsap from 'gsap'

const TechStack = () => {
    useGSAP(() => {
        gsap
    })
    
  return (
    <div id='skills' className='flex-center section-padding'>
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title='Preferred Tech Stak' subtitle='🤝 Skills I Bring to the Table' />

            <div className="tech-grid">
                {techStackIcons.map(({ name, modelPath, scale, rotation }) => (
                    <div key={name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className='tech-card-animated-bg' />
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <TechIcon model={modelPath} name={name} scale={scale} rotation={rotation} />
                            </div>

                            <div className="padding-x w-full">
                                <p>{name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TechStack