import { FC } from 'react';
import s from './style.module.scss';
import { ReactComponent as Info } from '../../assets/svg/info.svg';
import { Checkbox } from '../../components/checkbox';

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
        <div className="row space-between">
          <div className={s.card__title}>Источники оплаты по договору</div>
          <div className={s.card__title}>3 456 789Р</div>
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
