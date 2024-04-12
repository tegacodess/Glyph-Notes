import React from 'react'
// import Notes from './Notes'

const CreateNote = ({inputText, setInputText, saveHandler}) => {
    const char = 2000;
    const  charLimit = char - inputText.length;
  return (
    <div className='note'>
        <textarea
        cols = {10}
        rows = {7}
        placeholder='Write your note here...'
        value = {inputText}
        onChange={(e) => setInputText(e.target.value)}
        // maxLength={}
        >
            
        </textarea>
        <div className='note_footer'>
            <span className='label'>{charLimit} Left</span>
            <button className='note_save' onClick={saveHandler}>Save</button>
        </div>
    </div>
  )
}
export default CreateNote