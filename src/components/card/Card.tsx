import { FC, useLayoutEffect, useRef, useState } from 'react';
import './style.css';

type index = 0 | 1 | 2;
type Props = { index?: index };

const FirstCardStyle: FC<Props> = () => {
  const [size, setSize] = useState([0, 0]);
  const ref = useRef<any>(null);

  useLayoutEffect(() => {
    function updateSize() {
      if (!ref?.current) return;
      setSize([
        ref?.current?.getBoundingClientRect()?.width,
        ref?.current?.getBoundingClientRect()?.height
      ]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="row py40 px20 card_first">
      <div className="border__rightBorder" style={{ height: size[1] }} />
      <div className="border__topBorder" style={{ width: size[0] }} />
      <div className="border__bottomBorder" style={{ width: size[0] }} />
      <div ref={ref} className="card_inner_box relative">
        <div className="ship absolute">32 ЖК в продаже</div>
        <img src={require('../../assets/image/developer.png')} alt="" />
        <div className="card__inner__texts">
          <div className="card_title_inner mb20">Атомстойкомплекс</div>
          <div className="card_desc_inner">Год основания: 1993 г</div>
          <div className="card_desc_inner">Проектов завершено по России: 107 домов</div>
        </div>
      </div>
    </div>
  );
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
