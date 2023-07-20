import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations</h1>
        <div className='cards__container'>
            <div class='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src="images/image-7.jpg" text='Explore the hidden waterfall deep inside the Amazon rainforest' label="Adventure" path="/services"/>
                    <CardItem src="images/image-7.jpg" text='Explore the hidden waterfall deep inside the Amazon rainforest' label="Adventure" path="/services"/>
                    <CardItem src="images/image-7.jpg" text='Explore the hidden waterfall deep inside the Amazon rainforest' label="Adventure" path="/services"/>
                </ul>
            </div>
        </div>      
    </div>
  )
}

export default Cards
