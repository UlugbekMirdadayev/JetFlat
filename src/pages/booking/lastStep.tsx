import { FC } from 'react';
import clsx from 'clsx';
import s from './style.module.scss';
import { ReactComponent as DownloadIcon } from '../../assets/svg/download.svg';
import { ReactComponent as ShareIcon } from '../../assets/svg/share.svg';
import { useNavigate } from 'react-router-dom';

type Props = { step: number };

const LastStep: FC<Props> = ({ step }) => {
  const navigate = useNavigate();
  return step === 2 ? (
    <div className={s.step__last}>
      <div className="container">
        <div className={s.row}>
          <div className={clsx([s.col, s.col__left])}>
            <img src={require('../../assets/image/fox.png')} alt="" />
            <div className={s.paragraph__bold}>
              Для сохранения бронирования необходимо оперативно предоставить информацию и документы,
              запрашиваемые Застройщиком
            </div>
          </div>
          <div className={clsx([s.col, s.col__right])}>
            <div className={s.title}>Елена, ваше бронирование доставлено застройщику!</div>
            <div className={s.desc}>
              Номер бронирования <span>2962.777.748</span>
            </div>
            <div className={s.paragraph}>
              В ближайшее время на электронную почту ivanova@gmail.com будет выслано подтверждение
              бронирования, в котором будут указаны:
            </div>
            <ul className={s.paragraph__list}>
              <li className={s.paragraph}>срок бронирования квартиры</li>
              <li className={s.paragraph}>список необходимых документов</li>
              <li className={s.paragraph}>условия проведения сделки</li>
            </ul>
            <ul className={s.paragraph__list}>
              <div className={s.paragraph}>Статус вашего бронирования отображается:</div>
              <li className={s.paragraph}>в личном кабинете на сайте сервиса jet-flat.com</li>
              <li className={s.paragraph}>в сообщениях по электронной почте ivanova@gmail.com</li>
              <li className={s.paragraph}>в мобильном приложении</li>
            </ul>
            <div className={s.space_between}>
              <button onClick={() => navigate('/lk')}>
                Перейти к бронированию в личный кабинет
              </button>
              <div className={s.row__icons}>
                <DownloadIcon />
                <ShareIcon />
              </div>
            </div>
          </div>
        </div>
        <div className={s.center_text}>
          <div className={s.paragraph}>
            Спасибо, что воспользовались сервисом бронирования и покупки квартир jet-flat.com
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
export default LastStep;
