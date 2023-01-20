import styled from "styled-components";

export const BackgroundModal = styled.div`
  padding: 10px;
  width: 100vw;
  height: 100vh;
  margin: auto;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 35rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: var(--soft-gray);
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  gap: 1rem;


  input {
    background: var(--white);
    flex: 1;
    border: 0;
    color: var(--dark-gray);
  }
`;

export const ModalHeader = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  div {
    width: 100%;
    height: 5rem;
    padding: 0.4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    > h5 {
      font-size: 2rem;
    }

    > button {
      padding: 4px;
      background: var(--dark-gray);
      border-radius: 5px;
      color: var(--white);
      &:hover {
        background-color: var(--green);
      }
      &:active {
        filter: brightness(1.4);
      }
    }
  }
`;

export const ModalOptions = styled.div`
  width: 80%;
  gap: 0.5rem;
  width: 90%;
  height: 20rem;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.5rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--dark-green);
    border-radius: 0.5rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--dark-gray);
  }
  .spanField {
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  > form {
    width: 100%;
    display: flex;
    gap: 0.5rem;

    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    span {
      color: red;
      font-size: 0.8rem;
    }
    .productField {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h1 {
        font-size: 1rem;
      }
    }
    .moreInfoField {
      width: 100%;
      input {
        padding: 0.5rem;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        width: 95%;
        height: 5rem;
      }
    }
  }
`;

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--gray);
  width: 9rem;
  height: 3.2rem;
  background: var(--dark-green);
  border: none;
  color: var(--white);
  font-size: 1.3rem;
  font-weight: lighter;
  transition: 0.2s;
  &:hover {
    background-color: var(--green);
  }
  &:active {
    filter: brightness(1.4);
  }
`;

export const ContainerProdData = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  input {
    width: 100%;
    padding: 0.5rem;
    height: 3rem;
  }
`;

