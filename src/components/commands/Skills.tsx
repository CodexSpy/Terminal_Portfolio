import ProgressBar from "../ProgressBar";
import {
	SiJavascript,
	SiNextdotjs,
	SiReact,
	SiSpringboot,
	SiTailwindcss,
	SiExpress,
	SiApachejmeter,
	SiTableau
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiReact,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "React",
		},
		{
			Icon: SiTailwindcss,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Tailwindcss",
		},
		{
			Icon: SiJavascript,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Typescript",

		},
		
		{
			Icon: SiExpress,
			barWidth: "w-75%",
			percentageValue: "75%",
			text: "express.js",
		},
		
		{
			Icon: SiTableau,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Tableau",	
		},
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
