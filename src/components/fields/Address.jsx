import { HomeOutlined, RadioButtonCheckedOutlined } from "@mui/icons-material"

const Address = () => {
  return (
    <div>
      <div className="address">
        <h4>House</h4>
        <p><strong>Address</strong></p>
      </div>
      <HomeOutlined className="icon"/>
      <RadioButtonCheckedOutlined className="button--icon"/>
    </div>
  )
}

export default Address