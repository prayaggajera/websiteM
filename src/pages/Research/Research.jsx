import React, { useEffect } from 'react'
import './Research.css'
import ResearchConfig from '../../config/ResearchConfig.json';
import { Divider } from '@mui/material';

const Research = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="section">
                <div className="container">
                    {/* research section */}
                    <h3 className='section__title'>{ResearchConfig?.section_title}</h3>
                    <p className="research" dangerouslySetInnerHTML={{ __html: ResearchConfig?.description }}></p>
                    <ul className='research_ul'>
                        {
                            ResearchConfig?.description_list?.map((item, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                            ))
                        }
                    </ul>

                    {/* research sub section */}
                    {
                        ResearchConfig?.reseach_sections?.map((section, index) => (
                            <div className="sub_section" key={index}>
                                <Divider style={{ marginBottom: "10px" }} />
                                <p className="sub_section__title">{section?.title}</p>
                                <div className="sub_section__content">
                                    <ul>
                                        {
                                            section?.list?.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Research