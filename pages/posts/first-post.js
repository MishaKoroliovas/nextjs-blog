import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

export default function(){
    return (
        <>
    <Head>
        <title>First Post</title>
    </Head>
    <Script
        src = "https://connect.facebook.net/en_US/sdk.js"
        strategy = "lazyOnload"
        onLoad={()=>
            console.log("FB script loaded")

        }
        />
    <h1>First Post</h1>
    <h2><Link href="/">Back to home page</Link></h2>

       
    </>
    );
}