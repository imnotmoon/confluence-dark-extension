document.querySelector('#changeColor').addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});

function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        console.log('hihi')
        ['full-height-container', 'main', 'footer'].forEach(dom => {
            console.log(document.getElementById(dom));
            document.getElementById(dom).style.backgroundColor = color;
        })
    });
}