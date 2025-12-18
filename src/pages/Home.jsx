import { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/common.css';
import '../assets/css/main.css';
import Navbar from '../components/ui-elements/Navbar';
import DropDownFilter from '../components/filters/DropDownFilter';
import InputFilter from '../components/filters/InputFilter';
import Card from '../components/ui-elements/Card';
import Loading from '../components/ui-elements/Loading';

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API endpoint: 'https://fakestoreapi.com/products'

  //TODO: Add useEffect hook to fetch products
  //TODO: Create fetchProducts async function inside useEffect
  //TODO: Use axios.get() to fetch from the API
  //TODO: Update state with setAllProducts() and setProducts()
  //TODO: Handle loading state with setLoading(false)
  //TODO: Handle errors with setError()

  const showFilterByCategory = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);

    const filteredProducts = allProducts.filter(
      (product) => category === 'All' || product.category === category,
    );
    setProducts(filteredProducts);
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
              {/* TODO: Render products here */}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
