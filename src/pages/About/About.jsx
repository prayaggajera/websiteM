import React, { useEffect } from 'react'
import './About.css'
import AboutConfig from '../../config/AboutConfig.json';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="section">
                <div className="container">
                    {/* About CSIR-CSMCRI */}
                    <h3 className='section__title'>{AboutConfig?.section_title}</h3>
                    <p className="research" dangerouslySetInnerHTML={{ __html: AboutConfig?.about_csmcri.para1 }}></p><br />
                    <p className="research" dangerouslySetInnerHTML={{ __html: AboutConfig?.about_csmcri.para2 }}></p><br />
                    <p className="research" dangerouslySetInnerHTML={{ __html: AboutConfig?.about_csmcri.para3 }}></p>

                    {/* Team Research */}
                    <h3 className='section__title' style={{ marginTop: "30px" }}>{AboutConfig?.team_title}</h3>
                    <ul className='research_ul'>
                        <li dangerouslySetInnerHTML={{ __html: AboutConfig?.team.para1 }}></li>
                        <li dangerouslySetInnerHTML={{ __html: AboutConfig?.team.para2 }}></li>
                        <li dangerouslySetInnerHTML={{ __html: AboutConfig?.team.para3 }}></li>
                        <li dangerouslySetInnerHTML={{ __html: AboutConfig?.team.para4 }}></li>
                        <li dangerouslySetInnerHTML={{ __html: AboutConfig?.team.para5 }}></li>
                    </ul>

                    {/* Lab Instruments */}
                    <h3 className='section__title' style={{ marginTop: "30px" }}>{AboutConfig?.lab_title}</h3>
                    <div className="instruments">
                        {
                            AboutConfig?.instrument_list?.map((instrument, index) => (
                                <div className="instrument">
                                    <div className="img_div">
                                        <img src={require(`../../assets/${instrument?.image}`)} alt="instrument_image" />
                                    </div>
                                    <div className="content">
                                        <h3>{instrument?.title}</h3>
                                        <p>{instrument?.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default About