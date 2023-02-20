import { Router, useRouter } from 'next/router'
import React, { useState } from 'react';
import Sound from '../component/music'
import styles from '../styles/Home.module.css'

export default function Menu({
 
}) {
  const r = useRouter();
    return (
        <>
   
   <nav>
   <div className={styles.navbar}>
<div  className={styles.navcontainer}>
    <input className={styles.checkbox} type="checkbox" name="" id="" />
    <div className={styles.hamburgerlines}>
      <span className={styles.line1}></span>
      <span className={styles.line2}></span>
      <span className={styles.line3}></span>
    </div>  

    <Sound></Sound>
  <div className={styles.menuitems}>
    <li><a  onClick={
                  ()=>r.push("/")} >Home</a></li>
    <li><a onClick={
                  ()=>r.push("/arts")}>Museum Art</a></li>
  </div>
</div>
</div>
    </nav>
        </>
    )
}