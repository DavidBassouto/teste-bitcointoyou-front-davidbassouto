import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DisplayHeader = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  gap: 0.5rem;
  h1 {
    display: flex;
    flex-direction: row;
    justify-content: start;
    font-size: 1.5rem;
  }
  button {
    display: flex;
    width: 2rem;
    height: 2rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10rem;
    border: none;
    background-color: var(--dark-green);
    font-size: 2rem;
    color: var(--soft-gray);
    transition: 0.2s;
    &:hover {
      background-color: var(--green);
    }
    &:active{
      filter: brightness(1.4);
    }
  }
`;

export const LineDivisory = styled.div`
  width: 100%;
  height: 0.1rem;
  background: var(--dark-gray);
`;
