function calc() {
    let result = document.querySelector('.calculating__result span');

    let height, weight, age, ratio, sex;
    
    if(localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    }else{
        sex = 'female';
        localStorage.setItem('sex', 'female')
    }

    if(localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    }else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375)
    }

    function calcResult() {
        if(!sex || !ratio || !height || !weight || !age){ result.textContent = '___'
            return;
        }

        if(sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        }else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }

    }

    calcResult();

    function getStasicStorage(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if(elem.getAttribute('id') == localStorage.getItem('sex')){
                elem.classList.add(activeClass);
            }else if(elem.getAttribute('data-ratio') == localStorage.getItem('ratio')){
                elem.classList.add(activeClass);
            }
        })

       

    }

    getStasicStorage('#gender div', 'calculating__choose-item_active');
    getStasicStorage('.calculating__choose_big div', 'calculating__choose-item_active')

    function getStaticResult(parent, activeClass) {
         
        const elements = document.querySelectorAll(`${parent} div`)

        elements.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target.getAttribute('data-ratio')){
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'))
                }else{
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'))
                }
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                })
        
                e.target.classList.add(activeClass);

                calcResult()
            })
        })

        
    }

    getStaticResult('#gender', 'calculating__choose-item_active');
    getStaticResult('.calculating__choose_big', 'calculating__choose-item_active');

    function getDynamicResult(selector) {
        const input = document.querySelector(selector);

      

        input.addEventListener('input', () => {

            if(input.value.match(/\D/g)){
                input.style.border = '1px red solid'
            }else{
                input.style.border = 'none'
            }

            switch(input.getAttribute('id')) {
                case "height":
                    height = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
            }
            calcResult();
        })
    }

    getDynamicResult('#height');
    getDynamicResult('#weight');
    getDynamicResult('#age');

}

export default calc;