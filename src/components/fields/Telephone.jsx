import { PhoneInTalkOutlined, RadioButtonUncheckedOutlined } from "@mui/icons-material"

const Telephone = () => {
  return (
    <div>
      <div className="telephone">
        <h4>Telephone</h4>
        <p><strong>Number</strong></p>
      </div>
      <PhoneInTalkOutlined className="icon"/>
      <RadioButtonUncheckedOutlined className="button--icon" fontSize="small"/>
    </div>
  )
}

export default Telephone