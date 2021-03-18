import React from 'react'

const notFound = () => {
    return(
      <div className="guest-not-found">
        <h1 className="display-4">Oops, something went wrong...</h1>
        <p>We don't appear to have an invite with that code. Please check your invite carefully and the URL try again.</p>
        <img alt="Error icon" src="https://cdn4.iconfinder.com/data/icons/error/48/error__internet__alert_failure__computer_system_8-512.png" />
      </div>
    )
}

export default notFound;