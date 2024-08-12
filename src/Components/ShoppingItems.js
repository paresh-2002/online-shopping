import ShoppingItem from './ShoppingItem';
import { useSelector } from 'react-redux';

const ShoppingItems = () => {
  const items = useSelector((store) => store.items);
  return (
    <div className=' h-[72%] overflow-auto m-3 '>
      <div className='flex flex-wrap gap-2'>
      {
        items.map(item =>(
          <ShoppingItem key={item.id} item={item}/>
        ))
      }
      </div>
    </div>
  )
}

export default ShoppingItems