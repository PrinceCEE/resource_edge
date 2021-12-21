const Card = ({ logo, title, content }) => {
  return (
    <div>
      <div>
        <img src={logo} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
