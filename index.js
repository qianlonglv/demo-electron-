var content = 11111;
console.log("searchbar content = %s", content);
function onclickBtn(){
	content = document.getElementById("searchbar").value;
	console.log("searchbar content = %s", content);
}