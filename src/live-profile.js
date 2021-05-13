import React from 'react'
import './app.css'
import Pdf from './pdf.js'

export default function LiveProfile() {
  const defaultImg = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  const file = localStorage.getItem('pdf')


	return (
		<div className="page">
			<div className="container">
				<h1 className="heading">Invest In My Company</h1>
          <div className="img-holder">
            {file
              ? <Pdf file={file} />
              : <img src={defaultImg} alt="company profile photo" id="img" className="img" />
            }
					</div>
			    <div className="overview">
            <h2 className="heading 2">Overview</h2>
            <p className="body">As a former bootstrapper myself, I built the fund and partner with who I would have wanted to work with and that remains my North Star.</p>
          </div>
			</div>
		</div>
	)
}
