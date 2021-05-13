import React from 'react'
import './app.css'
// import Pdf from './pdf.js'
import LiveProfile from './live-profile.js'
import EditProfile from './edit-profile.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function App() {
	return (
    <Router>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">View Public Profile</Link>
          </li>
          <li>
            <Link to="/edit">Edit Profile</Link>
          </li>
        </ul>
      </nav>
      <Route path= "/" exact component={LiveProfile} />
      <Route path= "/edit" component={EditProfile} />
    </Router>
  )
}
