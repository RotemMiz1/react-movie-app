import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="text-center">
        
        <h1 className="display-1 fw-bold text-danger">404</h1>
        
        <h2 className="mb-3">Page Not Found</h2>
        
        <p className="text-muted mb-4">
         It seems you have reached an address that does not exist.
        </p>

        <Link to="/" className="btn btn-primary btn-lg shadow">
         Back to Home page
        </Link>

      </div>
    </div>
  )
}
