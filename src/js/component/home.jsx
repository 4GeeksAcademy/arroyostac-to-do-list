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
		console.log(event.target.innerText)
	}
	return (
		<div className="text-center">
			{/* Input component */}
			<InputComponent onNewTask={onNewTask} placeHolder="Ola que ase" />
			{/* End of Input component */}

			{/* Taks Board Componnent */}
			<TaskBoardComponent tasks={tasks} onDelete={onDelete} />
			{/* End of Taks Board Componnent */}


			{/* Items Tracker Component */}
			<ItemsTrackerComponent />
			{/* End of Items Tracker Component */}
		</div>
	);
};

export default Home;
