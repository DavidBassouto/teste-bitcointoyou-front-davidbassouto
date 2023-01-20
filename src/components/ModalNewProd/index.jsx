import {
  BackgroundModal,
  ButtonStyled,
  ContainerProdData,
  ModalContainer,
  ModalHeader,
  ModalOptions,
} from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services";

export const ModalNewProd = ({ setModalNewProd }) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    brand: yup
      .string()
      .required("Campo obrigatório")
      .max(15, "Max 15 characters"),
    price: yup
      .number()
      .typeError("Deve ser um valor numério")
      .required("Campo obrigatório")
      .min(0, "Deve ser positivo"),
    description: yup.string().max(150, "Max 150 characters"),
    owner: yup
      .object()
      .shape({
        email: yup
          .string()
          .email("Deve ser um email válido")
          .required("Campo obrigatório"),
        name: yup.string().required("Campo obrigatório"),
        cellphone: yup.string().required("Campo obrigatório"),
      })
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmits = (data) => {
    const product = {
      name: data.name,
      brand: data.brand,
      price: data.price,
      description: data.description,
      owner: {
        name: data.owner?.name,
        email: data.owner?.email,
        cellphone: data.owner?.cellphone,
      },
    };
    console.log(product);
    api
      .post(`/cars`, product)
      .then((_) => {
        console.log(product);
        setModalNewProd(false);
        window.location.reload();
      })
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <BackgroundModal>
      <ModalContainer>
        <ModalHeader>
          <div>
            <h5>Novo Produto</h5>
            <button onClick={() => setModalNewProd(false)}>X</button>
          </div>
        </ModalHeader>
        <ModalOptions>
          <form id="form" onSubmit={handleSubmit(onSubmits)}>
            <div className="productField">
              <h1>Dados do Produto</h1>
              <ContainerProdData>
                <input placeholder="Modelo do veículo" {...register("name")} />
                {errors.name && <span>{errors.name?.message}</span>}

                <input placeholder="Marca" {...register("brand")} />
                {errors.brand && <span>{errors.brand?.message}</span>}

                <input placeholder="Valor R$" {...register("price")} />
                {errors.price && <span>{errors.price?.message}</span>}
              </ContainerProdData>
            </div>
            <div className="moreInfoField">
              <input placeholder="Descrição" {...register("description")} />
            </div>
            <div className="productField">
              <h1>Dados do Proprietário</h1>
              <ContainerProdData>
                <input
                  placeholder="Nome completo"
                  {...register("owner.name")}
                />
                {errors.owner?.name && (
                  <span>{errors.owner?.name?.message}</span>
                )}

                <input
                  placeholder="email@mail.com"
                  {...register("owner.email")}
                />
                {errors.owner?.email && (
                  <span>{errors.owner?.email?.message}</span>
                )}

                <input
                  placeholder="Tel (XX)9XXXX-XXXX"
                  {...register("owner.cellphone")}
                />
                {errors.owner?.cellphone && (
                  <span>{errors.owner?.cellphone?.message}</span>
                )}
              </ContainerProdData>
            </div>
            <div className="spanField"></div>
          </form>
        </ModalOptions>
        <ButtonStyled form="form" type="submit">
          Add
        </ButtonStyled>
      </ModalContainer>
    </BackgroundModal>
  );
};
