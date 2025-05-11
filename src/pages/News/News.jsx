import { useEffect, useState } from 'react'
import './News.css'
import NewsConfig from '../../config/NewsConfig.json'
import { Divider } from '@mui/material'


const News = () => {
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
                    <h3 className='section__title'>{NewsConfig?.section_title}</h3>

                    <div className="news">
                        {NewsConfig?.news_list?.map(news => (
                            <div key={news.id} className="news-member">
                                <div className="news-left">
                                    <img src={require(`../../assets/${news?.image}`)} alt={news?.title} />
                                </div>
                                <div className="news-right">
                                    <h3><b>{news?.title}</b></h3>
                                    <Divider />
                                    <p className='date'>Date: <b>{news?.date}</b></p>
                                    <p>{expandedDescriptions[news.id] ? news?.description : `${news?.description.substring(0, 250)}...`} <span><span className='read-more' onClick={() => toggleDescription(news.id)}>{expandedDescriptions[news.id] ? 'read less' : 'read more'}</span></span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default News