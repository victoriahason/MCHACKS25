
// Content file is able to take information from chrome page and send to APIs
document.addEventListener('DOMContentLoaded', () => {
    const popUpSearchCountElement = document.getElementById('search-count');
    console.log("DOM loaded");

    // Function to set up the button listener
    const setupButtonListener = (button) => {
        button.addEventListener('click', () => {
            console.log("Clicked on submit!");
            chrome.runtime.sendMessage(
                { action: 'incrementCounter' },
                (response) => {
                    if (response && response.count !== undefined) {
                        popUpSearchCountElement.textContent = response.count;
                    }
                }
            );

            // Fetch the initial counter value from the background script
            chrome.runtime.sendMessage({ action: 'getCounter' }, (response) => {
                if (response && response.count !== undefined) {
                    popUpSearchCountElement.textContent = response.count;
                }
            });
        });
    };

    // Check for the button's existence dynamically
    const findButtonInterval = setInterval(() => {
        console.log("Running set interval");
        const submitButton = document.querySelector('button[data-testid="send-button"]');             

        // Check if the button exists
        if (submitButton) {
            console.log("Found submit button:", submitButton);
            setupButtonListener(submitButton); // Add the click listener
        }
    }, 500); // Check every 500ms
});

