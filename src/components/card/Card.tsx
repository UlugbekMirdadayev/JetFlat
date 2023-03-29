import { FC, useEffect, useLayoutEffect, useRef, useState, ReactNode } from 'react';
import './style.css';

type index = 0 | 1 | 2;
type Props = {
  index?: index;
  img?: string;
  title?: ReactNode | null | undefined;
  ship?: ReactNode | null | undefined;
  tabs?: ReactNode | null | undefined;
  desc?: ReactNode | null | undefined;
};

const FirstCardStyle: FC<Props> = (props) => {
  const [size, setSize] = useState([0, 0]);
  const ref = useRef<any>(null);
  function updateSize() {
    if (!ref?.current) return;
    setSize([
      ref?.current?.getBoundingClientRect()?.width,
      ref?.current?.getBoundingClientRect()?.height
    ]);
  }
  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    updateSize();
  }, [ref?.current]);

  return (
    <div className="row py40 px20 card_first">
      <div className="border__rightBorder" style={{ height: size[1] }} />
      <div className="border__topBorder" style={{ width: size[0] }} />
      <div className="border__bottomBorder" style={{ width: size[0] }} />
      <div ref={ref} className="card_inner_box relative">
        <div className="ship absolute">{props?.ship || '32 ЖК в продаже'}</div>
        <img src={props?.img || require('../../assets/image/developer.png')} alt="" />
        <div className="card__inner__texts">
          <div className="card_title_inner mb20">{props?.title || 'Атомстойкомплекс'}</div>
          {props?.tabs}

          <div className="card_desc_inner">{props?.desc || 'Год основания: 1993 г'}</div>
          {!props?.desc && (
            <div className="card_desc_inner">Проектов завершено по России: 107 домов</div>
          )}
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

export const Card: FC<Props> = ({ index, ...props }) => {
  return (
    <>
      {index === 0 ? <FirstCardStyle {...props} /> : null}
      {index === 1 ? <SecondCardStyle {...props} /> : null}
      {index === 2 ? <ThirdCardStyle {...props} /> : null}
    </>
  );
};
