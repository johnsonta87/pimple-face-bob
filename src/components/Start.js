import React, { useState } from 'react'
import Face from './Face';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { RandomizePos } from '../utils/helpers';
import Foods from './Foods';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    textAlign: 'center',
    '& > *': {
      width: '100%',
      maxWidth: '400px',
      margin: theme.spacing(1),
    },
  },
}));


export default function Start() {
  const classes = useStyles();
  const [mood, setMood] = useState(100);
  const [pimple, setPimpleCount] = useState([]);
  const [chocolate, setChocolate] = useState([1, 2, 3, 4, 5, 6]);
  const [soda, setSoda] = useState(100);

  const handlechocolate = () => {
    // add new pimple objects to PimplesList
    setPimpleCount(
      pimple => [
        ...pimple,
        {
          id: pimple.length + 1,
          top: RandomizePos(),
          left: RandomizePos(),
        }
      ]
    );

    // lower mood
    mood > 0 && setMood(mood - 10);

    setChocolate(chocolate.splice(1));
  }

  const handleSoda = () => {
    // add new pimple objects to PimplesList
    setPimpleCount(
      pimple => [
        ...pimple,
        {
          id: pimple.length + 1,
          top: RandomizePos(),
          left: RandomizePos(),
        }
      ]
    );

    // lower mood
    mood > 0 && setMood(mood - 10);

    // handle foods being eaten
    setSoda(soda - 10);
  }

  const handleLaser = id => {
    setPimpleCount(pimple.filter(item => item.id !== id));
    setMood(100);
  }

  return (
    <div>
      <div className={classes.root}>

        {chocolate.length > 0
          ? <Button variant="contained" color="secondary" onClick={handlechocolate}>Eat zit bar</Button>
          : <Button variant="contained" color="primary" onClick={() => setChocolate(...chocolate, [1, 2, 3, 4, 5, 6])}>Restock</Button>
        }

        {soda > 0
          ? <Button variant="contained" color="secondary" onClick={handleSoda}>Drink Pimple Soda</Button>
          : <Button variant="contained" color="primary" onClick={() => setSoda(100)}>Refill</Button>
        }

        {pimple.length > 9
          ? <Button variant="contained" color="primary" onClick={handleLaser}>Laser treatment</Button>
          : ''
        }
      </div>

      <Face mood={mood} pimples={pimple} />
      <Foods
        pimples={pimple}
        soda={soda}
        chocolate={chocolate}
      />
    </div>
  )
}
