let blockedUrls = [
];

let ruleIdCounter = 1;

function updateRules() {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [ruleIdCounter]
    }, () => {
        console.log("Existing rules removed.");

        const rules = blockedUrls.map(url => ({
            id: ruleIdCounter++, // Unique ID for each rule
            priority: 1,
            action: {
                type: "block"
            },
            condition: {
                urlFilter: url,
                resourceTypes: ["main_frame"]
            }
        }));

        chrome.declarativeNetRequest.updateDynamicRules({
            addRules: rules
        }, () => {
            console.log("New rules added:", rules);
        });
    });
}

updateRules();
