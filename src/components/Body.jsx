import Field from "./Field"
import InputField from "./InputField"
import Vertical from "./Vertical"

const Body = () => {
  return (
    <div className="body--sep">
      <Field />
      <Vertical />
      <InputField />
    </div>
  )
}

export default Body