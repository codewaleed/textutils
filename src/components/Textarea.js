import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");
  const onUp = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const onDown = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  const removeSpace = () => {
    const newText = text.replaceAll(/\s/g, "");
    setText(newText);
  };
  const onReset = () => {
    setText("");
  };

const countWords=(text)=>{
  const arr = text.split(' ');
  return arr.filter(word => word !== '').length;
}

  const textChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className={`container my-4 text-${props.mode==='light'?'grey':'white'}`}>
        <label htmlFor="txt">
          <h3>Text Analyzer</h3>
        </label>
        <br />
        <textarea style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white', borderColor: props.mode==='light'?'grey':'white'}}
          id="txt"
          rows="10"
          cols="90"
          value={text}
          onChange={textChange}
        >
          
        </textarea>
        <br />
        <button className="btn btn-primary my-3 mx-2" onClick={onUp}>
          Change to UpperCase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={onDown}>
          Change to LowerCase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={removeSpace}>
          Remove Whitespace
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={onReset}>
          Reset
        </button><br />
        <h3>Preview</h3>
        <p>{text.length===0? "Enter Text to Preview": text}</p>
        <h3>Summary</h3>
        <p><strong>Words: </strong>{countWords(text)}</p>
      </div>
    </>
  );
}
