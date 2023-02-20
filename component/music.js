import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import useSound from 'use-sound';
export default function Sound() {
    const [isChecked, setIsChecked] = useState(
      false
    );
  
    const [play, { stop }] = useSound("/music/musicbg.mp3");
    const handleChange = event => {
      if (event.target.checked) {
    play();
      } else {
       stop();
      }
      setIsChecked(current => !current);
    };
    return (
      <div className={styles.switchbox}>
			<input type="checkbox"

checked={isChecked}
size={24}
onChange={handleChange}className={styles.switch1}></input>
     
		</div>
     
      
    );
  }