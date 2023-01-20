
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductDisplay } from "../../components/ProductsDisplay";
import { api } from "../../services";
import { Container } from "./styles";

export const Home = () => {
  const [productsInfo, setProductsInfo] = useState([]);

  const getProducts = () => {
    api
      .get(`/cars`)
      .then((res) => setProductsInfo(res.data));
  };

  useEffect(() => {
    getProducts();
  }, []);


  const [filteredProducts, setFilteredProducts] = useState([]);
  
  function handleFilter(textToSearch) {
    const filtedName = productsInfo.filter((car) => {
      return (
        car.name.toLowerCase().includes(textToSearch.toLowerCase())
      );
    });
    setFilteredProducts(filtedName);
  }
  return (
    <Container>
      <Header handleFilter={handleFilter}/>
      <ProductDisplay productsInfo={productsInfo} filteredProducts={filteredProducts} />
    </Container>
  );
};
