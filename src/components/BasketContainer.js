import Basket from "./Basket";
import CheckOutForm from "./CheckOutForm";

export default function BasketContainer(props){
    return(
        <section>
        <Basket setBasket={props.setBasket} basket={props.basket}/>
        <CheckOutForm />
        </section>
    )
}