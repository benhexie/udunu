import "./legal.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const Legal = () => {
  const navigate = useNavigate();
  return (
    <div className="legal">
      <button onClick={() => navigate(-1)}>
        <IoArrowBackOutline />
        Back
      </button>
      <Outlet />
      <footer>
        <small>
          <Link replace to={"/legal/terms"}>
            Terms and Conditions
          </Link>
          <Link replace to={"/legal/privacy"}>
            Privacy Policy
          </Link>
        </small>
      </footer>
    </div>
  );
};

export default Legal;
