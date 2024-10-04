import { Link } from 'react-router-dom';
import CookieConsent, { Cookies } from 'react-cookie-consent';

const ConsentForCookie = () => {
    return (
        <>
            <CookieConsent
                location='bottom'
                buttonText='Accept All'
                cookieName='napoleonPlatformCookie'
                style={{ background: 'Black', zIndex: '2000', minHeight: '75px', height: '10vh', alignItems: 'center' }}
                buttonStyle={{ color: '#4e503b', fontSize: '14px', fontWeight: 'bold' }}
                expires={150}
                containerClasses='d-none d-md-flex'
                enableDeclineButton
                declineButtonText='Decline All'
                declineButtonClasses='napoleonWhiteColor'
                declineButtonStyle={{ backgroundColor: '#A2000C', fontSize: '14px', fontWeight: 'bold' }}
            >
                <h4 className='fs-4 fw-bold'>We value your privacy</h4>
                <span style={{ fontSize: '14px' }}>
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                    By clicking <b>"Accept All"</b>, you consent to our use of cookies. &nbsp;
                    <Link aria-current='page' to='/cookie' className='napoleonWhiteColor'>
                        Cookie Policy
                    </Link>
                </span>
            </CookieConsent>

            <CookieConsent
                location='bottom'
                buttonText='Accept All'
                cookieName='napoleonPlatformCookie'
                style={{ background: 'Black', zIndex: '2000', alignItems: 'center' }}
                buttonStyle={{ color: '#4e503b', fontSize: '12px', fontWeight: 'bold' }}
                buttonClasses='m-0 mb-3'
                buttonWrapperClasses='w-100 m-0 text-center'
                expires={150}
                containerClasses='d-md-none m-0'
                enableDeclineButton
                declineButtonText='Decline All'
                declineButtonClasses='napoleonWhiteColor'
                declineButtonStyle={{ backgroundColor: '#A2000C', fontSize: '14px', fontWeight: 'bold' }}
            >
                <h4 className='text-center fs-5 fw-bold'>We value your privacy</h4>
                <p className='text-center w-100 m-0' style={{ fontSize: '12px', textAlign: 'justify' }}>
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                    By clicking <b>"Accept All"</b>, you consent to our use of cookies. &nbsp;
                    <Link aria-current='page' to='/cookie' className='napoleonWhiteColor'>
                        Cookie Policy
                    </Link>
                </p>
            </CookieConsent>
        </>
    )
}
export default ConsentForCookie