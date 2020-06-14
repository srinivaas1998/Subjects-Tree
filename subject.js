var html='<form name="form" id="myForm" >resourse:<input type="text" name="resourse" id="r" >link:<input type="text" name="link" id="l"><input type="button" value="submit" class="submit"></form>';
var buttonhtml = "<button class=\"item__add--btn\"><i class=\"glyphicon glyphicon-plus\"></i></button>"
var res=[]
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

function additem(inpItem){
	res.push(inpItem);
	return inpItem;
};

function addtoUI(obj,el){
	var element,html1,newHtml;
	element='.sub2';
	html1='<a href=\"%link%\">%resourse%</a>';
	newHtml = html1.replace('%resourse%', obj.resourse);
  newHtml = newHtml.replace('%link%', obj.link);
  el.nextElementSibling.firstElementChild.innerHTML=newHtml;
};

function getInput() {
    return {
        resourse: document.getElementById("r").value, 
        link: document.getElementById("l").value
    };
};

document.querySelectorAll('.item__add').forEach(el=>{
	el.addEventListener('click',function(event){
		var element;
    var buttonele = this
		element='.item__add';
        document.querySelector(element).innerHTML=html;
        document.body.appendChild(form);
        document.getElementsByClassName("submit")[0].addEventListener("click", function(){
        var input=getInput();
        if (input.resourse !== ""&& input.link !==""){ 
          newItem = additem(input);
          addtoUI(newItem,buttonele);
          document.body.removeChild(form);
          document.querySelector(element).innerHTML = buttonhtml;
			}
		});
	});
})

