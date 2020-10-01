import React from 'react'
import './Foods.scss';


export default function Foods(props) {
  const drinkAmount = props.drinks;

  return (
    <div className="foods-container">

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
