import { HomeOutlined, RadioButtonUncheckedOutlined } from "@mui/icons-material"

const Address = () => {
  return (
    <div>
      <div className="address">
        <h4>House</h4>
        <p><strong>Address</strong></p>
      </div>
      <HomeOutlined className="icon"/>
      <RadioButtonUncheckedOutlined className="button--icon" fontSize="small"/>
    </div>
  )
}

export default Address