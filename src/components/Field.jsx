import Address from "./fields/Address"
import Country from "./fields/Country"
import Location from "./fields/Location"
import Name from "./fields/Name"
import Telephone from "./fields/Telephone"

const Field = ({ currentStep, isNextStepClicked }) => {
  return (
    <div className="field">
      <Name 
        currentStep={currentStep}
        isNextStepClicked={isNextStepClicked}
      />
      <Location 
        currentStep={currentStep}
        isNextStepClicked={isNextStepClicked}
      />
      <Telephone 
        currentStep={currentStep}
        isNextStepClicked={isNextStepClicked}
      />
      <Address 
        currentStep={currentStep}
        isNextStepClicked={isNextStepClicked}
      />
      <Country 
        currentStep={currentStep}
        isNextStepClicked={isNextStepClicked}
      />
    </div>
  )
}

export default Field