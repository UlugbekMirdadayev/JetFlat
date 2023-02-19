import { useState } from 'react';
import { Button } from '../button';
import styles from './style.module.scss';

export const Cookie = () => {
  const [active, setActive] = useState<Boolean>(true);
  return (
    <>
      {active ? (
        <div className={styles.cookie}>
          <div className={styles.cookie__inner}>
            <span className={styles.cookie__text}>Мы используем файлы cookie</span>
            <a href="/" className={styles.cookie__link}>
              Соглашение об использовании
            </a>
            <Button variant="primary" onClick={() => setActive(false)}>
              Принять
            </Button>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
