import Button from "./Button"
import LeftArrow from "../assets/images/left-arrow.png"
import RightArrow from "../assets/images/right-arrow.png"

import "./BallsSwapper.css"
import BallsBasket from "./BallsBasket"

const BallsSwapper = () => {
  return (
    <section>
        <BallsBasket ballCount={10} basketName="Basket 1" />
        <Button imageUrl={LeftArrow} buttonName="left-arrow" />
        <Button imageUrl={RightArrow} buttonName="right-arrow" />
        <BallsBasket ballCount={0} basketName="Basket 2" />
    </section>
  )
}

export default BallsSwapper