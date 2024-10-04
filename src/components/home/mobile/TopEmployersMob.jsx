import { useRef } from 'react';
import AppImages from '../../../utility/Images';
import { motion } from "framer-motion";

const TopEmployersMob = () => {
    const topEmployersSectionRef = useRef();

    return (
        <>
            <div id='sectionTopEmployers' ref={topEmployersSectionRef} className='w-100 m-0' style={{ paddingBottom: '5%' }}>
                <p className='text-center fw-bold goldenFont m-0' style={{ fontSize: '6vw', paddingTop: '5%' }}>
                    Current Top Employers Hiring
                </p>
                <div className='ms-auto me-auto' style={{ width: '90%' }}>
                    <div className='card mt-3 mb-3' style={{ height: 'fit-content' }}>
                        <img src={AppImages.topEmployers} className='img-fluid w-100' />
                        <img src={AppImages.jadeGlobalLogo} className='img-fluid w-25' style={{ marginLeft: '5%', marginTop: '-15%' }} />
                        <div className='card-body'>
                            <h5 className='card-title text-center fs-3' style={{ marginTop: '-12%', marginBottom: '10%' }}>Jade Global</h5>
                            <p className='card-text text-center m-0' style={{ fontSize: '3vw' }}>
                                For the past 21 years, Jade Global has been the growth guiding star for hundreds of mid-size to large enterprises in North America.
                            </p>
                            <div className='row'>
                                <div className='col-sm mt-2'>
                                    <p className='card-text'>
                                        <font style={{ fontSize: '3vw', color: '#A2000C' }}>3</font>
                                        &nbsp;&nbsp;active positions
                                    </p>
                                </div>
                                <div className='col-sm text-center'>
                                    <motion.button type='button' className='btn rounded-pill w-100 fw-bold mt-2 py-2 btn-golden-outline' style={{ fontSize: '3vw' }} onClick={() => window.open('https://platform.napoleon.cloud/LoginCandidate', '_self')} >
                                        FIND MORE
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card mb-3' style={{ height: 'fit-content' }}>
                        <img src={AppImages.topEmployers} className='img-fluid w-100' />
                        <img src={AppImages.charityDynamicsLogo} className='img-fluid w-25' style={{ marginLeft: '5%', marginTop: '-15%' }} />
                        <div className='card-body'>
                            <h5 className='card-title text-center fs-3' style={{ marginTop: '-12%', marginBottom: '10%' }}>Charity Dynamics</h5>
                            <p className='card-text text-center m-0' style={{ fontSize: '3vw' }}>
                                More awareness, supporters, engagement, and donations. This is what nonprofits need to fulfill their mission, and this is what Charity Dynamics delivers.
                            </p>
                            <div className='row'>
                                <div className='col-sm mt-2'>
                                    <p className='card-text'>
                                        <font style={{ fontSize: '3vw', color: '#A2000C' }}>5</font>
                                        &nbsp;&nbsp;active positions
                                    </p>
                                </div>
                                <div className='col-sm text-center'>
                                    <motion.button type='button' className='btn rounded-pill w-100 fw-bold mt-2 py-2 btn-golden-outline' style={{ fontSize: '3vw' }} onClick={() => window.open('https://platform.napoleon.cloud/LoginCandidate', '_self')} >
                                        FIND MORE
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card mb-3' style={{ height: 'fit-content' }}>
                        <img src={AppImages.topEmployers} className='img-fluid w-100' />
                        <img src={AppImages.stoneBranchLogo} className='img-fluid w-25' style={{ marginLeft: '5%', marginTop: '-15%' }} />
                        <div className='card-body'>
                            <h5 className='card-title text-center fs-3' style={{ marginTop: '-12%', marginBottom: '10%' }}>Stonebranch</h5>
                            <p className='card-text text-center m-0' style={{ fontSize: '3vw' }}>
                                With decades of experience, Stonebranch set out to change the IT automation market for the better. To develop the right purpose-built solutions with user experience and accessibility in mind.
                            </p>
                            <div className='row'>
                                <div className='col-sm mt-2'>
                                    <p className='card-text'>
                                        <font style={{ fontSize: '3vw', color: '#A2000C' }}>2</font>
                                        &nbsp;&nbsp;active positions
                                    </p>
                                </div>
                                <div className='col-sm text-center'>
                                    <motion.button type='button' className='btn rounded-pill w-100 fw-bold mt-2 py-2 btn-golden-outline' style={{ fontSize: '3vw' }} onClick={() => window.open('https://platform.napoleon.cloud/LoginCandidate', '_self')} >
                                        FIND MORE
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopEmployersMob