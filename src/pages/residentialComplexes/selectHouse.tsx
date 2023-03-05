import { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRightIcon } from '../../assets';
import { Button } from '../../components/button';

const array = [...Array(10)];

export const SelectHouse = () => {
  const navigate = useNavigate();
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
    <div className="container mb80 md-mb-0">
      <div className="heading mb50">
        <h2 className="title_result center_text_ sm-custome-width-title">
          <span className="md-fs-32 sm-fs-22">ЖК Зеленый остров: выбор дома</span>
        </h2>
      </div>
      <div className="map_container">
        <div className="card_in_map absolute sm-d-none">
          <div className="img_relative">
            <img src={require('../../assets/image/ap2.jpg')} alt="" />
            <div className="tab_btn row absolute">
              <button className="gray-btn">
                <span>Стандарт</span>
              </button>
              <button className="gray-btn primary-btn  py10">
                <span>декабрь 2022, сдан</span>
              </button>
            </div>
          </div>
          <div className="card_text">
            <div className="title_card__ mb20">Дом 1</div>
            <div className="desc_card mb15">
              <p>2-комн.</p> <p>54-83 м2</p> <p>от 3 400 000₽</p>
            </div>
            <div className="desc_card mb15">
              <p>2-комн.</p> <p>54-83 м2</p> <p>от 3 400 000₽</p>
            </div>
            <Button variant="outlined" className="mt20">
              <span className="orange_color md-fs-13">Посмотреть квартиры</span>
            </Button>
          </div>
        </div>
        <iframe
          className="sm-size-360"
          src="https://yandex.com/map-widget/v1/?um=constructor%3Ad9eb91d794d302ff567edb0a49b8b8cff0c709f8f992913eac080f8d7083e2e4&amp;source=constructor"
          width="100%"
          height="690"
        />
      </div>
      <div className="slider_row_ py80 md-col md-pb-0">
        <button className="prev is_pc" onClick={handlePrev}>
          <ArrowRightIcon />
        </button>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={0}
          ref={sliderRef}
          pagination={{
            clickable: true
          }}
          className="mySwiper md-order-1">
          {array.map((_, key) => (
            <SwiperSlide className="card_in_map" key={key}>
              <div className={'border__rightBorder'} />
              <div className={'border__topBorder'} />
              <div className={'border__bottomBorder'} />
              <div className="card_content_body onhovered">
                <div className="img_relative">
                  <img src={require('../../assets/image/ap3.jpg')} alt="" />
                  <div className="tab_btn row absolute">
                    <button className="gray-btn">
                      <span>Стандарт</span>
                    </button>
                    <button className="gray-btn primary-btn  py10">
                      <span>декабрь 2022, сдан</span>
                    </button>
                  </div>
                </div>
                <div className="card_text sm-px-0 md-pb-0">
                  <div className="title_card__ mb20">Дом 1</div>
                  <div className="desc_card mb15">
                    <p>2-комн.</p> <p>54-83 м2</p> <p>от 3 400 000₽</p>
                  </div>
                  <div className="desc_card mb15">
                    <p>2-комн.</p> <p>54-83 м2</p> <p>от 3 400 000₽</p>
                  </div>
                  <Button
                    variant="outlined"
                    className="mt30 mb10 md-mb-0"
                    onClick={() => navigate('/apartment/:id')}>
                    <span className="md-fs-13">Выбрать квартиру</span>
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="next is_pc" onClick={handleNext}>
          <ArrowRightIcon />
        </button>
      </div>
      <div className='slider_row_ center-row-md d-none '>
        <button className="prev" onClick={handlePrev}>
          <ArrowRightIcon />
        </button>
        <button className="next" onClick={handleNext}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};
