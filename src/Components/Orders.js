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
    <div className="h-[72%] overflow-auto m-3">
      <div className='flex flex-wrap  gap-2'>
        {
          finalItems.map(item =>(
            <Order key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  );
};

export default Orders;
