import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
{/* 
Note: The useHistory() hook has been deprecated in the latest version of React Router.
 If you're using React Router V6, you'll want to use the useNavigate() hook instead. */}

const Home = () => {
	let history = useHistory();
	const [imgname, setImgname] = useState("");
	return (
		<div className='bgimage'>
			<div className='d-flex flex-row justify-content-between'>
				<h3 className='brandname'>Pixabay</h3> &nbsp;
				<div className='authentication '>
					<button className='btn btn-success mr-3'>SignUp</button>
					<button className='btn btn-success mr-2'>Login</button>
				</div>
			</div>
			<div id='hero' >
				<h1>Stunning free images & royalty free stock</h1>
				<h2>Over 2.6 million+ high quality stock images, videos and music shared by our talented community.</h2>

				<input type='text' onChange={(e)=> setImgname(e.target.value)} value= {imgname} size = "80" />
				{/* Check if any data is there or not in text box stored variable
				   whenever you have to send data in urls , you hava to use BackTicks*/}
				<button className='butn' 
				onClick={()=>imgname && history.push(`/search/${imgname}`)}
				>Search</button>
			</div>
		</div>
	)
}

export default Home