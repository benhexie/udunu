import { BsWordpress } from "react-icons/bs";
import "./Intro.css";
import BackgroundStarsAnimation from "../../components/ui/background-stars-animation";
import { Link, useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/projects");
  };

  return (
    <div className="intro">
      <div className="intro__container">
        <div className="intro__logo__container">
          <BackgroundStarsAnimation />
          <h1>Udunu</h1>
          <BsWordpress />
        </div>
        <h3>Welcome to Udunu - Your Open-Source Web Design Tool</h3>
        <p>
          Udunu is a powerful open-source desktop application that empowers you
          to create stunning single-page applications (SPAs) as well as elegant
          static websites with ease. Similar to Webflow, Udunu provides a
          user-friendly interface and a comprehensive set of features to bring
          your web design ideas to life.
        </p>
        <h4>Key Features:</h4>
        <ul>
          <li>Drag-and-drop interface for effortless design</li>
          <li>Customizable templates for quick project kickstart</li>
          <li>Support for both SPAs and Static Websites</li>
          <li>Built-in collaboration tools for team projects</li>
          <li>Extensive library of components and widgets</li>
        </ul>
        <h4>Contributors:</h4>
        <p>
          By clicking the button below, you agree to our{" "}
          <Link to={""}>terms of service</Link> and{" "}
          <Link to={""}>privacy policy</Link>.
        </p>
        <button onClick={handleContinue}>Continue</button>
        <footer>
          <small>
            <Link to={""}>Terms and Conditions</Link>
            <Link to={""}>Privacy Policy</Link>
          </small>
        </footer>
      </div>
    </div>
  );
};

export default Intro;
