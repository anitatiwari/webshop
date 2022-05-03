// import MyBasket from "./MyBasket";
// import CheckoutForm from "./CheckOutForm";
// export default function Basket(props) {
//   return (
//     <aside className="Basket">
//       <MyBasket basket={props.basket} />
//       {props.basket.length > 0 ? <CheckoutForm /> : <p>But more stuff</p>}
//     </aside>
//   );
// }


export default function basket(props) {

  // 0 + 1 + 2 + 3 + 4
  const initialValue = 0;
  const sumWithInitial = props.basket.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    initialValue
  );
  function remove(id) {
      props.setBasket(old=>old.filter(item=>item.id!==id))
  }
  console.log(sumWithInitial);
  return (
      <>
     
    <div className="bg-slate-800  flex flex-col justify-between mt-10">
    <h3 className=" font-serif text-white border-4 p-1 m-3   text-xl  ">Your Cart</h3>
      <ul >
        {props.basket.map((item) => {
          return (
            <li className="w-96 p-3 text-md text-white ">
              <div>
              &#10148;{item.productdisplayname }</div>
              <div>
               ${item.price}
               </div>
              <button className="bg-slate-600 p-1 rounded-md text-white" onClick={()=>remove(item.id)}>Remove</button>
            </li>
          );
        })}
      </ul>
      <p className="text-xl text-white">Total:${sumWithInitial}</p>
    </div>
    </>
  );
}
