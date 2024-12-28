import React from 'react'
import '../allStyles/works.css'

const WorldCard = (props) => {
	return (
		<>
			<div className="item">
				<div className="layer flex flex-col justify-around select-none">
					<div>
						<h3 className='heading3'>{props.title}</h3>
						<p className='para'>{props.about}</p>
					</div>
					<div>
						<p className='text-center text-purple-600 text-xl font-bold'>View Projects</p>
					</div>
					<p className='absolute text-purple-500 font-cursive font-extrabold right-3 bottom-3'>Niazium</p>
				</div>
			</div>
		</>
	)
}

export default WorldCard