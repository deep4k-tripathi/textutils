import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const [text, setText] = useState("Enter Text Here")

    const handleUpClick = () => {
        // console.log("uppercase is clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    
    const handleLowClick = () => {
        // console.log("uppercase is clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }
    
    const handleClear = (event) => {
        let newText = ""
        props.showAlert("Textbox Cleared","success")
        setText(newText)
    }
    const handleCopy = () => {
        var text=document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard","success")
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(37 49 61)', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary " onClick={handleClear}>Clear Textbox</button>
                <button className="btn btn-primary mx-3 " onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Average reading time - {0.008 * text.split(" ").length} minutes</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in textbox to preview here"}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
TextForm.defaultProps = {
    heading: 'set heading here'
}
