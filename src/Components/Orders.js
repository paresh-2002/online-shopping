import { useSelector } from "react-redux";
import Order from "./Order";

const Orders = () => {
  const items = useSelector((store) => store.items);
  const order = useSelector((store) => store.order);
  const finalItems = items.filter((item) => {
    const itemIndex = order.indexOf(item.id);
    return itemIndex >= 0;
    // const finalItems = items.filter((item) => orderItems.includes(item.id));
  });
  return (
    <div className="">
    {
      finalItems >=0  ? 
      <div className='flex flex-wrap  items-start justify-center '>
      <p>Data is Not Found</p>
      </div>:
      <div className='flex flex-wrap gap-2'>
        {
          finalItems.map(item =>(
            <Order key={item.id} item={item}/>
          ))
        }
      </div>
    }
    </div>
  );
};

export default Orders;
