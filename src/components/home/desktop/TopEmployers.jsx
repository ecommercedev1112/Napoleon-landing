import { useRef } from 'react';
import AppImages from '../../../utility/Images';
import { motion } from "framer-motion";

const TopEmployers = () => {
    const topEmployersSectionRef = useRef();

    return (
        <>
            <div id='sectionTopEmployers' ref={topEmployersSectionRef} className='w-100 m-0'>
                <p className='text-center fw-bold goldenFont m-0' style={{ fontSize: '3vw', paddingTop: '5%' }}>
                    Current Top Employers Hiring
                </p>
                <div className='row' style={{ margin: '2% 0 5% 7%' }}>
                    <div className='card me-2' style={{ width: '30%' }}>
                        <img src={AppImages.topEmployers} className='img-fluid w-100' />
                        <img src={AppImages.jadeGlobalLogo} className='img-fluid w-25' style={{ marginLeft: '5%', marginTop: '-15%' }} />
                        <div className='card-body'>
                            <h5 className='card-title text-center fs-3' style={{ marginTop: '-12%', marginBottom: '10%' }}>Jade Global</h5>
                            <p className='card-text text-center  fs-4 mb-2'>
                                For the past 21 years, Jade Global has been the growth guiding star for hundreds of mid-size to large enterprises in North America.
                                <br/><br/><br/>
                            </p>
                            <div className='row'>
                                <div className='col-md-6' style={{ paddingTop: '1vh' }}>
                                    <p className='card-text fs-5'>
                                        <font style={{ color: '#A2000C' }}>3</font>
                                        &nbsp;&nbsp;active positions
                                    </p>
                                </div>
                                <div className='col-md-6 text-end'>
                                    <motion.button type='button' className='btn rounded-pill fs-5 fw-bold py-2 btn-golden-outline' whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }} onClick={() => window.open('https://platform.napoleon.cloud/LoginCandidate', '_self')} >
                                        FIND MORE
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card me-2' style={{ width: '30%' }}>
                        <img src={AppImages.topEmployers} className='img-fluid w-100' />
                        <img src={AppImages.charityDynamicsLogo} className='img-fluid w-25' style={{ marginLeft: '5%', marginTop: '-15%' }} />
                        <div className='card-body'>
                            <h5 className='card-title text-center fs-3' style={{ marginTop: '-12%', marginBottom: '10%' }}>Charity Dynamics</h5>
                            <p className='card-text text-center fs-4 mb-2'>
                                More awareness, supporters, engagement, and donations. This is what nonprofits need to fulfill their mission, and this is what Charity Dynamics delivers.
                                <br/><br/>
                            </p>
                            <div className='row'>
                                <div className='col-md-6' style={{ paddingTop: '1vh' }}>
                                    <p className='card-text fs-5'>
                                        <font style={{ color: '#A2000C' }}>5</font>
                                        &nbsp;&nbsp;active positions
                                    </p>
                                </div>
                                <div className='col-md-6 text-end'>
                                    <motion.button type='button' className='btn rounded-pill fs-5 fw-bold py-2 btn-golden-outline' whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }} onClick={() => window.open('https://platform.napoleon.cloud/LoginCandidate', '_self')} >
                                        FIND MORE
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card' style={{ width: '30%' }}>
                        <img src={AppImages.topEmployers} className='img-fluid w-100' />
                        <img src={AppImages.stoneBranchLogo} className='img-fluid w-25' style={{ marginLeft: '5%', marginTop: '-15%' }} />
                        <div className='card-body'>
                            <h5 className='card-title text-center fs-3' style={{ marginTop: '-12%', marginBottom: '10%' }}>Stonebranch</h5>
                            <p className='card-text text-center fs-4 mb-2'>
                                With decades of experience, Stonebranch set out to change the IT automation market for the better. To develop the right purpose-built solutions with user experience and accessibility in mind.
                            </p>
                            <div className='row'>
                                <div className='col-md-6' style={{ paddingTop: '1vh' }}>
                                    <p className='card-text fs-5'>
                                        <font style={{ color: '#A2000C' }}>2</font>
                                        &nbsp;&nbsp;active positions
                                    </p>
                                </div>
                                <div className='col-md-6 text-end'>
                                    <motion.button type='button' className='btn rounded-pill fs-5 fw-bold py-2 btn-golden-outline' whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }} onClick={() => window.open('https://platform.napoleon.cloud/LoginCandidate', '_self')}>
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

export default TopEmployers