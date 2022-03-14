import React from "react"
import Modal from "react-bootstrap/Modal"
import { Wrapper } from "./styles"

export function ModalMain({ children, show, handleClose }: { children: React.ReactNode; show: boolean; handleClose: () => void }) {
  return (
    <Wrapper>
      <Modal show={show} onHide={handleClose}>
        <Modal.Dialog>
          <Modal.Body>{children}</Modal.Body>
        </Modal.Dialog>
      </Modal>
    </Wrapper>
  )
}

export default ModalMain
