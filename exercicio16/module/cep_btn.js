export default () => {
    const btnConsult = document.getElementById('consult');
    const btnMap = document.getElementById('map');
    const resultMap = document.getElementById('resultMap');

    var lat
    var lng

    function cepConsult() {
        document.body.style = 'cursor: wait';
        document.getElementById("consult").disabled = true;
        document.getElementById("cep").disabled = true;

        const cep = document.getElementById('cep');
        const result = document.getElementById('result');
        const url = `https://cep.awesomeapi.com.br/json/${cep.value}`

        fetch(url)
        .then((response) => { 
            if (!response.ok) {
                document.body.style = 'cursor: default';
                result.innerHTML = `<p>CEP inválido!</p>`;
                btnMap.style.display = 'none';
                resultMap.style.display = 'none';
                throw new Error(`HTTP error! Status: ${response.status}`);
            };
            return response.json();
        })
        .then((response) => {
            result.innerHTML = `
            <span>
                <p><b>Endereço:</b> ${response.address}</p>
                <p><b>Bairro:</b> ${response.district}</p>
                <p><b>Cidade:</b> ${response.city}</p>
                <p><b>Estado:</b> ${response.state}</p>
                <p><b>Latitude:</b> ${response.lat}</p>
                <p><b>Longitude:</b> ${response.lng}</p>
                <p><b>Endereço completo:</b> ${response.address}, ${response.district}, ${response.city}/${response.state}</p>
            </span>
            `;
            btnMap.style.display = 'flex';
            resultMap.style.display = 'flex';

            lat = response.lat
            lng = response.lng
        })
        document.body.style = 'cursor: default';
        document.getElementById("consult").disabled = false;
        document.getElementById("cep").disabled = false;
    };

    function map() {

        document.getElementById("resultMap").src = `http://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`
    };

    btnConsult.addEventListener('click', cepConsult);
    btnMap.addEventListener('click', map);
};