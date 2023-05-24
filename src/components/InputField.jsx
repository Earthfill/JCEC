const InputField = ({ handleNextStep, handlePreviousStep, currentStep, isNextSStepClicked }) => {
  return (
    <div className="inputfield">
      <div className="inputfield--header">
        <p>Step {currentStep}/5</p>
        {currentStep === 1 && (
          <h2>Let&apos;s start with your name</h2>
        )}
        {currentStep === 2 && (
          <h2>Now your city</h2>
        )}
        {currentStep === 3 && (
          <h2>Now your registered telephone number</h2>
        )}
        {currentStep === 4 && (
          <h2>Now your residential address</h2>
        )}
        {currentStep === 5 && (
          <h2>Lastly, your country of residence</h2>
        )}
        <p>Please fill in the details below</p>
      </div>
      <hr />
      {currentStep === 1 && (
      <form className="form">
        <p>Enter your name here</p>
        <input className="input--form"/>
        <button className="input--form--button" onClick={handleNextStep}>NEXT STEP</button>
      </form>
      )}
      {currentStep === 2 && (
      <form className="form">
        <p>Enter your city here</p>
        <input className="input--form"/>
        <button className="input--form--prev--button" onClick={handlePreviousStep}>PREVIOUS STEP</button>
        <button className="input--form--button" onClick={handleNextStep}>NEXT STEP</button>
      </form>
      )}
      {currentStep === 3 && (
      <form className="form">
        <p>Enter your phone number here</p>
        <input className="input--form"/>
        <button className="input--form--prev--button" onClick={handlePreviousStep}>PREVIOUS STEP</button>
        <button className="input--form--button" onClick={handleNextStep}>NEXT STEP</button>
      </form>
      )}
      {currentStep === 4 && (
      <form className="form">
        <p>Enter your house address here</p>
        <input className="input--form"/>
        <button className="input--form--prev--button" onClick={handlePreviousStep}>PREVIOUS STEP</button>
        <button className="input--form--button" onClick={handleNextStep}>NEXT STEP</button>
      </form>
      )}
      {currentStep === 5 && (
      <form className="form">
        <p>Enter your country of residence here</p>
        <input className="input--form"/>
        <button className="input--form--prev--button" onClick={handlePreviousStep}>PREVIOUS STEP</button>
        <button className="input--form--button" onClick={handleNextStep}>NEXT STEP</button>
      </form>
      )}
    </div>
  )
}

export default InputField