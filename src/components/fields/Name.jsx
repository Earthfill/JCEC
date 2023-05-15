import { Person2Outlined, RadioButtonCheckedOutlined } from "@mui/icons-material"

const Name = () => {
  return (
    <div>
      <div className="name">
        <h4>Your Name</h4>
        <p>First, middle & Last name</p>
      </div>
      <Person2Outlined className="icon"/>
      <RadioButtonCheckedOutlined className="button--icon"/>
    </div>
  )
}

export default Name