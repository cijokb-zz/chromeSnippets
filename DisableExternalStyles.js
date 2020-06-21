/**
 * Function to disable styleSheets
 * @param {boolean} 
 *  true - disable
 *  false - enable
 */
function disableExternalStyles(value = true){
  for (const item in document.styleSheets) {
    document.styleSheets[item].disabled=value;
  }  
}
