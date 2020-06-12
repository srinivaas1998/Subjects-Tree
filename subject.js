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
function deleteSub(selectorID) {
            
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
            document.getElementsByClassName('#selectorID').textContent="";
            
};
document.querySelector('.item__delete').addEventListener('click', function(event){
	

	var item=this;
	var itemID=this.id;
	deleteSub(itemID);
	document.querySelector('.item__delete').removeChild(document.querySelector('.item__delete--btn'));

});

 
