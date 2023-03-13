import { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HistoryLink } from '../../components/historyLink';
import { ReactComponent as ListIcon } from '../../assets/svg/list.svg';
import { ReactComponent as ShahmatIcon } from '../../assets/svg/shahmat.svg';
import './style.css';
import Popup from './popup';
import Calculator from './calculator';
import TermsPurchase from './termsPurchase';
import Similars from './Similars';
import Questions from './questions';
import Lists from './lists';
import { Chess } from '../../components/chess';

export const ApartmentSelect = () => {
  const { id } = useParams();
  const [openChess, setOpenChess] = useState(false);
  const scrollElement = useRef<any>(null);

  const handleChangeScreen = () => {
    setOpenChess(!openChess);
    scrollElement.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };
  return (
    <div className="result_container apartment">
      <div className="container">
        <HistoryLink
          links={[
            { name: 'Жилые комплексы', link: '/residential-complexes' },
            { name: 'Зелёный остров', link: '/#residential-complexes' },
            { name: 'Выбор квартиры', link: `/apartment/${id}` }
          ]}
        />
        <div className="row space-between md-col mb50 md-mb-40">
          <div className="align-items-center">
            <h2 className="title_head">
              <span>ЖК Зелёный остров:</span> выбор квартиры
            </h2>
          </div>
          <div className="row lg-gap-20 apartment_head_row align-items-center sm-fld-column-reverse">
            <div className="row lg-gap-20 sm-mt-20 sm-fld-column">
              <Link to={'/residential-complexes'}>
                <button className="outline-primary py19 px40 btn-head-row">
                  <span className="button_inner  weight600">Вернуться к ЖК</span>
                </button>
              </Link>
              <button className="outline-primary  py19 px40 btn-head-row">
                <span className="button_inner weight600">Ипотечный калькулятор</span>
              </button>
            </div>
            <div className="row align-items-center lg-gap-20 ">
              <button className="tr-btn">
                <ListIcon />
              </button>
              <button className="tr-btn">
                <ShahmatIcon />
              </button>
            </div>
          </div>
        </div>
        <div ref={scrollElement}>{openChess ? <Chess /> : <Lists />}</div>
        <div className="row space-evenly my80 md-space-between sm-fld-column">
          {!openChess && (
            <button className="row green_btn py15 px80">
              <span className="f24 white_color">Показать еще</span>
            </button>
          )}
          <button className="row green_btn py15 px80" onClick={handleChangeScreen}>
            <span className="f24 white_color">
              {openChess ? 'Посмотреть списком' : 'Посмотреть на шахматке'}
            </span>
          </button>
        </div>
      </div>
      <Popup title={'Не нашли подходящего варианта?'} />
      <Calculator />
      <TermsPurchase />
      <Similars />
      <Questions />
      <Popup title="Не нашли ответ на вопрос?" />
    </div>
  );
};
