import React from 'react';
import FoxImage from '../../assets/image/fox.png';
import { Button } from '../../components/button';

function SalePopup() {
  return (
    <div className="popup_container">
      <div className="row_result">
        <img src={FoxImage} alt="" />
        <div className="text_popup">
          <div className="title__ mb40">Акция!</div>
          <div className="description__ mb30">
            Для зарегистрированных пользователей при бронировании квартиры действует акция
          </div>
          <Button className="mr20 mb20" variant="orange">
            Зарегистрироваться
          </Button>
          <Button variant="outlined">Узнать подробности</Button>
        </div>
      </div>
    </div>
  );
}

export default SalePopup;
