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
  height: 25rem;
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
  gap: 0.5rem;
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

export const ButtonsContainer= styled.div`
width: 95%;
height: 10rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`