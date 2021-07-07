import React,{useContext,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import MoviesContext from '../../Context/Movies/MovieContext'

import './Person.scss'

export default function Person() {
    let {  id_person } = useParams();
    const {personSelected, getPersonSelected} = useContext(MoviesContext)

    const {name, biography, profile_path, known_for_department, place_of_birth, birthday} = personSelected;

    useEffect( () =>{
        getPersonSelected(id_person)
    }, [])

    if(!name){        
        return<h1>loading...</h1>
    }
    else{
        return (
            <div className='Person'>
                <h1>{name}</h1>    
                <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${profile_path}`} alt="" />   
                <p>{biography}</p>  
                <div className="Person__stats">
                    <div className="Person__stats__left">Known For</div>
                    <div className="Person__stats__right">{known_for_department}</div>
                </div>
                <div className="Person__stats">
                    <div className="Person__stats__left">Born</div>
                    <div className="Person__stats__right">{birthday}</div>
                </div>
                <div className="Person__stats">
                    <div className="Person__stats__left">Place of Birth</div>
                    <div className="Person__stats__right">{place_of_birth}</div>
                </div>
            </div>
        )
    }
}
