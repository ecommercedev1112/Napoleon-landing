import { useRef } from 'react';
import AppImages from '../../../utility/Images';

const ForCandidatesMob = () => {
    const forCandidatesSectionRef = useRef();

    return (
        <>
            <div id='sectionForCandidates' ref={forCandidatesSectionRef} className='w-100' style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                <p className='text-center fw-medium' style={{ fontSize: '6vw' }}>
                    For Candidates
                </p>
                <div className='row ms-auto me-auto' style={{ width: '90%' }}>
                    <div className='col-sm p-0'>
                        <img src={AppImages.forCandidates} style={{ width: '-webkit-fill-available' }} />
                    </div>
                    <div className='col-sm mt-3'>
                        <div className='accordion' id='accordionCandidate'>
                            <div className='accordion-item'>
                                <h2 className='accordion-header'>
                                    <button className='accordion-button fw-bold napoleonGreyBackground napoleonGreenColor' style={{ fontSize: '4vw' }} type='button' data-bs-toggle='collapse' data-bs-target='#collapseCandidateOne' aria-expanded='true' aria-controls='collapseOne'>
                                        How do I get my jobs or company profile on Napoleon?
                                    </button>
                                </h2>
                                <div id='collapseCandidateOne' className='accordion-collapse collapse show' data-bs-parent='#accordionCandidate'>
                                    <div className='accordion-body' style={{ fontSize: '3vw' }}>
                                        To get your jobs posted on Napoleon and create a company profile, please click here and then on the 'Get Started' button.
                                    </div>
                                </div>
                            </div>
                            <div className='accordion-item'>
                                <h2 className='accordion-header'>
                                    <button className='accordion-button collapsed fw-bold napoleonGreyBackground napoleonGreenColor' style={{ fontSize: '4vw' }} type='button' data-bs-toggle='collapse' data-bs-target='#collapseCandidateTwo' aria-expanded='false' aria-controls='collapseTwo'>
                                        I'm a current client of Napoleon, how can I contact my account manager?
                                    </button>
                                </h2>
                                <div id='collapseCandidateTwo' className='accordion-collapse collapse' data-bs-parent='#accordionCandidate'>
                                    <div className='accordion-body' style={{ fontSize: '3vw' }}>
                                        If you are a current customer and aren't sure how to contact your Account Manager at Napoleon, please reach out to recruiting@napoleon.cloudto be connected to them.
                                    </div>
                                </div>
                            </div>
                            <div className='accordion-item'>
                                <h2 className='accordion-header'>
                                    <button className='accordion-button collapsed fw-bold napoleonGreyBackground napoleonGreenColor' style={{ fontSize: '4vw' }} type='button' data-bs-toggle='collapse' data-bs-target='#collapseCandidateThree' aria-expanded='false' aria-controls='collapseThree'>
                                        How much does it cost for an employer to be featured on Napoleon?
                                    </button>
                                </h2>
                                <div id='collapseCandidateThree' className='accordion-collapse collapse' data-bs-parent='#accordionCandidate'>
                                    <div className='accordion-body' style={{ fontSize: '3vw' }}>
                                        Napoleon is free to use. Upon finding the right candidate for full-time roles, Napoleon will send an invoice for a percentage of the annual salary. For contract roles, Napoleon will send an hourly contract to the customer, representing the contractor candidate.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForCandidatesMob