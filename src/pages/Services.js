import React from 'react';

import { ReactComponent as NodeJs } from './../assets/tech/nodejs.svg';
import { ReactComponent as Django } from './../assets/tech/django.svg';
import { ReactComponent as Python } from './../assets/tech/python.svg';
import { ReactComponent as Firebase } from './../assets/tech/firebase.svg';
import { ReactComponent as Aws } from './../assets/tech/aws.svg';
import { ReactComponent as Gql } from './../assets/tech/graphql.svg';

const TechStack = [
	<NodeJs />,
	<Django />,
	<Python />,
	<Firebase />,
	<Aws />,
	<Gql />,
];

export default function Services() {
	return (
		<div className="container app-home">
			<div className="flex jc col">
				<h1>
					I am proficient in
					<br /> DevOps, Cloud
				</h1>
				<p className="limit">
					Here are some of my favourite tools which I use on daily basis for web
					development. It includes React JS, Next JS, WebGL, Node JS, Express
					JS, Sketch, InVision Cloud, Sublime Text, Django, Chrome DevTools, Foundation and more.
				</p>
				<div className="tools">
					{TechStack.map((t, idx) => (
						<div className="tool-single" key={idx}>
							{t}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
