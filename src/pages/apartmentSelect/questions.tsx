import React from 'react';
import { Accord } from '../../components/accordion';

const data = [
  {
    label: 'Как отправить заявку в банк?',
    description:
      'Ответ на вопрос произвольной длины. Грамотно продуманные планировки квартир, с небольшими холлами и коридорами, уютными балконами или лоджиями, изолированными комнатами и кухней.',
    color: 'rgba(175, 98, 197, 0.1)',
    defaultOpen: true
  },
  { label: 'Как забронировать квартиру?', color: 'rgba(175, 98, 197, 0.1)' },
  { label: 'Как оформить ипотеку?', color: 'rgba(175, 98, 197, 0.1)' },
  { label: 'Как получить подтверждение брони?', color: 'rgba(175, 98, 197, 0.1)' },
  { label: 'Как записаться на сделку?', color: 'rgba(175, 98, 197, 0.1)' }
];

export default function Questions() {
  return (
    <div className="full_container">
      <div className="container py80 my70">
        <h2 className="title_head vw-size mb50 ">
          <span>Есть вопросы?</span>
        </h2>
        {data?.map(({ label, color, defaultOpen }) => (
          <Accord
            key={label}
            label={label}
            color={color}
            defaultOpen={defaultOpen}
            description={data[0].description}
          />
        ))}
      </div>
    </div>
  );
}
