// capturar evento submit do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResult('Peso inválido', false); 
        return;
    }

    if(!altura){
        setResult('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const classification = getClassificationImc(imc)

    const msg = `Seu IMC é ${imc} (${classification}).`;

    setResult(msg, true);
});


function getClassificationImc(imc){
    const classification = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if(imc >= 39.9){
        return classification[5];
    }

    if (imc >= 34.9){
        return classification[4];
    }

    if (imc >= 29.9){
        return classification[3];
    }

    if (imc >= 24.9){
        return classification[2];
    }

    if (imc >= 18.5){
        return classification[1];
    }
    if (imc < 18.5){
        return classification[0];
    }

}

function getImc(peso, altura){
    const imc = peso/altura ** 2;
    return imc.toFixed(2);
    
}


function createP() {
    const p = document.createElement('p');
    return p 

}

function setResult (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = createP();

    if(isValid){
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }
    p.innerHTML = (msg);
    
    resultado.appendChild(p);
    
}
