import { useEffect } from 'react';
import { CustomModal, Image, Overlay } from './Modal.styles';
import { useGlobalContext } from 'context/GlobalProvider';

const Modal = ({ imgURL, statusLoading }) => {
  const { toggleModal: closeModal } = useGlobalContext();

  useEffect(() => {
    const handleEsc = ({ code }) => code === 'Escape' && closeModal();

    window.addEventListener('keydown', handleEsc);
    return () => window.addEventListener('keydown', handleEsc);
  }, [closeModal]);

  const handleClose = e => e.target === e.currentTarget && closeModal();

  return (
    <Overlay onClick={handleClose}>
      <CustomModal>
        <Image src={imgURL} alt="" onLoad={statusLoading} />
      </CustomModal>
    </Overlay>
  );
};

export default Modal;
