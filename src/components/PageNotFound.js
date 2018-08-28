import React, { Component } from 'react'

class PageNotFound extends Component {
  render() {
    return (
      <div
        className="PageNotFound d-flex flex-row align-items-center justify-content-center"
        style={{ minHeight: '80vh' }}
      >
        <div className="row">
          <div className="col-md-12 text-center">
            <span className="display-1 d-block">404</span>
            <div className="mb-4 lead">The page you are looking for was not found.</div>
          </div>
        </div>
      </div>
    )
  }
}
export default PageNotFound
