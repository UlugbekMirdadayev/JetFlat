import React, { useRef, useCallback } from 'react';
import { Card } from '../../components/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRightIcon } from '../../assets';

export default function Similars() {
  const sliderRef = useRef<any>(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const array = Array.from({ length: 10 }, (_, key) => (
    <SwiperSlide key={key} className="w-auto">
      <Card index={2} />
    </SwiperSlide>
  ));
  return (
    <div className="full_container similars">
      <div className="container py80 my70">
        <div className="heading__line" />
        <h2 className="title_head vw-size mb50 ">
          <span>Похожие квартиры в других ЖК</span>
        </h2>
        <div className="f14 text_f14 vw-size mb50 similars_decription_text">
          Вы можете посмотреть больше жилых комплексов возле поулярных ориентиров в районе ВИЗ
        </div>
        <Swiper ref={sliderRef} slidesPerView={'auto'}>
          {array}
        </Swiper>
        <div className="row mt50 calc_slider align-items-center d-none md-d-flex justify-center">
          <button className="prev tr-btn" onClick={handlePrev}>
            <ArrowRightIcon />
          </button>
          <button className="next tr-btn" onClick={handleNext}>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
