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

        function imgSlider(imgBlocksSel, triggersBlockSel, index = 0){

            const imgBlocks = document.querySelectorAll(imgBlocksSel),
                triggersBlock = document.querySelectorAll(triggersBlockSel)[index],
                triggers = triggersBlock.querySelectorAll('.objects-img-link');

            function showActiveImg(i = 0){
                triggers.forEach(trigger => {
                    trigger.classList.remove('img-active');
                    trigger.style.filter = 'grayscale(100%)';
                })
                triggers[i].style.filter = 'grayscale(0)';
                triggers[i].classList.add('img-active');
            }
            showActiveImg();

            triggers.forEach((trigger, i) => {
                trigger.addEventListener('click', () => {
                    showActiveImg(i);
                    let src = triggers[i].getAttribute('src');
                    imgBlocks[index].setAttribute('src', src);
                    imgBlocks[index].classList.add('img-animate');
                    setTimeout(() => {
                        imgBlocks[index].classList.remove('img-animate');
                    }, 500)
                })
            })
        }
        imgSlider('.object-main-img', '.objects-list__wrap__item__img__img-wrap');
    
        tabs.forEach((tab, i) => {
            tab.addEventListener("click", () => {
                activeTab(i);                      
                imgSlider('.object-main-img', '.objects-list__wrap__item__img__img-wrap', i);
            })
        })   
    }
  
    servicesTabs('.objects-list__tabs__item', '.objects-list__wrap__item');
})