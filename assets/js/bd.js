window.addEventListener("DOMContentLoaded", () => {

    function loadBD(){
        let bd = [];
        async function load(){
            const responce = await fetch('http://universities.hipolabs.com/search?country=france');
            if (responce.ok){
                let data = await responce.json();
                bd = await data.body;
                return bd
            }
        }
    }

    console.log(loadBD())


})