import { useRef } from 'react';

const HeroSectionMob = () => {
    const heroSectionRef = useRef();

    return (
        <>
            <div id='sectionHome' ref={heroSectionRef} className='w-100 m-0 pb-4'>
                <div className='w-100 homeMobileBgImage m-0' style={{ height: '375px' }}>
                    <div style={{ color: '#000', backgroundColor: 'white', opacity: '0.5', position: 'relative', top: '214px' }}>
                        <p className='fw-lighter' style={{ color: '#000', marginLeft: '3%', fontSize: '8vw', lineHeight: '11vw' }}>
                            THE RIGHT TALENT MATCHED TO THE BEST ROLES
                        </p>
                    </div>
                </div>

                <p className='text-center fw-lighter mt-3' style={{ color: '#000', marginLeft: '3%', fontSize: '5vw', lineHeight: '8vw' }}>
                    Meaningful Connections Through Human-Curated Matchmaking
                </p>
                <div className='text-center w-100 mt-3'>
                    <div className='w-75 ms-auto me-auto'>
                        <a href='#sectionJobSeekers'>
                            <button type='button' className='btn rounded-pill w-100 border-0 fw-bold mb-3 btn-golden' style={{ padding: '2vw 2vw' }} onClick={() => window.open('https://platform.napoleon.cloud/LoginCandidate', '_self')}>
                                CANDIDATES
                            </button>
                        </a>
                        <a href='#sectionEmployers'>
                            <button type='button' className='btn rounded-pill w-100 border-0 fw-bold btn-golden' style={{ padding: '2vw 2vw' }} onClick={() => window.open('https://platform.napoleon.cloud/LoginCompany', '_self')}>
                                COMPANIES
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSectionMob