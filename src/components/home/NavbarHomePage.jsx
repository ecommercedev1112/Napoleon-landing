import { useNavigate, Link } from 'react-router-dom';
import { Link as ScrollLink, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import AppImages from '../../utility/Images';

const NavbarHomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <nav className='navbar navbar-dark bg-dark navbar-expand-md sticky-top m-0 p-0' style={{ minHeight: '75px', height: '10vh' }}>
                <div className='container-fluid'>
                    <Link className='navbar-brand nav-link d-none d-lg-block' to='/'>
                        <img src={AppImages.napoleonLogo} alt='Napoleon Logo' className='NavbarLogo' />
                    </Link>
                    <Link className='navbar-brand nav-link d-lg-none' to='/'>
                        <img src={AppImages.napoleonLogo} alt='Napoleon Logo' className='NavbarLogoMobile' />
                    </Link>
                    <button className='navbar-toggler d-flex d-md-none order-3 p-2' type='button' data-bs-toggle='offcanvas' data-bs-target='#bdNavbar' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <i className='fas fa-bars' style={{ color: 'white' }}></i>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item ms-5 me-3'>
                                <Link className='nav-link fs-3' aria-current='page' to='http://www.platform.napoleon.cloud' style={{ color: 'white' }}>
                                    Platform
                                </Link>
                            </li>
                            <li className='nav-item ms-auto me-auto mt-auto mb-auto'>
                                <i className='fa-thin fa-pipe' style={{ color: 'white', fontSize: '4vh' }}></i>
                            </li>
                            <li className='nav-item ms-3 me-2'>
                                <ScrollLink className='nav-link fs-3' style={{ color: 'white', cursor: 'pointer' }} aria-current='page' to='sectionQueries' spy={true} smooth={true} offset={0} duration={500}>
                                    Contact
                                </ScrollLink>
                            </li>
                        </ul>
                        <ScrollLink className='nav-link fs-3' style={{ color: 'white', cursor: 'pointer', marginRight: '2vw' }} aria-current='page' to='sectionHowItWorks' spy={true} smooth={true} offset={0} duration={500}>
                            How this works
                        </ScrollLink>
                    </div>

                    <div className='offcanvas-lg offcanvas-end flex-grow-1 d-md-none' tabIndex='-1' id='bdNavbar' aria-labelledby='bdNavbarOffcanvasLabel' data-bs-scroll='true'>
                        <div className='row'>
                            <div className='col-sm bg-dark p-0' style={{ minHeight: '75px', height: '10vh' }}>
                                <button className='navbar-toggler d-flex ms-3 p-2' style={{ marginTop: '4%' }} type='button' data-bs-toggle='offcanvas' data-bs-target='#bdNavbar' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                                    <i className='fas fa-xmark-large fw-light' style={{ color: 'white', fontSize: '7vw' }}></i>
                                </button>
                            </div>
                            <div className='col-sm'>
                                <ul className='navbar-nav'>
                                    <li className='nav-item border-bottom pe-3 py-3'>
                                        <a href='#' className='nav-link active text-end fs-4 fw-bold p-0 napoleonBlackColor' style={{ color: 'white', textDecoration: 'none' }}>
                                            Home
                                        </a>
                                    </li>
                                    <li className='nav-item border-bottom pe-3 py-3'>
                                        <Link className='nav-link text-end fs-4 fw-bold p-0 napoleonBlackColor' aria-current='page' to='http://www.platform.napoleon.cloud' style={{ color: 'white' }}>
                                            Platform
                                        </Link>
                                    </li>
                                    <li className='nav-item border-bottom pe-3 py-3'>
                                        <ScrollLink className='nav-link text-end fs-4 fw-bold p-0 napoleonBlackColor' style={{ color: 'white', cursor: 'pointer' }} aria-current='page' to='sectionQueries' spy={true} smooth={true} offset={0} duration={500}>
                                            Contact
                                        </ScrollLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button type='button' className='btn rounded-pill w-75 border-0 fw-bold mt-auto ms-auto me-auto mb-4 btn-golden' style={{ padding: '2vw 2vw' }}>
                            GET STARTED
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavbarHomePage