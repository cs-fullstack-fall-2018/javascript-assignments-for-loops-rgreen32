//This program finds the largest number in an array.

function main() {
    var myNumberList = [12, 2112, 9000, 1999, 24];
    var greater = 0;
    for (var i = 0; i < myNumberList.length; i++) {

        if (myNumberList[i] > greater) {
            greater = myNumberList[i];
        }

    }



}

console.log(greater);
console.log('works');
}
main();

