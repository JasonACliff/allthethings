import React from 'react'
import { useState, useEffect } from 'react'
import { ajax } from 'rxjs/ajax'
import {map, catchError} from 'rxjs/operators'
import ListDisplay from './../list-display/list.display'


export default function Main() {
	
	const [rssData, setRssData] = useState(null)
	
	useEffect(() => {
		
		const url = 'http://massivelyop.com/feed/'
		
		const rssData = ajax.getJSON(`https://api.rss2json.com/v1/api.json?rss_url=${url}`).pipe(
			map(data => data ),
			catchError(error => console.log('error: ', error))
		)
		
		const data = rssData
			.subscribe(json => {
				console.log(json.items)
				setRssData(json.items)
			})
	},[])
	
	return <section className="main-container">
		<h1>Most Recent, newest first</h1>
		<ListDisplay data={rssData === null ? [] : rssData} />
	</section>
}