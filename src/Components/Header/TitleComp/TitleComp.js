import React from 'react';
import './TitleComp.css'
export default function TitleComp(value){
    return(
        <div className={'Shop-Title-Wrap'}>
            <div className={'Shop-Title-Text'}><i className={`far ${value.icon} Green-Icon`}/>{value.title}</div>
        </div>
    );
}