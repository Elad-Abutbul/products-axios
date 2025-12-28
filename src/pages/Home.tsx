import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/common.css";
import "../assets/css/main.css";
import Navbar from "../components/ui-elements/Navbar";
import DropDownFilter from "../components/filters/DropDownFilter";
import Loading from "../components/ui-elements/Loading";
import Card from "../components/product-components/Card";
import { Product } from "../types";
import Modal from "../components/product-components/Modal";
import { HOME_CONSTANTS } from "../constants/Home";

const Home: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(HOME_CONSTANTS.URL_API);
        setProducts(res.data);
        setAllProducts(res.data);
      } catch (error) {
        setError(HOME_CONSTANTS.FAILED);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  const showFilterByCategory = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const openModal = (product: Product): void => {
    setIsModalOpen(true);
    setModalProduct(product);
  };
  const closeModal = (): void => {
    setIsModalOpen(false);
    setModalProduct(null);
  };
  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === HOME_CONSTANTS.ALL) {
      setProducts(allProducts);
      return;
    }
    setProducts(allProducts.filter((p) => p.category === category));
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="error-screen">
        <p>{HOME_CONSTANTS.ERROR} {error}</p>
      </div>
    );
  }

  return (
    <>
      {isModalOpen && modalProduct && (
        <Modal product={modalProduct} closeModal={closeModal} />
      )}

      <Navbar />
      <section className="filters">
        <div className="container">
          <DropDownFilter
            onClick={showFilterByCategory}
            isOpen={isDropdownOpen}
            filterByGenre={filterByCategory}
            genre={selectedCategory}
          />
        </div>
      </section>
      <main className="main">
        <div className="container">
          <section>
            <div className="products-grid" id="products-list">
              {products.map((product) => {
                return (
                  <Card
                    key={product.id}
                    product={product}
                    openModal={openModal}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
