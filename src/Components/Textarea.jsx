import React, { useState } from 'react'

function Textarea() {

  const [text, setText] = useState("")

  function uppper() {
    let newText = text.toUpperCase();
    setText(newText)
  }

  function lower() {
    let newText = text.toLowerCase();
    setText(newText)
  }

  function clear() {

    setText("")
  }



  return (
    <>

      <div className="container my-4">

        <div className="form-group">
          <h1>Drop Your Text: </h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="11"
            value={text}
            placeholder='Enter Your Value...'
            onChange={(e) => setText(e.target.value)}
          ></textarea>

        </div>

        <button onClick={uppper} type="button" class="btn btn-outline-primary mr-3">UpperCase</button>
        <button onClick={lower} type="button" class="btn btn-outline-primary mr-3">LowerCase</button>
        <button onClick={clear} type="button" class="btn btn-outline-primary mr-3">Clear</button>

      </div>



      <div className="container my-4">
        <h3>Preview</h3>
        <b>{text}</b> <br /> <br />

        <h6>{text.split(" ").length} word & {text.length} Characters</h6>
      </div>

    </>
  )
}

export default Textarea;