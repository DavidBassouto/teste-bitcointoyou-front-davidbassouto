import { LineDivisory } from "../ProductsDisplay/style";
import {
  CardEditField,
  Container,
  DescriptionField,
  PriceField,
} from "../DetailField/style";
import { Tag } from "phosphor-react";

export const DetailFieldEmpty = () => {
  return (
    <Container>
      <h3>Selecione um produto</h3>
      <PriceField>
        <h4>Valor</h4>
        <p>--</p>
      </PriceField>
      <DescriptionField>
        <p>Selecione um produto para obter mais detalhes</p>
      </DescriptionField>
      <LineDivisory />
      <CardEditField>
        <button disabled={true} >Editar</button>
        <Tag size={35} color="#222d35" weight="fill" />
      </CardEditField>
    </Container>
  );
};
