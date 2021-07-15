import React from 'react'
import './TableData.scss'
export default function TableData(props) {
    const { id, height, weight, abilities, types} = props.pokemon


    const getHeight = (height) =>{
        const metros = height / 10
        return `${metros}m`
    }

    const getWeight = (weight) =>{
        const kilos = weight / 10
        const lbs= kilos  *  2.20462262
        return `${kilos}kg (${lbs.toFixed(1)}lbs.)`
    }

    if(id){
        return (
            <div className='TableData'>
                {/* ID */}
                <div className="TableData__section">
                    <div className="TableData__section__left">
                        id
                    </div>
                    <div className="TableData__section__right">
                        #{id}
                    </div>
                </div>
                {/* HEIGHT */}
                <div className="TableData__section">
                    <div className="TableData__section__left">
                        Height
                    </div>
                    <div className="TableData__section__right">
                        {getHeight(height)}
                    </div>
                </div>
                {/* Weight */}
                <div className="TableData__section">
                    <div className="TableData__section__left">
                        Weight
                    </div>
                    <div className="TableData__section__right">
                        {getWeight(weight)}
                    </div>
                </div>
                {/* Abilities */}
                <div className="TableData__section">
                    <div className="TableData__section__left">
                        abilities
                    </div>
                    <div className="TableData__section__right">
                        {abilities.map( (item,index)=><span key={index}>{item.ability.name}</span>)}
                    </div>
                </div>
                {/* types */}
                <div className="TableData__section">
                    <div className="TableData__section__left">
                        types
                    </div>
                    <div className="TableData__section__right">
                        {types.map( (item,index)=><span key={index}>{item.type.name}</span>)}
                    </div>
                </div>
            </div>
        )
    }else{
        return <h1>loading...</h1>
    }
    
}
