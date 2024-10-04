import { useRef } from 'react';
import AppImages from '../../../utility/Images';

const FeaturesSectionMob = () => {
    const featuresSectionRef = useRef();

    return (
        <>
            <div id='sectionFeatures' ref={featuresSectionRef} className='w-100 m-0' style={{backgroundColor: '#f2f2f2'}}>
                <div className='row' style={{ paddingBottom: '5%'}}>
                    <div className='col-sm-6 text-center'>
                        <p className='fw-medium mx-2' style={{ color: '#000', marginTop: '10%', fontSize: '6vw' }}>
                            Elevate Your Job Search Experience
                        </p>
                    </div>
                    <div className='col-md'>
                        <div className='row py-1'>
                            <div className='col-sm-6 text-center'>
                                <img src={AppImages.featuresSectionEffectiveness} className='img-fluid rounded-circle' style={{ width: '20%' }} />
                            </div>
                            <div className='col-sm p-0'>
                                <p className='text-center fw-bold m-0' style={{fontSize: '4vw'}}>Effectiveness</p>
                                <p className='text-center m-0' style={{fontSize: '3vw'}}>We fully embrace AI advancements while <br /> maintaining a balanced approach</p>
                            </div>
                        </div>
                        <div className='row py-1'>
                            <div className='col-sm-2 text-center'>
                                <img src={AppImages.featuresSectionAccuracy} className='img-fluid rounded-circle' style={{ width: '20%' }} />
                            </div>
                            <div className='col-md'>
                                <p className='text-center fw-bold m-0' style={{fontSize: '4vw'}}>Accuracy</p>
                                <p className='text-center m-0' style={{fontSize: '3vw'}}>We prioritize the enduring importance of the <br /> human touch in the hiring process.</p>
                            </div>
                        </div>
                        <div className='row py-1'>
                            <div className='col-sm-2 text-center'>
                                <img src={AppImages.featuresSectionSpeed} className='img-fluid rounded-circle' style={{ width: '20%' }} />
                            </div>
                            <div className='col-md'>
                                <p className='text-center fw-bold m-0' style={{fontSize: '4vw'}}>Speed</p>
                                <p className='text-center m-0' style={{fontSize: '3vw'}}>Our goal is to match the perfect candidate with <br /> the right employer within two days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default FeaturesSectionMob