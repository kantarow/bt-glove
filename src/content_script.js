window.addEventListener("load", function() {
  var script = document.createElement("script");

  script.setAttribute("src", chrome.runtime.getURL("injection.js"));
  document.head.appendChild(script);

  var input = document.createElement("input");
  input.setAttribute("type", "hidden");
  input.setAttribute("id", "codeInput");

  var button = document.createElement("button");
  button.setAttribute("style", "display: none;");
  button.setAttribute("id", "codeSubmitButton");
  button.innerHTML = "Submit";

  document.body.prepend(button);
  document.body.prepend(input);
}, true);
