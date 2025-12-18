import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/ui-elements/Navbar';
import BackButton from '../components/ui-elements/BackButton';
import ProductImage from '../components/product-components/ProductImage';
import Product from '../components/product-components/Product';
import Loading from '../components/ui-elements/Loading';
import '../assets/css/details.css';
import '../assets/css/common.css';

const Details = () => {
  const { productId } = useParams();

  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API endpoint: `https://fakestoreapi.com/products/${productId}`


  //TODO: Add useEffect hook to fetch product details
  //TODO: Check if productId exists, if not set error and return
  //TODO: Create fetchProductData async function inside useEffect
  //TODO: Use axios.get() to fetch from the API
  //TODO: Update state with setProductData()
  //TODO: Handle loading state with setLoading(false)
  //TODO: Handle errors with setError()
  //TODO: Add productId to dependency array

 

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  if (!productData) return <p>No product data available</p>;

  return (
    <>
      <Navbar />
      <BackButton />
      <main className='main'>
        <div className='container'>
          <section className='product-details'>
            <ProductImage
              src={productData.image || ''}
              alt={productData.title}
            />
            <Product product={productData} isDetail={true}></Product>
          </section>
        </div>
      </main>
    </>
  );
};

export default Details;
