window.addEventListener("DOMContentLoaded", () => {
    function servicesTabs(tabsSel, contentsSel){
        const tabs = document.querySelectorAll(tabsSel),
            contents = document.querySelectorAll(contentsSel);
    
        function activeTab(i = 0){
            tabs.forEach(tab => {
                tab.classList.remove('tab-active');
            })
    
            contents.forEach(content => {
                content.style.display = "none";
            })
    
            tabs[i].classList.add('tab-active');
            contents[i].style.display = "flex";
        }
    
        activeTab();
    
        tabs.forEach((tab, i) => {
            tab.addEventListener("click", () => {
                activeTab(i);
            })
        })
    }
    
    servicesTabs('.services-list__tabs__item', '.services-list__wrap__item');
})