import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Component1 from '../components/Component1'
import Component2 from '../components/Component2'
import Component3 from '../components/Component3'

function Home() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Component1 />
            <Component2 />
            <Component3 />
        </HelmetProvider>
    )
}

export default Home