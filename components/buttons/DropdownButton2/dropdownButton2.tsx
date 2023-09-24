import { useState } from 'react';
import classes from './dropdownButton2.module.scss';

import { RiArrowDropDownLine } from 'react-icons/ri';

type Skill = { name: string; isChecked: boolean };

const DropdownButton2 = () => {
	const [isOpen, setisOpen] = useState<boolean>(false);
	const [skills, setSkills] = useState<Skill[]>([
		{ name: 'HTML', isChecked: false },
		{ name: 'CSS', isChecked: false },
		{ name: 'Js', isChecked: false },
	]);

	const handleClick = () => setisOpen(!isOpen);

	const handleChange = (e: MouseEvent<HTMLInputElement>, skill: string) => {
		const skillCopy = [...skills];
		const foundSkill = skills?.find(s => s.name === skill);

		if (!foundSkill) {
			return;
		}

		foundSkill.isChecked = e.currentTarget.checked;
		setSkills(skillCopy);
	};

	return (
		<div className={classes.buttonContainer}>
			<div className={classes.dropdown}>
				<div className={`${classes.menu} ${isOpen ? `${classes.open}` : ''}`}>
					{skills.map(skill => (
						<label key={skill.name}>
							<input type='checkbox' onClick={(e: MouseEvent<HTMLInputElement>) => handleChange(e, skill.name)} />
							<span>{skill.name}</span>
						</label>
					))}
				</div>

				<button onClick={handleClick}>
					{skills.some(s => s.isChecked) ? (
						skills
							.filter(s => s.isChecked)
							.map((s, i) => (
								<span>
									{i !== 0 && ', '}
									{s.name}{' '}
								</span>
							))
					) : (
						<span className={classes.placeholder}>
							Please select
							<span className={classes.materialSymbolsOutlined}>
								<RiArrowDropDownLine />
							</span>
						</span>
					)}
				</button>
			</div>
		</div>
	);
};

export default DropdownButton2;
