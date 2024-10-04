import { useRef } from 'react';
import { motion } from "framer-motion";

const HeroSection = () => {
    const heroSectionRef = useRef();

    return (
        <>
            <div id='sectionHome' ref={heroSectionRef} className='row w-100 m-0 homeBgImage'>
                <div className='col-md-6 text-left'>
                    <p className='text-left fw-light' style={{ color: '#000', paddingTop: '10%', marginLeft: '10%', fontSize: '4vw', lineHeight: '5vw' }}>
                        THE RIGHT TALENT MATCHED TO THE BEST ROLES
                    </p>
                    {/* <h1 className='text-left fw-medium' style={{ color: '#000', marginTop: '15%', marginLeft: '10%', fontSize: '3vw', lineHeight: '4vw' }}>
                        THE RIGHT TALENT MATCHED TO THE BEST ROLES
                    </h1> */}
                    <p className='text-left fw-lighter' style={{ color: '#000', marginLeft: '10%', marginTop: '5%', fontSize: '2vw', lineHeight: '3vw' }}>
                        Meaningful Connections Through <br /> Human-Curated Matchmaking
                    </p>
                    <div className='row' style={{ marginLeft: '10%', marginTop: '7%', marginBottom: '10%' }}>
                        <div className='col-md-6 text-center ps-0 pe-2'>
                            <a href='#sectionJobSeekers'>
                                <motion.button type='button' className='btn rounded-pill w-100 border-0 fs-4 fw-bold btn-golden' style={{ padding: '1vw 1vw' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={() => window.open('https://platform.napoleon.cloud/LoginCandidate', '_self')}>
                                    CANDIDATES
                                </motion.button>
                            </a>
                        </div>
                        <div className='col-md-6 text-center ps-2 pe-0'>
                            <a href='#sectionEmployers'>
                                <motion.button type='button' className='btn rounded-pill w-100 border-0 fs-4 fw-bold btn-golden' style={{ padding: '1vw 1vw' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={() => window.open('https://platform.napoleon.cloud/LoginCompany', '_self')}>
                                    COMPANIES
                                </motion.button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection