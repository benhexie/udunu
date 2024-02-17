import "./BackgroundStarsAnimation.css";

const BackgroundStarsAnimation = () => {
  return (
    <div className="background__stars__animation">
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="star" />
        ))}
      </div>
    </div>
  );
};

export default BackgroundStarsAnimation;
