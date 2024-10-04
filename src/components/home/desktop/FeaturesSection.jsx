import { useRef } from 'react';
import AppImages from '../../../utility/Images';

const FeaturesSection = () => {
    const featuresSectionRef = useRef();

    return (
        <>
            <div id='sectionFeatures' ref={featuresSectionRef} className='w-100 m-0' style={{backgroundColor: '#f2f2f2'}}>
                <div className='row w-100' style={{ paddingBottom: '5%'}}>
                    <div className='col-md-6 text-center'>
                        <p className='text-left fw-medium' style={{ color: '#000', marginTop: '15%', marginLeft: '10%', fontSize: '3vw', lineHeight: '4vw' }}>
                            Elevate Your Job <br /> Search Experience
                        </p>
                    </div>
                    <div className='col-md'>
                        <div className='row py-1'>
                            <div className='col-md-2 text-center'>
                                <img src={AppImages.featuresSectionEffectiveness} className='img-fluid rounded-circle' style={{ width: '100%' }} />
                            </div>
                            <div className='col-md p-0'>
                                <p className='fw-bold m-0' style={{fontSize: '2vw'}}>Effectiveness</p>
                                <p className='m-0' style={{fontSize: '1vw'}}>We fully embrace AI advancements while <br /> maintaining a balanced approach</p>
                            </div>
                        </div>
                        <div className='row py-1'>
                            <div className='col-md-2 text-center'>
                                <img src={AppImages.featuresSectionAccuracy} className='img-fluid rounded-circle' style={{ width: '100%' }} />
                            </div>
                            <div className='col-md'>
                                <p className='fw-bold m-0' style={{fontSize: '2vw'}}>Accuracy</p>
                                <p className='m-0' style={{fontSize: '1vw'}}>We prioritize the enduring importance of the <br /> human touch in the hiring process.</p>
                            </div>
                        </div>
                        <div className='row py-1'>
                            <div className='col-md-2 text-center'>
                                <img src={AppImages.featuresSectionSpeed} className='img-fluid rounded-circle' style={{ width: '100%' }} />
                            </div>
                            <div className='col-md'>
                                <p className='fw-bold m-0' style={{fontSize: '2vw'}}>Speed</p>
                                <p className='m-0' style={{fontSize: '1vw'}}>Our goal is to match the perfect candidate with <br /> the right employer within two days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default FeaturesSection