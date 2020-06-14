var html='<form name="form" onsubmit="execfunc()">resourse:<input type="text" name="resourse" id="resourse" >link:<input type="text" name="link" id="link"><input type="submit" name="submit" class="submit"></form>';

var res=[]
var subject = function(resourse,link) {
        this.resourse=resourse;
        this.link = link;
        
};
var toggler1 = document.getElementsByClassName("sub");
var toggler2 = document.querySelectorAll('.sub1');
var toggler3 = document.querySelectorAll('.sub2');

var i;

for (i = 0; i < toggler1.length; i++) {
  toggler1[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    
  });
}
for (i = 0; i < toggler2.length; i++) {
  toggler2[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    
  });
}
for (i = 0; i < toggler3.length; i++) {
  toggler3[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    
  });
}
function deleteSub(el) {
  el.parentNode.parentNode.removeChild(el.parentNode);
};

document.querySelectorAll('.item__delete').forEach(el=>{
  el.addEventListener('click', function(event){

  	var item=this;
  	var itemID=this.id;
  	deleteSub(this);
  });
})
function additem(resourse,link){
	newItem = new Subject(resourse,link);
	res.push(newItem);
	console.log(res);
	return newItem;
};
function addtoUI(obj){
	var element,html1,newHtml;
	element='.sub2';
	html1='<li><a href="%link%">%resourse%</a></li>';
	newHtml = html.replace('%resourse%', obj.resourse);
    newHtml = newHtml.replace('%link%', obj.link);
    document.querySelector(element).innerHTML=newHtml;
};

function getInput() {
    return {
        resourse: document.getElementById("resourse").value, // Will be either inc or exp
        link: document.getElementById("link").value
       
    }
};
document.querySelectorAll('.item__add').forEach(el=>{
	el.addEventListener('click',function(event){
		var element;
		element='.item__add';
		
		   
        document.querySelector(element).innerHTML=html;
        document.body.appendChild(form);

		      
       
	});
     


})
function execfunc(){

	var input=getInput();
	console.log(input);
	if (input.resourse !== ""&& input.link !==""){ 
		newItem = additem(input.resourse,input.link);
      		addtoUI(newItem);


	}

};

