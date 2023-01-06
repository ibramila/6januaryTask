import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function Features() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Features</title>
            </Helmet>
        </HelmetProvider>
    )
}

export default Features