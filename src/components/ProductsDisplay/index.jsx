import { useState } from "react";
import { ModalNewProd } from "../ModalNewProd";
import { ProductInterface } from "../ProductsInterface";
import { Container, DisplayHeader, LineDivisory } from "./style";

export const ProductDisplay = ({ productsInfo, filteredProducts }) => {
  const [modalNewProd, setModalNewProd] = useState(false);
  return (
    <>
      <Container>
        <DisplayHeader>
          <h1>Produtos</h1>
          <button onClick={() => setModalNewProd(true)}>+</button>
        </DisplayHeader>
        <LineDivisory />
        <ProductInterface
          productsInfo={productsInfo}
          filteredProducts={filteredProducts}
        />
      </Container>
      {modalNewProd && <ModalNewProd setModalNewProd={setModalNewProd} />}
    </>
  );
};
