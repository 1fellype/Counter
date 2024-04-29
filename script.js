let count = 0;

function changeCount(num) {
    count += num;
    document.getElementById("counter").innerHTML = 
    count;
}