import React, { useState } from 'react'
import Face from './Face';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { RandomizePos, RandomizeSize } from '../utils/helpers';
import Foods from './Foods';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    textAlign: 'center',
    '& > *': {
      width: '100%',
      maxWidth: '200px',
      margin: theme.spacing(1),
    },
  },
}));

// start with no pimples
const PimplesList = [];
const FoodsList = [1, 2, 3, 4, 5, 6];

export default function Start() {
  const classes = useStyles();
  const [mood, setMood] = useState(100);
  const [pimple, setPimpleCount] = useState(PimplesList);
  const [foods, setFoods] = useState(FoodsList);
  const [drinks, setDrinks] = useState(100);

  const handleEatJunk = () => {
    // add new pimple objects to PimplesList
    setPimpleCount(
      PimplesList => [
        ...PimplesList,
        {
          id: pimple.length + 1,
          top: RandomizePos(),
          left: RandomizePos(),
          size: RandomizeSize()
        }
      ]
    );

    // lower mood
    mood > 0 && setMood(mood - 10);

    // handle foods being eaten
    setFoods(
      ...FoodsList.splice(-1, 1)
    );
  }

  const handleDrinkSoda = () => {
    // add new pimple objects to PimplesList
    setPimpleCount(
      PimplesList => [
        ...PimplesList,
        {
          id: pimple.length + 1,
          top: RandomizePos(),
          left: RandomizePos(),
          size: RandomizeSize()
        }
      ]
    );

    // lower mood
    mood > 0 && setMood(mood - 10);

    // handle foods being eaten
    setDrinks(drinks - 10);
  }

  const handleLaser = id => {
    setPimpleCount(PimplesList.filter(item => item.id !== id));
    setMood(100);

    setFoods(...FoodsList, ...[1, 2, 3]);

    console.log(foods);
    setDrinks(100);
  }

  return (
    <div>
      <Face mood={mood} pimples={pimple} />
      <Foods
        pimples={pimple}
        foods={FoodsList}
        drinks={drinks}
      />

      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={handleLaser}>Laser treatment and restock</Button>
        {FoodsList.length > 0 ?
          <Button variant="contained" color="secondary" onClick={handleEatJunk}>Eat Pimple Choco</Button>
          : ''}

        {drinks > 0 ?
          <Button variant="contained" color="secondary" onClick={handleDrinkSoda}>Drink Pimple Soda</Button>
          : ''}
      </div>
    </div>
  )
}
