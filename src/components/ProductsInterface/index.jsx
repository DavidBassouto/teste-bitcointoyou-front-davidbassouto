import { Cards } from "../Cards";
import { DetailField } from "../DetailField";
import { Container, InsideContainer } from "./style";

import { useState } from "react";

import { DetailFieldEmpty } from "../DetailFieldEmpty";

export const ProductInterface = ({
  productsInfo,
  filteredProducts,
}) => {
  const [carByID, setCarByID] = useState([]);

  return (
    <>
      <Container>
        <InsideContainer>
          <h2>Lista de Produtos</h2>
          {filteredProducts.length > 0
            ? filteredProducts.map((car) => (
                <Cards
                  car={car}
                  key={car.id}
                  setCarByID={setCarByID}
                />
              ))
            : productsInfo.map((car) => (
                <Cards
                  car={car}
                  key={car.id}
                  setCarByID={setCarByID}
                />
              ))}
        </InsideContainer>
        <InsideContainer>
          <h2>Detalhes</h2>
          {carByID.length === 0 ? (
            <DetailFieldEmpty />
          ) : (
            <DetailField carByID={carByID} />
          )}
        </InsideContainer>
      </Container>
    </>
  );
};
