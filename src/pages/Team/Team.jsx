import React, { useEffect, useState } from 'react'
import './Team.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import TeamConfig from '../../config/TeamConfig.json';

const Team = () => {

    const [expandedDescriptions, setExpandedDescriptions] = useState({});

    const toggleDescription = (id) => {
        setExpandedDescriptions({
            ...expandedDescriptions,
            [id]: !expandedDescriptions[id]
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="section">
                <div className="container">
                    <h3 className='section__title'>{TeamConfig?.section_title}</h3>

                    <div className="team">
                        {TeamConfig?.team_members?.map(member => (
                            <div key={member.id} className="team-member">
                                <div className="team-left">
                                    <img src={require(`../../assets/${member?.image}`)} alt={member?.name} />
                                </div>
                                <div className="team-right">
                                    <h3><b>{member?.name}</b> <span>({member?.designation})</span></h3>
                                    <Divider />
                                    <div className="social-icons">
                                        <li><Link to={member?.google} target='_blank'><GoogleIcon sx={{ fontSize: "25px" }} /></Link></li>
                                        <li><Link to={member?.facebook} target='_blank'><FacebookIcon sx={{ fontSize: "25px" }} /></Link></li>
                                        <li><Link to={member?.linkedin} target='_blank'><LinkedInIcon sx={{ fontSize: "25px" }} /></Link></li>
                                    </div>
                                    <p>{expandedDescriptions[member.id] ? member?.description : `${member?.description.substring(0, 250)}...`} <span><span className='read-more' onClick={() => toggleDescription(member.id)}>{expandedDescriptions[member.id] ? 'read less' : 'read more'}</span></span></p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Team