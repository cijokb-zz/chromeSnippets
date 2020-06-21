/**
 * Function to disable the Right Click in the browser
 * @param {boolean} 
 *  true - disable
 *  false - enable
 */

//Cant move this inside the disableClick func as it creates new funciton everytime we call and the removeEventListener wont work
function _myFunc(e) {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
}

function disableRightClick(value=true) {
    value ? document.body.addEventListener('contextmenu', _myFunc) : document.body.removeEventListener('contextmenu', _myFunc);
}
