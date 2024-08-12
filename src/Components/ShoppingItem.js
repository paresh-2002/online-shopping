import { useDispatch, useSelector } from "react-redux";
import { OrderActions } from "../store/orderSlice";

const ShoppingItem = ({item}) => {
  const dispatch = useDispatch();
  const orderItems = useSelector((store) => store.order);
  const elementFound = orderItems.indexOf(item.id) >= 0;
  
  const handleAddToOrder = () => {  
    dispatch(OrderActions.addToOrder(item.id));   
  };
  const handleRemove = () => {
    dispatch(OrderActions.removeFromOrder(item.id));
  };  
  return (
    <div className="card w-[18rem] max-h-[30rem]">
        <img className="card-img-top" src={item.thumbnail} alt={item.title} />
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="m-0">${item.price}</p>
            <p className="card-text">Rating : {item.rating}</p>
        </div>
        {
          !elementFound ? <button  className="btn btn-primary m-2" onClick={handleAddToOrder}>Order Now</button>
          :
          <button  className="btn btn-danger m-2" onClick={handleRemove}>Remove</button>    
        }           
    </div>
  )
}

export default ShoppingItem