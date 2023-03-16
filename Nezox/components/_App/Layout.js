import React, { useEffect } from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import TrackingScript from '../../lib/TrackingScript';

const Layout = ({ children }) => {
    
    return(
        <>
            <TrackingScript />
            <Head>
                <title>Nezox - React Next Cyber Security Company Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Nezox - React Next Cyber Security Company Template" />
                <meta name="og:title" property="og:title" content="Nezox - React Next Cyber Security Company Template"></meta>
                <meta name="twitter:card" content="Nezox - React Next Cyber Security Company Template"></meta>
                <link rel="canonical" href="https://nezox-react.envytheme.com/"></link>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;