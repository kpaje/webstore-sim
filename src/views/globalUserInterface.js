import showTable from "./table";
import showMenuUI from "./menuUI";

function assembleInterface() {
	//prevents interface overlapping table when it is fetching data
	setTimeout(() => {
		showMenuUI();
	}, 10);
	showTable();
}

function globalUserInterface() {
	console.clear();
	console.log("WELCOME TO THE BAMAZON STORE 1998".magenta);
	assembleInterface();
}

export default globalUserInterface;
