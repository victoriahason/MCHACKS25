// This is our API
let counter = 0; // Counter stored in the background script

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.increment === '1') {
        count++;
        chrome.runtime.sendMessage({ action: 'updateCounter', count: counter });
    }
});

// TODO how to connect increment coutner to front end and maybe how to store it for a session and reset it