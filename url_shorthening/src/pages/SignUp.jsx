import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function SignUp() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>SignUp</title>
            </Helmet>
        </HelmetProvider>
    )
}

export default SignUp