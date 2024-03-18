import React, { useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import HomeConfig from '../../config/HomeConfig.json'
import { Divider } from '@mui/material'

const Home = (props) => {
    const { setActiveLink } = props;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="section header-section">
                <section className="home_main">
                    <div className="home_container">
                        <div className="home_head_line_container">
                            <div id="home_head_line" className="home_head_line">
                                <span>{HomeConfig?.head_line}</span>
                            </div>
                            <p className="home_head_sub_line">{HomeConfig?.sub_head_line}</p><br />
                        </div>
                        <div className="home_quick_link">
                            {
                                HomeConfig?.quick_links?.map((link, index) => (
                                    <Link className="link_button" key={index} to={link?.url} onClick={() => setActiveLink(link?.url)}>{link?.title}</Link>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>

            <div className="home__section">
                <div className="container">
                    <h3 className='section__subtitle'>{HomeConfig?.research_section.title}</h3>
                    <p className='section__content' dangerouslySetInnerHTML={{ __html: HomeConfig?.research_section?.description }}></p>
                    <div className="link__btn">
                        <Link className='section__link' to={HomeConfig?.research_section?.link?.url} onClick={() => setActiveLink(HomeConfig?.research_section?.link?.url)}>{HomeConfig?.research_section?.link?.title}</Link>
                    </div>
                </div>
            </div>

            <Divider />
            <div className="home__section home__publication">
                <div className="container">
                    <h3 className='section__title'>{HomeConfig?.publication_section?.title}</h3>
                    <div className="publications">
                        {
                            HomeConfig?.publication_section?.publication_list?.map(publication => (
                                <div key={publication.id} className="publication">
                                    <div className="left">
                                        <Link target='_blank' to={publication?.url}><h3>{publication?.title}</h3></Link>
                                        <p>Publication date: <b>{publication?.publication_date}</b></p>
                                        <div className="people">
                                            {publication?.people.map((person, index) => {
                                                let separator = "";
                                                if (index > 0) {
                                                    separator = ", ";
                                                }
                                                return (
                                                    <React.Fragment key={index}>
                                                        {separator}
                                                        {person?.url || person?.url !== "" ? (
                                                            <Link target='_blank' href={person?.url}>{person?.name}</Link>
                                                        ) : (
                                                            person?.name
                                                        )}
                                                    </React.Fragment>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="right">
                                        <img src={require(`../../assets/${publication?.image}`)} alt="publication" />
                                    </div>
                                </div>
                            ))
                        }
                        <div className="link__btn">
                            <Link className='section__link' to={HomeConfig?.publication_section?.link?.url} onClick={() => setActiveLink(HomeConfig?.publication_section?.link?.url)}>{HomeConfig?.publication_section?.link?.title}</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />

            <div className="home__section">
                <div className="container">
                    <h3 className='section__subtitle'>{HomeConfig?.about_section?.title}</h3>
                    <p className='section__content' dangerouslySetInnerHTML={{ __html: HomeConfig?.about_section?.description }}></p>
                    <div className="link__btn">
                        <Link className='section__link' to={HomeConfig?.about_section?.link?.url} onClick={() => setActiveLink(HomeConfig?.about_section?.link?.url)}>{HomeConfig?.about_section?.link?.title}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home