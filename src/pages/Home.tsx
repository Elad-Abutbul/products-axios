import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/common.css';
import '../assets/css/main.css';
import Navbar from '../components/ui-elements/Navbar';
import DropDownFilter from '../components/filters/DropDownFilter';
import Loading from '../components/ui-elements/Loading';
import Card from '../components/product-components/Card';
import { Product } from '../types';

const Home: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

//TODO - useEffect + axios

  const showFilterByCategory = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // TODO - filter products by category - BONUS
  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    //TODO - filter products by category
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className='error-screen'>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className='filters'>
        <div className='container'>
          <DropDownFilter
            onClick={showFilterByCategory}
            isOpen={isDropdownOpen}
            filterByGenre={filterByCategory}
            genre={selectedCategory}
          />
        </div>
      </section>
      <main className='main'>
        <div className='container'>
          <section>
            <div className='products-grid' id='products-list'>
              {/* TODO - map products */}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
