import { useState } from "react"

const ModalFinish = ({ setIsModalClicked }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    setIsModalClicked(true);
  }

  return (
    <div>
      {!isOpen && <button className="input--form--button--modal" onClick={openModal}>LAST STEP</button>}
      {isOpen && (
        <div className="modal--popup">
          SUBMISSION MADE!
        </div>
      )}
    </div>
  )
}

export default ModalFinish