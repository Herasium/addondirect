function main() {
    add_nav_button("Test","https://www.google.com",chrome.runtime.getURL("src/img/lab_icon.png"))
    console.log("Loaded Addon Direct.")
}

main()