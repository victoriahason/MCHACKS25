// Content file is able to take information from chrome page and send to APIs
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('button[aria-label="Send prompt"][data-testid="send-button"]');
    console.log("Found submit button:", submitButton);
    const popUpSearchCountElement = document.getElementById('search-count');

    submitButton.addEventListener('click', () => {
        // Send to chrome
        console.log("Clicked on submit!");
        chrome.runtime.sendMessage(
            { action: 'incrementCounter'},
            (response) => {
                if (response && response.count !== undefined) {
                    popUpSearchCountElement.textContent = response.count;
                }
            }
        );

    // Fetch the initial counter value from the background script when the page loads
    chrome.runtime.sendMessage({ action: 'getCounter' }, (response) => {
        if (response && response.count !== undefined) {
            popUpSearchCountElement.textContent = response.count;
        }
    })
    });
});