import React, { useState } from "react";

interface IModal {
  children?: React.ReactNode;
  onClose?:() => void;
}

const Modal = ({ children }: IModal) => {
  return (
    <>
      <div className={`absolute w-screen h-screen bg-black/50 top-0 left-0 flex items-center justify-center   `} >
          <div className="bg-white rounded-lg p-8">
                {children}
          </div>
      </div>
    </>
  );
};

export default Modal;
