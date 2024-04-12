import React from 'react'
import './Styling/footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <img src="src\assets\writing_icon.svg" ></img>
        <p> Glyph Notes &copy; {new Date().getFullYear()}
        </p>
    </div>
  )
}
export default Footer 