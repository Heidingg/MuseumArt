import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import useSound from 'use-sound';
import { useRouter } from 'next/router';

export default function Sound() {
    const [isChecked, setIsChecked] = useState(
      false
    );
    const router = useRouter();
    const [play, { pause }] = useSound("/music/musicbg.mp3");
    useEffect(() => {
      const handleRouteChangeStart = () => {
        pause();
      };
      const handleRouteChangeComplete = () => {
        play();
      };
      router.events.on('routeChangeStart', handleRouteChangeStart);
      router.events.on('routeChangeComplete', handleRouteChangeComplete);
      return () => {
        router.events.off('routeChangeStart', handleRouteChangeStart);
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
        pause();
      };
    }, []);
    const handleChange = event => {
      if (event.target.checked) {
    play();
      } else {
      pause();
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