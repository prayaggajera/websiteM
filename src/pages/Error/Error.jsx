import React, { useEffect } from 'react'

const Error = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="section">
                <div className="container">
                    <h3 className='section__title'>Error</h3>
                </div>
            </div>
        </>
    )
}

export default Error