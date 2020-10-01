import React from 'react'
import './Foods.scss';


export default function Foods(props) {
  const drinkAmount = props.drinks;
  const chocolate = props.foods && props.foods.map(index => (
    <div key={index} className="piece"></div>
  ));

  return (
    <div className="foods-container">
      <div className="chocolate">
        {chocolate}
      </div>

      <div className="beer-glass">
        <div className="glass">
          <div className="bump"></div>
          <div className="bump"></div>
          <div className="bump"></div>
        </div>
        {drinkAmount ?
          <React.Fragment>
            <div className="beer" style={{ height: drinkAmount + 'px' }}>
              <div className="foam"></div>
              <div className="foam"></div>
              <div className="foam"></div>
              <div className="foam"></div>
              <div className="foam"></div>
            </div>
          </React.Fragment>
          : ''}
      </div>
    </div>
  )
}
