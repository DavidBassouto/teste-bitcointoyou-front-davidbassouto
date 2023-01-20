import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.6rem;
  background-color: var(--white);
  width: 100%;
  height: 95%;
  gap: 1rem;
  gap: 0.5rem;
  h3 {
    color: var(--green);
    padding: 0.5rem;
    font-size: 1.5rem;
  }
`;

export const PriceField = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.5rem;
  gap: 0.5rem;
  p {
    font-weight: bold;
    color: var(--gray);
  }
`;
export const DescriptionField = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 50%;
  padding: 0.5rem;
  p {
    font-weight: bold;
    color: var(--dark-gray);
  }
`;
export const CardEditField = styled.div`
  display: flex;
  width: 95%;
  padding: 0.2rem;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  button {
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
  }
`;
