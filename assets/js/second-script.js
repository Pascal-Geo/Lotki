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
    
    function mobileMenu(triggerSel, menuSel) {
        const trigger = document.querySelector(triggerSel),
            menu = document.querySelector(menuSel);
    
        trigger.addEventListener('click', () => {
            menu.classList.toggle('hide-mobile');
            trigger.classList.toggle('close-active');
        })
    }

    function toggleMenu(triggerSel, menuSel, arrowSel, linkSel){
        const trigger = document.querySelector(triggerSel),
            menu = document.querySelector(menuSel),
            arrow = document.querySelector(arrowSel);
    
        window.addEventListener("click", (e) => {
            if (e.target && e.target.parentNode == trigger){
                e.preventDefault();
                menu.classList.toggle('hide');
                menu.classList.toggle('active');
                arrow.classList.toggle('active-arrow');
            }
            if (e.target.classList.contains(linkSel.slice(1))){
                menu.classList.add('hide');
                menu.classList.remove('active');
                arrow.classList.remove('active-arrow');
            }
            if (menu.classList.contains('active') && e.target.parentNode != trigger && !e.target.classList.contains(linkSel.slice(1))){
                menu.classList.add('hide');
                menu.classList.remove('active');
                arrow.classList.remove('active-arrow');
            }
    
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

    toggleMenu('.menu__submenu', '.menu__submenu__toggle-menu', '.menu__submenu__arrow', '.menu__submenu__toggle-menu__item');

    mobileMenu('.mobile-btn', '.mobile-menu');

    modal('.header-btn', '.modal', '.modal__window__close');
})