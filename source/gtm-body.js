(function(){
  var iframe = document.createElement("iframe");
  iframe.setAttribute("src", "https://www.googletagmanager.com/ns.html?id=" + INSTALL_OPTIONS.code);
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";
  var noScript = document.createElement("noscript");
  noScript.appendChild(iframe);
  document.body.insertBefore(noScript, document.body.childNodes[0]);
})()