
function binarySearch(list, item) {
    let low = 0;
    let high = list.lenght - 1;

    while (low <= high) {
        let mid = (low + high) / 2;
        let guess = list[mid];
        if (guess == item) { return mid; }
        else if (guess > item) { high = mid + 1; }
        else { low = mid + 1; }
    }

}




let myList = [1, 3, 5, 7, 9];
console.log(myList.lenght);
console.log(binarySearch(myList, 5));