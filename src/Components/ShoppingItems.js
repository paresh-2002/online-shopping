import ShoppingItem from './ShoppingItem';
import { useSelector } from 'react-redux';

const ShoppingItems = () => {
  const items = useSelector((store) => store.items);
  return (
    <div >
      {
      items >=0  ? 
      <div className='flex flex-wrap items-start justify-center '>
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