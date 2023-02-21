import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  const [image, setImage] = useState('/background.jpeg');

  useEffect(() => {
    const myDiv = document.getElementById('myDiv');
    myDiv.style.backgroundImage = `url("${imageSrc}")`;
    myDiv.style.backgroundSize = 'cover';
  }, [imageSrc]);

  return (
    <div id="myDiv" className={styles.background}>
      {/* Your component content here */}
    </div>
  );
}

export default Home;
