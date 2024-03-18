import React from "react";

const Modal = ({ children }) => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={(e) => document.getElementById("my_modal_3").showModal()}
      >
        New Todo
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {children}
        </div>
      </dialog>
    </>
  );
};

export default Modal;
