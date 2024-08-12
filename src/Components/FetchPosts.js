import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { itemsActions } from "../store/shoppingSlice";

const FetchPosts = () => {
    const fetchStatus = useSelector((store) => store.fetchStatus);
    const dispatch = useDispatch();
    useEffect(() => {
      if (fetchStatus.fetchDone) return;
      dispatch(fetchStatusActions.markFetchingStarted());
     
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
          dispatch(fetchStatusActions.markFetchDone());
          dispatch(fetchStatusActions.markFetchingFinished());
          dispatch(itemsActions.addInitialItems(data.products));
        });
    }, [fetchStatus]);
  
    return <></>;
  };

export default FetchPosts