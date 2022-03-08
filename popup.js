document.querySelector('#changeColor').addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        console.log('hihhiih', color);
        // document.body.style.backgroundColor = color;
        ['full-height-container', 'main', 'footer'].map(dom => {
            console.log(dom);
            document.getElementById(dom).style.backgroundColor = color;
        })
    });
}