window.onload = function() {
  console.log("popup.js")
  let codeInput = document.getElementById('codeInput');
  let codeSubmitButton = document.getElementById('codeSubmitButton');

  codeSubmitButton.onclick = function() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let [tab] = tabs;
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: onSubmit,
        args: [codeInput.value]
      })
    })
  }
}

function onSubmit(code) {
  document.getElementById('codeInput').value = code
  document.getElementById('codeSubmitButton').click()
}
