import React from 'react';
import { Accord } from '../../components/accordion';

export default function Questions() {
  return (
    <div className="full_container">
      <div className="container py80 my70">
        <h2 className="title_head vw-size mb50 ">
          <span>Есть вопросы?</span>
        </h2>
        <Accord />
      </div>
    </div>
  );
}
