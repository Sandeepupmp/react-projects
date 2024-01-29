import { FaTimes } from "react-icons/fa";
function Model() {
  return (
    <div className={`modal-overlay `}>
        <div className="modal-container">
            <h3>Hello Modal</h3>
            <button className="close-modal-btn">
            <FaTimes/>
            </button>
        </div>

    </div>


  )
}
export default Model