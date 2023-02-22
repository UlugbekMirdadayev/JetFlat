import { useRef, useCallback } from 'react';
import { ReactComponent as Location } from '../../assets/svg/geolocation.svg';
import { ReactComponent as PlaceRestIcon } from '../../assets/svg/place-rest.svg';
import { ReactComponent as FamilyIcon } from '../../assets/svg/family.svg';
import { ReactComponent as AnglesIcon } from '../../assets/svg/angles.svg';
import { ReactComponent as WaterIcon } from '../../assets/svg/water.svg';
import { ReactComponent as SportsManIcon } from '../../assets/svg/sportsman.svg';
import { ReactComponent as BicycleIcon } from '../../assets/svg/bicycle.svg';
import { ReactComponent as FlowerIcon } from '../../assets/svg/flower.svg';
import { ReactComponent as LikeIcon } from '../../assets/svg/like.svg';
import { ArrowRightIcon, ChartIcon, HeartIcon } from '../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Button } from '../../components/button';

function Card() {
  const sliderRef = useRef<any>(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="charact_container sm-py-40">
      <div className="row heading_row space-between sm-d-flex-col sm-text-left">
        <div className="row heading_row sm-d-flex-col sm-text-left">
          <div className="heading_text">
            <h2 className="md-mt50 md-mt-0">
              <span className="md-pr-0 md-fs-28 sm-fs-22 sm-my-20 sm-order-1">Зелёный остров</span>
            </h2>
          </div>
          <button className="mini-orange lg_btn md-d-block sm-ml-0">
            <span>ПИК</span>
          </button>
        </div>
        <div className="green_icons row heading_row">
          <button className="like-btn sm-size-30">
            <LikeIcon className="sm-size-13"/>
          </button>
          <ChartIcon className="sm-size-30" />
          <HeartIcon className="sm-size-30" />
        </div>
      </div>

      <div className="tab_btn row mt20">
        <button className="gray-btn py10 md-w-25 md-center sm-w-50">
          <span>Стандарт</span>
        </button>
        <button className="gray-btn yellow-btn  py10 md-w-25 md-center sm-w-50">
          <span>Комфорт</span>
        </button>
      </div>

      <div className="outline-btn-blue fw600 mt20 bold_text_ md-m-btn sm-full-btn">
        Одна полоска произвольной длины
      </div>

      <div className="row_result my20 col_mobile">
        <div className="row heading_row">
          <button className="location_btn">
            <Location />
          </button>
          <div className="text_paragraph">ВИЗ (Верх-Исетский), Татищева, 52</div>
        </div>
      </div>
      <div className="bold_text_ my20">
        Ориентиры поблизости:
        <span className="teal_color">Яхт-клуб, Центральный стадион, Гимназия № 2, Брайт ФИТ</span>
      </div>
      <div className="row_result my20 col_mobile">
        <div className="row heading_row">
          <button className="location_btn">
            <span className="teal_color">M</span>
          </button>
          <div className="text_paragraph">Геологическая</div>
        </div>
      </div>
      <div className="row mb20">
        <ul className="mr80">
          <div className="text_paragraph mb15">Дом 1 — март 2021</div>
          <div className="text_paragraph mb15">Дом 2 — декабрь 2024</div>
          <div className="text_paragraph mb15">Дом 3 — декабрь 2023</div>
          <div className="text_paragraph mb15">Дом 4 - май 2023</div>
        </ul>
        <ul>
          <div className="text_paragraph mb15">Дом 1 — март 2021</div>
          <div className="text_paragraph mb15">Дом 2 — декабрь 2024</div>
          <div className="text_paragraph mb15">Дом 3 — декабрь 2023</div>
          <div className="text_paragraph mb15">Дом 4 - май 2023</div>
        </ul>
      </div>
      <div className="row_result align-item-center mb40 md-col md-f-start">
        <div className="bold_text_ row md-bold">ДДУ (счета ESCROW), ДКП</div>
        <Button variant="primary" className="md-mt40 md-m-btn sm-full-btn sm-outline-orange-btn">
          <span className="md-fs-13">Выбрать квартиру</span>
        </Button>
      </div>
      <div className="row md_row align_center_md mb20 md-d-none">
        <div className="heading_text">
          <h1>ЖК Зеленый остров</h1>
          <p>
            <span>Дом 1</span>, Сдан — март 2022
          </p>
        </div>
        <button className="mini-orange ml30">
          <span>ПИК</span>
        </button>
      </div>
      <div className="row reverse_md col_mobile">
        <div className="col space_between_col">
          <div className="grid_row">
            <div className="slider_container sm-full">
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={0}
                ref={sliderRef}
                pagination={{
                  clickable: true
                }}
                className="mySwiper">
                <button className="prev-slider sm-mx-5" onClick={handlePrev}>
                  <ArrowRightIcon />
                </button>
                <button className="next-slider sm-mx-5" onClick={handleNext}>
                  <ArrowRightIcon />
                </button>
                <SwiperSlide>
                  <div className="slide_item">
                    <img src={require('../../assets/image/ap1.jpg')} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide_item">
                    <img src={require('../../assets/image/ap2.jpg')} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="scroll_items">
              <Scrollbars
                universal={true}
                renderView={({ style, ...props }) => <div style={{ ...style }} {...props} />}
                renderThumbVertical={({ style, ...props }) => (
                  <div {...style} className="thumb-scrollbar" {...props} />
                )}
                renderTrackHorizontal={({ style, ...props }) => (
                  <div {...style} className="thumb-scrollbar-h" {...props} />
                )}
                thumbSize={window.innerWidth > 768 ? 110 : 27}
                renderThumbHorizontal={(props) => <div className="track-scrollbar-h" {...props} />}
                renderTrackVertical={(props) => <div className="track-scrollbar" {...props} />}>
                <img src={require('../../assets/image/ap2.jpg')} alt="" />
                <img src={require('../../assets/image/ap2.jpg')} alt="" />
                <img src={require('../../assets/image/ap2.jpg')} alt="" />
                <img src={require('../../assets/image/ap2.jpg')} alt="" />
              </Scrollbars>
            </div>
          </div>
          <div className="bold_text_ my20 center_text_ md-mt40 sm-text-left">
            Зелёный остров — остров вашей мечты
          </div>
          <div className="text_paragraph text-area-div center_text_ md-col sm-text-left">
            Здесь будет 3-4 строчки текста. Благоустроенная квартира с небольшой гостиной и
            коридором, уютным балконом и лоджией, изолированной комнатой и кухней. В этом классе
            жиля, как правило, во сех кварталах один санузел, часто совмещённый... (разворачивается)
            <button className="more teal_color md-d-block md-mt-20 sm-d-none">
              &nbsp;&nbsp;&nbsp;&nbsp;Подробнее
            </button>
            <div className="d-none sm-d-block teal_color underline mt20">Читать полностью</div>
          </div>
          <div className="row icons_bottom wrap_">
            <div className="icon_box">
              <AnglesIcon />
              <div className="text_paragraph teal_color">Автономная газовая котельная</div>
            </div>
            <div className="icon_box">
              <PlaceRestIcon />
              <div className="text_paragraph teal_color">Место для отдыха</div>
            </div>
            <div className="icon_box">
              <FamilyIcon />
              <div className="text_paragraph teal_color">Детский сад</div>
            </div>
            <div className="icon_box">
              <WaterIcon />
              <div className="text_paragraph teal_color">Набережная</div>
            </div>
            <div className="icon_box">
              <SportsManIcon />
              <div className="text_paragraph teal_color">Спортивные площадки</div>
            </div>
            <div className="icon_box">
              <BicycleIcon />
              <div className="text_paragraph teal_color">Велосипедные дорожки</div>
            </div>
            <div className="icon_box">
              <FlowerIcon />
              <div className="text_paragraph teal_color">Озеленение</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
