import React from 'react';
import Navbar from '../Components/Navbar.jsx'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PrintIcon from '@mui/icons-material/Print';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SnoozeIcon from '@mui/icons-material/Snooze';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import LiquorIcon from '@mui/icons-material/Liquor';

function Contact() {
    return (
        <>
            <Navbar />
            <Row >
                <Card style={{ border: "2px solid #b5e48c", borderRadius: "1.5rem", width: "97%", margin: "1.5%" }} >
                    <ListGroup className="list-group-flush">
                        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                            <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom'>
                                <div className='me-5 d-none d-lg-block'>
                                    <span>Get connected with us on social networks:</span>
                                </div>

                                <div>
                                    <a href='a' className='me-4 text-reset'>
                                        <FacebookIcon></FacebookIcon>
                                        <MDBIcon fab icon="facebook-f" />
                                    </a>
                                    <a href='b' className='me-4 text-reset'>
                                        <TwitterIcon></TwitterIcon>
                                        <MDBIcon fab icon="twitter" />
                                    </a>
                                    <a href='c' className='me-4 text-reset'>
                                        <GoogleIcon></GoogleIcon>
                                        <MDBIcon fab icon="google" />
                                    </a>
                                    <a href='d' className='me-4 text-reset'>
                                        <InstagramIcon></InstagramIcon>
                                        <MDBIcon fab icon="instagram" />
                                    </a>
                                    <a href='e' className='me-4 text-reset'>
                                        <LinkedInIcon></LinkedInIcon>
                                        <MDBIcon fab icon="linkedin" />
                                    </a>
                                    <a href='https://github.com/Fahima0203' className='me-4 text-reset'>
                                        <GitHubIcon></GitHubIcon>
                                        <MDBIcon fab icon="github" />
                                    </a>
                                </div>
                            </section>

                            <section className=''>
                                <MDBContainer className='text-center text-md-start mt-3'>
                                    <MDBRow className='mt-2'>
                                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-2'>
                                            <h6 className='text-uppercase fw-bold '>
                                                <LiquorIcon />
                                                <MDBIcon icon="gem" className="me-3" />
                                                Food Ordering
                                            </h6>
                                        </MDBCol>
                                        <hr></hr>
                                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-2'>
                                            <h6 className='text-uppercase fw-bold mb-4'>Choose a service</h6>
                                            <p>
                                                <a href='#!' className='text-reset'>
                                                    Pickup  <ShoppingBagIcon />
                                                </a>
                                            </p>
                                            <p>
                                                <a href='#!' className='text-reset'>
                                                    Delivery <DeliveryDiningIcon />
                                                </a>
                                            </p>
                                            <p>
                                                <a href='#!' className='text-reset'>
                                                    Dinning <LocalDiningIcon />
                                                </a>
                                            </p>
                                            <p>
                                                <a href='#!' className='text-reset'>
                                                    Orders <NoteAltIcon />
                                                </a>
                                                <ul>Now <OutdoorGrillIcon /> <br></br> Later <SnoozeIcon /></ul>
                                            </p>

                                        </MDBCol>

                                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                            <p>
                                                <HomeIcon></HomeIcon>
                                                <MDBIcon icon="home" className="me-2" />
                                                New York, NY 10012, US
                                            </p>
                                            <p>
                                                <a href="mailto: tbi-kec@kongu.ac.in">
                                                    <EmailIcon></EmailIcon>
                                                </a>
                                                <MDBIcon icon="envelope" className="me-3" />
                                                info@example.com
                                            </p>
                                            <p>
                                                <PhoneIcon></PhoneIcon>
                                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                                            </p>
                                            <p>
                                                <PrintIcon></PrintIcon>
                                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                                            </p>
                                        </MDBCol>
                                        <MDBCol><iframe title="a" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.6623132022182!2d77.60597711010064!3d11.272200560455994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d786c0e2813%3A0xcecfdf2909eb700a!2sFood%20Court%20%40%20KEC%20(Hari%20Krishna%20Groups%20)!5e0!3m2!1sen!2sin!4v1667823872546!5m2!1sen!2sin" style={{ width: "90%", height: "300px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </section>

                            <div className='text-center p-4 me-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                                © 2022 Copyright :
                                <a className='text-reset fw-bold m-2' href='https://mdbootstrap.com/'>
                                    Fahima.com
                                </a>
                            </div>

                        </MDBFooter>
                    </ListGroup>
                </Card>
            </Row>
        </>
    )
}

export default Contact;