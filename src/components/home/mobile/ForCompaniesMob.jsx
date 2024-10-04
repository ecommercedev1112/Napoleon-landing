import { useRef } from 'react';
import AppImages from '../../../utility/Images';

const ForCompaniesMob = () => {
    const forCompaniesSectionRef = useRef();

    return (
        <>
            <div id='sectionForCompanies' ref={forCompaniesSectionRef} className='w-100' style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                <p className='text-center fw-medium' style={{ fontSize: '6vw' }}>
                    For Companies
                </p>

                <div className='row ms-auto me-auto' style={{ width: '90%' }}>
                    <div className='col-sm p-0'>
                        <img src={AppImages.forCompanies} style={{ width: '-webkit-fill-available' }} />
                    </div>
                    <div className='col-sm mt-3'>
                        <div className='accordion' id='accordionCompany'>
                            <div className='accordion-item'>
                                <h2 className='accordion-header'>
                                    <button className='accordion-button fw-bold napoleonGreyBackground napoleonRedColor' style={{ fontSize: '4vw' }} type='button' data-bs-toggle='collapse' data-bs-target='#collapseCompanyOne' aria-expanded='true' aria-controls='collapseOne'>
                                        How do I get my jobs or company profile on Napoleon?
                                    </button>
                                </h2>
                                <div id='collapseCompanyOne' className='accordion-collapse collapse show' data-bs-parent='#accordionCompany'>
                                    <div className='accordion-body' style={{ fontSize: '3vw', textAlign: 'justify' }}>
                                        To get your jobs posted on Napoleon and create a company profile, please click here and then on the 'Get Started' button.
                                    </div>
                                </div>
                            </div>
                            <div className='accordion-item'>
                                <h2 className='accordion-header'>
                                    <button className='accordion-button collapsed fw-bold napoleonGreyBackground napoleonRedColor' style={{ fontSize: '4vw' }} type='button' data-bs-toggle='collapse' data-bs-target='#collapseCompanyTwo' aria-expanded='false' aria-controls='collapseTwo'>
                                        I'm a current client of Napoleon, how can I contact my account manager?
                                    </button>
                                </h2>
                                <div id='collapseCompanyTwo' className='accordion-collapse collapse' data-bs-parent='#accordionCompany'>
                                    <div className='accordion-body' style={{ fontSize: '3vw', textAlign: 'justify' }}>
                                        If you are a current customer and aren't sure how to contact your Account Manager at Napoleon, please reach out to recruiting@napoleon.cloudto be connected to them.
                                    </div>
                                </div>
                            </div>
                            <div className='accordion-item'>
                                <h2 className='accordion-header'>
                                    <button className='accordion-button collapsed fw-bold napoleonGreyBackground napoleonRedColor' style={{ fontSize: '4vw' }} type='button' data-bs-toggle='collapse' data-bs-target='#collapseCompanyThree' aria-expanded='false' aria-controls='collapseThree'>
                                        How much does it cost for an employer to be featured on Napoleon?
                                    </button>
                                </h2>
                                <div id='collapseCompanyThree' className='accordion-collapse collapse' data-bs-parent='#accordionCompany'>
                                    <div className='accordion-body' style={{ fontSize: '3vw', textAlign: 'justify' }}>
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

export default ForCompaniesMob