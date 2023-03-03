import { useState } from 'react';
import { CloseIcon } from '../../assets';
import { Button } from '../../components/button';

function Popup() {
  const [visible, setVisible] = useState<boolean>(true);
  return visible ? (
    <div className="full_container green_bg">
      <div className="container py20">
        <div className="row align-items-center relative justify-center">
          <div className="closer_popup__x" onClick={() => setVisible(false)}>
            <CloseIcon />
          </div>
          <img
            className="fox_image__custome mr60"
            src={require('../../assets/image/fox.png')}
            alt=""
          />
          <div className="fld-column">
            <h1 className="white_color f40">Не нашли подходящего варианта?</h1>
            <Button
              variant="orange"
              className="w_max_cont mt40 py20 px40 row align-items-center justify-center">
              <span className="desc__text weight600 white_color">
                Обратиться в службу поддержки
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup;