import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const InsideContainer = styled.div`
  width: 48%;
  height: 30rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
`;
