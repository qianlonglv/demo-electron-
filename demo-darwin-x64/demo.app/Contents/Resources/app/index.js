var content = 11111;
console.log("searchbar content = %s", content);

function onclickBtn(){
	content = document.getElementById("searchbar").value;
	var para=document.createElement("p");
	var node=document.createTextNode(content);
	para.appendChild(node);

	var element=document.getElementById("insert");
	element.appendChild(para);
	console.log("searchbar content = %s", content);


}