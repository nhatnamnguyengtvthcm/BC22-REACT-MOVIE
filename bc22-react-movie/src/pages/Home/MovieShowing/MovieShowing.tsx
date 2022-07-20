import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { increase, decrease, increaseByAmount } from 'slices/counter';
import { getMovieList } from 'slices/movies';
import { AppDispatch } from 'store';
const MovieShowing = ()=>{
  const {data, error, isLoading} = useSelector((state:RootState)=>state.movies);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=>{
    dispatch(getMovieList());
  },[]);

  if(isLoading){
    // return <Loading />
    return <h1>Loading...</h1>
  }
  if(error){
    //return <ErrorMessage>
    return <h1>{error}</h1>
  }
  return <div>
      {data.map((movie)=>{
        return <p key={movie.maPhim}>{movie.tenPhim}</p>
      })}

  </div>

}

// const Home = () => {
//   const counter = useSelector((state: RootState)=>state.counter)
//   const dispatch = useDispatch();
//   const handleIncreaseByAmount = ()=>{
//     const amount = Number(prompt("Input your amount"));
//     dispatch(increaseByAmount(amount));
//   }
//   return (
//     <div>
//       <p>Count:{counter}</p>
//       <button onClick={()=>dispatch(increase())}>Increase</button>
//       <button onClick={()=>dispatch(decrease())}>Decrease</button>
//       <button onClick={handleIncreaseByAmount}></button>
//     </div>
//   )
// }

export default MovieShowing