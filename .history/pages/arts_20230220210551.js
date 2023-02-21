import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import record from '../data/arts.json'
import { useState, useEffect } from 'react';
import Menu from '../component/menu'

export default function Home() {
  console.log(record);
  const [arts, setarts] = useState('');
  
  return (
    <>
      <Head>
        <title>Museum Art</title>
        <meta name="description" content="Images" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/blathers_icon.jpeg" />
      </Head>
      <Menu></Menu>
      <div className={styles.header2}>
        <h1> Painting & Sculptures</h1>
        </div>
      <main className={styles.main}>
        <div className={styles.container}>
          {
            record.map( (rec, index) => {
              return(
                <div className={styles.Art} key={index}>
                  <img src={rec.Image} className={styles.Image}/>
                  <p>  {rec.Name} </p>
                  <a>{rec.Artist}</a>
                </div>
                
              )
            })
          }
          </div>
      </main>
    </>
  )
}