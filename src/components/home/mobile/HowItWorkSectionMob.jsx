import { useRef } from 'react';
import HowItWorkVideoCompany from '../../../assets/videos/HOW_THIS_WORKS_VIDEO_EMPLOYERS.mp4';
import HowItWorkVideoCandidates from '../../../assets/videos/HOW_THIS_WORKS_VIDEO_JOB_SEEKERS.mp4';

const HowItWorkSectionMob = () => {
    const fhowItWorksSectionRef = useRef();

    return (
        <>
            <div id='sectionHowItWorks' ref={fhowItWorksSectionRef} className='text-enter w-100 m-0' style={{ paddingTop: '5%', paddingBottom: '5%', backgroundColor: '#f2f2f2' }}>
                <div className='row ms-auto me-auto' style={{ width: '90%' }}>
                    <div className='col-sm-12 mb-3'>
                        <p className='text-center' style={{ fontSize: '6vw' }}>
                            HOW THIS WORKS
                        </p>
                        <p className='text-center fw-medium' style={{ fontSize: '4vw', marginTop: '5%' }}>
                            We care about your comfort, so our team has created a video tutorial to simplify the platform adaptation process.
                        </p>
                    </div>
                    <div className='col-sm text-start'>
                        <video className='w-100' controls>
                            <source src={HowItWorkVideoCandidates} type='video/mp4' />
                            Your browser does not support HTML video.
                        </video>
                        <p className='text-left fw-bolder mt-1' style={{ fontSize: '4vw', color: '#135441' }}>
                            For Candidates
                        </p>
                    </div>
                    <div className='col-sm'>
                        <video className='w-100' controls>
                            <source src={HowItWorkVideoCompany} type='video/mp4' />
                            Your browser does not support HTML video.
                        </video>
                        <p className='fw-bolder mt-1' style={{ fontSize: '4vw', color: '#A2000C' }}>
                            For Companies
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HowItWorkSectionMob