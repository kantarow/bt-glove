let queryOptions = { active: true, lastFocusedWindow: true };

function injection() {
  console.log('background')
  window.test = "aaa"
}

// `tab` will either be a `tabs.Tab` instance or `undefined`.
chrome.tabs.query(queryOptions).then((tabs) => {
  let [tab] = tabs;
  console.log(tab.id)

  chrome.scripting
    .executeScript({
      target: { tabId: tab.id },
      func: injection,
    })
    .then(() => { console.log("INJECTED"); })
})
