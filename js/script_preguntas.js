(function(){
    const titulo_pregunta = [...document.querySelectorAll('.preguntas_titulo')]
    console.log(titulo_pregunta)
    titulo_pregunta.forEach(question => {
        question.addEventListener('click',()=>{
            let altura = 0;
            let respuesta=question.nextElementSibling;
            let add_padding = question.parentElement.parentElement;

            add_padding.classList.toggle('preguntas_padding--add')
            question.children[0].classList.toggle('preguntas_arrow--rotate');
            if (respuesta.clientHeight===0){
                altura = respuesta.scrollHeight;
            }
            respuesta.style.height=`${altura}px`
        })
    });
})();