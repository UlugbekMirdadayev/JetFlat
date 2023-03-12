import { FC } from 'react';
import { Accord } from '../../components/accordion';
import { HistoryLink } from '../../components/historyLink';
import s from './style.module.scss';

type Props = {};

const array = [
  {
    defaultOpen: true,
    color: '#CEEEEF',
    label: 'Раздел номер один',
    description:
      'Грамотно продуманные планировки квартир, с небольшими холлами и коридорами, уютными балконами или лоджиями, изолированными комнатами и кухней. В этом классе жилья, как правило, во всех квартирах один санузел, часто совмещённый.'
  },
  {
    color: '#CEEEEF',
    label: 'Раздел номер два с длинным заголовком',
    description:
      'Грамотно продуманные планировки квартир, с небольшими холлами и коридорами, уютными балконами или лоджиями, изолированными комнатами и кухней.'
  },
  {
    color: '#CEEEEF',
    label: 'Раздел номер три с еще более длинным заголовком',
    description:
      'Грамотно продуманные планировки квартир, с небольшими холлами и коридорами, уютными балконами или лоджиями, изолированными комнатами и кухней. В этом классе жилья, как правило, во всех квартирах один санузел, часто совмещённый.  В этом классе жилья, как правило, во всех квартирах один санузел, часто совмещённый.'
  },
  {
    color: '#CEEEEF',
    label: 'Раздел 4',
    description: 'Грамотно продуманные планировки квартир, с небольшими холлами и коридорами.'
  }
];

export const Library: FC<Props> = () => {
  return (
    <div className="result_container">
      <div className="container">
        <HistoryLink links={[{ name: 'Библиотека', link: `/library` }]} />
        <div className={s.container}>
          <div className={s.title}>Библиотека список всех разделов</div>
          {array.map((item, key) => (
            <Accord key={key} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
