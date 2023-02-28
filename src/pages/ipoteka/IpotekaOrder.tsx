import React, { useState } from 'react';
import styles from './style.module.scss';
import { HistoryLink } from '../../components/historyLink';
import clsx from 'clsx';
import { Select } from '../../components/select/Select';
import { ReactComponent as Gk7Icon } from '../../assets/svg/7gk.svg';
import { ReactComponent as GrinvichIcon } from '../../assets/svg/grinvich.svg';
import { ReactComponent as AstraIcon } from '../../assets/svg/astra.svg';
import { ReactComponent as GolosIcon } from '../../assets/svg/golos.svg';
import { ReactComponent as PickIcon } from '../../assets/svg/pick.svg';
import { Button } from '../../components/button';

export const IpotekaOrder = () => {
  const [indexBank, setIndexBank] = useState<number>(0);

  const brands = [
    { id: 0, brand: Gk7Icon },
    { id: 1, brand: GrinvichIcon },
    { id: 2, brand: AstraIcon },
    { id: 3, brand: GrinvichIcon },
    { id: 4, brand: AstraIcon },
    { id: 5, brand: GolosIcon },
    { id: 6, brand: AstraIcon },
    { id: 7, brand: PickIcon },
    { id: 8, brand: GolosIcon },
    { id: 9, brand: PickIcon },
    { id: 10, brand: GrinvichIcon },
    { id: 11, brand: GolosIcon },
    { id: 12, brand: PickIcon },
    { id: 13, brand: PickIcon },
    { id: 14, brand: GolosIcon }
  ];
  return (
    <div className="container">
      <div className={styles.container}>
        <HistoryLink links={[{ name: 'Ипотека', link: '/ipoteka' }]} />
        <div className={clsx([styles.row, 'mb80', 'pt20'])}>
          <div className={styles.col}>
            <h4 className="f28 w700 mb20">Ипотека</h4>
            <p className="mt30 f18">
              На нашем портале вы можете подать заявку на ипотечный кредит в несколько банков
              единовременно. Сначала нужно ознакомиться с условиями выдачи кредита, сравнить ставки
              по действующим в банке программам, изучить требования, которые предъявляются к
              заемщикам. Стоит поинтересоваться, какой пакет документов понадобится собрать. После
              того как вы определитесь с наиболее подходящими для вас параметрами получения
              кредитных средств, можно будет отправить запрос в режиме онлайн и взять деньги под
              сниженный процент.
            </p>
            <p className="mt30 f18">
              Сервис, с помощью которого можно подобрать ипотечный кредит и оформить онлайн-заявку,
              для тех, кто хочет получить ипотеку на самых выгодных условиях*. У нас большая база
              актуальных ипотечных предложений банков, что позволит вам найти наиболее подходящее
              предложение и быть уверенным в правильном выборе.
            </p>
            <p className="mt20 f18">Рассчитайте ипотеку онлайн и выберите лучшие условия банков.</p>
          </div>
          <img src={require('../../assets/image/about_city.png')} alt="" />
        </div>
        <h2 className="mt30 pb30 f28">
          Все банки <span className={styles.title_span}> в Екатеринбурге</span>
        </h2>
        <div className={styles.select__wrap}>
          <Select
            options={['Введите название банка', 'Acтра', 'Гринвич', 'ГОЛОС', 'ПИК']}
            placeholder="Введите название банка"
            selectedIbdex={indexBank}
            setSelectedIndex={setIndexBank}
          />
        </div>
        <div className={styles.list}>
          {brands.map(({ id, brand: Brand }) => (
            <div key={id} className={styles.box}>
              <Brand />
            </div>
          ))}

          <div className={styles.box}>
            <GrinvichIcon />
          </div>
        </div>
      </div>
      <Button className='mb80' variant="orange">Показать все банки</Button>
    </div>
  );
};
