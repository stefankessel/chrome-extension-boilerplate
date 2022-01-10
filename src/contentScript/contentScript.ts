chrome.runtime.sendMessage("message from contentScript", (res) =>
  console.log(res)
);
