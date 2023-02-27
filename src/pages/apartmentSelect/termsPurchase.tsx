import React from 'react';
import { Button } from '../../components/button';
import { ReactComponent as AnswerIcon } from '../../assets/svg/answer.svg';

export default function TermsPurchase() {
  return (
    <div className="full_container bg_primary">
      <div className="container py80">
        <div className="mx20 px80">
          <h2 className="title_head vw-size mb50">
            <span>Условия покупки</span>
          </h2>
          <div className="grid_col3_gap100 align-start vw-size mb50">
            <div className="card_400_w">
              <div className="desc__text weight600 teal_color mb20">
                Ипотечное кредитование от банков
              </div>
              <div className="desc__text mb20">Банк 1, еще банк, другой банк, разные банки</div>
              <div className="row space-between align-items-center">
                <Button variant="outlined" className="vw__size__btn desc__text px40 py19 mr25 fl1">
                  <span className="desc__text weight600 black_color text_trans_none">
                    Подать заявку в банк
                  </span>
                </Button>
                <AnswerIcon className="answer_icon" />
              </div>
            </div>
            <div className="fld-column">
              <div className="card_400_w mb50">
                <div className="desc__text weight600 teal_color">
                  Сертификат материнского капитала
                </div>
              </div>
              <div className="card_400_w">
                <div className="desc__text weight600 teal_color mb20">
                  Зачет вторичного жилья/ Trade-in
                </div>
                <div className="row space-between align-items-center">
                  <Button variant="outlined" className="vw__size__btn desc__text px0 py19 mr25 fl1">
                    <span className="desc__text weight600 black_color text_trans_none">
                      Запросить оценку квартиры
                    </span>
                  </Button>
                  <AnswerIcon className="answer_icon" />
                </div>
              </div>
            </div>
            <div className="card_400_w">
              <div className="desc__text weight600 teal_color mb20">Дополнительные возможности</div>
              <div className="desc__text weight600 teal_color mb20">Военная ипотека</div>
              <div className="desc__text weight600 teal_color mb20">Семейная ипотека</div>
              <div className="desc__text weight600 teal_color mb20">Ипотека без первого взноса</div>
              <div className="desc__text weight600 teal_color mb20">Ипотека по двум документам</div>
              <div className="desc__text weight600 teal_color mb20">Жилищные сертификаты</div>
              <div className="desc__text weight600 teal_color">Рассрочка</div>
            </div>
          </div>
          <div className="grid_col3_gap100 align-start vw-size mb50">
            <div className="fld-column">
              <div className="desc__text weight600 mb20">Одна заявка для всех банков</div>
              <p className="desc__text">
                Одна заявка для всех банков Банки-партнёры подберут ипотечную программу, рассчитают
                точную сумму ипотечных платежей, срок кредита и расскажут о процедуре выдачи
                ипотеки.
              </p>
            </div>
            <div className="fld-column">
              <div className="desc__text weight600 mb20">Бесплатный сервис</div>
              <p className="desc__text">
                Все договорные отношения по оформлению ипотечного кредита вы заключаете с банком.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
