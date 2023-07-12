import React from "react";
import { InputComponent } from "./InputComponent";
import { ItemsTrackerComponent } from "./ItemsTrackerComponent";
import { TaskBoardComponent } from "./TaskBoardComponent";

const Home = () => {
	return (
		<div className="text-center">
			{/* Input component */}
			<InputComponent />
			{/* End of Input component */}

			{/* Taks Board Componnent */}
			<TaskBoardComponent />
			{/* End of Taks Board Componnent */}


			{/* Items Tracker Component */}
			<ItemsTrackerComponent />
			{/* End of Items Tracker Component */}
		</div>
	);
};

export default Home;
