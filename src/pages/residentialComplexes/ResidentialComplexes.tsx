import React, { useState } from 'react';
import { Button } from '../../components/button';
import { Search } from '../../components/filters/Search';
import { HistoryLink } from '../../components/historyLink';
import { Select } from '../../components/select/Select';
import './style.css';
import { ReactComponent as Minus } from '../../assets/svg/minus.svg';
import { ReactComponent as Plus } from '../../assets/svg/plus.svg';
import { ReactComponent as InfoIcon } from '../../assets/svg/info.svg';
import { ReactComponent as DownloadIcon } from '../../assets/svg/download.svg';
import { ReactComponent as ShareIcon } from '../../assets/svg/share.svg';
import { ChartIcon, HeartIcon } from '../../assets';
import { Popular } from '../main/components/popular';
import Card from './card';
import { SelectHouse } from './selectHouse';

export const ResidentialComplexes = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="result_container">
      <div className="container">
        <HistoryLink
          links={[
            { name: 'Жилые комплексы', link: '/' },
            { name: 'Зелёный остров', link: '/residential-complexes' }
          ]}
        />
        <div className="row_result mobile_col mb50">
          <div className="title_result">
            <h2>
              <span>ЖК Зеленый остров</span>
            </h2>
          </div>
          <div className="row_result green_icons">
            <InfoIcon />
            <HeartIcon />
            <ChartIcon />
            <DownloadIcon />
            <ShareIcon />
          </div>
        </div>
        <div className="row_container">
          <div className={`space`}>
            <div className={`card_left`}>
              <div className="row_result heading_row">
                <h3>Найти</h3>
                <button>Очистить</button>
              </div>
              <div className="responsive_grid">
                <div className="col_responsive">
                  <div className="label">Город</div>
                  <Select
                    options={['Выберите город']}
                    selectedIbdex={index}
                    setSelectedIndex={setIndex}
                  />
                </div>
                <div className="col_responsive">
                  <div className="label">Район города или ЖК</div>
                  <div className="search_inp">
                    <Search />
                  </div>
                </div>
                <div className="col_responsive">
                  <div className="label">Ценовой диапазон, ₽</div>
                  <div className="row_result">
                    <div className="row_calc">
                      <Button>
                        <Minus />
                      </Button>
                      <span>от</span>
                      <Button>
                        <Plus />
                      </Button>
                    </div>
                    <div className="row_calc">
                      <Button>
                        <Minus />
                      </Button>
                      <span>123 000 000</span>
                      <Button>
                        <Plus />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col_responsive">
                  <div className="label">Количество комнат</div>
                  <div className="row_result">
                    {[...Array(6)].map((_, key) => (
                      <div key={key} className={`${key === 2 ? 'active' : ''} box_quadrad`}>
                        {key === 5 ? '5 +' : key + 1}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col_responsive">
                  <div className="label">Тип планировки</div>
                  <Select
                    options={['тип любой']}
                    selectedIbdex={index}
                    setSelectedIndex={setIndex}
                  />
                </div>
                <div className="col_responsive">
                  <div className="label">Ипотечное кредитование</div>
                  <Select
                    options={['без ипотеки']}
                    selectedIbdex={index}
                    setSelectedIndex={setIndex}
                  />
                </div>
              </div>
              <div className="bottom_btns">
                <Button variant="orange" className={`submitter_btn orange-btn `}>
                  Применить
                </Button>
              </div>
            </div>
          </div>
          <div className="between">
            <div className="row_result mb50 tab_header_">
              <Button variant="outlined">
                <span className="inner_btn text_trans_none">Информация и стоимость</span>
              </Button>
              <Button className="fl1" variant="outlined">
                <span className="inner_btn text_trans_none">Ипотечный калькулятор</span>
              </Button>
              <Button variant="outlined">
                <span className="inner_btn text_trans_none">Trade in</span>
              </Button>
              <Button variant="outlined">
                <span className="inner_btn text_trans_none">Условия покупки</span>
              </Button>
              <Button variant="outlined">
                <span className="inner_btn text_trans_none">Буклет</span>
              </Button>
            </div>
            <Card />
          </div>
        </div>
      </div>
      <SelectHouse />
      <Popular />
    </div>
  );
};
