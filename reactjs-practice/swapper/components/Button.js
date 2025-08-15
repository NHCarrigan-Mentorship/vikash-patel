const Button = ({ imageUrl, buttonName, arrowHandler }) => {
  return (
    <button onClick={arrowHandler} title={buttonName}>
      <img src={imageUrl} alt={buttonName} />
    </button>
  );
};

export default Button;
