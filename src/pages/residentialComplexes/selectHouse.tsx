import { Button } from '../../components/button';

export const SelectHouse = () => {
  return (
    <div className="container mb80">
      <div className="heading mb50">
        <h2 className='title_result '><span>ЖК Зеленый остров: выбор дома</span></h2>
      </div>
      <div className="map_container">
        <div className="card_in_map">
          <div className="img_relative">
            <img src={require('../../assets/image/ap2.jpg')} alt="" />
            <div className="tab_btn row">
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
            <div className="desc_card mb15">2-комн. 54-83 м2 от 3 400 000₽</div>
            <div className="desc_card mb30"> 4-комн. 104-163 м2 от 3 400 000₽</div>
            <Button variant="outlined" className="mt20">
              <span className="orange_color">Посмотреть квартиры</span>
            </Button>
          </div>
        </div>
        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3Ad9eb91d794d302ff567edb0a49b8b8cff0c709f8f992913eac080f8d7083e2e4&amp;source=constructor"
          width="100%"
          height="690"
        />
      </div>
    </div>
  );
};
