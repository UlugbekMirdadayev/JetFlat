import { useState } from 'react';
import styles from './style.module.scss';
import FoxImage from '../../../assets/image/fox.png';
import Close from '../../../assets/svg/close.svg';
import { Link, useLocation } from 'react-router-dom';

export const FoxModal = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState<Boolean>(true);

  if (pathname === '/test') {
    return null;
  }

  return (
    <>
      {active ? (
        <div className={styles.fox_container}>
          <div className={styles.fox_container_svg}>
            <button onClick={() => setActive(false)}>
              <img src={Close} alt="..." />
            </button>
          </div>
          <div className={styles.fox_container_flex}>
            <div className={styles.fox_container_image}>
              <img src={FoxImage} alt="..." />
            </div>
            <div className={styles.fox_container_title}>
              <h1>Нужна помощь в подборе квартиры?</h1>
              <h3>
                Пройдите <span>ТЕСТ</span> и получите подборку подходящих квартир
              </h3>
              <p>Квартиры из подборки можно будет добавить в избранное, сравнить и забронировать</p>
              <div>
                <Link to="/test">
                  <button>Пройти тест</button>
                </Link>
                <button>Обратиться в службу поддержки</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
