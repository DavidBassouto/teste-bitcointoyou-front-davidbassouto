import { Tag } from "phosphor-react";
import { api } from "../../services";
import { Container, InformationField, TagField } from "./style";

export const Cards = ({ car, setCarByID }) => {
  const getProductByID = (id) => {
    api.get(`/cars/${id}`).then((res) => setCarByID(res.data));
  };

  return (
    <Container id={car.id} onClick={(e) => getProductByID(e.currentTarget.id)}>
      <InformationField>
        <h5>{car.name}</h5>
        <h4>{car.year}</h4>
        <div>
          <p>
            {car.owner.name.charAt(0).toUpperCase() + car.owner.name.slice(1)}
          </p>
          <p>{car.owner.email}</p>
          <p>{car.owner.cellphone}</p>
        </div>
        <p>{"R$ " + car.price.toFixed(2)}</p>
      </InformationField>
      <TagField>
        <Tag size={40} color="#222d35" weight="fill" />
      </TagField>
    </Container>
  );
};
