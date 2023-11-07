import { IconClose } from "../../assest/Icon";
import DarkButton from "../Button/DarkButton";


const Modal = ({ modalTitle, closeModal, Children, onClick }) => {
  return (
    <div className="modal  " style={{ zIndex: "999999", position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: " rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="modal-content bg-white rounded-md p-8 m-10">
        <div className="flex  justify-between items-center mb-10">
          <div className="text-black text-[2.8vh] font-bold">{modalTitle}</div>
          <div onClick={closeModal}><IconClose /></div>
        </div>
        {Children}
        <div className="flex justify-end items-end"><DarkButton name="save changes" onClick={onClick} /></div>
      </div>
    </div>
  );
};

export default Modal