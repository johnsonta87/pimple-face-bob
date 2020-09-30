import React, { useState } from 'react'
import Face from './Face';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { RandomizeNum } from '../utils/helpers';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

// start with no pimples
const PimplesArray = [];

export default function Start() {
  const classes = useStyles();
  const [mood, setMood] = useState(100);
  const [pimple, setPimpleCount] = useState(PimplesArray);

  const handleEatJunk = () => {
    // add new pimple objects to PimplesArray
    setPimpleCount(
      PimplesArray => [
        ...PimplesArray,
        { id: pimple.length + 1, top: RandomizeNum(), left: RandomizeNum() }
      ]
    );

    console.log(pimple);
    mood > 0 && setMood(mood - 10);
  }

  const handleCleanFace = () => {
    // TODO reduce just some
    setMood(100);
  }

  const handleLaser = id => {
    setPimpleCount(PimplesArray.filter(item => item.id !== id));
    console.log(pimple);
    setMood(100);
  }

  return (
    <div>
      <Face mood={mood} pimples={pimple} />

      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={handleCleanFace}>Clean face</Button>
        <Button variant="contained" color="secondary" onClick={handleEatJunk}>Eat junk</Button>
        <Button variant="contained" color="primary" onClick={handleLaser}>Do laser treatment</Button>
      </div>
    </div>
  )
}
