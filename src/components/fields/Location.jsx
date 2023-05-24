import { LocationOnOutlined, RadioButtonUncheckedOutlined } from "@mui/icons-material"

const Location = ({ currentStep, isNextStepClicked }) => {
  return (
    <div>
      <div className="location">
        <h4>City</h4>
        <p><strong>Location</strong></p>
      </div>
      {currentStep === 2 &&
      <LocationOnOutlined className='name--icon'/>
      }
      {currentStep === 2 &&
      <RadioButtonUncheckedOutlined 
        className='name--button--icon'
        fontSize="small"
      />
      }
      {currentStep !== 2 &&
      <LocationOnOutlined className='icon'/>
      }
      {currentStep !== 2 &&
      <RadioButtonUncheckedOutlined
        className='button--icon'
        fontSize="small"
      />
      }
    </div>
  )
}

export default Location