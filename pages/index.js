import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import record from '../data/arts.json'
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Menu from '../component/menu'
import Sound from '../component/music'
export default function Home(){
  const r = useRouter();
 
  return (
    <>
      <Head>
      <title>Museum Art</title>
        <meta name="description" content="Blathers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/blathers_icon.jpeg" />
      </Head>

      <main className={styles.main1}>
        <Menu></Menu>
      <div className={styles.header}>
        <h1>Welcome to Museum Art in Animal Crossing </h1>
        </div>
        <div className={styles.blathers}>
          <div className={styles.bubble}>
            <a>Be careful when buying fake arts!</a><br></br>
            <a>It cannot be donated to the Museum or sold in Nook's Canny.</a>
          </div>
              <img 
                  src="Blathers.png"
                  width={400}
                  height={400}
              />

            </div>
            <div className={styles.description}>
            <h3>Art pieces are paintings and sculptures that can be purchased from Jolly Redd's Treasure Trawler and donated to the museum, 
                provided they are not forged. Donating the first piece to the museum will allow Blathers to expand the museum, 
                which requires one day of construction.
            </h3>
            </div>
            <div className={styles.wrapper}>
  <a  onClick={
                  ()=>r.push("/arts")}><span>Museum Art</span></a>
</div>
      </main>
    </>
  );
}
