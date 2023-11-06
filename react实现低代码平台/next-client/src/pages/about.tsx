import Head from "next/head";

export default function About(){

    return<>
        <Head>
            <title>about</title>
            <meta name="description" content="about page"/>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="icon" href="/react实现低代码平台/next-client/src/pages/favicon.ico"/>
        </Head>
        <main>
            <h2>About page</h2>
        </main>
    </>
}