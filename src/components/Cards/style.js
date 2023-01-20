import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  background: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5rem;
  gap: 1rem;

  &:hover {
    cursor: pointer;
    filter: brightness(0.98);
  }
  &:active {
    svg {
      transition: 0.2s;
      fill: var(--green);
    }
  }
`;

export const InformationField = styled.div`
  width: 70%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  h5 {
    font-weight: bolder;
    font-size: 1rem;
  }
   div {
    width: 100%;
    height: 3rem;
    display: flex;
    flex-wrap:wrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    >p {
      font-weight: bolder;
      font-size: 0.7rem;
      color: var(--green);
    }
  }
  p {
    color: var(--gray);
    font-weight: bolder;
  }
`;

export const TagField = styled.div`
  width: 25%;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
