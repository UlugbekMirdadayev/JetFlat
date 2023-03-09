import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './style.module.scss';
import { HistoryLink } from '../../components/historyLink';
import FirstStep from './firstStep';
import { ReactComponent as SuccessIcon } from '../../assets/svg/success.svg';
import clsx from 'clsx';
import SecondStep from './secondStep';
type Props = {};

export const Booking: FC<Props> = () => {
  const { id } = useParams();
  const [step, setStep] = useState<number>(0);
  return (
    <div className="result_container">
      <div className="container">
        <HistoryLink links={[{ name: 'Бронирование', link: `/booking/${id}` }]} />
        <div className={s.booking__step_bar}>
          <div className={s.booking__step_bar__row}>
            <div className={s.booking__step_bar__line} />
            {[0, 1, 2].map((ind) => (
              <div
                key={ind}
                onClick={() => setStep(step >= ind ? ind : step)}
                className={clsx([
                  s.booking__step_bar__indicator,
                  step >= ind && s.booking__step_bar__indicator__active
                ])}>
                <SuccessIcon />
              </div>
            ))}
          </div>
          <div className={s.booking__step_bar__row}>
            <div
              className={clsx([
                s.booking__step_bar__name,
                step >= 0 && s.booking__step_bar__name__active
              ])}>
              Ваш выбор
            </div>
            <div
              className={clsx([
                s.booking__step_bar__name,
                step >= 1 && s.booking__step_bar__name__active
              ])}>
              Ваши данные
            </div>
            <div
              className={clsx([
                s.booking__step_bar__name,
                step >= 2 && s.booking__step_bar__name__active
              ])}>
              Бронь у Застройщика
            </div>
          </div>
        </div>
        <FirstStep setStep={setStep} step={step} />
        <SecondStep setStep={setStep} step={step} />
      </div>
    </div>
  );
};
