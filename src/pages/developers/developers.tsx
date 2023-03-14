import { FC, useState, useMemo } from 'react';
import { Card } from '../../components/card';
import { HistoryLink } from '../../components/historyLink';
import { Select } from '../../components/select/Select';
import Popup from '../apartmentSelect/popup';
import s from './style.module.scss';
type Props = {};

export const Developers: FC<Props> = () => {
  const [selectedIbdex, setSelectedIndex] = useState<number>(0);
  const [arrayLength, setArrayLength] = useState<number>(8);
  const array = useMemo(
    () => Array.from({ length: arrayLength }, (_, key) => <Card key={key} index={0} />),
    [arrayLength]
  );
  return (
    <div className="result_container">
      <div className="container">
        <HistoryLink
          links={[
            { name: 'Екатеринбург', link: '/' },
            { name: 'Застройщики', link: `/developers` }
          ]}
        />
        <div className={s.container}>
          <div className={s.title__row}>
            <div className={s.title}>Все застройщики Екатеринбурга</div>
            <div className={s.head_select}>
              <Select
                options={['Все застройщики', 'Академический']}
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
            Показать еще застройщиков
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
