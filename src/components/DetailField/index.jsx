import { LineDivisory } from "../ProductsDisplay/style";
import {
  CardEditField,
  Container,
  DescriptionField,
  PriceField,
} from "./style";
import { Trash } from "phosphor-react";
import { useState } from "react";
import { ModalDeleteProd } from "../ModalDeleteProd";
import { ModalEditProd } from "../ModalEditProd";

export const DetailField = ({ productById }) => {
  const [modalDelete, setModalDelete] = useState(false);
  const [modelEditProd, setModalEditProd] = useState(false);
   
  
  return (
    <>
      <Container>
        <h3>{productById.produto}</h3>
        <PriceField>
          <h4>Valor</h4>
          <p>{`R$ ${productById.valor.toFixed(2)}`}</p>
        </PriceField>
        <DescriptionField>
          <p>{productById.descricao}</p>
        </DescriptionField>
        <LineDivisory />
        <CardEditField>
          <button onClick={() => setModalEditProd(true)}>Editar</button>
          <Trash
            size={35}
            color="#222d35"
            weight="fill"
            cursor={"pointer"}
            onClick={() => setModalDelete(true)}
          />
        </CardEditField>
      </Container>
      {modalDelete && (
        <ModalDeleteProd
          setModalDelete={setModalDelete}
          productId={productById.id}
        />
      )}
      {modelEditProd && (
        <ModalEditProd
          setModalEditProd={setModalEditProd}
          productId={productById.id}
        />
      )}
    </>
  );
};
