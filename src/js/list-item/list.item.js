import React from 'react'


const ListItem = ({item}) => (
	<li className="content shadow">
        <a href={item.link}>
	        <div className="shadow">
	          <h2>Massively Overpowered</h2>
	          <time dateTime={item.pubDate}>Sat, 01 Dec 2018 23:00</time>
	        </div>
	        <img src={item.thumbnail} alt="" className="shadow"/>
	        <h3>{item.title}</h3>
        </a>
	</li>
)

export default ListItem