import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Start from '../components/Start'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '50px'
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />

      <div className={classes.root}>
        <Typography variant="h2" component="h2" gutterBottom>Hi people, I'm Bob!</Typography>
        <Typography variant="body1" gutterBottom>Help keep my face clear!</Typography>
      </div>

      <Start />
    </Layout>
  )
}

export default App
