import { useState } from "react"
import Field from "./Field"
import InputField from "./InputField"
import Vertical from "./Vertical"

const Body = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isNextStepClicked, setIsNextStepClicked] = useState(false);

  const handleNextStep = (event) => {
    event.preventDefault()
    setCurrentStep((prevStep) => {
      const nextStep = prevStep + 1
      return nextStep > 5 ? 5 : nextStep
    });
    setIsNextStepClicked(true)
  };

  const handlePreviousStep = (event) => {
    event.preventDefault();
    setCurrentStep((prevStep) => {
      const nextStep = prevStep - 1;
      return nextStep < 1 ? 1 : nextStep;
    });
    setIsNextStepClicked(false);
  };
  

  return (
    <div className="body--sep">
      <Field
        currentStep={currentStep}
        isNextStepClicked={isNextStepClicked}
      />
      <Vertical />
      <InputField 
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        currentStep={currentStep}
        isNextStepClicked={isNextStepClicked}
      />
    </div>
  )
}

export default Body