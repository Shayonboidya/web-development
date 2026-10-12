  const bd = document.getElementById('bd');
        const ph = document.querySelector('.ph');
        console.log(bd);
        console.log(ph);

        // text content
        console.log(bd.textContent);
        bd.innerHTML = "hello, shayon"
        console.log(bd.innerHTML);
        console.log(bd.innerText);

        ph.innerHTML = "programming is best";
        console.log(ph.innerHTML);

        // modefy attribute

        console.log(ph.getAttribute("class"));
    
        // const img = document.getElementById('img');
        // console.log(img.getAttribute('src'));
        // img.setAttribute('src',"https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80")
        // console.log(img.hasAttribute('src'));

        img.src = "https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80";
        img.alt = "this is a picture";

        // img.style.height = '500px'

        // add classList
        // img.classList.add('box')
        img.classList.toggle('box');//add
        // img.classList.toggle('box');//removed


