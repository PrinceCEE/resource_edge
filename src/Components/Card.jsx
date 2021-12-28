const Card = ({ logo, title, content, className, alt }) => {
  return (
    <div className={className}>
      <div>
        <img src={logo} alt={alt} />
      </div>
      <div>
        <h5>{title}</h5>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
