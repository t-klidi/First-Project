import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import{MdChevronLeft, MdChevronRight} from "react-icons/md"

import Movie from './Movie'


const Row = ({title,fetchURL, rowId}) => {
    const[movies, setMovies] = useState([])
   

    useEffect(() => {
            axios.get(fetchURL).then((response)=>{
                setMovies(response.data.results)
            } )
    },[fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById("slider" + rowId)
        slider.scrollLeft = slider.scrollLeft -500
    }
    const slideRight = () => {
        var slider = document.getElementById("slider" + rowId)
        slider.scrollLeft = slider.scrollLeft +500
    }
   
  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft}  size={40} className = "bg-white rounded-full absolute opacity-50 hover:opacity-80 cursor-pointer z-10 hidden  group-hover:block left-0"/>
        <div id= {'slider' + rowId} className = "w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
      {movies.map((item, id )  => (
        <Movie item={item} key={id}/>
      ))}
        </div>
        <MdChevronRight  onClick={slideRight} size={40} className = "bg-white rounded-full absolute opacity-50 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block right-0" />
    </div>

    </>
  )
}

export default Row