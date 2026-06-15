import React from "react"
import { Link } from "gatsby"

export const Nav = (props) => (
  <div>
    <h3>{props.pageTitle}</h3>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/projects/'>Projects</Link></li>
      <li><Link to='/employment/'>Past Employment</Link></li>
      <li><Link to='/classes/'>Coursework</Link></li>
    </ul>
  </div>
)
