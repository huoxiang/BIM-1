import { Link } from 'react-router'
import './PageNotFoundView.scss'
import React from 'react'

class PageNotFoundView extends React.Component {

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  componentWillMount () {

    this.props.setNavbarState({
      links: {
        settings: false
      }
    })
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  render() {

    return (
      <div className="page-not-found">
        <img className='forge-hero'/>
        <div className="container">
          <label>
            The link you are looking for is invalid or has changed...
            We apologize for the inconvenience.
            <br/>
            <br/>
            Try one of the following routing link:
            <br/>
            <br/>
            <Link to={'/'}>
              Home
            </Link>
          </label>
        </div>
      </div>
    )
  }
}

export default PageNotFoundView
























































