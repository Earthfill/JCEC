import { PhoneInTalkOutlined, RadioButtonUncheckedOutlined } from "@mui/icons-material"

const Telephone = ({ currentStep, isNextStepClicked }) => {
  return (
    <div>
      <div
      className="telephone">
        <h4>Telephone</h4>
        <p><strong>Number</strong></p>
      </div>
      {currentStep === 3 &&
      <PhoneInTalkOutlined
      className="name--icon"/>
      }
      {currentStep === 3 &&
      <RadioButtonUncheckedOutlined
        className="name--button--icon"
        fontSize="small"/>
      }
      {currentStep !== 3 &&
      <PhoneInTalkOutlined
      className="icon"/>
      }
      {currentStep !== 3 &&
      <RadioButtonUncheckedOutlined
        className="button--icon" 
        fontSize="small"/>
      }
    </div>
  )
}

export default Telephone