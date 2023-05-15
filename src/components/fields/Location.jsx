import { LocationOnOutlined, RadioButtonCheckedOutlined } from "@mui/icons-material"

const Location = () => {
  return (
    <div>
      <div className="location">
        <h4>City</h4>
        <p><strong>Location</strong></p>
      </div>
      <LocationOnOutlined className="icon"/>
      <RadioButtonCheckedOutlined className="button--icon"/>
    </div>
  )
}

export default Location