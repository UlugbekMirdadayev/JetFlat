import styles from './style.module.scss';
import uyes from '../../assets/svg/uyes.svg';
import { Checkbox } from '../../components/checkbox';
import Vk from '../../assets/svg/vk.svg';
import Twitter from '../../assets/svg/tw.svg';
import Google from '../../assets/svg/google.svg';
import Ok from '../../assets/svg/ok.svg';
import WhatsApp from '../../assets/svg/whatsapp.svg';
import Yandex from '../../assets/svg/ya.svg';
import { LoginModal } from '../../components/popups/loginFox';

export const Login = () => {
  const SocialLink = [
    {
      id: 0,
      icon: Vk,
      link: '#'
    },
    {
      id: 1,
      icon: Twitter,
      link: '#'
    },
    {
      id: 2,
      icon: Google,
      link: '#'
    },
    {
      id: 3,
      icon: WhatsApp,
      link: '#'
    },
    {
      id: 4,
      icon: Ok,
      link: '#'
    },
    {
      id: 5,
      icon: Yandex,
      link: '#'
    }
  ];
  return (
    <div className={styles.login_container}>
      <h1>Войдите или создайте аккаунт</h1>
      <form>
        <input type="text" placeholder="Телефон или e-mail*" />
        <label htmlFor="">
          <input type="text" placeholder="Пароль" />
          <img src={uyes} alt="..." />
        </label>
        <div className={styles.login_container_form_checkbox}>
          <Checkbox />
          <p>
            Я принимаю условия пользования сайтом и даю согласие на использование моих персональных
            данных в маркетинговых целях
          </p>
        </div>
        <div className={styles.form_btn}>
          <button>Войти</button>
          <p>Забыли пароль?</p>
        </div>
      </form>
      <div className={styles.login_in}>
        <h1>Войти через</h1>
        <div className={styles.login_icons}>
          {SocialLink.map((res) => (
            <img key={res.id} src={res.icon} alt="..." />
          ))}
        </div>
        <div className={styles.login_btns}>
          <button>ГОСУСЛУГИ</button>
          <button>Вход по электронной подписи</button>
          <button>Войти по Сбер ID</button>
          <button>Зарегистрироваться</button>
        </div>
        <div className={styles.login_more}>
          <p>После регистрации вы получите доступ ко всем возможностям сервиса JET FLAT</p>
          <span>Подробнее</span>
        </div>
      </div>
      <div className={styles.login_popup}>
        <LoginModal />
      </div>
    </div>
  );
};
