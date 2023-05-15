import { PhoneInTalkOutlined, RadioButtonCheckedOutlined } from "@mui/icons-material"

const Telephone = () => {
  return (
    <div>
      <div className="telephone">
        <h4>Telephone</h4>
        <p><strong>Number</strong></p>
      </div>
      <PhoneInTalkOutlined className="icon"/>
      <RadioButtonCheckedOutlined className="button--icon"/>
    </div>
  )
}

export default Telephone