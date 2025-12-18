import UnOrderedList from '../ui-elements/UnOrderedList';

const Product = ({ product, isDetail = false }) => {
  const { title, price, description, category, rating } = product;

  // For card view (home page)
  if (!isDetail) {
    const productDetails = [
      { label: 'Price:', value: price ? `$${price}` : 'N/A' },
      {
        label: 'Rating:',
        value: rating?.rate
          ? `${rating.rate}/5 (${rating.count} reviews)`
          : 'N/A',
      },
      {
        label: 'Category:',
        value: category || 'N/A',
      },
    ];

    return (
      <div className='product-info'>
        <h2 className='product-title'>{title}</h2>
        <UnOrderedList className='product-brief' items={productDetails} />
      </div>
    );
  }

  // For detail view (details page)
  const productDetails = [
    { label: 'Price:', value: price ? `$${price}` : 'N/A' },
    {
      label: 'Rating:',
      value: rating?.rate
        ? `${rating.rate}/5 (${rating.count} reviews)`
        : 'N/A',
    },
    {
      label: 'Category:',
      value: category || 'N/A',
    },
    {
      label: 'Description:',
      value: description || 'N/A',
    },
  ];

  return (
    <div className='product-info'>
      <h2 className='product-title'>{title}</h2>
      <UnOrderedList className='product-brief' items={productDetails} />
      {description && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Description</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
