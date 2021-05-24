import React from 'react'
import CharacterItem from '../CharacterItem/CharacterItem'
import Spinner from '../Spinner/Spinner'
import './CharacterGrid.css'
const CharacterGrid = ({item,isLoading}) => {
    return isLoading ? <Spinner /> : (
        <section className="cards">
            {
                item.map((item,index)=>(
                   
                    <CharacterItem key={index} item={item} ></CharacterItem>
                    ))
            }
        </section>
        )
}

export default CharacterGrid
