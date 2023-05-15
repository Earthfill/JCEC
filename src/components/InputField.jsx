const InputField = () => {
  return (
    <div className="inputfield">
      <div className="inputfield--header">
        <p>Step 1/5</p>
        <h2>Let&apos;s start with your name</h2>
        <p>Please fill in the details below</p>
      </div>
      <hr />
      <form className="form">
        <p>Enter your name</p>
        <input className="input--form"/>
        <button className="input--form--button">NEXT STEP</button>
      </form>
    </div>
  )
}

export default InputField