/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'

import "./layout.scss"
import CharitySection from "./charity-section"
import FistBump from "./fist-bump-section"
import Description from "./description"
import Pillars from "./pillars-section"
import NoFeeSection from "./no-fee-section"
import Footnotes from "./footnotes"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <FistBump />
      <Description />
      <Pillars />
      <CharitySection />
      <NoFeeSection />
      <Footnotes />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
