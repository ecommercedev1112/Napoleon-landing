import { useRef } from 'react';
import HowItWorkVideoCompany from '../../../assets/videos/HOW_THIS_WORKS_VIDEO_EMPLOYERS.mp4';
import HowItWorkVideoCandidates from '../../../assets/videos/HOW_THIS_WORKS_VIDEO_JOB_SEEKERS.mp4';

const HowItWorkSection = () => {
    const fhowItWorksSectionRef = useRef();

    return (
        <>
            <div id='sectionHowItWorks' ref={fhowItWorksSectionRef} className='w-100 m-0' style={{ paddingTop: '5%', paddingBottom: '5%', backgroundColor: '#f2f2f2'}}>
                <div className='row'  style={{ marginLeft: '10vw', marginRight: '10vw' }}>
                    <div className='col-md-12 mb-3'>
                        <p style={{ fontSize: '3vw' }}>
                            HOW THIS WORKS
                        </p>
                        <p className='text-left fw-medium' style={{ fontSize: '1.75vw', marginTop: '5%' }}>
                            We care about your comfort, so our team has created a <br /> video tutorial to simplify the platform adaptation process.
                        </p>
                    </div>
                    <div className='col-md-6 text-start'>
                        <video className='w-100' controls>
                            <source src={HowItWorkVideoCandidates} type='video/mp4' />
                            Your browser does not support HTML video.
                        </video>
                        <p className='text-left fw-bolder mt-1' style={{ fontSize: '1.75vw', color: '#135441' }}>
                            For Candidates
                        </p>
                    </div>
                    <div className='col-md-6 text-end'>
                        <video className='w-100' controls>
                            <source src={HowItWorkVideoCompany} type='video/mp4' />
                            Your browser does not support HTML video.
                        </video>
                        <p className='text-left fw-bolder mt-1' style={{ fontSize: '1.75vw', color: '#A2000C' }}>
                            For Companies
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HowItWorkSection