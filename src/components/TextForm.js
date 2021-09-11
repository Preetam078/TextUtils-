import { useState } from "react"
import React from 'react'

function TextForm(props) {

    const HandleOnChange = (event) =>{
       setText(event.target.value);
    }

    const HandleOnClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.Alert("Converted to UpperCase","success")
    }

    const HandleOnClick2 = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.Alert("Converted to LowerCase","success")
    }

    const HandleClear = () => {
        setText('');
        props.Alert("Your text is cleared","success")
    }
     
    const HandleOnClick3 = () => {

        if(bold === false){
            setBold(true);
        }
        else{
            setBold(false);
        }
        
    }

    const [bold, setBold] = useState(false);

    const [text, setText] = useState("Please Enter your Text")
    return (
        <>
        <div>
             <div>
           <br></br>
           <div className={`container text-${props.mode === 'dark'?'light':'dark'}`}>
           <h1 className="my-7">{props.title}</h1>
           <div className="mb-3">
               <textarea className={`form-control text-${props.mode === 'dark'?'light':'dark'}`} value={text} onChange={HandleOnChange} style={{ backgroundColor: props.mode === 'dark'?'#354038':'white', fontWeight : bold === true?'bold':'normal'}} id="boxText" rows="8" ></textarea>
           </div>
           <button className="btn btn-success mx-2" onClick={HandleOnClick}>Convert Upper Case</button>
           <button className="btn btn-success mx-2" onClick={HandleOnClick2}>Convert Lower Case</button>
           <button className="btn btn-success mx-2" onClick={HandleOnClick3}>Make Bold Letter</button>
           <button className="btn btn-success mx-2" onClick={HandleClear}>Clear Text</button>
        </div>
      </div>
      <div className={`container text-${props.mode === 'dark'?'light':'dark'}`}>
          <h3 className="my-3">Text Summary</h3>
          <p>{text.split(" ").length} <strong>words</strong> and {text.length} <strong>characters</strong></p>
          <p>{0.008 * text.split(" ").length} <strong>Minutes</strong> to read the text</p> 
          <div className="my-3">
              <h2>Preview</h2>
              <p>{text.length <= 0 ?"Please enter something in the text to preview":text}</p>
          </div>
      </div>
        </div>
       
      </>
    )
}

export default TextForm
