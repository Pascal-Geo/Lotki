window.addEventListener("DOMContentLoaded", () => {
    function productsTab(tabsSel, contentsSel){
        const tabs = document.querySelectorAll(tabsSel),
            contents = document.querySelectorAll(contentsSel);

        const products = ['lotki', 'accessories', 'constructions', 'connectors'];
    
        function activeTab(i = 0){
            tabs.forEach(tab => {
                tab.classList.remove('products-tab-active');
            })
    
            contents.forEach(content => {
                content.style.display = "none";
                content.classList.remove('active-product-show');
                content.classList.remove('active-product-hide');
            })
    
            tabs[i].classList.add('products-tab-active');

            if(i == 0){
                contents.forEach(content => {
                    content.style.display = "flex";
                    content.classList.add('active-product-show');
                })
            }else{
                    switch(i){
                        case 1:
                            contents.forEach(content => {
                                if(content.classList.contains(products[0])){
                                    content.style.display = "flex";
                                    content.classList.add('active-product-show');
                                }
                            })
                            break;
                        case 2:
                            contents.forEach(content => {
                                if(content.classList.contains(products[1])){
                                    content.style.display = "flex";
                                    content.classList.add('active-product-show');
                                }
                            })
                            break;
                        case 3:
                            contents.forEach(content => {
                                if(content.classList.contains(products[2])){
                                    content.style.display = "flex";
                                    content.classList.add('active-product-show');
                                }
                            })
                            break;
                        case 4:
                            contents.forEach(content => {
                                if(content.classList.contains(products[3])){
                                    content.style.display = "flex";
                                    content.classList.add('active-product-show');
                                }
                            })
                            break;
                    }
            }
        }
    
        activeTab();
    
        tabs.forEach((tab, i) => {
            tab.addEventListener("click", () => {
                activeTab(i);
            })
        })
    }
    
    productsTab('.products-list__tabs__item', '.products-list__wrap__item');
})