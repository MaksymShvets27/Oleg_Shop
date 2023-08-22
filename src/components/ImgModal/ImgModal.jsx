import PropTypes from "prop-types";
import React from "react";
import {
  ImgModal,
  ImgModalImgNextIcon,
  ImgModalImgPreviousIcon,
  ImgModalOverlay,
} from "./ImgModal.styled";

class ImageModal extends React.Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string.isRequired || PropTypes.array.isRequired,
    nextImage: PropTypes.func.isRequired,
    previousImage: PropTypes.func.isRequired,
    currentImageIndex: PropTypes.number.isRequired,
  };

  nextImage = () => {
    this.props.nextImage();
  };

  previousImage = () => {
    this.props.previousImage();
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
      <>
        {this.props.currentImageIndex !==
          this.props.currentImageUrl.length - 1 &&
          typeof this.props.currentImageUrl !== "string" && (
            <ImgModalImgNextIcon onClick={this.nextImage} />
          )}
        <ImgModalOverlay onClick={this.props.onCloseModal}>
          <ImgModal
            style={{
              backgroundImage: `url(${
                typeof this.props.currentImageUrl === "string"
                  ? this.props.currentImageUrl
                  : this.props.currentImageUrl[this.props.currentImageIndex]
              })`,
            }}
          ></ImgModal>
        </ImgModalOverlay>
        {this.props.currentImageIndex !== 0 &&
          typeof this.props.currentImageUrl !== "string" && (
            <ImgModalImgPreviousIcon onClick={this.previousImage} />
          )}
      </>
    );
  }
}

export default ImageModal;
