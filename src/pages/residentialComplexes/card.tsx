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
import { ArrowRightIcon, ChartIcon, CloseIcon, HeartIcon } from '../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Button } from '../../components/button';

function Card({ onClose }: any) {
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
    <div className="charact_container">
      <div className="closer_btn_sm" onClick={onClose}>
        <CloseIcon />
      </div>
      <div className="row heading_row space-between">
        <div className="row heading_row">
          <div className="heading_text">
            <h2 className="md-mt50">
              <span>Зелёный остров</span>
            </h2>
          </div>
          <button className="mini-orange lg_btn">
            <span>ПИК</span>
          </button>
        </div>
        <div className="green_icons row heading_row">
          <button className="like-btn">
            <LikeIcon />
          </button>
          <ChartIcon />
          <HeartIcon />
        </div>
      </div>

      <div className="tab_btn row mt20">
        <button className="gray-btn py10">
          <span>Стандарт</span>
        </button>
        <button className="gray-btn yellow-btn  py10">
          <span>Комфорт</span>
        </button>
      </div>

      <div className="outline-btn-blue fw600 mt20 bold_text_">Одна полоска произвольной длины</div>

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
      <div className="row_result align-item-center mb40">
        <div className="bold_text_ row ">ДДУ (счета ESCROW), ДКП</div>
        <Button variant="primary">
          <span>Выбрать квартиру</span>
        </Button>
      </div>
      <div className="row md_row align_center_md mb20">
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
            <div className="slider_container">
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={0}
                ref={sliderRef}
                pagination={{
                  clickable: true
                }}
                className="mySwiper">
                <button className="prev-slider" onClick={handlePrev}>
                  <ArrowRightIcon />
                </button>
                <button className="next-slider" onClick={handleNext}>
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
          <div className="bold_text_ my20">Зелёный остров — остров вашей мечты</div>
          <div className="text_paragraph text-area-div">
            Здесь будет 3-4 строчки текста. Благоустроенная квартира с небольшой гостиной и
            коридором, уютным балконом и лоджией, изолированной комнатой и кухней. В этом классе
            жиля, как правило, во сех кварталах один санузел, часто совмещённый... (разворачивается)
            <button className="more teal_color">&nbsp;&nbsp;&nbsp;&nbsp;Подробнее</button>
          </div>
          <div className="row icons_bottom">
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
