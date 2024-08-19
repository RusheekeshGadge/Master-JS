function init() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      let a = "secreat"
      console.log(name); // use variable declared in the parent function
    }
    displayName();
    // console.log(a) //it will throw an error
  }
  init(); //mozilla

  //if there is return function displayname() 
  //then also the displayname returns its outer function which is init

//real world scenario
//practical implementation
