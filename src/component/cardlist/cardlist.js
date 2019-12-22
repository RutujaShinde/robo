import React from 'react';
import  './cardlist.css';
import Card from '../card/card.js';


export const CardList = ({users}) =>
{
	return(
		<div className="list">
		{users.map(user => <Card key={user.id} id={user.id} name={user.name} email={user.email}/>)}
		</div>
		)
}
export default CardList;