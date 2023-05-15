import { Person2Outlined, RadioButtonUncheckedOutlined } from "@mui/icons-material"

const Name = () => {
  return (
    <div>
      <div className="name">
        <h4>Your Name</h4>
        <p>First, middle & Last name</p>
      </div>
      <Person2Outlined className="name--icon"/>
      <RadioButtonUncheckedOutlined className="name--button--icon" fontSize="small"/>
    </div>
  )
}

export default Name