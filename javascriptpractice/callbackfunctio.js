
let fun1 = function(num, f1, f2) {

    if (num>0) {
        f1();
    } else if (num<0){
        f2();
    }

}

let success = function() {
    console.log('success')
}

let failure = function() {
    console.log('fail')
}

fun1(5, success, failure);