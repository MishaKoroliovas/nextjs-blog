import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import image1 from '../public/images/img1.png';
import image2 from '../public/images/img2.png';
import image3 from '../public/images/img3.png';
import image4 from '../public/images/img4.png';
import image5 from '../public/images/img5.png';
import image6 from '../public/images/img6.png';
import image7 from '../public/images/img7.png';

 
const name = 'Misha & Simran';
export const siteTitle = 'Next.js Sample Website';
 
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        
      </header>
      <main>
        <div>
          <h1 className = {utilStyles.heading2Xl}> Simran and Misha</h1>
          <h1>My everything xx</h1>
          <h2>I love you baby</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>

            <Image src = {image1}  width={300} height={200} layout="responsive"/> 
            <Image src={image2} alt="Description of image 2" width={300} height={200} layout="responsive" />
           <Image src={image3} alt="Description of image 3" width={300} height={200} layout="responsive" />
           <Image src={image4} alt="Description of image 4" width={300} height={200} layout="responsive" />
            <Image src={image5} alt="Description of image 5" width={300} height={200} layout="responsive" />
            <Image src={image6} alt="Description of image 6" width={300} height={200} layout="responsive" />
            <Image src={image7} alt="Description of image 7" width={300} height={200} layout="responsive" />
        
          </div>
        </div>


      </main>
    
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}