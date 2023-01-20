import {
  BackgroundModal,
  ButtonsContainer,
  ButtonStyled,
  ModalContainer,
  ModalHeader,
} from "./style";

import { api } from "../../services";

export const ModalDeleteProd = ({ setModalDelete, productId }) => {
  const deleteProductById = (id) => {
    api
      .delete(`/cars/${id}`)
      .then((_) => {
        setModalDelete(false);
        window.location.reload();
      })
      .catch((err) => console.log("Ops! Algo deu errado"));
  };

  return (
    <BackgroundModal>
      <ModalContainer>
        <ModalHeader>
          <div>
            <h5>Remover Produto?</h5>
            <button onClick={() => setModalDelete(false)}>X</button>
          </div>
        </ModalHeader>
        <ButtonsContainer>
          <ButtonStyled
            form="form"
            type="button"
            onClick={() => deleteProductById(productId)}
          >
            REMOVE
          </ButtonStyled>
          <ButtonStyled
            form="form"
            type="button"
            onClick={() => setModalDelete(false)}
          >
            CANCEL
          </ButtonStyled>
        </ButtonsContainer>
      </ModalContainer>
    </BackgroundModal>
  );
};
