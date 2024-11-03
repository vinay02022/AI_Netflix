import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies=useSelector((store)=>{
        // console.log("mai Store Maccha",store);// abhi store mein saare slice show ho rhe hain lekin hme sirf movies wale ka yha kaam hai
        store.movies?.nowPlayingMovies
    })
    if(!movies) return;//early return
    const mainMovie=movies[0];
    console.log("mainMovie",mainMovie);
    
  return (
    <div>
      MainContainer
      <VideoTitle />
      <VideoBackground/>
    </div>
  )
}

export default MainContainer
