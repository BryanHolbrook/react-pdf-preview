import React, { useState } from 'react'
import './app.css'
import Pdf from './pdf.js'

export default function EditProfile() {
  const defaultImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F337%2F337946.png&f=1&nofb=1'
  const [pdf, setPdf] = useState(null)

  const onFileChange = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if(reader.readyState === 2){
        setPdf(reader.result)
        localStorage.setItem('pdf', reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

	return (
		<div className="page">
			<div className="container">
				<h1 className="heading">Upload Your Pitch Deck</h1>
          <div className="img-holder">
            {pdf
              ? <Pdf file={pdf} />
              : <img src={defaultImg} alt="pdf upload icon" id="img" className="img" />
            }
					</div>
				<input type="file" name="image-upload" id="input" onChange={onFileChange} />
				<div className="label">
        <label className="image-upload" htmlFor="input">
					<i className="material-icons">add_photo_alternate</i> UPLOAD

				</label>
        </div>
			</div>
		</div>
	)
}
