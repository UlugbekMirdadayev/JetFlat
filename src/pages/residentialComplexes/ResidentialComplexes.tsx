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
    <div className="result_container residentials">
      <div className="container">
        <HistoryLink
          links={[
            { name: 'Жилые комплексы', link: '/' },
            { name: 'Зелёный остров', link: '/residential-complexes' }
          ]}
        />
        <div className="row_result sm-d-flex-col md-align-center mb50 md-mt-40 sm-align-center sm-mt-30">
          <div className="title_result sm-text-center md-align-center ">
            <h2 className='sm-mt-0 md-mt-0'>
              <span>ЖК Зеленый остров</span>
            </h2>
          </div>
          <div className="row_result green_icons">
            <InfoIcon className="sm-size-30 sm-mt-30" />
            <HeartIcon className="sm-size-30 sm-mt-30" />
            <ChartIcon className="sm-size-30 sm-mt-30" />
            <DownloadIcon className="sm-size-30 sm-mt-30" />
            <ShareIcon className="sm-size-30 sm-mt-30" />
          </div>
        </div>
        <div className="d-none row_result mb50 tab_header_ md-flex-wrap sm-d-flex-col">
          <Button variant="outlined">
            <span className="inner_btn text_trans_none sm-fs-14">Информация и стоимость</span>
          </Button>
          <Button variant="outlined">
            <span className="inner_btn text_trans_none sm-fs-14">Ипотечный калькулятор</span>
          </Button>
          <Button variant="outlined">
            <span className="inner_btn text_trans_none sm-fs-14">Trade in</span>
          </Button>
          <Button variant="outlined">
            <span className="inner_btn text_trans_none sm-fs-14">Условия покупки</span>
          </Button>
          <Button variant="outlined">
            <span className="inner_btn text_trans_none sm-fs-14">Буклет</span>
          </Button>
        </div>
        <div className="row_container">
          <div className={`space sm-full`}>
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
      <Popular
        title="Другие ЖК застройщика ЛСР"
        description="Надёжность Застройщика проверена. Документы для сделки соответствуют действующему законодательству"
      />
      <Popular
        title="Другие ЖК в районе ВИЗ"
        description="Надёжность Застройщика проверена. Документы для сделки соответствуют действующему законодательству"
        bigLayout={false}
      />
    </div>
  );
};
