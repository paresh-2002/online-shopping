import { useDispatch } from "react-redux";
import { OrderActions } from "../store/orderSlice";


const Order = ({item}) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(OrderActions.removeFromOrder(item.id));
  };

  return (
    <div className="card w-[18rem] max-h[30rem]">
    <img className="card-img-top" src={item.thumbnail} alt={item.title} />
    <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="m-0">${item.price}</p>
        <p className="card-text">Rating : {item.rating}</p>
    </div>
      <button  className="btn btn-danger m-2" onClick={handleRemoveItem}>Remove</button>    
           
</div>
  )
}

export default Order