function main() {
    add_nav_button("Test","/test",chrome.runtime.getURL("src/img/lab_icon.png"))
    console.log("Loaded Addon Direct.")

    console.log(window.location.pathname)
    if (window.location.pathname === "/test") {
        document.body.innerHTML = `
          <h1>Custom Page for /test</h1>
          <p>This is the custom HTML content injected by the extension.</p>
        `;
      }
}

main()