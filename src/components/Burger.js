// Functional Component System

import React, { useState } from 'react';
import './BurgerStyle.css';

const Burger = () => {
    const [state, setState] = useState({
      lettuce: 0,
      tomato: 0,
      cheese: 0,
      meat: 0,
    });
    // state = {
    //     lettuce: 0,
    //     tomato: 0,
    //     cheese: 0,
    //     meat: 0
    // }

    const addRemoveIngredient = (action, ingredient) => {
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = state;

        let stateValue;
        switch(ingredient){
            case 'lettuce':{
                stateValue = lettuce;
                break;
            }
            case 'tomato':{
                stateValue = tomato;
                break;
            }
            case 'cheese':{
                stateValue = cheese;
                break;
            }
            case 'meat':{
                stateValue = meat;
                break;
            }
            default: break;
        }
        if(action === 'add'){
            stateValue = stateValue + 1;
        }else{
            stateValue = stateValue - 1;
        }
        

        setState(prevValue => {
            return { ...prevValue, [ingredient]: stateValue>=0 ? stateValue : 0 };
        })

        // console.log(state)
    }

    const burgerContent = () => {
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = state;
        let burger = [];

        // outputting the lettuce
        for (let i = 0; i < lettuce; i++){
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }
        // outputting the tomato
        for (let i = 0; i < tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }
        // outputting the cheese
        for (let i = 0; i < cheese; i++){
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }
        // outputting the meat
        for (let i = 0; i < meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }
        if(burger.length === 0)
            burger.push(<p key="0">Please start adding ingredients!</p>);
        return burger;
    }

        return (
            <>
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {burgerContent()}
                    <div className="bottomSide"></div>
                </div>
                <div className="ingredientsBlock">
                    <p>Lettuce</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => addRemoveIngredient('add','lettuce')}>Add</button>
                        <button className="ingrBtn" onClick={() => addRemoveIngredient('remove','lettuce')}>Remove</button>
                    </div>
                    <p>TOMATO</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => addRemoveIngredient('add','tomato')}>Add</button>
                        <button className="ingrBtn" onClick={() => addRemoveIngredient('remove','tomato')}>Remove</button>
                    </div>
                    <p>CHEESE</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => addRemoveIngredient('add','cheese')}>Add</button>
                        <button className="ingrBtn" onClick={() => addRemoveIngredient('remove','cheese')}>Remove</button>
                    </div>
                    <p>MEAT</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => addRemoveIngredient('add','meat')}>Add</button>
                        <button className="ingrBtn" onClick={() => addRemoveIngredient('remove','meat')}>Remove</button>
                    </div>
                </div>
            </>
        );
    }


export default Burger