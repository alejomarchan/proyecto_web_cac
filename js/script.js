(function(){
    const sliders = [...document.querySelectorAll('.profesores_body')];
    const button_netx = document.querySelector("#next");
    const button_before = document.querySelector("#before");

    let value;
    button_netx.addEventListener('click', ()=>{
        change_position(1);
    });
    button_before.addEventListener('click', ()=>{
        change_position(-1);
    });

    const change_position=(add)=>{
        const current_profesor = document.querySelector('.profesores_body--show').dataset.id;
        value = Number(current_profesor);
        value+= add;
        sliders[Number(current_profesor)-1].classList.remove('profesores_body--show');
        if (value === sliders.length+1 || value === 0){
            if (value === 0){
                value = sliders.length;
            }
            else{
                value = 1;
            }
        }
        sliders[value-1].classList.add('profesores_body--show');
        console.log(value);
    }

    console.log(sliders)
})();