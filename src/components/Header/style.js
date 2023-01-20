import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 2.8rem;
  flex-direction: row;
  align-items: center;
`;

export const LeftSide = styled.div`
  width: 52%;
  height: 2.8rem;
  background: var(--dark-gray);
`;

export const RigthtSide = styled.div`
  width: 48%;
  height: 2.8rem;
  background: var(--dark-green);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.8rem;
  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: var(--gray);
    font-weight: bold;

    &::placeholder {
      color: var(--gray);
    }
  }
`;
