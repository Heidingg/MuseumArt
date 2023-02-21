import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import useSound from 'use-sound';
import { useRouter } from 'next/router';

export default function Sound() {
    const [isChecked, setIsChecked] = useState(
      false
    );
    const router = useRouter();
    const [play, { stop }] = useSound("/music/musicbg.mp3");
    useEffect(() => {
      // Lắng nghe sự kiện khi chuyển trang
      const handleRouteChange = () => {
        play();
      };
      router.events.on('routeChangeComplete', handleRouteChange);
  
      // Tắt âm thanh khi component bị unmount
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
        stop();
      };
    }, []);
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