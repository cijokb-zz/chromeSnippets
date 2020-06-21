/**
 * Function to disable the inline styles
 * @param {boolean} 
 *  true - disable
 *  false - enable
 */
function disableInlineStyles(value = true) {
  function applyStyles(selector, newSelector) {
    let allStyleNodes = document.querySelectorAll(`[${selector}]`);
    allStyleNodes.forEach((styleNode) => {
      let attr = styleNode.getAttribute(selector);
      styleNode.setAttribute(`${newSelector}`, attr);
      styleNode.removeAttribute(selector);
    });
  }
  value
    ? applyStyles("style", "style-disabled")
    : applyStyles("style-disabled", "style");
}
