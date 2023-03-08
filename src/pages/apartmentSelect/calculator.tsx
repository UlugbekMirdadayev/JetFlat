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
          <button className="prev tr-btn md-d-none" onClick={handlePrev}>
            <ArrowRightIcon />
          </button>
          <Swiper slidesPerView={'auto'} spaceBetween={0} ref={sliderRef}>
            {[...Array(15)].map((_, key) => (
              <SwiperSlide key={key} className="slider-bank">
                <span className="weight600 desc__text">Банк</span>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="next tr-btn md-d-none md-d-flex" onClick={handleNext}>
            <ArrowRightIcon />
          </button>
        </div>
        <div className="row mt50 calc_slider align-items-center d-none md-d-flex justify-center">
          <button className="prev tr-btn" onClick={handlePrev}>
            <ArrowRightIcon />
          </button>
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
        <div className="row mt50 calc_slider md-col">
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
          <div className="col__between__div fld-column space-between">
            <div className="row space-between align-items-center mb35 col__head_row">
              <div className="row space-between gap20 align-items-center left_col_calc">
                <Button variant="orange" className="py14 px40 percent_btn__">
                  <span className="desc__text weight600 white_color sm-f14">от 7,49%</span>
                </Button>
                <div className="f16 desc__text sm-d-none">
                  Минимальный взнос <span className="orange_color weight600">10%</span>
                </div>
              </div>
              <div>
                <div className="f16 desc__text d-none sm-d-block sm-f14">
                  Минимальный взнос <span className="orange_color weight600">10%</span>
                </div>
                <div className="teal_color desc__text weight600 sm-f14">Стандартная программа</div>
              </div>
            </div>
            <div className="row space-between mb35 col__head_row sm-fld-column">
              <div className="info__bank align-items-center row">
                <div className="img_bank__">
                  <span className="weight600 desc__text">Банк</span>
                </div>
                <div className="weight600 desc__text long__name__bank">
                  Длинное и очень длинное название банка
                </div>
              </div>
              <div className="fld-column texts__right">
                <div className="row space-between align-items-center mb25">
                  <div className="f16 desc__text">Первоначальный взнос <span className="orange_color desc__text weight600 d-none sm-d-block">15,3%</span></div>
                  <span className="orange_color desc__text weight600 sm-d-none">15,3%</span>
                  <div className="row calc_row p10 m0 align-items-center justify-center w200">
                    <div className="desc__text weight600">265 900Р</div>
                  </div>
                </div>
                <div className="row space-between align-items-center mb25">
                  <div className="f16 desc__text">Сумма кредита</div>
                  <div className="row calc_row p10 m0 align-items-center justify-center w200">
                    <div className="desc__text weight600">2 265 900Р</div>
                  </div>
                </div>
                <div className="row space-between align-items-center mb25">
                  <div className="f16 desc__text">Ежемесячный платеж</div>
                  <div className="row calc_row active p10 m0 align-items-center justify-center w200">
                    <div className="desc__text weight600">17 609Р</div>
                  </div>
                </div>
                <div className="small_text orange_color md-f10">
                  Данная информация носит предварительный характер и не является публичной офертой
                </div>
              </div>
            </div>
            <div className="row space-between align-end mt30 sm-fld-column bottom_btns_sm__full">
              <Button variant="outlined" className="vw__size__btn px40 py19">
                <span className="desc__text weight600 button_inner  md-fs-11">
                  Посмотреть график платежей
                </span>
              </Button>
              <Button variant="outlined" className="vw__size__btn px40 py19 desc__text">
                <span className="desc__text weight600 button_inner  md-fs-11">
                  Отправить заявку в банк
                </span>
              </Button>
              <div className="f16 desc__text teal_color md-fs-11 md-btn-teal">
                подробнее о программе
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
