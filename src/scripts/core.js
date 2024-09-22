function add_nav_button(name, link, icon) {
    const data = `
        <li>
            <ed-menu-block-item>
                <div>
                    <a
                        aria-label="${name}"
                        style="display:flex;align-items:center"
                        onclick="changeUrl(event, '${link}')"
                    >
                        <img
                            style="width:30px;height:30px;margin-left:40px"
                            src="${icon}"
                        />
                        <span class="item-name">${name}</span>
                    </a>
                </div>
            </ed-menu-block-item>
        </li>
    `;
    let divElement = document.querySelector('.ed-menu-list');
    divElement.innerHTML += data;
}

function changeUrl(event, newUrl) {
    event.preventDefault(); // Prevent the default link behavior
    history.pushState(null, '', newUrl); // Change the URL without reloading

    // Additional logic to update page content can go here
    console.log('URL changed to:', newUrl);
}
