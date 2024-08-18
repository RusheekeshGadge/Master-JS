function one (call_two,call_three){
    call_two()

    console.log("This is function one");
    call_three()
}
function two (){
    console.log("This is function two");
}
function three (){
    console.log("This is function three");
}
one(two,three)


