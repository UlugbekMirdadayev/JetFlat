import { useParams } from 'react-router-dom';
import { HistoryLink } from '../../components/historyLink';
import { ReactComponent as ListIcon } from '../../assets/svg/list.svg';
import { ReactComponent as ShahmatIcon } from '../../assets/svg/shahmat.svg';
import { ReactComponent as MinusIcon } from '../../assets/svg/minus.svg';
import './style.css';
import { Select } from '../../components/select/Select';

export const ApartmentSelect = () => {
  const { id } = useParams();
  return (
    <div className="result_container">
      <div className="container">
        <HistoryLink
          links={[
            { name: 'Жилые комплексы', link: '/residential-complexes' },
            { name: 'Зелёный остров', link: '/#residential-complexes' },
            { name: 'Выбор квартиры', link: `/apartment/${id}` }
          ]}
        />
        <div className="row space-between mb50">
          <div className="title_result align-items-center">
            <h2>
              <span>ЖК Зелёный остров:</span> выбор квартиры
            </h2>
          </div>
          <div className="row lg-gap-20 align-items-center">
            <button className="outline-primary py19 px40">
              <span className="button_inner">Вернуться к ЖК</span>
            </button>
            <button className="outline-primary  py19 px40">
              <span className="button_inner">Ипотечный калькулятор</span>
            </button>
            <button className="tr-btn">
              <ListIcon />
            </button>
            <button className="tr-btn">
              <ShahmatIcon />
            </button>
          </div>
        </div>
        <div className="row space-between">
          <div className="column_label">
            <div className="fs17">Ценовой диапазон, ₽</div>
            <div className="teal_bg row align-items-center mt18">
              <p className="fs18 weight600">4 200 000</p>
              <MinusIcon className="mx16" strokeWidth={2} />
              <p className="fs18 weight600">4 200 000</p>
            </div>
          </div>
          <div className="column_label">
            <div className="fs17">Дом или корпус</div>
            <div className="mt18">
              <Select options={['Дом или корпус , дом 1']} selectedIbdex={0} setSelectedIndex={(e) => e} />
            </div>
          </div>
          <div className="column_label">
            <div className="fs17">Дом или корпус</div>
            <div className="mt18">
              <Select options={['Дом или корпус , дом 1']} selectedIbdex={0} setSelectedIndex={(e) => e} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
