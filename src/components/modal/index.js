import { styled } from "styled-components";
import Image from "../gallery/image";
import IconButton from "../icon-button";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledDialog = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

const Modal = ({ photo, onCloseModal, onPhotoFavorited }) => {
  return (
    <>
      {photo && (
        <>
          <Overlay />
          <StyledDialog open={!photo} onClose={onCloseModal}>
            <Image
              key={photo.id}
              photo={photo}
              expanded={true}
              onFavorited={onPhotoFavorited}
            />
            <form method="dialog">
              <IconButton formMethod="dialog">
                <img src="/icons/close.png" alt="Icone de fechar" />
              </IconButton>
            </form>
          </StyledDialog>
        </>
      )}
    </>
  );
};

export default Modal;
