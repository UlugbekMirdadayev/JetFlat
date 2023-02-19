import { HistoryLink } from '../../components/historyLink';
import './style.css';

export const ResultSearch = () => {
  return (
    <div className="result_container">
      <div className="container">
        <HistoryLink links={[]}/>
      </div>
    </div>
  );
};
