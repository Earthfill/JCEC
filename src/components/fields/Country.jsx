import { PublicOutlined, RadioButtonUncheckedOutlined } from "@mui/icons-material"

const Country = () => {
  return (
    <div>
      <div className="country">
        <h4>Country Of</h4>
        <p><strong>Residence</strong></p>
      </div>
      <PublicOutlined className="icon"/>
      <RadioButtonUncheckedOutlined className="button--icon" fontSize="small"/>
    </div>
  )
}

export default Country