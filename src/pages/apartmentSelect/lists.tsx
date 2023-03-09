import React from 'react';
import { ReactComponent as MinusIcon } from '../../assets/svg/minus.svg';
import { ReactComponent as InfoIcon } from '../../assets/svg/info.svg';
import { ReactComponent as DownloadIcon } from '../../assets/svg/download.svg';
import { ReactComponent as ShareIcon } from '../../assets/svg/share.svg';
import { ChartIcon, HeartIcon } from '../../assets';
import { Select } from '../../components/select/Select';
import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';

export default function Lists() {
  const navigate = useNavigate();
  return (
    <>
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
          <div className="col_title align-center button_inner weight600 md-d-flex">Квартира</div>
          <div className="column_block">
            <div className="desc__text">2-комнатная, планировка А</div>
            <div className="row align-items-center space-between">
              <div className="desc__text gray_label">Европланировка</div>
              <div className="f14 teal_color">С отделкой</div>
            </div>
            <div className="row align-items-center space-between">
              <div className="desc__text weight600 md-f18 gray_color">№ 12345</div>
              <div className="desc__text md-f18 weight600">53,8 м2</div>
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
          <div className="col_title align-center button_inner weight600 md-d-flex">Стоимость</div>
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
          <div className="col_title align-center button_inner weight600 md-d-flex">Информация</div>
          <div className="column_block">
            <div className="desc__text teal_color md-f22 weight600">ЖК Зеленый остров</div>
            <div className="fld-column">
              <div className="row space-between align-items-center sm-justify-start">
                <div className="desc__text teal_color weight600 sm-black_color">Дом 2</div>
                <button className="mini-btn-orange tr-btn sm-d-none">
                  <span className="orange_color weight700 f14">ПИК</span>
                </button>
              </div>
              <div className="row sm-mt-15">
                <button className="green-yellow desc__text weight500 white_color py10 px30">
                  Комфорт
                </button>
                <div className="d-none sm-d-block">
                  <button className="mini-btn-orange tr-btn">
                    <span className="orange_color weight700 f14 ">ПИК</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="desc__text">1 подъезд / 18 этажей</div>
            <div className="f14 text_f14">Монолит</div>
            <div className="f14 text_f14">Сдан — март 2022</div>
            <div className="f14 text_f14">Высота потолков 2,65 м</div>
            <div className="f14 text_f14">Окна на улицу и во двор</div>
            <div className="desc__text">ДКП</div>
            <div className="desc__text sm-teal_color">
              Ипотека от банков: Сбер, ВТБ, Абсолют, Газпром, Открытие
            </div>
            <div className="f14 teal_color underline">Зачет вторичного жилья / Trade-in</div>
          </div>
        </div>
        <div className="grid_item">
          <div className="col_title align-center button_inner weight600 md-d-flex">Этаж</div>
          <div className="column_block select__head">
            <Select
              options={['4 этаж', '10 этаж', 'Продажа от физлица']}
              selectedIbdex={0}
              setSelectedIndex={(e) => e}
            />
          </div>
        </div>
        <div className="grid_item">
          <div className="col_title align-center button_inner weight600 md-d-flex">
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
              <Button variant="orange" className="full___btn py19"  onClick={() => navigate('/booking/:id')}>
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
          <div className="col_title align-center button_inner weight600 d-none md-d-flex">
            Квартира
          </div>
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
          <div className="col_title align-center button_inner weight600 d-none md-d-flex">
            Стоимость
          </div>
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
          <div className="col_title align-center button_inner weight600 d-none md-d-flex">Этаж</div>
          <div className="column_block">
            <div className="desc__text teal_color  md-f22 weight600">ЖК Зеленый остров</div>
            <div className="fld-column">
              <div className="row space-between align-items-center sm-justify-start">
                <div className="desc__text teal_color weight600 sm-black_color">Дом 2</div>
                <button className="mini-btn-orange tr-btn sm-d-none">
                  <span className="orange_color weight700 f14 ">ПИК</span>
                </button>
              </div>
              <div className="row sm-mt-15">
                <button className="green-yellow desc__text weight500 white_color py10 px30">
                  Комфорт
                </button>
                <div className="d-none sm-d-block">
                  <button className="mini-btn-orange tr-btn">
                    <span className="orange_color weight700 f14 ">ПИК</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="desc__text">1 подъезд / 18 этажей</div>
            <div className="f14 text_f14">Монолит</div>
            <div className="f14 text_f14">Сдан — март 2022</div>
            <div className="f14 text_f14">Высота потолков 2,65 м</div>
            <div className="f14 text_f14">Окна на улицу и во двор</div>
            <div className="desc__text">ДКП</div>
            <div className="desc__text sm-teal_color">
              Ипотека от банков: Сбер, ВТБ, Абсолют, Газпром, Открытие
            </div>
            <div className="f14 teal_color underline">Зачет вторичного жилья / Trade-in</div>
          </div>
        </div>
        <div className="grid_item">
          <div className="col_title align-center button_inner weight600 d-none md-d-flex">
            Информация
          </div>
          <div className="column_block select__head">
            <Select
              options={['4 этаж', '10 этаж', 'Продажа от физлица']}
              selectedIbdex={0}
              setSelectedIndex={(e) => e}
            />
          </div>
        </div>
        <div className="grid_item">
          <div className="col_title align-center button_inner weight600 d-none md-d-flex">
            Бронирование
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
              <Button
                variant="orange"
                className="full___btn py19"
                onClick={() => navigate('/booking/:id')}>
                <span className="desc__text weight600">Забронировать</span>
              </Button>
              <div className="popup_absolute">
                <div className="desc__text">
                  Бронь действует 24 часа с момента подтверждения заявки. Для установки брони на
                  более длительный срок укажите это в примечании при подаче заявки.
                </div>
              </div>
            </div>
            <div className="gray_color desc__text weight600 sm-mt-15">
              *Цена фиксируется при бронировании
            </div>
            <div className="small_text sm-mt-15">
              Бронь действует 24 часа с момента подтверждения заявки. Для установки брони на более
              длительный срок укажите это в примечании при подаче заявки.
            </div>
            <div className="f14 text_f14">Процесс бронирования займет 3 минуты</div>
            <div className="f14 text_f14">Бронирование на сайте jet-flat.com бесплатно.</div>
          </div>
        </div>
      </div>
    </>
  );
}
