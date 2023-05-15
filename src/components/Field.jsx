import Address from "./fields/Address"
import Country from "./fields/Country"
import Location from "./fields/Location"
import Name from "./fields/Name"
import Telephone from "./fields/Telephone"

const Field = () => {
  return (
    <div className="field">
      <Name />
      <Location />
      <Telephone />
      <Address />
      <Country />
    </div>
  )
}

export default Field