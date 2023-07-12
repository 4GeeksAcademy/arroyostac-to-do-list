import React, { useState } from "react";
import { InputComponent } from "./InputComponent";
import { ItemsTrackerComponent } from "./ItemsTrackerComponent";
import { TaskBoardComponent } from "./TaskBoardComponent";

const Home = () => {
	const [tasks, setTasks] = useState(['comprar', 'reir'])

	const onNewTask = (newTask) => {
		setTasks([...tasks, newTask])
	}
	return (
		<div className="text-center">
			{/* Input component */}
			<InputComponent onNewTask={onNewTask} placeHolder="Ola que ase" />
			{/* End of Input component */}

			{/* Taks Board Componnent */}
			<TaskBoardComponent />
			{/* End of Taks Board Componnent */}


			{/* Items Tracker Component */}
			<ItemsTrackerComponent />
			{/* End of Items Tracker Component */}
			{tasks}
		</div>
	);
};

export default Home;
