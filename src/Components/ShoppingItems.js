import ShoppingItem from './ShoppingItem';
import { useSelector } from 'react-redux';

const ShoppingItems = () => {
  const items = useSelector((store) => store.items);
  return (
    <div className=' h-[72%] overflow-auto m-3 '>
      {
      items >=0  ? 
      <div className='flex h-full justify-center items-center '>
      <p>Data is Not Found</p>
      </div>:
      <div className='flex flex-wrap gap-2'>
      {
        items.map(item =>(
          <ShoppingItem key={item.id} item={item}/>
        ))
      }
      </div>
      }
    </div>
  )
}

export default ShoppingItems