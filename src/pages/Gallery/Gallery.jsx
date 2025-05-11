import { useEffect, useState } from 'react'
import './Gallery.css'
import GalleryConfig from '../../config/GalleryConfig.json'
import { Divider } from '@mui/material'


const Gallery = () => {
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
                    <h3 className='section__title'>{GalleryConfig?.section_title}</h3>

                    <div className="gallery">
                        {GalleryConfig?.gallery_list?.map(gallery => (
                            <div key={gallery.id} className="gallery-member">
                                <div className="gallery-left">
                                    <img src={require(`../../assets/${gallery?.image}`)} alt={gallery?.title} />
                                </div>
                                <div className="gallery-right">
                                    <p>{expandedDescriptions[gallery.id] ? gallery?.description : `${gallery?.description.substring(0, 70)}...`} <span><span className='read-more' onClick={() => toggleDescription(gallery.id)}>{expandedDescriptions[gallery.id] ? 'read less' : 'read more'}</span></span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery