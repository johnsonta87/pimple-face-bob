import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './Face.scss';


const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    backgroundColor: '#FBD671',
    boxShadow: 'inset -10px -10px 0px darken(#FFD700, 20%)',
    margin: '0 auto',
  },
}));

export default function Face(props) {
  const classes = useStyles();
  const pimples = props.pimples.map((pimple) => (
    <span
      key={pimple.id}
      className="pimple"
      style={{ top: pimple.top + 'px', left: pimple.left + 'px' }}
    ></span>
  ));

  return (
    <div className={classes.root}>
      <div className={`face
        ${props.mood > 80 ? 'happy' : ''}
        ${props.mood < 40 ? 'sad' : ''}`}>
        <div className="eyes">
          <div className="eye eye-1"></div>
          <div className="eye eye-2"></div>
        </div>
        <div className="mouth">
        </div>
      </div>
      <div className="pimples">
        {pimples}
      </div>
    </div>
  )
}
