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

const Home: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  useEffect(() => {
    const api = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setAllProducts(res.data);
      } catch (error) {
        setError("failed");
      } finally {
        setLoading(false);
      }
    };
    api();
  }, []);
  const showFilterByCategory = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const openModal = (product: Product): void => {
    setModal(true);
    setModalProduct(product);
  };
  const closeModal = (): void => {
    setModal(false);
    setModalProduct(null);
  };
  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
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
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      {modal && modalProduct && (
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
