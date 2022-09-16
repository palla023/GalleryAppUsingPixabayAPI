import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Search = ({ match }) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get(`https://pixabay.com/api/?key=29964886-33d3e0c0aa4e32894d6d8403b&q=${match.params.imgname}&image_type=photo`).then(
			res => { setData(res.data.hits) }
		)
	}, [])
	return (
		<div>
			<div className='container'>
				<div className='row'>
					{data &&
						data.map(imgObj =>
							<div className='col-md-3'>
								<div className='card  '>
									<img className='card-img-top' src={imgObj.largeImageURL} height="250" width="260" />
									<div className='card-body'>
										<h5 className='card-title'>{imgObj.tags}</h5>
									</div>
								</div>
							</div>)}
				</div>
			</div>
		</div>
	)
}

export default Search