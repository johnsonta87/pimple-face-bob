/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Container maxWidth="sm">
          <main>{children}</main>
          <footer style={{
            marginTop: `2rem`,
            textAlign: `center`
          }}>
            <Typography variant="body1" gutterBottom>
              &copy; {new Date().getFullYear()} - Built by <a href="https://github.com/johnsonta87" target="_blank" rel="noreferrer">@johnsonta87</a>.
            </Typography>
          </footer>
        </Container>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
