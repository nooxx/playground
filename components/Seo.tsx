import React from 'react'
import Head from "next/head";

type SeoProps = {
    title: string,
}

const Seo = ({title}: SeoProps) => {
    return (
        <Head>
            <title>{title} - CSS Playground</title>
            <meta property="og:title" content={`${title} - CSS Playground`} />
            {/*<meta property="og:type" content="website" />*/}
            {/*<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />*/}
            {/*<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />*/}
        </Head>
    )
}

export default Seo

