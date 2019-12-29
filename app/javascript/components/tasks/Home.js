import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Home = props => (
  <div>
    <h1>Hello {props.name}!</h1>
    <p>Here are your tasks for today</p>
  </div>
)

Home.defaultProps = {
  name: 'Roy'
}

Home.propTypes = {
  name: PropTypes.string
}

export default Home