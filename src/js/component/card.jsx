import React from "react";

const Card = () => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			{" "}
			{/*style={{color: "red"}} */}
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW0mSXUdsVY_JKU0BqDbbJEvSwX_93NGRhIw&usqp=CAU"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet consectetur adipiscing elit
					venenatis facilisis, ultrices ad diam torquent scelerisque a
					lacinia suspendisse nec, auctor hendrerit posuere magna hac
					laoreet orci parturient. Tempor sociis euismod quisque
					montes iaculis vitae nisi eu arcu sagittis velit cursus,
					vivamus est tincidunt tortor in volutpat augue eget magnis
					primis.
				</p>
				<a href="#" className="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
};

export default Card;
