import PropTypes from "prop-types";
import React from "react";
import { ImgModal, ImgModalImage, ImgModalOverlay } from "./ImgModal.styled";

class ImageModal extends React.Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string.isRequired,
  };

  keydown = (event) => {
    if (event.keyCode === 27) {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydown);
  }

  render() {
    return (
      <ImgModalOverlay onClick={this.props.onCloseModal}>
        <ImgModal>
          <ImgModalImage src={this.props.currentImageUrl} alt="" />
        </ImgModal>
      </ImgModalOverlay>
    );
  }
}

export default ImageModal;
