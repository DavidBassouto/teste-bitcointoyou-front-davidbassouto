import { Container, LeftSide, RigthtSide } from "./style";

export const Header = ({ handleFilter }) => {
  return (
    <Container>
      <LeftSide></LeftSide>
      <RigthtSide>
        <input
          type="text"
          placeholder="Buscar um produto"
          onChange={(event) => {
            handleFilter(event.target.value);
          }}
        />
      </RigthtSide>
    </Container>
  );
};
