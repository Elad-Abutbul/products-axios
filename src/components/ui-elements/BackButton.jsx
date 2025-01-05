import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div className="back-button">
      <div className="container">
        <Link to="/" className="btn btn-back btn-with-icon">
          <i className="fa-regular fa-arrow-left icon"></i>
          Back
        </Link>
      </div>
    </div>
  );
};

export default BackButton;
