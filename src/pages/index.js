import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Start from '../components/Start'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../components/Loading'

const useStyles = makeStyles({
  root: {
    width: '100%',
    textAlign: 'center',
    marginTop: '50px'
  },
});

const App = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  return (
    <Layout>
      <SEO title="I love soda!" />

      <div className={classes.root}>
        <Typography variant="h2" component="h2" gutterBottom>Hi people, I'm Bob!</Typography>
        <Typography variant="body1" gutterBottom>Help keep my face clear!</Typography>
      </div>
      {loading ? <Loading /> :
        <Start />
      }
    </Layout>
  )
}

export default App
