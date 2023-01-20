import {
  BackgroundModal,
  ButtonStyled,
  ModalContainer,
  ModalHeader,
  ModalOptions
} from "./style";



import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../services";

export const ModalEditProd = ({ setModalEditProd, productId }) => {
  const formSchema = yup.object().shape({
    produto: yup.string().required("Campo obrigatório"),
    valor: yup.string().required("Campo obrigatório"),
    descricao: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmits = ({ produto, descricao, valor }) => {
    const product = { produto, descricao, valor };
    api
      .patch(
        `/cars/${productId}`,
        product
      )
      .then((_) => {
        console.log(_);
        setModalEditProd(false);
      })
      .catch((err) => console.log("Ops! Algo deu errado"));
  };
  return (
    <BackgroundModal>
      <ModalContainer>
        <ModalHeader>
          <div>
            <h5>Editar Produto</h5>
            <button onClick={() => setModalEditProd(false)}>X</button>
          </div>
        </ModalHeader>
        <ModalOptions>
          <form id="form" onSubmit={handleSubmit(onSubmits)}>
            <div className="productField">
              <input placeholder="Produto" {...register("produto")} />
              <input placeholder="Valor R$" {...register("valor")} />
            </div>
            <div className="moreInfoField">
              <input placeholder="Descricao" {...register("descricao")} />
            </div>
            <div className="spanField">
              {errors.produto && <span>Produto é um campo de texto obrigatório</span>}
              {errors.valor && <span>Valor é um campo numérico obrigatório</span>}
              {errors.descricao && (
                <span>Descrição é um campo de texto obrigatório</span>
              )}
            </div>
          </form>
        </ModalOptions>
        <ButtonStyled form="form" type="submit">
          EDIT
        </ButtonStyled>
      </ModalContainer>
    </BackgroundModal>
  );
};
