import { Cards } from "../Cards";
import { DetailField } from "../DetailField";
import { Container, InsideContainer } from "./style";

import { useState } from "react";

import { DetailFieldEmpty } from "../DetailFieldEmpty";

export const ProductInterface = ({
  productsInfo,
  filteredProducts,
}) => {
  const [productById, setProductByID] = useState([]);

  return (
    <>
      <Container>
        <InsideContainer>
          <h2>Lista de Produtos</h2>
          {filteredProducts.length > 0
            ? filteredProducts.map((product) => (
                <Cards
                  product={product}
                  key={product.id}
                  setProductByID={setProductByID}
                />
              ))
            : productsInfo.map((car) => (
                <Cards
                  car={car}
                  key={car.id}
                  setProductByID={setProductByID}
                />
              ))}
        </InsideContainer>
        <InsideContainer>
          <h2>Detalhes</h2>
          {productById.length === 0 ? (
            <DetailFieldEmpty />
          ) : (
            <DetailField productById={productById} />
          )}
        </InsideContainer>
      </Container>
    </>
  );
};
