import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Divider } from '@mui/material';
import HeaderFooterConfig from '../../config/HeaderFooterConfig.json';

const Footer = (props) => {
    const { setActiveLink } = props;
    return (
        <>
            <footer className="section footer-section">
                <div className="container footer_container">
                    <div className="footer">
                        <div className="footer-column">
                            <div className="footer-logo">
                                <img src={require(`../../assets/${HeaderFooterConfig?.logo}`)} alt="logo" />
                                <h3>{HeaderFooterConfig?.footer_headline}</h3>
                                <p>{HeaderFooterConfig?.footer_sub_headline}</p>
                            </div>
                        </div>
                        <div className="footer-column">
                            <ul className="footer-links">
                                <p>Quick Links</p>
                                {
                                    HeaderFooterConfig?.nav_items?.length > 0 && HeaderFooterConfig?.nav_items?.map((item, index) => (
                                        <li key={index}><Link to={item?.url} onClick={() => setActiveLink(item?.url)}>{item?.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="footer-column">
                            <p className='footer_title'>Get in Touch</p>
                            <p className='footer_address'><b>Address:</b> {HeaderFooterConfig?.address}</p>
                            <Link className='footer_mail_link' to={`mailto:${HeaderFooterConfig?.email}`} target='_blank'><b>Mail: </b>{HeaderFooterConfig?.email}</Link>
                            <ul className="social-icons footer-social">
                                <li><Link to={HeaderFooterConfig?.social_links?.google}><GoogleIcon /></Link></li>
                                <li><Link to={HeaderFooterConfig?.social_links?.facebook}><FacebookIcon /></Link></li>
                                <li><Link to={HeaderFooterConfig?.social_links?.linkedin}><LinkedInIcon /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <Divider />
            <div className="below_footer">
                <p className="copyright">{HeaderFooterConfig?.copyright}</p>
                <p className='made_by'>Made with ❤️ by <Link to={HeaderFooterConfig?.made_by?.url}><b>{HeaderFooterConfig?.made_by?.name}</b></Link></p>
            </div>

        </>
    );
};

export default Footer;
