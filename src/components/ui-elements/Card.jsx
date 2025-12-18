import { Link } from 'react-router-dom';

const Card = (props) => {
  const { product, routing } = props;

  if (!product || !product.title) {
    return <div>Data not available</div>;
  }

  const { title, price, rating, category, image } = product;

  return (
    <Link
      to={`/${routing}/${encodeURIComponent(product.id)}`}
      className='product scale-effect'
      data-product-id={product.id}
    >
      <div className='product-image'>
        <img src={image || ''} alt={`Image of ${title}`} />
      </div>
      <div className='product-info'>
        <h2 className='product-title'>{title}</h2>
        <ul className='product-brief'>
          <li>
            <strong>Price: </strong>
            {price ? `$${price}` : 'N/A'}
          </li>
          <li>
            <strong>Rating: </strong>
            {rating?.rate
              ? `${rating.rate}/5 (${rating.count} reviews)`
              : 'N/A'}
          </li>
          <li>
            <strong>Category: </strong>
            {category || 'N/A'}
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default Card;
