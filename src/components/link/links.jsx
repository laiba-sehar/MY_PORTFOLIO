import React from 'react'
import './links.css'

function links() {
  return (
    <div className="container">
      <div className="heading"> {/* Style this div for headings */}
        <h2>Links</h2>
      </div>
      <div className="links"> {/* Style this div for links */}
        <ul>
          <li><a href="https://github.com">GitHub</a></li>
          <li><a href="https://www.linkedin.com">LinkedIn</a></li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </div>
  )
}

export default links