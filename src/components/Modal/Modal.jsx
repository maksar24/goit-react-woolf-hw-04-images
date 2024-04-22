import { Component } from 'react';
import { CustomModal, Image, Overlay } from './Modal.styles';

class Modal extends Component {
  handleEsc = ({ code }) => {
    if (code === 'Escape') this.props.closeModal();
  };

  handleClose = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc);
  }

  render() {
    return (
      <Overlay onClick={this.handleClose}>
        <CustomModal>
          <Image
            src={this.props.imgURL}
            alt=""
            onLoad={this.props.statusLoading}
          />
        </CustomModal>
      </Overlay>
    );
  }
}

export default Modal;
