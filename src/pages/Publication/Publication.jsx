import React, { useEffect } from 'react'
import './Publication.css'
import { Link } from 'react-router-dom'
import PublicationConfig from '../../config/PublicationConfig.json';

const Publication = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="section">
                <div className="container">
                    <h3 className='section__title'>{PublicationConfig?.section_title}</h3>
                    <div className="publications">
                        <div className="instructions" dangerouslySetInnerHTML={{ __html: PublicationConfig?.instructions }}></div>
                        {
                            PublicationConfig?.publications_list?.map(publication => (
                                <div key={publication.id} className="publication">
                                    <div className="left">
                                        <Link target='_blank' to={publication?.url}><h3>{publication?.title}</h3></Link>
                                        <p>Publication date: <b>{publication?.publication_date}</b></p>
                                        <div className="people">
                                            {publication?.people?.map((person, index) => {
                                                let separator = "";
                                                if (index > 0) {
                                                    separator = ", ";
                                                }
                                                return (
                                                    <React.Fragment key={index}>
                                                        {separator}
                                                        {person?.url || person?.url !== "" ? (
                                                            <Link target='_blank' to={person?.url}>{person?.name}</Link>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Publication