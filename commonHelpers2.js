import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import"./assets/vendor-651d7991.js";const o=document.querySelector(".form");o.addEventListener("submit",r);function r(e){e.preventDefault();const t=o.elements.delay.value,n=o.elements.state.value;i({delay:t,state:n}).then(onFulfilled).catch(onRejected)}function i({delay:e,state:t}){return new Promise((n,s)=>{setTimeout(()=>{t==="fulfilled"?n(e):s(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
