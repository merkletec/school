import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  render() {
    return <React.Fragment />
  }
}
ScrollToTop.propTypes = {
  location: PropTypes.object,
}

export default withRouter(ScrollToTop)
