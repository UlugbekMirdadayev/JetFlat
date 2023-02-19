import React, { useState } from 'react';
import { Button } from '../../components/button';
import { Search } from '../../components/filters/Search';
import { HistoryLink } from '../../components/historyLink';
import { Select } from '../../components/select/Select';
import './style.css';
import { ReactComponent as Minus } from '../../assets/svg/minus.svg';
import { ReactComponent as Plus } from '../../assets/svg/plus.svg';
import { ReactComponent as Like } from '../../assets/svg/like.svg';
import { ReactComponent as Location } from '../../assets/svg/geolocation.svg';
import { Checkbox } from '../../components/checkbox';
import { ArrowRightIcon, ChartIcon, HeartIcon } from '../../assets';
import SalePopup from './salePopup';
const checkboxes = [
  {
    title: 'Предыдущие фильтры',
    boxes: ['Яхт-клуб', 'Подземный паркинг', 'Озеленение', 'Пентхаус', 'Студия', 'Двухуровневая']
  },
  {
    title: 'Популярные фильтры',
    boxes: [
      'Дом сдан',
      'Сдача 2022 год',
      'Озеленение',
      'Детская площадка',
      'Студия',
      'Подземный паркинг'
    ]
  },
  {
    title: 'Срок сдачи дома',
    boxes: ['Дом сдан', 'Сдача 2022 год', 'Сдача 2023 год', 'Сдача 2024 и позднее']
  },
  {
    title: 'Безопасность сделки',
    boxes: ['ДДУ / счета ЭСКРОУ', 'ДДУ / счета ЭСКРОУ', 'ДКП-договор купли-продажи']
  },
  {
    title: 'Варианты отделки',
    boxes: ['С отделкой', 'Без отделки']
  },
  {
    title: 'Классы домов',
    boxes: [
      'ДДУ / счета ЭСКРОУ',
      'ДДУ / счета ЭСКРОУ',
      'ДКП-договор купли-продажи',
      'Сдача 2024 и позднее'
    ]
  },
  {
    title: 'Тип планировки',
    boxes: [
      'ДДУ / счета ЭСКРОУ',
      'ДДУ / счета ЭСКРОУ',
      'ДКП-договор купли-продажи',
      'Сдача 2024 и позднее',
      'Студия',
      'Подземный паркинг'
    ]
  },
  {
    title: 'Застройщики',
    boxes: [
      'ДДУ / счета ЭСКРОУ',
      'ДДУ / счета ЭСКРОУ',
      'ДКП-договор купли-продажи',
      'Сдача 2024 и позднее',
      'Студия'
    ],
    others: true
  },
  {
    title: 'Дополнительные возможности в доме',
    boxes: [
      'ДДУ / счета ЭСКРОУ',
      'ДДУ / счета ЭСКРОУ',
      'ДКП-договор купли-продажи',
      'Закрытый двор/видеонаблюдение',
      'Студия'
    ],
    others: true
  },
  {
    title: 'Функционал квартиры',
    boxes: [
      'ДДУ / счета ЭСКРОУ',
      'ДДУ / счета ЭСКРОУ',
      'ДКП-договор купли-продажи',
      'Закрытый двор/видеонаблюдение',
      'Студия'
    ],
    others: true
  }
];
export const ResultSearch = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="result_container">
      <div className="container">
        <HistoryLink links={[{ name: 'Результат поиска', link: '/result' }]} />
        <div className="row_result">
          <div className="title_result">
            <h2>
              <span>ВИЗ:</span> найдено 15 жилых комплексов
            </h2>
          </div>
          <div className="row_result">
            <Button variant={'outlined'}>
              <span className="inner_btn text_trans_none">Характеристика района</span>
            </Button>
            <Button variant={'outlined'}>
              <span className="inner_btn">показать на карте</span>
            </Button>
          </div>
        </div>
        <div className="location_inner">
          <span>Ориентиры поблизости:</span> Яхт-клуб, Центральный стадион, Гимназия № 2, Брайт ФИТ
        </div>
        <div className="row_container">
          <div className="space">
            <div className="card_left">
              <div className="row_result heading_row">
                <h3>Найти</h3>
                <button>Очистить</button>
              </div>
              <div className="label">Город</div>
              <Select
                options={['Выберите город']}
                selectedIbdex={index}
                setSelectedIndex={setIndex}
              />
              <div className="label">Район города или ЖК</div>
              <div className="search_inp">
                <Search />
              </div>
              <div className="label">Ценовой диапазон, ₽</div>
              <div className="row_result">
                <div className="row_calc">
                  <Button>
                    <Minus />
                  </Button>
                  <span>от</span>
                  <Button>
                    <Plus />
                  </Button>
                </div>
                <div className="row_calc">
                  <Button>
                    <Minus />
                  </Button>
                  <span>123 000 000</span>
                  <Button>
                    <Plus />
                  </Button>
                </div>
              </div>
              <div className="label">Количество комнат</div>
              <div className="row_result">
                {[...Array(6)].map((_, key) => (
                  <div key={key} className={`${key === 2 ? 'active' : ''} box_quadrad`}>
                    {key === 5 ? '5 +' : key + 1}
                  </div>
                ))}
              </div>
              <div className="label">Тип планировки</div>
              <Select options={['тип любой']} selectedIbdex={index} setSelectedIndex={setIndex} />
              <div className="label">Ипотечное кредитование</div>
              <Select options={['без ипотеки']} selectedIbdex={index} setSelectedIndex={setIndex} />
              <label className="checkbox_row">
                <Checkbox /> <span className="label_span">Готовые квартиры</span>
              </label>
              <button className="submitter_btn">Применить</button>
            </div>
            {checkboxes.map((item, key) => (
              <div key={key} className="card_left">
                <div className="title_card mb20">{item.title}</div>
                {item.boxes.map((name, boxKey) => (
                  <label key={boxKey} className="checkbox_row mb10">
                    <Checkbox /> <span className="label_span pl10">{name}</span>
                  </label>
                ))}
                {item.others && <button className="other_filter_btn">Посмотреть другие</button>}
              </div>
            ))}
          </div>
          <div className="between">
            <div className="row_result mb50">
              <Button variant="outlined">
                <span className="inner_btn text_trans_none">Мы рекомендуем</span>
              </Button>
              <Button className="flex_custome" variant="outlined">
                <span className="inner_btn text_trans_none">По сроку сдачи (сначала готовые)</span>
              </Button>
              <Button className="flex_custome" variant="outlined">
                <span className="inner_btn text_trans_none">МПо цене (сначала низкая)</span>
              </Button>
              <Button variant="outlined">
                <span className="inner_btn text_trans_none">...</span>
              </Button>
            </div>

            <div className="card_right">
              <div className="row_result">
                <div className="space">
                  <div className="card_col">
                    <div className="ship">март 2023</div>
                    <img src={require('../../assets/image/popular-big.jpg')} alt="" />
                  </div>
                  <button>
                    <span>ПИК</span>
                  </button>
                </div>
                <div className="infos_card">
                  <div className="row_result">
                    <div className="title_">Зеленый остров</div>
                    <div className="row_result">
                      <button className="like_btn">
                        <Like />
                      </button>
                      <div className="col_text">
                        <h3>8,5</h3>
                        <p>41 отзыв</p>
                      </div>
                      <button className="chart_icon">
                        <ChartIcon />
                      </button>
                      <button className="heart_icon">
                        <HeartIcon />
                      </button>
                    </div>
                  </div>
                  <div className="tab_btn">
                    <button>Стандарт</button>
                    <button>Комфорт</button>
                  </div>
                  <div className="row_result mb20">
                    <div className="row_result">
                      <button className="location_btn">
                        <Location />
                      </button>
                      <div className="text_info">
                        <span>ВИЗ</span> - 21 км от центра
                      </div>
                    </div>
                  </div>
                  <div className="row_result align_end mb15">
                    <div className="blue_btn__">Одна полоска произвольной длины</div>
                    <p>2-комнатная, европланировка</p>
                  </div>
                  <div className="row_result align_end mb15">
                    <p>
                      Преимущество номер один примерно такой длины, описание и характеристика на 2
                      строки
                    </p>
                    <div className="col_price_">
                      <p>52 м2, дом 1, 2 этаж</p>
                      <div className="price_">
                        <span>4 985 590₽</span> <b>4 785 590₽</b>
                      </div>
                    </div>
                  </div>
                  <div className="row_result align_end mb15">
                    <Button className="btn_outlined" variant="outlined">
                      <span>Посмотреть квартиры</span>
                    </Button>
                    <div className="col_price_ text_right">
                      Осталось всего 2 варианта <br /> этой планировки
                    </div>
                  </div>
                  <div className="sale_text">Акции для зарегистрированных пользователей!</div>
                </div>
              </div>
            </div>
            <div className="card_right">
              <div className="row_result">
                <div className="space">
                  <div className="card_col">
                    <div className="ship">март 2023</div>
                    <img src={require('../../assets/image/popular-big.jpg')} alt="" />
                  </div>
                  <button>
                    <span>ПИК</span>
                  </button>
                </div>
                <div className="infos_card">
                  <div className="row_result">
                    <div className="title_">Зеленый остров</div>
                    <div className="row_result">
                      <button className="like_btn">
                        <Like />
                      </button>
                      <div className="col_text">
                        <h3>8,5</h3>
                        <p>41 отзыв</p>
                      </div>
                      <button className="chart_icon">
                        <ChartIcon />
                      </button>
                      <button className="heart_icon">
                        <HeartIcon />
                      </button>
                    </div>
                  </div>
                  <div className="tab_btn">
                    <button>Стандарт</button>
                    <button>Комфорт</button>
                  </div>
                  <div className="row_result mb20">
                    <div className="row_result">
                      <button className="location_btn">
                        <Location />
                      </button>
                      <div className="text_info">
                        <span>ВИЗ</span> - 21 км от центра
                      </div>
                    </div>
                  </div>
                  <div className="row_result align_end mb15">
                    <div className="blue_btn__">Одна полоска произвольной длины</div>
                    <p>2-комнатная, европланировка</p>
                  </div>
                  <div className="row_result align_end mb15">
                    <p>
                      Преимущество номер один примерно такой длины, описание и характеристика на 2
                      строки
                    </p>
                    <div className="col_price_">
                      <p>52 м2, дом 1, 2 этаж</p>
                      <div className="price_">
                        <span>4 985 590₽</span> <b>4 785 590₽</b>
                      </div>
                    </div>
                  </div>
                  <div className="row_result align_end mb15">
                    <Button className="btn_outlined" variant="outlined">
                      <span>Посмотреть квартиры</span>
                    </Button>
                    <div className="col_price_ text_right">
                      Осталось всего 2 варианта <br /> этой планировки
                    </div>
                  </div>
                  <div className="sale_text">Акции для зарегистрированных пользователей!</div>
                </div>
              </div>
            </div>
            <div className="pagination_bar mb50">
              <div className="row_result">
                <div className="row_result">
                  <ArrowRightIcon className="disabled" />
                  <div className="text disabled">Назад</div>
                  <div className="text_info">Страница 1</div>
                  <div className="text">Далее</div>
                  <ArrowRightIcon />
                </div>
                <div className="row_result">
                  <p className="disabled">Показаны 1–20 из 25 </p>
                  <div className="text ml10">Показать еще</div>
                </div>
              </div>
            </div>
            <SalePopup />
          </div>
        </div>
      </div>
    </div>
  );
};
