import { FC, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../../components/card';
import { HistoryLink } from '../../components/historyLink';
import { Select } from '../../components/select/Select';
import Popup from '../apartmentSelect/popup';
import s from './style.module.scss';
import { ReactComponent as Location } from '../../assets/svg/location-with-border.svg';

type Props = {};

export const Estates: FC<Props> = () => {
  const navigate = useNavigate();
  const [selectedIbdex, setSelectedIndex] = useState<number>(0);
  const [arrayLength, setArrayLength] = useState<number>(8);
  const cardProps = {
    ship: 'Сдан — март 2022',
    img: require('../../assets/image/ap1.jpg'),
    title: 'River Park',
    tabs: (
      <div className={s.card__tabs + ' card_desc_inner'}>
        <div
          className={s.card__tabs__elit}
          onClick={(e) => {
            e.preventDefault();
            navigate('/library/classes/elit');
          }}>
          Элит
        </div>
        <div
          className={s.card__tabs__gray}
          onClick={(e) => {
            e.preventDefault();
            navigate('/library/classes/standart');
          }}>
          Стандарт
        </div>
      </div>
    ),
    desc: (
      <>
        <div className={s.row_card_location}>
          <p>Центр</p>
          <Location />
        </div>
        <div className={s.row_card_status}>Преимущество</div>
        {[1, 2, 3, 4].map((_) => (
          <div key={_} className={s.row_card_text}>
            <span>1 к</span>
            <div>32-56 м2</div>
            <div>2,2-3,4 млн₽</div>
          </div>
        ))}
      </>
    )
  };
  const array = useMemo(
    () =>
      Array.from({ length: arrayLength }, (_, key) => (
        <Link key={key} to={'/residential-estates/' + key}>
          <Card index={0} {...cardProps} />
        </Link>
      )),
    [arrayLength]
  );
  return (
    <div className="result_container">
      <div className="container">
        <HistoryLink
          links={[
            { name: 'Екатеринбург', link: '/districts/Екатеринбург' },
            { name: 'Жилые комплексы', link: `/residential-estates` }
          ]}
        />
        <div className={s.container}>
          <div className={s.title__row}>
            <div className={s.title}>Все жилые комплексы Екатеринбурга</div>
            <div className={s.head_select}>
              <Select
                options={['Все ЖК', 'Екатеринбург']}
                selectedIbdex={selectedIbdex}
                setSelectedIndex={(n) => {
                  setSelectedIndex(n);
                  setArrayLength(n ? 3 : 5);
                }}
              />
            </div>
          </div>
          <div className={s.desc}>
            Характеристика районов поможет определиться с местом проживания
          </div>

          <div className={s.card__container}>{array}</div>
          <button onClick={() => setArrayLength((n) => n + 4)} className={s.btn__all}>
            Показать еще ЖК
          </button>
        </div>
      </div>
      <Popup
        title="Ваше спокойствие- наш приоритет"
        desc={
          <span className={s.popup_dec}>
            Добавьте свою новостройку и получайте заявки на бронирование квартир онлайн
          </span>
        }
        btn="Зарегистрировать свою новостройку"
      />
    </div>
  );
};
