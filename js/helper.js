Array.prototype.equals = function (array) {
    // if the other array is a false value, return
    if (!array)
        return false;
    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
		return false;
        }
        else if (this[i] != array[i]) {
            // two different object instances will never be equal
            return false;
        }
    }
    return true;
}

if(!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(needle) {
        for(var i = 0; i < this.length; i++) {
            if(this[i] === needle) {
                return i;
            }
        }
        return -1;
    };
} 

var Answer = function () {
	 console.log('instance created');
};

Answer.prototype.checkAnswer = function(name){

	 var scope = angular.element($("#outer")).scope();
	 var index = scope.count;
	  	if(scope.datalist[index].answer.indexOf(name) != -1){
			 return true;
		 }
		 else{
			 return false;
		 }
};

Answer.prototype.compareAnswer = function(name, selectedElements){
     var scope = angular.element($("#outer")).scope();
	 var index = scope.count;
   // to check if the selected node is correct and will check against
   // the node is present in the answer array
 		if(selectedElements.length == 0){
			  selectedElements.push(name);
			  displayfbg(gmsg);
		}
		//if selectedElements array is not empty, then check for duplicates 
		//incase the user has clicked multiple times
		if(selectedElements.length!=0 && selectedElements.indexOf(name) == -1){
			   selectedElements.push(name); 
			   displayfbb(bmsg);
		}	 
      	if(selectedElements.sort().equals(scope.datalist[index].answer.sort())===true){
          //change the question
		  replaceText();
		  while(selectedElements.length!==0){
		  	selectedElements.pop(name);
		  }
		  return true;
       }
       else{
			return false;
       }
};

//function that increments the counter to display the next question
function replaceText(){
   var scope = angular.element($("#outer")).scope();			//increments count
    scope.$apply(function(){
        scope.count = scope.count + 1;
    })
    var scorescope = angular.element($("#score")).scope();		//increments score
    scorescope.$apply(function(){
    	scorescope.score=scorescope.score +1;
    })
	displayfb(fmsg);											//animated score incrementation defined in app.js
}	
