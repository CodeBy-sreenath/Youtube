import React from 'react'
import './Movies.css'
import panjabihouse from '../../assets/panjabihouse.jpeg'
import boganvilla from '../../assets/bouganvilla.avif'
import nunakkuzhi from '../../assets/nunakkuzhi.jpg'
const Movies = () => {
  return (
    <div>
        <div className="movies">
            <div className="mainMovies">
                <img className='panjabi' src={panjabihouse} alt='' />
                <p>Viewers 12k.1 hour ago</p>

            </div>
             <div className="mainMovies">
                <img className='bogan' src={boganvilla} alt='' />
                <p>viewers 123k.1year ago</p>

            </div>
             <div className="mainMovies">
                <img className='nunakkuzhi' src={nunakkuzhi} alt='' />
                <p>viewers 15k.2year ago</p>

            </div>

        </div>
      
    </div>
  )
}

export default Movies
