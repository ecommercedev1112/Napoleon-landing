import { Link } from 'react-router-dom';
import AppImages from '../../utility/Images';

const FooterHomePage = () => {
    return (
        <>
            <footer className='navbar navbar-dark bg-dark navbar-expand-lg sticky-bottom w-100 d-none d-md-block m-0 p-0' style={{ minHeight: '75px', height: '10vh' }}>
                <div className='container-fluid' style={{ height: '-webkit-fill-available' }}>
                    <div className='row w-100 m-0'>
                        <div className='col-md-2 text-center'>
                            <img src={AppImages.napoleonLogo} alt='Napoleon Logo' className='NavbarLogo' />
                        </div>
                        <div className='col-md text-center'>
                            <Link className='me-2 napoleonWhiteColor' aria-current='page' to='/about' style={{ fontSize: '14px', textDecoration: 'none' }}>
                                About
                            </Link>
                            <Link className='ms-2 me-2 napoleonWhiteColor' aria-current='page' to='/userAgreement' style={{ fontSize: '14px', textDecoration: 'none' }}>
                                User Agreement
                            </Link>
                            <Link className='ms-2 napoleonWhiteColor' aria-current='page' to='/privacy' style={{ fontSize: '14px', textDecoration: 'none' }}>
                                Privacy Policy
                            </Link>
                            {/* <br/>
                            <Link className='me-2 napoleonWhiteColor' aria-current='page' to='/cookie' style={{ fontSize: '14px', textDecoration: 'none' }}>
                                Cookie Policy
                            </Link> */}
                            {/* <Link className='ms-2 me-2 napoleonWhiteColor' aria-current='page' to='/copyright' style={{ fontSize: '14px', textDecoration: 'none' }}>
                                Copyright Policy
                            </Link>
                            <Link className='ms-2 me-2 napoleonWhiteColor' aria-current='page' to='/brand' style={{ fontSize: '14px', textDecoration: 'none' }}>
                                Brand Policy
                            </Link> */}
                            <Link className='ms-2 napoleonWhiteColor' aria-current='page' to='/help' style={{ fontSize: '14px', textDecoration: 'none' }}>
                                Help
                            </Link>
                            <br />
                            <p className='m-0 mt-1 p-0 napoleonWhiteColor' style={{ fontSize: '12px' }}>Napoleon © {new Date().getFullYear()}</p>
                        </div>
                        <div className='col-md-2 text-start'>
                            <p className='m-0 p-0 napoleonWhiteColor' style={{ fontSize: '14px' }}>Email: support@napoleon.cloud</p>
                            <p className='m-0 p-0 napoleonWhiteColor' style={{ fontSize: '14px' }}>Phone: (202) 456-1111</p>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className='navbar navbar-dark bg-dark navbar-expand-lg d-md-none m-0 p-0'>
                <div className='container-fluid'>
                    <div className='row w-100 mx-2 my-3'>
                        <div className='col-sm-2'>
                            <img src={AppImages.napoleonLogo} alt='Napoleon Logo' className='NavbarLogoMobile' />
                        </div>
                        <div className='col-sm mt-3'>
                            <div className='row w-100'>
                                <div className='col-6'>
                                    <Link className='napoleonWhiteColor' aria-current='page' to='/about' style={{ fontSize: '3vw', textDecoration: 'none' }}>
                                        About
                                    </Link>
                                </div>
                                <div className='col-6'>
                                    <Link className='napoleonWhiteColor' aria-current='page' to='/userAgreement' style={{ fontSize: '3vw', textDecoration: 'none' }}>
                                        User Agreement
                                    </Link>
                                </div>
                                <div className='col-6'>
                                    <Link className='napoleonWhiteColor' aria-current='page' to='/privacy' style={{ fontSize: '3vw', textDecoration: 'none' }}>
                                        Privacy Policy
                                    </Link>
                                </div>
                                {/* <div className='col-6'>
                                    <Link className='napoleonWhiteColor' aria-current='page' to='/cookie' style={{ fontSize: '3vw', textDecoration: 'none' }}>
                                        Cookie Policy
                                    </Link>
                                </div>
                                <div className='col-6'>
                                    <Link className='napoleonWhiteColor' aria-current='page' to='/copyright' style={{ fontSize: '3vw', textDecoration: 'none' }}>
                                        Copyright Policy
                                    </Link>
                                </div>
                                <div className='col-6'>
                                    <Link className='napoleonWhiteColor' aria-current='page' to='/brand' style={{ fontSize: '3vw', textDecoration: 'none' }}>
                                        Brand Policy
                                    </Link>
                                </div> */}
                                <div className='col-6'>
                                    <Link className='napoleonWhiteColor' aria-current='page' to='/help' style={{ fontSize: '3vw', textDecoration: 'none' }}>
                                        Help
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm mt-3'>
                            <p className='m-0 p-0 napoleonWhiteColor' style={{ fontSize: '3vw' }}>Email: support@napoleon.cloud</p>
                            <p className='m-0 p-0 napoleonWhiteColor' style={{ fontSize: '3vw' }}>Phone: (202) 456-1111</p>
                            <p className='m-0 mt-2 p-0 napoleonWhiteColor' style={{ fontSize: '3vw', opacity: '0.7' }}>Napoleon © 2023</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default FooterHomePage