import './ItemListContainer.css';
import React, { useState, useEffect } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { ItemList } from '../ItemList/ItemList';
import { listaPeliculas } from '../baseDatos/baseDatos';
import { useParams } from 'react-router-dom';

const films = listaPeliculas;


export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
       const getData = new Promise(resolve => {
        setTimeout(() => {
           resolve(films);
        }, 3000);
       });

       if(categoriaId){
         getData.then(res => setData(res.filter(film => film.category === categoriaId)));
       }else{
         getData.then(res => setData(res));
       }

    }, [categoriaId]);

    const onAdd = (quantity) => {
       console.log(`Compraste ${quantity} items`);
    }

    return(
        <>
          <h1>Hola</h1>
          <ItemCount initial={1} stock={5} onAdd={onAdd}/>
          <ItemList data={data}/>
        </>
    );
}