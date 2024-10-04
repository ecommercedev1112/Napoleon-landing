import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from "framer-motion";

const QUERY_URL = '/enquiry/addEnquiry'

const Queries = () => {
    const contactUsSectionRef = useRef();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'all' });
    const watchRole = watch('role');

    const handleSubmitQuery = async (data) => {
        console.log(data);
        // try {
        //     const response = await axios.post(QUERY_URL,
        //         JSON.stringify(data),
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: false
        //         }
        //     );
        //     console.log(JSON.stringify(response?.data));
        //     const querySuccess = response?.data?.success;

        //     if (querySuccess) {

        //     } else {
        //         setAlertMessage(Helper.formatAppMessage(formError.msg));
        //         Helper.openAppMessageDialog();
        //     }
        // } catch (err) {
        //     setAlertMessage(Helper.formatAppMessage(Helper.HandleSrviceCallError(err, 'LOGIN')));
        //     Helper.openAppMessageDialog();
        // }
    }

    return (
        <>
            <div id='sectionQueries' ref={contactUsSectionRef} className='w-100' style={{ paddingTop: '5%', paddingBottom: '5%', backgroundColor: '#f2f2f2' }}>
                <p className='text-center fw-medium goldenFont' style={{ fontSize: '3vw' }}>
                    More questions left? Contact Us
                </p>
                <div className='text-center w-100'>
                    <div className='ms-auto me-auto' style={{ width: '30%', minWidth: '50%', maxWidth: '90%' }}>
                        <form autoComplete='off' onSubmit={handleSubmit(handleSubmitQuery)}>
                            <div className='form-check form-check-inline'>
                                <motion.input {...register('role', { required: 'Select one of the roles' })} className='form-check-input rounded-0 largeCheckBoxGreen' type='radio' name='role' id='rdoCandidate' value='CANDIDATE' whileHover={{ scale: 1.5, border: '2px solid #135441' }} />
                                <label className='form-check-label fs-4' htmlFor='rdoCandidate'>I’m Candidate</label>
                            </div>
                            <div className='form-check form-check-inline ms-5'>
                                <motion.input {...register('role')} className='form-check-input rounded-0 largeCheckBoxRed' type='radio' name='role' id='rdoComapany' value='COMPANY' whileHover={{ scale: 1.5, border: '2px solid #A2000C' }} />
                                <label className='form-check-label fs-4' htmlFor='rdoComapany'>I’m Company representative</label>
                            </div>
                            <p className='text-center fs-5 m-0 p-0 mt-1 fieldErrorText'>&nbsp;{errors.role?.message}</p>
                            <div className='row mt-1'>
                                <div className='col-md-6 mt-1'>
                                    <input type='text' {...register('name', { required: 'Name is required', minLength: { value: 3, message: 'Enter minimum 3 characters.' } })} className='form-control rounded-0 fs-4 fw-lighter py-3' placeholder='Name' />
                                    <p className='text-start fs-5 m-0 p-0 mt-1 fieldErrorText'>&nbsp;{errors.name?.message}</p>
                                </div>
                                <div className='col-md-6 mt-1'>
                                    <input type='text' {...register('company', { required: 'Company name is required', disabled: watchRole === 'COMPANY' ? false : true })} className='form-control rounded-0 fs-4 fw-lighter py-3' placeholder='Company' />
                                    <p className='text-start fs-5 m-0 p-0 mt-1 fieldErrorText'>&nbsp;{errors.company?.message}</p>
                                </div>
                                <div className='col-md-6 mt-1'>
                                    <input type='tel' {...register('phone', { required: 'Phone number is required', maxLength: { value: 10, message: 'Phone number with maximum 10 digits.' } })} className='form-control rounded-0 fs-4 fw-lighter py-3' placeholder='Phone number' />
                                    <p className='text-start fs-5 m-0 p-0 mt-1 fieldErrorText'>&nbsp;{errors.phone?.message}</p>
                                </div>
                                <div className='col-md-6 mt-2'>
                                    <input type='email' {...register('email', { required: 'Email is required' })} className='form-control rounded-0 fs-4 fw-lighter py-3' placeholder='email' />
                                    <p className='text-start fs-5 m-0 p-0 mt-1 fieldErrorText'>&nbsp;{errors.email?.message}</p>
                                </div>
                                <div className='col-md-12 mt-1'>
                                    <textarea rows={3} {...register('inquiries', { required: 'Inquiry is required', minLength: { value: 10, message: 'Inquiry should be minimum 10 characters.' } })} className='form-control rounded-0 fs-4 fw-lighter py-3' style={{ resize: 'none' }} placeholder='Inquiries' />
                                    <p className='text-start fs-5 m-0 p-0 mt-1 fieldErrorText'>&nbsp;{errors.inquiries?.message}</p>
                                </div>
                                <div className='col-md-12 mt-1'>
                                    <div className='form-check form-check-inline'>
                                        <motion.input {...register('consent', { required: 'Provide your consent to allow storing your contact details.' })} className='form-check-input rounded-0 largeCheckBoxGold' type='radio' name='consent' id='rdoConsent' value={true} whileHover={{ scale: 1.5, border: '2px solid #135441' }} />
                                        <label className='form-check-label fs-4' htmlFor='rdoConsent'>I consent to store my contact details.</label>
                                    </div>
                                </div>
                            </div>
                            <motion.input type='submit' value={'SEND'} className='w-75 rounded-pill border-0 fs-4 fw-bold mt-2 pt-2 pb-2 goldenSubmitButton' whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0 }} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Queries