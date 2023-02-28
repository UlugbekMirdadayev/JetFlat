import { useParams } from 'react-router-dom';
import { HistoryLink } from '../../components/historyLink';
import { ReactComponent as ListIcon } from '../../assets/svg/list.svg';
import { ReactComponent as ShahmatIcon } from '../../assets/svg/shahmat.svg';
import { ReactComponent as MinusIcon } from '../../assets/svg/minus.svg';
import { ReactComponent as InfoIcon } from '../../assets/svg/info.svg';
import { ReactComponent as DownloadIcon } from '../../assets/svg/download.svg';
import { ReactComponent as ShareIcon } from '../../assets/svg/share.svg';
import { ChartIcon, HeartIcon } from '../../assets';
import './style.css';
import { Select } from '../../components/select/Select';
import { Button } from '../../components/button';
import Popup from './popup';
import Calculator from './calculator';
import TermsPurchase from './termsPurchase';
import Similars from './Similars';
import Questions from './questions';

export const ApartmentSelect = () => {
  const { id } = useParams();
  return (
    <div className="result_container">
      <div className="container">
        <HistoryLink
          links={[
            { name: 'Жилые комплексы', link: '/residential-complexes' },
            { name: 'Зелёный остров', link: '/#residential-complexes' },
            { name: 'Выбор квартиры', link: `/apartment/${id}` }
          ]}
        />
        <div className="row space-between mb50">
          <div className="align-items-center">
            <h2 className="title_head">
              <span>ЖК Зелёный остров:</span> выбор квартиры
            </h2>
          </div>
          <div className="row lg-gap-20 align-items-center">
            <button className="outline-primary py19 px40 btn-head-row">
              <span className="button_inner  weight600">Вернуться к ЖК</span>
            </button>
            <button className="outline-primary  py19 px40 btn-head-row">
              <span className="button_inner weight600">Ипотечный калькулятор</span>
            </button>
            <button className="tr-btn">
              <ListIcon />
            </button>
            <button className="tr-btn">
              <ShahmatIcon />
            </button>
          </div>
        </div>
        <div className="grid_col_5 mb50 ">
          <div className="column_label">
            <div className="f17 desc__text">Ценовой диапазон, ₽</div>
            <div className="teal_bg row align-items-center mt18 space-between">
              <p className="fs18 weight600">4 200 000</p>
              <MinusIcon className="minus_icon__" strokeWidth={2} />
              <p className="fs18 weight600">4 200 000</p>
            </div>
          </div>
          <div className="column_label">
            <div className="f17 desc__text">Дом или корпус</div>
            <div className="mt18 select__head">
              <Select
                options={['Дом или корпус , дом 1']}
                selectedIbdex={0}
                setSelectedIndex={(e) => e}
              />
            </div>
          </div>
          <div className="column_label">
            <div className="f17 desc__text">Тип планировки</div>
            <div className="mt18 select__head">
              <Select
                options={['Тип планировки , дом 1']}
                selectedIbdex={0}
                setSelectedIndex={(e) => e}
              />
            </div>
          </div>
          <div className="column_label">
            <div className="f17 desc__text">Количество комнат</div>
            <div className="mt18 select__head">
              <Select
                options={['Дом или корпус , дом 1']}
                selectedIbdex={0}
                setSelectedIndex={(e) => e}
              />
            </div>
          </div>
          <div className="column_label">
            <div className="f17 desc__text small_text">
              <span>*Информация актуальна на 05.02.2022</span>
            </div>
            <div className="mt10">
              <Button variant="outlined" className="full___btn">
                <span className="button_inner">Применить</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="grid_col_5 gap-0 indexes_custome_grid align-start">
          <div className="grid_item">
            <div className="col_title align-center button_inner weight600">Квартира</div>
            <div className="column_block">
              <div className="desc__text">2-комнатная, планировка А</div>
              <div className="row align-items-center space-between">
                <div className="desc__text gray_label">Европланировка</div>
                <div className="f14 teal_color">С отделкой</div>
              </div>
              <div className="row align-items-center space-between">
                <div className="desc__text weight600 gray_color">№ 12345</div>
                <div className="desc__text weight600">53,8 м2</div>
              </div>
              <div className="plan_place">
                <img src={require('../../assets/image/plan.png')} alt="" />
              </div>
              <div className="row align-items-center space-between">
                <div className="f14 teal_color underline">Расположение на этаже</div>
                <div className="f14 teal_color underline">Подробнее</div>
              </div>
            </div>
          </div>
          <div className="grid_item">
            <div className="col_title align-center button_inner weight600">Стоимость</div>
            <div className="column_block">
              <div className="fld-column">
                <div className="f28 orange_color weight600">4 785 590₽</div>
                <div className="f14 gray_color weight400 line-through">4 985 590₽</div>
              </div>
              <div className="desc__text">88 000₽/м2</div>
              <div className="f14 teal_color">Выбрать отделку</div>
              <div className="desc__text">
                Отделка <span className="teal_color">Премиум</span> 847 325 руб. 15 750 руб./м2
              </div>
              <div className="desc__text">Итого с отделкой:</div>
              <div className="f28 orange_color weight600">5 632 915₽</div>
              <div className="desc__text">103 750₽/м2</div>
              <div className="small_text">
                *Цена фиксируется на время получения одобрения по ипотеке ипродажи вашей квартиры по
                Trade-in
              </div>
            </div>
          </div>
          <div className="grid_item">
            <div className="col_title align-center button_inner weight600">Информация</div>
            <div className="column_block">
              <div className="desc__text teal_color weight600">ЖК Зеленый остров</div>
              <div className="fld-column">
                <div className="row space-between align-items-center">
                  <div className="desc__text teal_color weight600">Дом 2</div>
                  <button className="mini-btn-orange tr-btn">
                    <span className="orange_color weight700 f14">ПИК</span>
                  </button>
                </div>
                <div className="row">
                  <button className="green-yellow desc__text weight500 white_color py10 px30">
                    Комфорт
                  </button>
                </div>
              </div>

              <div className="desc__text">1 подъезд / 18 этажей</div>
              <div className="f14 text_f14">Монолит</div>
              <div className="f14 text_f14">Сдан — март 2022</div>
              <div className="f14 text_f14">Высота потолков 2,65 м</div>
              <div className="f14 text_f14">Окна на улицу и во двор</div>
              <div className="desc__text">ДКП</div>
              <div className="desc__text">
                Ипотека от банков: Сбер, ВТБ, Абсолют, Газпром, Открытие
              </div>
              <div className="f14 teal_color underline">Зачет вторичного жилья / Trade-in</div>
            </div>
          </div>
          <div className="grid_item">
            <div className="col_title align-center button_inner weight600">Этаж</div>
            <div className="column_block select__head">
              <Select
                options={['4 этаж', '10 этаж', 'Продажа от физлица']}
                selectedIbdex={0}
                setSelectedIndex={(e) => e}
              />
            </div>
          </div>
          <div className="grid_item">
            <div className="col_title align-center button_inner weight600">
              Бронирование квартиры
            </div>
            <div className="column_block">
              <div className="row green_icons gap20">
                <InfoIcon />
                <HeartIcon />
                <ChartIcon />
                <DownloadIcon />
                <ShareIcon />
              </div>
              <div className="f18 orange_color desc__text weight600">Осталось всего 5 квартир!</div>
              <div className="relative">
                <Button variant="orange" className="full___btn py19">
                  <span className="desc__text weight600">Забронировать</span>
                </Button>
                <div className="popup_absolute">
                  <div className="desc__text">
                    Бронь действует 24 часа с момента подтверждения заявки. Для установки брони на
                    более длительный срок укажите это в примечании при подаче заявки.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid_col_5 gap-0 indexes_custome_grid align-start">
          <div className="grid_item">
            <div className="column_block">
              <div className="desc__text">2-комнатная, планировка А</div>
              <div className="row align-items-center space-between">
                <div className="desc__text gray_label">Европланировка</div>
                <div className="f14 teal_color">С отделкой</div>
              </div>
              <div className="row align-items-center space-between">
                <div className="desc__text weight600 gray_color">№ 12345</div>
                <div className="desc__text weight600">53,8 м2</div>
              </div>
              <div className="plan_place">
                <img src={require('../../assets/image/plan.png')} alt="" />
              </div>
              <div className="row align-items-center space-between">
                <div className="f14 teal_color underline">Расположение на этаже</div>
                <div className="f14 teal_color underline">Подробнее</div>
              </div>
            </div>
          </div>
          <div className="grid_item">
            <div className="column_block space-between">
              <div className="fld-column gap20">
                <div className="fld-column">
                  <div className="f28 orange_color weight600">4 785 590₽</div>
                  <div className="f14 gray_color weight400 line-through">4 985 590₽</div>
                </div>
                <div className="desc__text">88 000₽/м2</div>
                <div className="f14 teal_color">Выбрать отделку</div>
              </div>
              <div className="small_text">
                *Цена фиксируется на время получения одобрения по ипотеке ипродажи вашей квартиры по
                Trade-in
              </div>
            </div>
          </div>
          <div className="grid_item">
            <div className="column_block">
              <div className="desc__text teal_color weight600">ЖК Зеленый остров</div>
              <div className="fld-column">
                <div className="row space-between align-items-center">
                  <div className="desc__text teal_color weight600">Дом 2</div>
                  <button className="mini-btn-orange tr-btn">
                    <span className="orange_color weight700 f14">ПИК</span>
                  </button>
                </div>
                <div className="row">
                  <button className="green-yellow desc__text weight500 white_color py10 px30">
                    Комфорт
                  </button>
                </div>
              </div>

              <div className="desc__text">1 подъезд / 18 этажей</div>
              <div className="f14 text_f14">Монолит</div>
              <div className="f14 text_f14">Сдан — март 2022</div>
              <div className="f14 text_f14">Высота потолков 2,65 м</div>
              <div className="f14 text_f14">Окна на улицу и во двор</div>
              <div className="desc__text">ДКП</div>
              <div className="desc__text">
                Ипотека от банков: Сбер, ВТБ, Абсолют, Газпром, Открытие
              </div>
              <div className="f14 teal_color underline">Зачет вторичного жилья / Trade-in</div>
            </div>
          </div>
          <div className="grid_item">
            <div className="column_block select__head">
              <Select
                options={['4 этаж', '10 этаж', 'Продажа от физлица']}
                selectedIbdex={0}
                setSelectedIndex={(e) => e}
              />
            </div>
          </div>
          <div className="grid_item">
            <div className="column_block">
              <div className="row green_icons gap20">
                <InfoIcon />
                <HeartIcon />
                <ChartIcon />
                <DownloadIcon />
                <ShareIcon />
              </div>
              <div className="f18 orange_color desc__text weight600">Осталось всего 5 квартир!</div>
              <div className="relative">
                <Button variant="orange" className="full___btn py19">
                  <span className="desc__text weight600">Забронировать</span>
                </Button>
                <div className="popup_absolute">
                  <div className="desc__text">
                    Бронь действует 24 часа с момента подтверждения заявки. Для установки брони на
                    более длительный срок укажите это в примечании при подаче заявки.
                  </div>
                </div>
              </div>
              <div className="gray_color desc__text weight600">
                *Цена фиксируется при бронировании
              </div>
              <div className="small_text">
                Бронь действует 24 часа с момента подтверждения заявки. Для установки брони на более
                длительный срок укажите это в примечании при подаче заявки.
              </div>
              <div className="f14 text_f14">Процесс бронирования займет 3 минуты</div>
              <div className="f14 text_f14">Бронирование на сайте jet-flat.com бесплатно.</div>
            </div>
          </div>
        </div>
        <div className="row space-evenly my80">
          <button className="row green_btn py15 px80">
            <span className="f24 white_color">Показать еще</span>
          </button>
          <button className="row green_btn py15 px80">
            <span className="f24 white_color">Посмотреть на шахматке</span>
          </button>
        </div>
      </div>
      <Popup />
      <Calculator />
      <TermsPurchase />
      <Similars />
      <Questions />
    </div>
  );
};
