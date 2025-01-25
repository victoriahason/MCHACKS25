// Content file is able to take information from chrome page and send to APIs
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('button[aria-label="Send prompt"][data-testid="send-button"]');
    const popUpSearchCountElement = document.getElementById('search-count');

    submitButton.addEventListener('click', () => {
        // Send to chrome
        chrome.runtime.sendMessage(
            { action: 'incrementCounter' },
            (response) => {
                if (response && response.count !== undefined) {
                    popUpSearchCountElement.textContent = response.count;
                }
            }
        );

        searchCountElement.textContent = counter;
    });
});