const BallsBasket = ({ ballCount, basketName }) => {
  return (
    <div className="ball-basket">
      <h1>
        <span>{ballCount}</span> Balls
      </h1>
      <p>{basketName}</p>
    </div>
  )
}

export default BallsBasket