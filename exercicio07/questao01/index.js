var selection = document.getElementById('cars')

function car() {
    let information = document.getElementById('answer')

    switch (selection.value) {
        case 'empty':
            alert(`Favor, escolha um lugar do ranking e descubra qual carro está na colocação`)
            information.innerHTML = ''
            information.style.border = 'transparent'
            break;

        case 'ferrari':
            information.innerHTML = `
            <figure>
                <img src="./arquivos/RomaV8Coupe.jpg" alt="Ferrari Roma V8">
                </figure>
            <article>
                <p><span>Nome:</span> Ferrari Roma V8 Coupe</p>
                <p><span>Fabricante:</span> Ferrari </p>
                <p><span>velocidade máxima:</span> 320 km/h</p>
                <p><span>De 0 á 100km:</span> 3.4s</p>
                <p><span>Combustível:</span> Gasolina</p>
                <p><span>Motor:</span> V8 </p>
                <p><span>Peso:</span> 1472 kg</p>
                <p><span>Volume do Porta-malas:</span> 292 L</p>
            </article>`
            information.style.border = '1px solid brown'
            break;

        case 'porsche':
            information.innerHTML = `
            <figure>
                <img src="./arquivos/CoupeGT3.jpg" alt="Porsche 911 Coupe (992 Series) GT3">
                </figure>
            <article>
                <p><span>Nome:</span> Porsche 911 Coupe (992 Series) GT3</p>
                <p><span>Fabricante:</span> Porsche</p>
                <p><span>velocidade máxima:</span> 318 km/h</p>
                <p><span>De 0 á 100km:</span> 3.4s</p>
                <p><span>Combustível:</span> Gasolina</p>
                <p><span>Motor:</span> Boxer 6</p>
                <p><span>Peso:</span> 1410 kg</p>
                <p><span>Volume do Porta-malas:</span> 132-264 L</p>
            </article>`
            information.style.border = '1px solid brown'
            break;
    
        case 'mercedes':
            information.innerHTML = `
            <figure>
                <img src="./arquivos/AMG-GTR.jpg" alt="Mercedes Benz AMG GT R">
                </figure>
            <article>
                <p><span>Nome:</span> Mercedes Benz AMG GT R</p>
                <p><span>Fabricante:</span> Mercedes Benz</p>
                <p><span>velocidade máxima:</span> 318 km/h</p>
                <p><span>De 0 á 100km:</span> 3.6s</p>
                <p><span>Combustível:</span> Gasolina</p>
                <p><span>Motor:</span> V8</p>
                <p><span>Peso:</span> 1630 kg</p>
                <p><span>Volume do Porta-malas:</span> 285 L</p>
            </article>`
            information.style.border = '1px solid brown'
            break;

        case 'ford':
            information.innerHTML = `
            <figure>
                <img src="./arquivos/Mach1.jpg" alt="Ford Mustang (MY 69) 351 Mach 1">
                </figure>
            <article>
                <p><span>Nome:</span> Ford Mustang (MY 69) 351 Mach 1</p>
                <p><span>Fabricante:</span> Ford</p>
                <p><span>velocidade máxima:</span> 193 km/h</p>
                <p><span>De 0 á 100km:</span> 4.3s</p>
                <p><span>Combustível:</span> Gasolina</p>
                <p><span>Motor:</span> V8</p>
                <p><span>Peso:</span> 1783 kg</p>
                <p><span>Volume do Porta-malas:</span> 382 L</p>
            </article>`
            information.style.border = '1px solid brown'
            break;

        case 'bmw':
            information.innerHTML = `
            <figure>
                <img src="./arquivos/M3Competition.jpg" alt="BMW G20 3 Series M3 Competition">
                </figure>
            <article>
                <p><span>Nome:</span> BMW G20 3 Series M3 Competition</p>
                <p><span>Fabricante:</span> BMW</p>
                <p><span>velocidade máxima:</span> 250 km/h</p>
                <p><span>De 0 á 100km:</span> 3.9s</p>
                <p><span>Combustível:</span> Gasolina</p>
                <p><span>Motor:</span> Em linha 6</p>
                <p><span>Peso:</span> 1705 kg</p>
                <p><span>Volume do Porta-malas:</span> 480 L</p>
            </article>`
            information.style.border = '1px solid brown'
            break;
    }
}

selection.addEventListener('change', car)