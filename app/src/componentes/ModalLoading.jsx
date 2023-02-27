import ReactModal from "react-modal";
import ReactLoading from "react-loading";

function ModalLoading({ open }) {
  return (
    <ReactModal
      isOpen={open}
      style={{
        overlay: {},
        content: {
          background: "transparent",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <ReactLoading type="spokes" color="#000" />
    </ReactModal>
  );
}

export default ModalLoading;
