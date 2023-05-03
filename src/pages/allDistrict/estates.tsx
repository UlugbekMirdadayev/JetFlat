import { FC, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/card';
import { HistoryLink } from '../../components/historyLink';
import { Select } from '../../components/select/Select';
import Popup from '../apartmentSelect/popup';
import s from './style.module.scss';


type Props = {};

export const AllDistrict: FC<Props> = () => {
  const [selectedIbdex, setSelectedIndex] = useState<number>(0);
  const [arrayLength, setArrayLength] = useState<number>(8);
  const cardProps = {
    ship: '32 ЖК',
    img: require('../../assets/image/ap1.jpg'),
    title: 'Пионерский',
    tabs: <div className={s.row_card_status}>УПИ, парк, близость центра</div>,
    desc: (
      <>
        

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
        <Link key={key} to={'/districts/' + key}>
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
            <div className={s.title}>Все районы Екатеринбурга</div>
            <div className={s.head_select}>
              <Select
                options={['Все районы', 'Екатеринбург']}
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
