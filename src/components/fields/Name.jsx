import { Person2Outlined, RadioButtonUncheckedOutlined } from "@mui/icons-material"

const Name = ({ currentStep, isNextStepClicked }) => {
  return (
    <div>
      <div className="name">
        <h4>Your Name</h4>
        <p>First, middle & Last name</p>
      </div>
      {currentStep === 1 &&
      <Person2Outlined className="name--icon"/>
      }
      {currentStep === 1 &&
      <RadioButtonUncheckedOutlined
        className="name--button--icon"
        fontSize="small"
      />
      }
      {currentStep !== 1 &&
      <Person2Outlined className="icon"/>
      }
      {currentStep !== 1 &&
      <RadioButtonUncheckedOutlined 
        className="button--icon" 
        fontSize="small"
      />
      }
    </div>
  )
}

export default Name