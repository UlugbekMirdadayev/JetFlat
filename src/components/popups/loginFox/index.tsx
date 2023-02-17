import styles from './style.module.scss';
import FoxImage from '../../../assets/image/fox.png';
import Close from '../../../assets/svg/close.svg';
import { useLocation } from 'react-router-dom';

export const LoginModal = () => {
  const { pathname } = useLocation();
  if (pathname === '/test') {
    return null;
  }

  return (
    <div className={styles.fox_container}>
      <div className={styles.fox_container_svg}>
        <button>
          <img src={Close} alt="..." />
        </button>
      </div>
      <div className={styles.fox_container_flex}>
        <div className={styles.fox_container_image}>
          <img src={FoxImage} alt="..." />
        </div>
        <div className={styles.fox_container_title}>
          <h1>Ваше спокойствие - наш приоритет</h1>
          <h3>Добавьте свою новостройку и получайте заявки на бронирование квартир онлайн</h3>
          <div>
            <button>Обратиться в службу поддержки</button>
            <p>блок для застройщиков</p>
          </div>
        </div>
      </div>
    </div>
  );
};
