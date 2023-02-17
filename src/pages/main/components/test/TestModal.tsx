import React from 'react';
import ArrowRightIcon from '../../../../assets/svg/arrow-right.svg';
import { Checkbox } from '../../../../components/checkbox';
import { Select } from '../../../../components/select/Select';
import styles from './style.module.scss';

export const TestModal = () => {
  const [selectedIbdex, setSelectedIndex] = React.useState(0);
  const [step, setStep] = React.useState(0);

  return (
    <>
      {!step ? (
        <div className={styles.test_modal_one}>
          <h1>1. Тип недвижимости</h1>
          <form>
            <button type="button">Первый тип</button>
            <button type="button">Второй тип</button>
            <button type="button">Третий тип</button>
            <Select
              options={['Программа выбрана', 'Академический']}
              selectedIbdex={selectedIbdex}
              setSelectedIndex={setSelectedIndex}
            />
          </form>
          <div className={styles._arrow_img}>
            <button>
              <img src={ArrowRightIcon} alt="..." className={styles._arrow_img_two_btn} />
            </button>
            <button onClick={() => setStep(1)}>
              <img src={ArrowRightIcon} alt="..." />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.test_modal}>
          <h1>2. Тип недвижимости</h1>
          <form>
            <div>
              <Checkbox />
              <input type="text" placeholder="Регистрация" />
            </div>
            <div>
              <Checkbox />
              <input type="text" placeholder="Регистрация" />
            </div>
            <div>
              <Checkbox />
              <input type="text" placeholder="Регистрация" />
            </div>
          </form>
          <div className={styles._arrow_img}>
            <button onClick={() => setStep(0)}>
              <img src={ArrowRightIcon} alt="..." className={styles._arrow_img_two_btn} />
            </button>

            <button>
              <img src={ArrowRightIcon} alt="..." />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
