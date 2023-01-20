import { LineDivisory } from "../ProductsDisplay/style";
import {
  CardEditField,
  Container,
  DescriptionField,
  OwnerInfoField,
  PriceField,
} from "./style";
import { Trash } from "phosphor-react";
import { useState } from "react";
import { ModalDeleteProd } from "../ModalDeleteProd";
import { ModalEditProd } from "../ModalEditProd";

export const DetailField = ({ carByID }) => {
  const [modalDelete, setModalDelete] = useState(false);
  const [modelEditProd, setModalEditProd] = useState(false);

  return (
    <>
      <Container>
        <h3>{`${carByID.name} - ${carByID.year}`}</h3>
        <PriceField>
          <h4>Valor</h4>
          <p>{`R$ ${carByID.price.toFixed(2)}`}</p>
        </PriceField>
        <OwnerInfoField>
          <span>Proprietário:</span>
          <p> {carByID.owner.name} </p>
          <span>Email: </span>
          <p> {carByID.owner.email} </p>
          <span>Telefone: </span>
          <p>{carByID.owner.cellphone} </p>
        </OwnerInfoField>
        <DescriptionField>
          <p>{carByID.description}</p>
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
          productId={carByID.id}
        />
      )}
      {modelEditProd && (
        <ModalEditProd
          setModalEditProd={setModalEditProd}
          productId={carByID.id}
        />
      )}
    </>
  );
};
