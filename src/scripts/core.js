

function add_nav_button(name,link,icon) {
    const data = '<li><ed-menu-block-item><div><a aria-label="'+name+'" style="display:flex;align-items:center" href="'+link+'"><img style="width:30px;height:30px;margin-left:40px" src = '+icon+'></img><span class="item-name">'+name+'</span><!----></a><!----><!----><!----><!----></div><!----></ed-menu-block-item></li>'
    let divElement = document.querySelector('.ed-menu-list');
    divElement.innerHTML += data
}