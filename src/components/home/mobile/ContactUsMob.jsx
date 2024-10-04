import { useRef } from 'react';
import { useForm } from 'react-hook-form';

const ContactUsMob = () => {
    const contactUsSectionRef = useRef();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'all' });
    const watchRole = watch('role');

    return (
        <>
            <div id='sectionContactUs' ref={contactUsSectionRef} className='w-100' style={{ paddingTop: '5%', paddingBottom: '5%', backgroundColor: '#f2f2f2' }}>
                <p className='text-center fw-medium goldenFont' style={{ fontSize: '6vw' }}>
                    More questions left? Contact Us
                </p>
                <div className='ms-auto me-auto' style={{ width: '90%' }}>
                    <form autoComplete='off' onSubmit={handleSubmit((data) => console.log(data))}>
                        <div className='form-check form-check-inline'>
                            <input {...register('role', { required: 'Select one of the roles' })} className='form-check-input rounded-0' type='radio' name='role' id='rdoCandidate' value='CANDIDATE' />
                            <label className='form-check-label' htmlFor='rdoCandidate'>I’m Candidate</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input {...register('role')} className='form-check-input rounded-0' type='radio' name='role' id='rdoComapany' value='COMPANY' />
                            <label className='form-check-label' htmlFor='rdoComapany'>I’m Company representative</label>
                        </div>
                        <p className='text-center m-0 p-0 mt-1 fieldErrorText'>&nbsp;{errors.role?.message}</p>
                        <div className='row mt-1'>
                            <div className='col-sm-6 mt-1'>
                                <input type='text' {...register('name', { required: 'Name is required', minLength: { value: 3, message: 'Enter minimum 3 characters.' } })} className='form-control rounded-0 fw-lighter py-3' placeholder='Name' />
                                <p className='text-start m-0 p-0 mt-1 fieldErrorText'>&nbsp;{errors.name?.message}</p>
                            </div>
                            <div className='col-sm-6 mt-1'>
                                <input type='text' {...register('company', { required: 'Company name is required', disabled: watchRole === 'COMPANY' ? false : true })} className='form-control rounded-0 fw-lighter py-3' placeholder='Company' />
                                <p className='text-start m-0 p-0 mt-1 fieldErrorText'>&nbsp;{errors.company?.message}</p>
                            </div>
                            <div className='col-sm-6 mt-1'>
                                <input type='tel' {...register('phone', { required: 'Phone number is required', maxLength: { value: 10, message: 'Phone number with maximum 10 digits.' } })} className='form-control rounded-0 fw-lighter py-3' placeholder='Phone number' />
                                <p className='text-start m-0 p-0 mt-1 fieldErrorText'>&nbsp;{errors.phone?.message}</p>
                            </div>
                            <div className='col-sm-6 mt-2'>
                                <input type='email' {...register('email', { required: 'Email is required' })} className='form-control rounded-0 fw-lighter py-3' placeholder='email' />
                                <p className='text-start m-0 p-0 mt-1 fieldErrorText'>&nbsp;{errors.email?.message}</p>
                            </div>
                            <div className='col-sm-12 mt-1'>
                                <textarea rows={3} {...register('inquiries', { required: 'Inquiry is required', minLength: { value: 10, message: 'Inquiry should be minimum 10 characters.' } })} className='form-control rounded-0 fw-lighter py-3' style={{ resize: 'none' }} placeholder='Inquiries' />
                                <p className='text-start m-0 p-0 mt-1 fieldErrorText'>&nbsp;{errors.inquiries?.message}</p>
                            </div>
                        </div>
                        <input type='submit' value={'SEND'} className='w-100 rounded-pill border-0 fw-bold mt-2 pt-2 pb-2 goldenSubmitButton' />
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactUsMob