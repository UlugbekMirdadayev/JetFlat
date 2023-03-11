import { FC } from 'react';
import s from './style.module.scss';
import { ReactComponent as Info } from '../../assets/svg/info.svg';
import { Checkbox } from '../../components/checkbox';
import clsx from 'clsx';

type Props = { step: number; setStep: Function };

const SecondStep: FC<Props> = ({ step, setStep }) => {
  const handleNext = () => setStep(step + 1);

  return step === 1 ? (
    <div className={s.step__second}>
      <div className={s.popup}>
        <Info />
        <div className={s.paragraph}>
          Пожалуйста, заранее сообщите Застройщику сведения о всех Покупателях квартиры. Вы можете
          использовать поле «Особые пожелания» при бронировании или связаться с отделом продаж
          Застройщика напрямую — контактные данные будут указаны в вашем подтверждении бронирования
        </div>
      </div>

      <div className={s.card}>
        <div className={s.card__title}>
          Покупатели квартиры (собственники) - данные для договора
        </div>
        <div className={s.card__desc}>
          Пожалуйста, заполните все данные на Покупателей квартиры, чтобы Застройщик смог
          подготовить для Вас договор
        </div>
        <div className={s.row}>
          <label className={s.input}>
            <Checkbox /> <span>Я Покупатель</span>
          </label>
          <input className={s.input} placeholder="Кол-во Покупателей (по договору)*" />
          <input className={s.input} placeholder="В том числе дети (до 18 лет)*" />
        </div>
        <div className={s.row}>
          <input className={s.input} placeholder="Фамилия*" />
          <input className={s.input} placeholder="Имя*" />
          <input className={s.input} placeholder="Отчество" />
        </div>
        <div className={s.row}>
          <input className={s.input} placeholder="Доля в праве собственности*" />
          <input className={s.input} placeholder="Номер телефона*" />
          <input className={s.input} placeholder="E-mail*" />
        </div>
        <button className={s.add_btn}>Добавить покупателя</button>
      </div>
      <div className={s.card}>
        <div className="sm-d-none">
          <div className={s.w900}>
            <div className={s.card__title}>Источники оплаты по договору</div>
            <div className={s.card__title}>3 456 789Р</div>
          </div>
        </div>
        <div className="sm-d-block d-none">
          <div className={s.card__title}>Источники оплаты по договору:</div>
          <div className={clsx([s.card__title,s.sm__f20, 'underline'])}>3 456 789Р</div>
        </div>

        <div className={clsx([s.card__desc, 'orange_color'])}>
          Пожалуйста, укажите как Вы планируете оплачивать стоимость квартиры
        </div>
        <div className={s.w900}>
          <label className={s.checkbox_row}>
            <Checkbox /> <span>Собственные денежные средства</span>
          </label>
          <input type="text" placeholder="Укажите сумму" className={s.mini_input} />
        </div>
        <div className={s.w900}>
          <label className={s.checkbox_row}>
            <Checkbox /> <span>Средства материнского капитала</span>
          </label>
          <input type="text" placeholder="Укажите сумму" className={s.mini_input} />
        </div>
        <div className={s.w900}>
          <label className={s.checkbox_row}>
            <Checkbox /> <span>Средства по сертификатам</span>
          </label>
          <input type="text" placeholder="Укажите сумму" className={s.mini_input} />
        </div>
        <div className={s.w900}>
          <label className={s.checkbox_row}>
            <Checkbox />
            <span>Денежные средства от продажи своей квартиры (Trade-in/ Вторичное жилье )</span>
          </label>
        </div>
        <div className={clsx([s.checkbox_row, s.checkbox_row__custome])}>
          <input
            type="text"
            placeholder="Адрес квартиры (Trade-in/ Вторичное жилье )"
            className={clsx([s.mini_input, s.mini_input_auto_width])}
          />
          <input
            type="text"
            placeholder="Количество комнат"
            className={clsx([s.mini_input, s.mini_input_auto_width])}
          />
          <input
            type="text"
            placeholder="Этаж"
            className={clsx([s.mini_input, s.mini_input_auto_width])}
          />
        </div>
        <div className={s.w900}>
          <label className={s.checkbox_row}>
            <Checkbox /> <span>Ипотечные денежные средства</span>
          </label>
        </div>
        <div className={s.bottom_row}>
          <div className={clsx([s.paragraph, 'teal_color'])}>
            Банки, предоставляющие ипотеку по выбранной квартире (СБЕР, Газпромбанк, Альфа, Улалсиб,
            Открытие)
          </div>

          <div className={s.checkbox_row}>
            <label className={s.checkbox_row}>
              <Checkbox />
              <span>Ипотека одобрена</span>
            </label>
            <input
              type="text"
              placeholder="Укажите Банк - мультисписок Застойщика"
              className={clsx([s.mini_input, s.mini_input_auto_width])}
            />
            <input
              type="text"
              placeholder="Укажите Банк вне списка"
              className={clsx([s.mini_input, s.mini_input_auto_width])}
            />
          </div>
          <div className={s.checkbox_row}>
            <label className={s.checkbox_row}>
              <Checkbox />
              <span>Требуется одобрение</span>
            </label>
            <input
              type="text"
              placeholder="Укажите Банк - мультисписок Застойщика"
              className={clsx([s.mini_input, s.mini_input_auto_width])}
            />
          </div>
        </div>
      </div>
      <div className={s.card}>
        <div className={s.card__title}>Добавьте к своему бронированию</div>
        <div className={s.w900}>
          <label className={s.checkbox_row}>
            <Checkbox /> <span>Мне бы хотелось запросить услугу по получению ипотеки в Банке</span>
          </label>
        </div>
        <div className={s.w900}>
          <span className={s.paragraph}>
            Мы предоставим специалиста, который поможет выбрать Банк и ипотечную программу, поможет
            заполнить заявку на одобрение ипотеки и будет сопровождать Вас при подписании кредитного
            договора
          </span>
        </div>
        <div className={s.w900}>
          <label className={s.checkbox_row}>
            <span className={clsx([s.paragraph, 'teal_color'])}>
              Услуга предоставляется бесплатно
            </span>
          </label>
        </div>
        <div className={s.w900}>
          <label className={s.checkbox_row}>
            <Checkbox />
            <span>Мне бы хотелось запросить услугу по сопровождению сделки</span>
          </label>
        </div>
        <div className={s.w900}>
          <label className={s.checkbox_row}>
            <span className={clsx([s.paragraph, 'teal_color'])}>
              Услуга предоставляется бесплатно
            </span>
          </label>
        </div>
        <div className={s.w900}>
          <label className={s.checkbox_row}>
            <Checkbox /> <span>Ипотечные денежные средства</span>
          </label>
        </div>
        <div className={s.w900}>
          <span className={s.paragraph}>
            Мы предоставим специалиста, который поможет Вам в поиске Покупателя на квартиру и
            сопроводит процесс продажи Вашей квартиры
          </span>
        </div>
        <div className={s.w900}>
          <label className={s.checkbox_row}>
            <span className={clsx([s.paragraph, 'teal_color'])}>
              Стоимоть услуги - рассчитывается индивидуально
            </span>
          </label>
        </div>
      </div>
      <div className={s.card}>
        <div className={s.card__title}>Расскажите нам о ваших особых пожеланиях</div>
        <div className={s.w900}>
          <span className={s.checkbox_row}>
            Администрация сервиса не может гарантировать выполнение особых пожеланий, но сделает для
            этого все возможное. Вы всегда можете оставить особое пожелание после завершения
            бронирования!
          </span>
        </div>
        <div className={s.w900}>
          <span className={clsx([s.paragraph, 'teal_color'])}>
            Пожалуйста, напишите свои запросы
          </span>
        </div>
        <div className={s.w900}>
          <textarea className={s.textarea} placeholder="Ваши запросы" />
        </div>
      </div>

      <div className={s.card}>
        <div className={s.card__title}>Срок брони</div>
        <div className={s.w900}>
          <span className={s.checkbox_row}>
            Срок брони и условия устанавливает Застройщик и указывает в подтверждении Бронирования
          </span>
        </div>
        <div className={s.w900}>
          <span className={s.checkbox_row}>
            Достоверно и оперативно предоставляйте информацию и документы, запрашиваемые
            Застройщиком
          </span>
        </div>
        <div className={s.w900}>
          <span className={clsx([s.paragraph, 'teal_color'])}>
            Стандартные сроки бронирования: 1-3 дня (предоставление документов), 7-10 дней
            (одобрение ипотеки), 1 месяц (сделки с получением разрешения органов опеки, сделки по
            военной ипотеке), 1-3 месяца (Trade-in/ Вторичное жилье )
          </span>
        </div>
        <div className={s.w900}>
          <span className={s.checkbox_row}>Укажите необходимый срок бронирования</span>
        </div>
        <div className={s.w900}>
          <span className={clsx([s.paragraph, 'teal_color'])}>
            Застройщик не может гарантировать выполнения вашего запроса, но сделает все возможное
          </span>
        </div>
        <div className={s.w900}>
          <textarea
            className={s.textarea}
            placeholder={`Например: 
            - 11 дней (ждем завершение регистрации сделки по продаже своей квартиры и получение остатка денег)
            - 7 дней (Живу в Тюмени, нужно время на дорогу. Сканы документов предоставлю в течении 2 дней)`}
          />
        </div>
      </div>

      <div className={s.popup}>
        <Info />
        <div className={s.paragraph}>
          Услуга бронирования бесплатна. Бронь действует 24 часа с момента подтверждения заявки. Для
          установки брони на более длительный срок, пожалуйста, сообщите об этом в примечании к
          бронированию.
        </div>
      </div>
      <button className={s.next} onClick={handleNext}>
        Завершить бронирование
      </button>
    </div>
  ) : null;
};

export default SecondStep;
