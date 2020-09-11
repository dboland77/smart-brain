import React from 'react';

const Rank = ({name, entries}) => {
	let welcomeMessage = `Hello ${name}!`

	if (entries===1) {
		 welcomeMessage = `Hello ${name}! you have tried 1 face so far!`
	}
	if (entries>1) {
		 welcomeMessage = `Hello ${name}! you have tried ${entries} faces so far!`
	}
		return (
			<div>
			<div className="center white f3">
				<p className="ma0">{welcomeMessage}</p>
			</div>
			{entries > 0 &&
			<div className="center white f1">
				<p className="ma0">{entries}</p>
			</div>
			}
		</div>
	);
}

export default Rank;