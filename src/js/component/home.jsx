import React, { useState } from "react";
import { InputComponent } from "./InputComponent";
import { ItemsTrackerComponent } from "./ItemsTrackerComponent";
import { TaskBoardComponent } from "./TaskBoardComponent";

const Home = () => {
	const [tasks, setTasks] = useState(['Be Happy'])

	const onNewTask = (newTask) => {
		setTasks([...tasks, newTask])
	}

	const onDelete = (deletedTask) => {
		setTasks(tasks.filter(task => task !== deletedTask))
	}
	return (
		<div className="d-flex flex-column align-items-center">
			<h1 className="m-5">SIMPLE REACT TO DO APP</h1>
			{/* Input component */}
			<InputComponent onNewTask={onNewTask} placeHolder="Enter You Task" />
			{/* End of Input component */}

			{/* Taks Board Componnent */}
			<TaskBoardComponent tasks={tasks} onDelete={onDelete} />
			{/* End of Taks Board Componnent */}

		</div>
	);
};

export default Home;
