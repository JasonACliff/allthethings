import React from 'react'
import ListItem from './../list-item/list.item'

const ListDisplay = ({data}) => (
	<ol>
		{data.map((dataItem, k) => <ListItem item={dataItem} key={k}/>)}
	</ol>
)

export default ListDisplay