import React from 'react'
import './Foods.scss';

export default function Foods(props) {
  const sodaAmount = props.soda;
  const chocolate = props.chocolate.map(index => (
    <div key={index} className="piece"></div>
  ));

  const rotateStyle = {
    transform: `rotate(-45deg)`,
  }

  return (
    <div className="foods-container">
      <div className={`chocolate ${chocolate.length < 6 && 'eat'}`}>
        {chocolate}
      </div>

      <div className={`soda-glass ${sodaAmount < 100 && 'drink'}`}>
        <div className="glass"></div>
        {sodaAmount ?
          <React.Fragment>
            <div className="soda" style={{ height: sodaAmount + 'px' }}>
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
