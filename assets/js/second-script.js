window.addEventListener('DOMContentLoaded', () => {

    const mask = (dataValue, options) => { 
        const elements = document.querySelectorAll(dataValue); 
        if (!elements) return
    
        elements.forEach(el => { 
          IMask(el, options)
        })
      }
    mask('[data-phone]', {
        mask: '+{7}(000)000-00-00'
    })
    
    function mobileMenu(triggerSel, menuSel, closeBtnSel) {
        const trigger = document.querySelector(triggerSel),
            menu = document.querySelector(menuSel),
            close = document.querySelector(closeBtnSel);
    
        trigger.addEventListener('click', () => {
            menu.classList.remove('hide-mobile');
        })

        close.addEventListener('click', () => {
            menu.classList.add('hide-mobile');
        })
    }

    function modal(triggerSel, modalSel, closeSel){
        const trigger = document.querySelector(triggerSel),
            modal = document.querySelector(modalSel),
            closeBtn = document.querySelector(closeSel);
    
        trigger.addEventListener('click', () => {
            modal.classList.add('modal-active');
            document.body.style.overflow = "hidden";
        })
    
        modal.addEventListener("click", (e) => {
            if (e.target && e.target == modal){
                modal.classList.remove('modal-active');
                document.body.style.overflow = "";
            }
        })
    
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('modal-active');
            document.body.style.overflow = "";
        })
    
    
    }

    function headerScroll(headerBottomSel, headerTopSel){
        const headerBottom = document.querySelector(headerBottomSel),
            headerTop = document.querySelector(headerTopSel);
    
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50 || window.screenY > 50){
                headerBottom.style.padding = "20px 0";
                headerBottom.style.boxShadow = "0 2px 2px #9b9b9b";
                headerTop.style.padding = "0 0";
            }else{
                headerBottom.style.padding = "50px 0";
                headerBottom.style.boxShadow = "none";
                headerTop.style.padding = "15px 0";
            }
        })
    }

    mobileMenu('.mobile-btn', '.mobile-menu', '.mobile-menu__close');

    modal('.modal-trigger', '.modal', '.modal__window__close');

    headerScroll('.header-bottom', '.header-top');

    Fancybox.bind('[data-fancybox="develop-foto"]', {
        // Your custom options
    });


})