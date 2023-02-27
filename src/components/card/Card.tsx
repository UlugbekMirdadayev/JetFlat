import { FC } from 'react';
import './style.css';

type index = 0 | 1 | 2;

type Props = {
  className?: string;
  index?: index;
};
const FirstCardStyle: FC<Props> = () => {
  return <div></div>;
};

const SecondCardStyle: FC<Props> = () => {
  return <div></div>;
};

const ThirdCardStyle: FC<Props> = () => {
  return (
    <div className="row py40 px20 card_third">
      <div className="border__rightBorder" />
      <div className="border__topBorder" />
      <div className="border__bottomBorder" />
      <div className="card_inner_box row">
        <img src={require('../../assets/image/ap1.jpg')} alt="" />
        <div className="card__inner__texts">
          <div className="ship">Есть сданные</div>
          <div className="card_title_inner mb20">Discovery Residence</div>
          <div className="card_desc_inner">Здесь будет ваш текст любого объёма</div>
        </div>
      </div>
    </div>
  );
};

export const Card: FC<Props> = ({ index }) => {
  return (
    <>
      {index === 0 ? <FirstCardStyle /> : null}
      {index === 1 ? <SecondCardStyle /> : null}
      {index === 2 ? <ThirdCardStyle /> : null}
    </>
  );
};
