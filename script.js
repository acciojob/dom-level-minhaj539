//your JS code here. If required.
const list=document.getElementsByTagName("li")

for(let i=0;i<list.length;i++){
	if(list[i].id=="level"){
		alert(list[i].innerText)
	} 
}