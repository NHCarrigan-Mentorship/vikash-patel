import Button from "./Button"
import LeftArrow from "../assets/images/left-arrow.png"
import RightArrow from "../assets/images/right-arrow.png"

import "./BallsSwapper.css"
import BallsBasket from "./BallsBasket"
import { useState } from "react"

const BallsSwapper = () => {
    const totalBalls = 10;
    const [leftBasketCounter, setLeftBasketCounter] = useState(0);
    const [rightBasketCounter, setRightBasketCounter] = useState(totalBalls - leftBasketCounter);

    const LeftArrowHandler = () => {
        if(leftBasketCounter < 10) {
            setLeftBasketCounter(leftBasketCounter + 1);
            setRightBasketCounter(rightBasketCounter - 1)
        }
    }

    const RightArrowHandler = () => {
        if(rightBasketCounter < 10) {
            setLeftBasketCounter(leftBasketCounter - 1);
            setRightBasketCounter(rightBasketCounter + 1)
        }
    }
    
  return (
    <section>
        <BallsBasket ballCount={leftBasketCounter} basketName="Basket 1" />
        <Button arrowHandler={LeftArrowHandler} imageUrl={LeftArrow} buttonName="left-arrow" />
        <Button arrowHandler={RightArrowHandler} imageUrl={RightArrow} buttonName="right-arrow" />
        <BallsBasket ballCount={rightBasketCounter} basketName="Basket 2" />
    </section>
  )
}

export default BallsSwapper;