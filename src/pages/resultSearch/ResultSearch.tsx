import React, { useState, useRef, useCallback } from 'react';
import { Button } from '../../components/button';
import { Search } from '../../components/filters/Search';
import { HistoryLink } from '../../components/historyLink';
import { Select } from '../../components/select/Select';
import './style.css';
import { ReactComponent as Minus } from '../../assets/svg/minus.svg';
import { ReactComponent as Plus } from '../../assets/svg/plus.svg';
import { ReactComponent as Like } from '../../assets/svg/like.svg';
import { ReactComponent as Location } from '../../assets/svg/geolocation.svg';
import { ReactComponent as FilterIcon } from '../../assets/svg/filters.svg';
import { ReactComponent as FiltersIcon } from '../../assets/svg/filter.svg';
import { ReactComponent as AccordArrow } from '../../assets/svg/arrow-down.svg';
import { ReactComponent as SortIcon } from '../../assets/svg/sort.svg';
import { ReactComponent as MapIcon } from '../../assets/svg/map.svg';
import { Checkbox } from '../../components/checkbox';
import { ArrowRightIcon, ChartIcon, CloseIcon, HeartIcon } from '../../assets';
import SalePopup from './salePopup';
import { Radio } from '../../components/radio';
import { Swiper, SwiperSlide } from 'swiper/react';
import Characteristics from './characteristics';
import { Link } from 'react-router-dom';

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
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openSort, setOpenSort] = useState<boolean>(false);
  const [openMap, setOpenMap] = useState<boolean>(false);
  const [openCharact, setOpenCharact] = useState<boolean>(false);

  const sliderRef = useRef<any>(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const SliderItem = () => {
    const [openCommentModal, setOpenCommentModal] = useState<boolean>(false);
    return (
      <div className="card_right">
        {openCommentModal && (
          <div className="modal">
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={0}
              ref={sliderRef}
              pagination={{
                clickable: true
              }}
              className="mySwiper">
              <SwiperSlide>
                <div className="modal_body">
                  <div className="closer_mobile">
                    <CloseIcon onClick={() => setOpenCommentModal(false)} />
                  </div>
                  <div className="row_result user_head">
                    <div className="row_result">
                      <img src={require('../../assets/image/ap1.jpg')} alt="" />
                      <div className="info_">
                        <h4>Анна Горичева</h4>
                        <p>20 лет, студентка</p>
                      </div>
                      <button className="status_btn">
                        <span>ПИК</span>
                      </button>
                    </div>
                  </div>
                  <div className="decs_user">
                    Ни капельки не пожалела, что купила здесь квартиру) я была в таком восторге —
                    даже не описать словами)…
                  </div>
                  <div className="row_result slider_row">
                    <button className="prev" onClick={handlePrev}>
                      <ArrowRightIcon />
                    </button>
                    <div className="answer">
                      <div className="names">Ответ администрации</div>
                      <div className="desc">
                        Ни капли не пожалела, что купила здесь квартиру) я была в таком восторге -
                        дае не описала словами)...
                      </div>
                    </div>
                    <button className="next" onClick={handleNext}>
                      <ArrowRightIcon />
                    </button>
                  </div>
                  <div className="row_result bottom_btns_">
                    <button>
                      <span>Полезно</span>
                    </button>
                    <button>
                      <span>Бесполезно</span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="modal_body">
                  <div className="closer_mobile">
                    <CloseIcon onClick={() => setOpenCommentModal(false)} />
                  </div>
                  <div className="row_result user_head">
                    <div className="row_result">
                      <img src={require('../../assets/image/ap1.jpg')} alt="" />
                      <div className="info_">
                        <h4>Анна Горичева</h4>
                        <p>20 лет, студентка</p>
                      </div>
                      <button className="status_btn">
                        <span>ПИК</span>
                      </button>
                    </div>
                  </div>
                  <div className="decs_user">
                    Ни капельки не пожалела, что купила здесь квартиру) я была в таком восторге —
                    даже не описать словами)…
                  </div>
                  <div className="row_result slider_row">
                    <button className="prev" onClick={handlePrev}>
                      <ArrowRightIcon />
                    </button>
                    <div className="answer">
                      <div className="names">Ответ администрации</div>
                      <div className="desc">
                        Ни капли не пожалела, что купила здесь квартиру) я была в таком восторге -
                        дае не описала словами)...
                      </div>
                    </div>
                    <button className="next" onClick={handleNext}>
                      <ArrowRightIcon />
                    </button>
                  </div>
                  <div className="row_result bottom_btns_">
                    <button>
                      <span>Полезно</span>
                    </button>
                    <button>
                      <span>Бесполезно</span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
        <div className="row_result">
          <div className="space shadow_none">
            <div className="card_col">
              <div className="ship">март 2023</div>
              <img src={require('../../assets/image/popular-big.jpg')} alt="" />
            </div>
            <button className="mobile_none">
              <span>ПИК</span>
            </button>
            <div className="row_result pc_none custome_row_btns">
              <div className="row_result">
                <button className="like_btn">
                  <Like />
                </button>
                <div className="col_text">
                  <h3>8,5</h3>
                  <p onClick={() => setOpenCommentModal(true)}>41 отзыв</p>
                </div>
              </div>
              <div className="row_result">
                <button className="chart_icon">
                  <ChartIcon />
                </button>
                <button className="heart_icon">
                  <HeartIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="infos_card">
            <div className="row_result">
              <div className="title_">Зеленый остров</div>
              <div className="row_result ismobile_accord">
                <button className="like_btn">
                  <Like />
                </button>
                <div className="col_text">
                  <h3>8,5</h3>
                  <p onClick={() => setOpenCommentModal(true)}>41 отзыв</p>
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
              <button>
                <Link to="/library/classes"> Стандарт</Link>
              </button>
              <button>
                <Link to="/library/classes/comforts"> Комфорт</Link>
              </button>
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
              <div className="blue_btn__"> Полоска произвольной длины</div>
              <p className="mobile_none">2-комнатная, европланировка</p>
            </div>
            <div className="row_result align_end mb15 ">
              <p className="mobile_none">
                Преимущество номер один примерно такой длины, описание и характеристика на 2 строки
              </p>
              <div className="col_price_">
                <p>52 м2, дом 1, 2 этаж</p>
                <div className="price_">
                  <span>4 985 590₽</span> <b>4 785 590₽</b>
                </div>
              </div>
            </div>

            <div className="row_result align_end mb15 mobile_none">
              <Button className="btn_outlined" variant="outlined">
                <span>Посмотреть квартиры</span>
              </Button>
              <div className="col_price_ text_right f18">
                Осталось всего 2 варианта <br /> этой планировки
              </div>
            </div>
            <div className="sale_text">Акции для зарегистрированных пользователей!</div>
            <Button className="btn_outlined mobile_button" variant="outlined">
              <span>Посмотреть ВСЕ квартиры</span>
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="result_container">
      <div className="container">
        <HistoryLink links={[{ name: 'Результат поиска', link: '/result' }]} />
        <div className="row_result mobile_col">
          <div className="title_result">
            <h2>
              <span>ВИЗ:</span> найдено 15 жилых комплексов
            </h2>
          </div>
          <div className="row_result header_btns">
            <Button
              variant={'outlined'}
              className={openCharact ? 'active' : ''}
              onClick={() => {
                setOpenCharact(true);
                setOpenMap(false);
                setOpenFilter(false);
                setOpenSort(false);
              }}>
              <span className="inner_btn text_trans_none">Характеристика района</span>
            </Button>
            <Button
              variant={'outlined'}
              onClick={() => {
                setOpenMap(!openMap);
                setOpenFilter(false);
                setOpenSort(false);
                setOpenCharact(false);
              }}>
              <span className="inner_btn">показать на карте</span>
            </Button>
          </div>
        </div>
        <div className="location_inner">
          <span>Ориентиры поблизости:</span> Яхт-клуб, Центральный стадион, Гимназия № 2, Брайт ФИТ
        </div>
        <div className="tab_header_mobile">
          <button
            className={openSort ? 'active' : ''}
            onClick={() => {
              setOpenSort(!openSort);
              setOpenFilter(false);
              setOpenMap(false);
              setOpenCharact(false);
            }}>
            <SortIcon />
            <span>Сортировать</span>
          </button>
          <button
            className={openFilter ? 'active' : ''}
            onClick={() => {
              setOpenFilter(!openFilter);
              setOpenSort(false);
              setOpenMap(false);
              setOpenCharact(false);
            }}>
            <FiltersIcon />
            <span>Фильтры</span>
          </button>
          <button
            className={openMap ? 'active' : ''}
            onClick={() => {
              setOpenMap(!openMap);
              setOpenFilter(false);
              setOpenSort(false);
              setOpenCharact(false);
            }}>
            <MapIcon />
            <span>Карта</span>
          </button>
        </div>
        {openCharact ? (
          <Characteristics onClose={() => setOpenCharact(false)} />
        ) : (
          <div className="row_container">
            <div className={`space ${openFilter || openSort ? '' : 'ismobile_accord'}`}>
              {openSort && (
                <div className={`card_left sort_card`}>
                  {/* <div className="closer_mobile">
                    <CloseIcon onClick={() => setOpenSort(!openSort)} />
                  </div> */}
                  <div className="title_card sort_card_title">Сортировать</div>
                  <div className="checkbox_row mb10">
                    <Radio name="sort" label={'Сначала недавно добавленные'} />
                  </div>
                  <div className="checkbox_row mb10">
                    <Radio name="sort" label={'По сроку сдачи (сначала готовые)'} />
                  </div>
                  <div className="checkbox_row mb10">
                    <Radio name="sort" label={'По цене (сначала низкая)'} />
                  </div>
                  <div className="checkbox_row mb10">
                    <Radio name="sort" label={'Еще пункт сортировки'} />
                  </div>
                  <div className="row_result center_btn left_btn">
                    <button onClick={() => setOpenSort(!openSort)} className={`submitter_btn`}>
                      Применить
                    </button>
                  </div>
                </div>
              )}
              <div className={`card_left ${openSort ? 'ismobile_accord' : ''}`}>
                <div className="closer_mobile pc_none">
                  <CloseIcon
                    onClick={() => {
                      setOpenFilter(false);
                      setOpenSort(false);
                    }}
                  />
                </div>
                <div className="row_result heading_row">
                  <h3>Найти</h3>
                  <button>Очистить</button>
                </div>
                <div className="responsive_grid">
                  <div className="col_responsive">
                    <div className="label">Город</div>
                    <Select
                      options={['Выберите город']}
                      selectedIbdex={index}
                      setSelectedIndex={setIndex}
                    />
                  </div>
                  <div className="col_responsive">
                    <div className="label">Район города или ЖК</div>
                    <div className="search_inp">
                      <Search />
                    </div>
                  </div>
                  <div className="col_responsive">
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
                  </div>
                  <div className="col_responsive">
                    <div className="label">Количество комнат</div>
                    <div className="row_result">
                      {[...Array(6)].map((_, key) => (
                        <div key={key} className={`${key === 2 ? 'active' : ''} box_quadrad`}>
                          {key === 5 ? '5 +' : key + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col_responsive">
                    <div className="label">Тип планировки</div>
                    <Select
                      options={['тип любой']}
                      selectedIbdex={index}
                      setSelectedIndex={setIndex}
                    />
                  </div>
                  <div className="col_responsive">
                    <div className="label">Ипотечное кредитование</div>
                    <Select
                      options={['без ипотеки']}
                      selectedIbdex={index}
                      setSelectedIndex={setIndex}
                    />
                  </div>
                  <div className={`col_responsive ${openFilters ? 'ismobile_accord' : ' '}`}>
                    <label className="checkbox_row">
                      <Checkbox /> <span className="label_span">Готовые квартиры</span>
                    </label>
                  </div>
                </div>
                <div className="bottom_btns">
                  {openFilters && (
                    <div className="col_responsive mobile-row">
                      <label className="checkbox_row">
                        <Checkbox /> <span className="label_span">Готовые квартиры</span>
                      </label>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setOpenFilter(false);
                      setOpenSort(false);
                    }}
                    className={`submitter_btn ${openFilters ? 'd_none_mobile' : ' '}`}>
                    Применить
                  </button>

                  <button
                    className={`others_filters ${openFilters ? 'active' : ''}`}
                    onClick={() => setOpenFilters(!openFilters)}>
                    <FilterIcon />
                    <span>Дополнительные фильтры</span>
                  </button>
                </div>
              </div>
              {checkboxes.map((item, key) => (
                <div key={key} className={`card_left ${openFilters ? '' : 'ismobile_accord'}`}>
                  <input
                    type={'checkbox'}
                    className="acc_opener"
                    hidden
                    defaultChecked={false}
                    id={'acc_opener' + key}
                  />
                  <label htmlFor={'acc_opener' + key} className="title_card mb20">
                    {item.title} <AccordArrow />
                  </label>
                  {item.boxes.map((name, boxKey) => (
                    <label key={boxKey} className="checkbox_row mb10">
                      <Checkbox /> <span className="label_span pl10">{name}</span>
                    </label>
                  ))}
                  {item.others && <button className="other_filter_btn">Посмотреть другие</button>}
                </div>
              ))}
              {openFilters && (
                <div className="row_result center_btn pc_none">
                  <button onClick={() => setOpenFilter(!openFilter)} className={`submitter_btn`}>
                    Применить
                  </button>
                </div>
              )}
            </div>
            {openMap ? (
              <div className="map_card_container">
                <div className="closer_mobile">
                  <CloseIcon onClick={() => setOpenMap(false)} />
                </div>
                <iframe
                  src="https://yandex.com/map-widget/v1/?um=constructor%3Ad9eb91d794d302ff567edb0a49b8b8cff0c709f8f992913eac080f8d7083e2e4&amp;source=constructor"
                  width={'100%'}
                  height={'100%'}
                  className="map_card"
                />
              </div>
            ) : (
              <div className="between">
                <div className="row_result mb50 tab_header_">
                  <Button variant="outlined">
                    <span className="inner_btn text_trans_none">Мы рекомендуем</span>
                  </Button>
                  <Button variant="outlined">
                    <span className="inner_btn text_trans_none">
                      По сроку сдачи (сначала готовые)
                    </span>
                  </Button>
                  <Button variant="outlined">
                    <span className="inner_btn text_trans_none">По цене (сначала низкая)</span>
                  </Button>
                  <Button variant="outlined" onClick={() => setOpenSort(!openSort)}>
                    <span className="inner_btn text_trans_none">...</span>
                  </Button>
                </div>
                <SliderItem />
                <SliderItem />
                <div className="pagination_bar mb50">
                  <div className="row_result">
                    <div className="row_result">
                      <ArrowRightIcon className="disabled" />
                      <div className="text disabled mobile_none">Назад</div>
                      <div className="text_info">
                        <span>Страница</span> 1
                      </div>
                      <div className="text mobile_none">Далее</div>
                      <ArrowRightIcon />
                    </div>
                    <div className="row_result">
                      <p>Показаны 1–20 из 25 </p>
                      <div className="text ml10">Показать еще</div>
                    </div>
                  </div>
                </div>
                <SalePopup />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
