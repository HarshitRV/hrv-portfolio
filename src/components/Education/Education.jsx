import "./Education.css";

export default function Education(props) {
	return (
		<div className="edu">
			<h2 className="tabs-heading">Education</h2>
			<div className="">
				<h2 className="edu-title">Master of Computer Application</h2>
				<p className="edu-uni">Vellore Institute of Technology, Vellore</p>
				<p className="edu-duration">2022 - 2024</p>
			</div>
			<div className="">
				<h2 className="edu-title">Bachelor of Computer Application</h2>
				<p className="edu-institute">School Of Management Sciences, Varanasi</p>
				<p className="edu-uni">Mahatma Gandhi Kashi Vidyapith University</p>
				<p className="edu-duration">2019 - 2022</p>
			</div>
		</div>
	);
}
