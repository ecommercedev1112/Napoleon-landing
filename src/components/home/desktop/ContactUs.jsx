import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from "framer-motion";

const ContactUs = () => {
    const contactUsSectionRef = useRef();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'all' });
    const watchRole = watch('role');

    return (
        <>
            <div id='sectionContactUs' ref={contactUsSectionRef} className='w-100' style={{ paddingTop: '5%', paddingBottom: '25%', backgroundColor: '#f2f2f2' }}>
                <p className='text-center fw-medium goldenFont' style={{ fontSize: '3vw' }}>
                    Our Contacts
                </p>
                <div className='row w-75 m-0 mt-5 ms-auto me-auto'>
                    <div className='col-md-4 text-center mt-auto mb-auto'>
                        <div className="card" style={{ width: '18rem' }}>
                            {/* <img src="..." class="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <p className="card-text">
                                    Contact us at: <br/>
                                    Napoleon USA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 text-center mt-auto mb-auto'>
                        <div className="card" style={{ width: '18rem' }}>
                            {/* <img src="..." class="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <p className="card-text">
                                    Call us at:<br/>
                                    (202) 456-1111
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 text-center mt-auto mb-auto'>
                        <div className="card" style={{ width: '18rem' }}>
                            {/* <img src="..." class="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <p className="card-text">
                                    Mail us at:<br/>
                                    support@napoleon.cloud
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs