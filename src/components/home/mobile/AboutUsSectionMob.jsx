import { useRef } from 'react';

const AboutUsSectionMob = () => {
    const aboutUsSectionRef = useRef();

    return (
        <>
            <div id='sectionAboutUs' ref={aboutUsSectionRef} className='w-100 m-0'>
                <p className='text-center fw-medium m-0' style={{ color: '#000', fontSize: '5vw', padding: '5% 2vw 10% 2vw' }}>
                    We create meaningful connections between candidates and <br /> employers through a carefully managed matchmaking service <br /> overseen by human administrators.
                </p>
            </div>
        </>
    );
}

export default AboutUsSectionMob