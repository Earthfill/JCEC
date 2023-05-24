import { PublicOutlined, RadioButtonUncheckedOutlined } from "@mui/icons-material"

const Country = ({ currentStep, isNextStepClicked }) => {
  return (
    <div>
      <div className="country">
        <h4>Country Of</h4>
        <p><strong>Residence</strong></p>
      </div>
      {currentStep === 5 &&
      <PublicOutlined className="name--icon"/>
      }
      {currentStep === 5 &&
      <RadioButtonUncheckedOutlined 
        className="name--button--icon" 
        fontSize="small"
      />
      }
      {currentStep !== 5 &&
      <PublicOutlined className="icon"/>
      }
      {currentStep !== 5 &&
      <RadioButtonUncheckedOutlined
        className="button--icon"
        fontSize="small"
      />
      }
    </div>
  )
}

export default Country
