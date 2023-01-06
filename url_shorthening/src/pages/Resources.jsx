import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function Resources() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Resources</title>
            </Helmet>
        </HelmetProvider>
    )
}

export default Resources