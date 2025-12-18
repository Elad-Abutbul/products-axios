const ProductImage = ({ src, alt }) => {
  return (
    <div className='product-image'>
      <img src={src} alt={`${alt} image`} />
    </div>
  );
};

export default ProductImage;
