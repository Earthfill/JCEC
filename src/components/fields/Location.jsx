import { LocationOnOutlined, RadioButtonUncheckedOutlined } from "@mui/icons-material"

const Location = () => {
  return (
    <div>
      <div className="location">
        <h4>City</h4>
        <p><strong>Location</strong></p>
      </div>
      <LocationOnOutlined className="icon"/>
      <RadioButtonUncheckedOutlined className="button--icon" fontSize="small"/>
    </div>
  )
}

export default Location