import { useRef, useCallback } from 'react';
import './charact.css';
import { ReactComponent as Location } from '../../assets/svg/geolocation.svg';
import { ReactComponent as InfoIcon } from '../../assets/svg/info.svg';
import { ReactComponent as DownloadIcon } from '../../assets/svg/download.svg';
import { ReactComponent as ShareIcon } from '../../assets/svg/share.svg';
import { ReactComponent as WindowIcon } from '../../assets/svg/window.svg';
import { ReactComponent as HeightIcon } from '../../assets/svg/height.svg';
import { ReactComponent as BrushIcon } from '../../assets/svg/brush.svg';
import { ReactComponent as BathRoomIcon } from '../../assets/svg/bathroom.svg';
import { Button } from '../../components/button';
import { ArrowRightIcon, ChartIcon, CloseIcon, HeartIcon } from '../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbars } from 'react-custom-scrollbars-2';

function Characteristics({ onClose }: any) {
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
      <div className="row heading_row">
        <div className="heading_text">
          <h2 className="md-mt50">
            <span>№ 43</span>2-к квартира, 4 этаж, 53,8 м2
          </h2>
        </div>
        <button className="mini-orange lg_btn">
          <span>ПИК</span>
        </button>
      </div>

      <div className="row_result mt40 mb20 col_mobile reverse_md">
        <div className="row heading_row">
          <button className="location_btn">
            <Location />
          </button>
          <div className="text_paragraph">ВИЗ (Верх-Исетский), Татищева, 52</div>
        </div>
        <div className="row green_icons">
          <InfoIcon />
          <HeartIcon />
          <ChartIcon />
          <DownloadIcon />
          <ShareIcon />
        </div>
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
        <div className="col left_col">
          <div className="heading_text mb20 lg_btn">
            <h2>ЖК Зеленый остров Дом 1</h2>
          </div>
          <div className="flex_md">
            <ul>
              <div className="desc_text mb20 lg_btn">Сдан — март 2022</div>
              <div className="text_paragraph mb20">Подъезд: 1</div>
              <div className="text_paragraph mb20">Конструктив: монолит</div>
              <div className="text_paragraph mb20">Количество подъездов: 5</div>
              <div className="row heading_row mb20">
                <div className="text_paragraph">Класс дома </div>
                <button className="gray-btn ml10">
                  <span>Стандарт</span>
                </button>
              </div>
              <div className="row heading_row mb20">
                <div className="text_paragraph">Тип планировки</div>
                <button className="blue-btn ml10">
                  <span>Европланировка</span>
                </button>
              </div>
            </ul>
            <ul>
              <div className="text_paragraph mb20">Этаж: 2 из 18</div>
              <div className="text_paragraph mb20">Количество комнат: 2</div>
              <div className="text_paragraph mb20">Общая площадь: 53,8 м2</div>
              <div className="text_paragraph mb20">Жилая площадь: 83,8 м2</div>
              <div className="text_paragraph mb20">Площадь кухни: 8,8 м2</div>
            </ul>
          </div>
          <div className="flex_md">
            <ul>
              <div className="text_big_orange mb20">4 734 400₽</div>
              <div className="text_paragraph mb30">
                <span className="weight600">84 400₽/м2</span>
              </div>
            </ul>
            <ul>
              <Button className="mb10 orange_btn" variant="orange">
                <span>Забронировать</span>
              </Button>
              <div className="text_paragraph mb20">
                <span className="f14">
                  Услуга бронирования бесплатна. Бронь действует 24 часа с момента подтверждения
                  заявки.
                </span>
              </div>
            </ul>
          </div>
        </div>
        <div className="col space_between_col ml40">
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
          <div className="row icons_bottom">
            <div className="icon_box">
              <WindowIcon />
              <div className="text_paragraph teal_color">Окна во двор и на улицу</div>
            </div>
            <div className="icon_box">
              <HeightIcon />
              <div className="text_paragraph teal_color">Высота потолков 2,65м</div>
            </div>
            <div className="icon_box">
              <BrushIcon />
              <div className="text_paragraph teal_color">Отделка чистовая под ключ</div>
            </div>
            <div className="icon_box">
              <BathRoomIcon />
              <div className="text_paragraph teal_color">Санузел: два санузла</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Characteristics;
