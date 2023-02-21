import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import useSound from 'use-sound';
import { useLocation } from 'react-router-dom';

export default function Sound() {
    const [isChecked, setIsChecked] = useState(
      false
    );
    const history = useHistory();
    const [play, { stop }] = useSound("/music/musicbg.mp3");
    useEffect(() => {
      return history.listen(() => {
        pause();
      });
    }, [history]);
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