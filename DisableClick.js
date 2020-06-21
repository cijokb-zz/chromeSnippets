/**
 * Function to disable the mouse click in the browser
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

function disableClick(value = true){
/*
  The easiest way to do this is applying the style pointer-events: none
  But this may not work for the IE and also if we use any plugin to disable the inline styles,
  then this wont work.
  document.body.style="pointer-events: none";
*/
value? document.body.addEventListener('click', _myFunc): document.body.removeEventListener('click',_myFunc); 
}
