import { useRef } from 'react';

const AboutUsSection = () => {
    const aboutUsSectionRef = useRef();

    return (
        <>
            <div id='sectionAboutUs' ref={aboutUsSectionRef} className='row w-100 m-0' style={{backgroundColor: '#f2f2f2'}}>
                <p className='text-center fw-medium' style={{ color: '#000', fontSize: '1.75vw', paddingTop: '5%', marginBottom: '5%' }}>
                    We create meaningful connections between candidates and <br /> employers through a carefully managed matchmaking service <br /> overseen by human administrators.
                </p>
            </div>
        </>
    );
}

export default AboutUsSection