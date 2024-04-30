import { GoVerified } from "react-icons/go";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/CodexSpy",
			text: "@Moinkhan",
		},
		{
			title: "LinkedIn",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/moin-khan-0335b4245/",
			text: "@LinkedIn",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzU-Go6sZUJ3wQnetdWBgXxIPsHqmERNSEzzCGVeR5Q&s"
					alt="Moin Khan"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Moin Khan</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Born To create......</p>
				</div>
			</div>
			<p>

				Hello, I'm Moin khan, a B-Tech Computer Science graduate with a focus on web development and Java programming. With expertise in crafting dynamic web applications and extensive experience in Java, I bring a blend of creativity and technical proficiency to every project. My analytical mindset and systematic approach, honed through my degree, enable me to tackle complex challenges effectively. I'm passionate about leveraging technology to create user-friendly solutions and excited to contribute to innovative projects in web development.
				I'm currently specializing in the field of Quality Assurance (QA). I'm dedicated to learning different test methodologies and proficient in using tools like JMeter and Selenium. With a focus on ensuring product quality and reliability, I'm expanding my expertise in QA to deliver robust and effective testing solutions.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
