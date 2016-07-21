function returnTrue() {
    return true;
}

function returnFalse() {
    return returnTrue() == false;
}

/* eslint-disable */
function notCovered() {
    console.log("this function is not covered");

    return returnFalse();
}

