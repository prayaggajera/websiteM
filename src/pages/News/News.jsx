import React, { useEffect } from 'react'
import './News.css'
// import { Link } from 'react-router-dom'
// import { publications_list } from '../../config';

const News = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="section">
                <div className="container">
                    <h3 className='section__title'>News</h3>
                    <p style={{ textAlign: "center", marginBottom: "150px" }}>Under Construction</p>
                    <div>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.541067709863!2d72.14226337505295!3d21.759310730079225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5082eb5e2d3b%3A0xe255e0130218d3de!2sCSIR-CSMCRI%20(Central%20salt%20and%20marine%20chemical%20research%20Institute!5e0!3m2!1sen!2sin!4v1708537797286!5m2!1sen!2sin" width="500" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" key="1"></iframe> */}
                    </div>
                    {/* <div className="publications">
                        <div className="instructions">Welcome to our <b>research papers section</b>. Here you can find our latest research papers related to <b>Adsorption and Materials</b>. Our group specializes in the synthesis and design of porous materials for gas separation and catalyst.<br /><br /> Click on the links below to access our research papers.</div>

                        {

                            publications_list.map(publication => (
                                <div key={publication.id} className="publication">
                                    <div className="left">
                                        <Link target='_blank' to={publication.url}><h3>{publication.title}</h3></Link>
                                        <p>Publication date: <b>{publication.publication_date}</b></p>
                                        <div className="people">
                                            {publication.people.map((person, index) => {
                                                let separator = "";
                                                if (index > 0) {
                                                    separator = ", ";
                                                }
                                                return (
                                                    <React.Fragment key={index}>
                                                        {separator}
                                                        {person.url || person.url !== "" ? (
                                                            <Link target='_blank' href={person.url}>{person.name}</Link>
                                                        ) : (
                                                            person.name
                                                        )}
                                                    </React.Fragment>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="right">
                                        <img src={require(`../../assets/${publication.image}`)} alt="publication" />
                                    </div>
                                </div>
                            ))

                        }
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default News