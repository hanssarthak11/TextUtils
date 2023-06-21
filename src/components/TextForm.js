import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnclick = () => {
        // console.log("Button was pressed"+ Text);
        let NewText = Text.toUpperCase();
        setText(NewText);
    }
    const handleLoclick = () => {
        // console.log("Button was pressed"+ Text);
        let NewText = Text.toLowerCase();
        setText(NewText);
    }
    const handleOnchange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [Text, setText] = useState("Enter Text here");
    return (
        <>
            <div className="container" style = {{color : props.mode==="light"?"black":"white"}} >
                <h1>{props.heading}</h1>
            </div>
            <div className="my-3">
                <textarea className="form-control" style = {{color : props.mode==="light"?"black":"white" , backgroundColor: props.mode==="dark"?"#1a355d":"white"}} value={Text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleOnclick}>Click for uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoclick}>Click for lowercase</button>
            <div className="container my-3" style = {{color : props.mode==="light"?"black":"white"}}  >
                <h3>Text summary</h3>
                <p>{Text.split(' ').length} words and {Text.length} characters</p>
                <h3>Text preview</h3>
                <p>{Text}</p>
            </div>
        </>
    )
}

