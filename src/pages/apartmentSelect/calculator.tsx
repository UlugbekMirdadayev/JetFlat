import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRightIcon } from '../../assets';
import { Select } from '../../components/select/Select';
import { ReactComponent as Minus } from '../../assets/svg/minus.svg';
import { ReactComponent as Plus } from '../../assets/svg/plus.svg';
import { Button } from '../../components/button';

function Calculator() {
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
    <div className="full_container">
      <div className="container calc_container my80 py80">
        <div className="title_calc">
          <h1 className="f28">
            Ипотечный калькулятор <span className="teal_color">в Екатеринбурге</span>
          </h1>
        </div>
        <div className="row">
          <div className="mt20 select__head w_340">
            <Select
              options={['Введите название банка']}
              selectedIbdex={0}
              setSelectedIndex={(e) => e}
            />
          </div>
        </div>
        <div className="row mt50 calc_slider align-items-center">
          <button className="prev tr-btn" onClick={handlePrev}>
            <ArrowRightIcon />
          </button>
          <Swiper slidesPerView={'auto'} spaceBetween={0} ref={sliderRef}>
            {[...Array(15)].map((_, key) => (
              <SwiperSlide key={key} className="slider-bank">
                <span className="weight600 desc__text">Банк</span>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="next tr-btn" onClick={handleNext}>
            <ArrowRightIcon />
          </button>
        </div>
        <div className="row space-between tab_calc mt80 mb25">
          <div className="f22_custome teal_color weight600">Стандартная ипотека</div>
          <div className="f22_custome weight600">С господдержкой</div>
          <div className="f22_custome weight600">Семьям с детьми</div>
          <div className="f22_custome weight600">Молодым семьям</div>
          <div className="f22_custome weight600">IT-специалистам</div>
          <div className="f22_custome weight600">Военнослужащим</div>
        </div>
        <div className="row space-between teal-btns-row">
          <button className="white_color f14 text_f14">Новостройка</button>
          <button className="white_color f14 text_f14">Вторичка</button>
          <button className="white_color f14 text_f14">Апартаменты</button>
          <button className="white_color f14 text_f14">Дом</button>
          <button className="white_color f14 text_f14">Таунхаус</button>
          <button className="white_color f14 text_f14">Строительство дома</button>
          <button className="white_color f14 text_f14">Участок</button>
          <button className="white_color f14 text_f14">Гараж / машиноместо</button>
          <button className="white_color f14 text_f14">Коммерческая</button>
          <button className="white_color f14 text_f14">Ремонт</button>
          <button className="white_color f14 text_f14">Новостройка</button>
        </div>
        <div className="row mt50 calc_slider">
          <div className="col__space__div">
            <div className="column_label">
              <div className="">
                <div className="f17 desc__text">Стоимость объекта, ₽</div>
                <div className="row calc_row p10 mb40 mt20 align-items-center space-between">
                  <Minus />
                  <div className="desc__text weight600">2 650 000</div>
                  <Plus />
                </div>
              </div>
              <div className="">
                <div className="f17 desc__text">Первоначальный взнос, ₽</div>
                <div className="row calc_row p10 mb40 mt20 align-items-center space-between">
                  <Minus />
                  <div className="desc__text weight600">2 650 000</div>
                  <span className="desc__text weight600 orange_color">15,3%</span>
                  <Plus />
                </div>
              </div>
              <div className="">
                <div className="f17 desc__text">Срок кредита, лет</div>
                <div className="row calc_row p10  mb40 mt20 align-items-center space-between">
                  <Minus />
                  <div className="desc__text weight600 gray_color">1</div>
                  <Plus />
                </div>
              </div>
              <Button variant="orange" className="full___btn py19">
                <span className="desc__text weight600 white_color ">Применить</span>
              </Button>
            </div>
          </div>
          <div className="col__between__div"></div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
