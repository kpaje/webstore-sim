import showTable from "./table";
import showMenuUserInterface from "./menuUserInterface";

function assembleInterface() {
	//prevents interface overlapping table when it is fetching data
	setTimeout(() => {
		showTable();
	}, 20);
	setTimeout(() => {
		showMenuUserInterface();
	}, 20);
}

function globalUserInterface() {
	console.clear();
	console.log("WELCOME TO THE BAMAZON STORE 1998".magenta);
	assembleInterface();
}

export default globalUserInterface;
