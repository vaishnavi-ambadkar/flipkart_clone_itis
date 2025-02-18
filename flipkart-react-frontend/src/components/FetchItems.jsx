// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { itemsActions } from "../store/intemsSlice";
// import { fetchStatusActions } from "../store/fetchStatusSlice";

// const FetchItems = () => {
//   const fetchStatus = useSelector((store) => store.fetchStatus);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (fetchStatus.fetchDone) return;
//     const controller = new AbortController();
//     const signal = controller.signal;
//     dispatch(fetchStatusActions.markFetching());
//     fetch("https://flipkart-react-clone.onrender.com/items", { signal })
//       .then((res) => res.json())
//       .then(({ items }) => {
//         dispatch(fetchStatusActions.markFetchDone());
//         dispatch(fetchStatusActions.markFetchingFinished());
//         dispatch(itemsActions.addInitialItems(items));
//       });

//     return () => {
//       controller.abort();
//     };
//   }, [fetchStatus]);

//   return <></>;
// };
// export default FetchItems;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/intemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetching());
    fetch("https://flipkart-react-clone.onrender.com/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        // Keep only the last 16 items
        const last16Items = items.slice(-16);
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(last16Items)); // Dispatch the last 16 items
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;