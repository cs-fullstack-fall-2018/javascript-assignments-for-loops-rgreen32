//This program finds the largest number in an array.

function main() {
    var myNumberList = [12, 2112, 9000, 1999, 24];
    var greater = 0;
    for (var i = 0; i < myNumberList.length; i++) {

        if (myNumberList[i] > greater) {
            greater = myNumberList[i];
        }

    }
console.log(greater); // These statements needed to be inside main() otherwise was outside of scope
console.log('works');


}


// Extra curly brace was causing it to break
main();

/*
	KEY: Close but no cigar. Extra brace and out of scope access to 'greater' were all that was wrong.

	Hair on point though :-P

*/
