import React, { useState } from "react";
import { InputComponent } from "./InputComponent";
import { ItemsTrackerComponent } from "./ItemsTrackerComponent";
import { TaskBoardComponent } from "./TaskBoardComponent";

const Home = () => {
	const [tasks, setTasks] = useState(['Be Happy'])

	const onNewTask = (newTask) => {
		setTasks([...tasks, newTask])
	}

	const onDelete = ({ target }) => {
		setTasks(tasks.filter(task => !task.includes(target.innerText)))

	}
	return (
		<div className="d-flex flex-column align-items-center">
			<h1 className="m-5">Simple React To Do App</h1>
			{/* Input component */}
			<InputComponent onNewTask={onNewTask} placeHolder="Ola que ase" />
			{/* End of Input component */}

			{/* Taks Board Componnent */}
			<TaskBoardComponent tasks={tasks} onDelete={onDelete} />
			{/* End of Taks Board Componnent */}

		</div>
	);
};

export default Home;
