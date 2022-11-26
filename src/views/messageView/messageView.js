import React from "react";
import { createPortal } from "react-dom";
import MessageModal from "./messageModal/messageModal.js";

// modal-root element was created in index.html to be the only modal host in the app,
// if there were more modals we would always use this element,
// as it's high in the DOM tree we don't need to worry about z-indexes and positioning that much
let modalRoot = document.getElementById("modal-root");

// failSafe needed for tests, doesn't hurt production
/* istanbul ignore next */
if (!modalRoot) {
  modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);
}
const messageView = () => createPortal(<MessageModal />, modalRoot);
export default messageView;
