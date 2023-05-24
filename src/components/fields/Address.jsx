import { HomeOutlined, RadioButtonUncheckedOutlined } from "@mui/icons-material"

const Address = ({currentStep, isNextStepClicked }) => {
  return (
    <div>
      <div className="address">
        <h4>House</h4>
        <p><strong>Address</strong></p>
      </div>
      {currentStep === 4 &&
      <HomeOutlined className="name--icon"/>
      }
      {currentStep === 4 &&
      <RadioButtonUncheckedOutlined 
        className="name--button--icon" 
        fontSize="small"
      />
      }
      {currentStep !== 4 &&
      <HomeOutlined className="icon"/>
      }
      {currentStep !== 4 &&
      <RadioButtonUncheckedOutlined 
        className="button--icon" 
        fontSize="small"
      />
      }
    </div>
  )
}

export default Address