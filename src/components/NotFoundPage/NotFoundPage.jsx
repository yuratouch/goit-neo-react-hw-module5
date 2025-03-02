import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function NotFoundPage() {
  const location = useLocation();
  const goBackLink = useRef(location.state ?? "/");

  return (
    <div className="container">
      <h1 className="heading">Opps, page wasn't found.</h1>
      <Link className="goBackLink" to={goBackLink.current}>
        <FaArrowLeft /> Go back
      </Link>
    </div>
  );
}

export default NotFoundPage;
