import React from 'react';

export default function Contact() {
	const INITIAL_STATE = {
		contactName: 'Random Person',
		message: 'Hello There',
	};

	const [formData, setFormData] = React.useState(INITIAL_STATE);

	const handleChange = (e) => {
		if (e.target.value.trim() !== '')
			setFormData({
				...formData,
				[e.target.name]: e.target.value,
			});
	};

	const receiverEmail = 'ronkashyap9@gmail.com';
	const mailTo = `mailTo:${receiverEmail}?subject=New Message from - ${formData.contactName}&body=${formData.message}`;

	return (
		<div className="container app-home">
			<div className="flex jc col">
				<h1>
				For all questions related to the website,  <br /> CONTACT ME
				</h1>

				<p className="limit">
					This form uses <strong className="blue">React.useState</strong> to
					create a <strong className="blue">mail to</strong> string from the
					input fields in order to send the message via email.
				</p>

				<div className="contact-form flex col ">
					<input
						type="text"
						placeholder="Your Name"
						name="contactName"
						onChange={handleChange}
					/>
					<textarea
						placeholder="Your Message"
						rows={7}
						name="message"
						onChange={handleChange}
					/>

					<a type="submit" className="btn btn-purple" href={mailTo}>
						Send Via Email
					</a>
				</div>
			</div>
		</div>
	);
}
