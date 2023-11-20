window.addEventListener("DOMContentLoaded", () => {

    function newsFilter(newsSel, tabsSel, tabBlockSel){
        const news = document.querySelectorAll(newsSel),
            tabs = document.querySelectorAll(tabsSel),
            tabHead = document.querySelector(tabBlockSel);

        let index = 0;
        
        function showCategory(i = 0){

            tabs.forEach(tab => {
                tab.classList.remove('active-tab');
            })
            news.forEach(item => {
                item.style.display = "none";
                item.classList.remove('show-posts');   
            })
            tabs[index].classList.add('active-tab');
            news[index].style.display = "grid";
            news[index].classList.add('show-posts');
        }

        showCategory(0);

        function pageList(){
            const blogPosts = document.querySelectorAll(".news__wrap__content__wrap");
    
            let num = [];
            blogPosts.forEach(item => {
                num.push(1);
            })
    
            blogPosts.forEach((blog, i) => {
                let quantity = 4;
                let cnt = 1;
                const posts = blog.querySelectorAll('.news__wrap__content__wrap__item');
                while (quantity < posts.length){
                    if (posts.length >= quantity){
                        cnt += 1;
                        num[i] = cnt;
                    }
                    quantity += 4;
                }      
            })
            
            return num;
        };

        function addToPageNumber(index = 0){

            document.querySelectorAll(".news__wrap__content__wrap__quant").forEach((item, i) => {
                if(i == document.querySelectorAll(".news__wrap__content__wrap__quant").length - 1){
                    item.classList.add('news__wrap__content__wrap__quant__last')
                }
                item.querySelectorAll(".news__wrap__content__wrap__quant__item").forEach(item => {
                    item.remove();
                })
            })
            document.querySelectorAll(".news__wrap__content__wrap__quant__item__dots").forEach(item => {
                item.remove();
            })


            const block = document.querySelectorAll(".news__wrap__content__wrap__quant")[index];
            const nums = pageList();

            for (let i = 1; i<=nums[index]; i++){
                const link = document.createElement("span");
                link.textContent = `${i}`;
                link.classList.add("news__wrap__content__wrap__quant__item");
                block.appendChild(link);
                if (i == 1) {
                    link.classList.add("active-num");
                }

                if (i == 6){   
                    const dot = document.createElement('span');
                    dot.classList.add("news__wrap__content__wrap__quant__item__dots");
                    dot.textContent = "...";
                    block.appendChild(dot);                 
                    link.classList.add("news__wrap__content__wrap__quant__item");
                    link.textContent = `${nums[index]}`;
                    block.appendChild(link);
                    break;
                }
            }

        };

        addToPageNumber();
        slider();

        function activeBlock(){
            const tabs = document.querySelectorAll('.news__wrap__tabs__item');
    
            let cnt = 0;
    
            tabs.forEach((tab, i) => {
                if (tab.classList.contains('active-tab')){
                    cnt = i;
                }
            })
            return cnt;
        };

        function slider(){
            const activeIndex = activeBlock();
            const blogPosts = document.querySelectorAll('.news__wrap__content__wrap');
            const postsBlog = blogPosts[activeIndex].querySelectorAll('.news__wrap__content__wrap__item');
            const numsBlock = document.querySelectorAll('.news__wrap__content__wrap__quant__item');
    
            let mas = [0,1,2,3];
            
            function showSlide(arr){
                postsBlog.forEach(post => {
                    post.style.display = "none";
                    post.classList.remove("show-posts");
                })
    
                arr.forEach(item => {
                    postsBlog[item].style.display = "block";
                    postsBlog[item].classList.add("show-posts");
                })
            }
            showSlide(mas);
    
            function nextSlide(num){
                let quantArr = [];
                for (let i = (num - 1) * 4; i < num * 4; i++){
                    quantArr.push(i);
                }
                let res = postsBlog.length - num * 4;
                let quantPosts = [];
                let resArr = [];
                postsBlog.forEach((item, i) => {
                    quantPosts.push(i);
                })
                if (num == 1){
                    mas = [0,1,2,3];
                }
                if (res > 0){
                    mas = quantArr;
                }
                if (res < 0){
                    res = 4 + res;
    
                    resArr = quantPosts.slice(postsBlog.length - res, postsBlog.length);
                    mas = [...resArr];
    
                }
    
                showSlide(mas);
            }
    
            function numAddClass(i = 0){
                const nums = document.querySelectorAll('.news__wrap__content__wrap__quant__item');
        
                nums.forEach(num => {
                    num.classList.remove("active-num");
                });
        
                nums[i].classList.add("active-num");
            }
        
            numAddClass();
    
            numsBlock.forEach((item, i) => {
                item.addEventListener('click', () => {
                    nextSlide(parseInt(item.textContent));
                    numAddClass(i);
                    if (i == 0 && parseInt(item.textContent) > 1){
                        numsBlock[0].textContent = `${parseInt(numsBlock[0].textContent) - 1}`;
                        numsBlock[1].textContent = `${parseInt(numsBlock[1].textContent) - 1}`;
                        numsBlock[2].textContent = `${parseInt(numsBlock[2].textContent) - 1}`;
                        numsBlock[3].textContent = `${parseInt(numsBlock[3].textContent) - 1}`;
                        numsBlock[4].textContent = `${parseInt(numsBlock[4].textContent) - 1}`;
                        numsBlock[0].classList.remove('active-num');
                    }
                })
            })
    
            if (document.querySelector('.news__wrap__content__wrap__quant__item__dots')){
                document.querySelector('.news__wrap__content__wrap__quant__item__dots').addEventListener('click', () => {
                    numsBlock.forEach(item => {
                        item.classList.remove('active-num');
                    })
                    if (parseInt(numsBlock[4].textContent) < parseInt(numsBlock[numsBlock.length-1].textContent)-1){
                        numsBlock[0].textContent = `${parseInt(numsBlock[0].textContent) + 1}`;
                        numsBlock[1].textContent = `${parseInt(numsBlock[1].textContent) + 1}`;
                        numsBlock[2].textContent = `${parseInt(numsBlock[2].textContent) + 1}`;
                        numsBlock[3].textContent = `${parseInt(numsBlock[3].textContent) + 1}`;
                        numsBlock[4].textContent = `${parseInt(numsBlock[4].textContent) + 1}`;
                        numsBlock[4].classList.remove('active-num');
                    }
                })
            }
            
        }
        
        tabHead.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains(tabsSel.slice(1))){
                tabs.forEach((tab, i) => {
                    tab.addEventListener('click', () => {
                        index = i;
                        showCategory(index);
                        addToPageNumber(index);
                        activeBlock();
                        slider();
                    })
                })
            }
        })
    }

    newsFilter('.news__wrap__content__wrap', '.news__wrap__tabs__item', '.news__wrap__tabs');

})