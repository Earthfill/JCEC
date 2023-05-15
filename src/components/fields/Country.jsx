import { PublicOutlined, RadioButtonCheckedOutlined } from "@mui/icons-material"

const Country = () => {
  return (
    <div>
      <div className="country">
        <h4>Country Of</h4>
        <p><strong>Residence</strong></p>
      </div>
      <PublicOutlined className="icon"/>
      <RadioButtonCheckedOutlined className="button--icon"/>
    </div>
  )
}

export default Country