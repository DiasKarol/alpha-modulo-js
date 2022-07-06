export default () => {
    const btnConvert = document.getElementById('convert');

    function coinConvert() {
        document.body.style = 'cursor: wait';
        const myTimeout = setTimeout( () =>{
            const coin = document.getElementById('coin');
            const date1 = document.getElementById('dInitial');
            const date2 = document.getElementById('dEnd');
            let dateInitial = new Date(date1.value);
            let dateEnd = new Date(date2.value);

            // data final - inicial (ms)
            var timeDiff = Math.abs(dateEnd.getTime() - dateInitial.getTime());

            // Convertendo para dias
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;

            //concatenando a url para consulta
            const url = `https://economia.awesomeapi.com.br/json/daily/${coin.value}/${diffDays}?start_date=${dateInitial.getFullYear()}${String(dateInitial.getMonth() + 1).padStart(2, '0')}${String(dateInitial.getDate() + 1).padStart(2, '0')}&end_date=${dateEnd.getFullYear()}${String(dateEnd.getMonth() + 1).padStart(2, '0')}${String(dateEnd.getDate() + 1).padStart(2, '0')}`;

            fetch(url)
                .then((response) => { //pegando o retorno e transformando em .json
                    if (!response.ok) {
                        document.body.style = 'cursor: default';
                        throw new Error(`HTTP error! Status: ${response.status}`)
                    }
                    return response.json();
                })
                .then((info) => { //criando a table
                    const result = document.getElementById('result');
                    const table = document.createElement('table');
                    const tBody = document.createElement('tbody');
                    const tHead = document.createElement('thead');
                    const coinLabel = document.createElement('th');
                    const cotLabel = document.createElement('th');

                    let line = document.createElement('TR');
                    let cellDate = document.createElement('th');
                    let cellLow = document.createElement('th');
                    let cellHigh = document.createElement('th');
                    let cellBid = document.createElement('th');
                    let cellAsk = document.createElement('th');

                    result.innerHTML = ''
                    
                    //primeira linha da table
                    coinLabel.innerHTML = "Moeda: " + coin.value;
                    cotLabel.innerHTML = "Última cotação: " + info[0].ask;
                    coinLabel.colSpan = '2';
                    cotLabel.colSpan = '3';

                    line.appendChild(coinLabel);
                    line.appendChild(cotLabel);

                    tHead.appendChild(line);

                    //cabeçalho da table
                    line = document.createElement('TR');

                    cellDate.innerHTML = "Data - Hora";
                    cellLow.innerHTML = "Mínimo";
                    cellHigh.innerHTML = "Máximo";
                    cellBid.innerHTML = "Compra";
                    cellAsk.innerHTML = "Venda";

                    line.appendChild(cellDate);
                    line.appendChild(cellLow);
                    line.appendChild(cellHigh);
                    line.appendChild(cellBid);
                    line.appendChild(cellAsk);

                    tHead.appendChild(line);

                    table.appendChild(tHead);

                    //dados da table
                    info.forEach((r) => {                    
                        line = document.createElement('TR');
                        cellDate = document.createElement('TD');
                        cellLow = document.createElement('TD');
                        cellHigh = document.createElement('TD');
                        cellBid = document.createElement('TD');
                        cellAsk = document.createElement('TD');

                        let date = new Date(r.timestamp * 1000);

                        cellDate.innerHTML = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;
                        cellLow.innerHTML = r.low;
                        cellHigh.innerHTML = r.high;
                        cellBid.innerHTML = r.bid;
                        cellAsk.innerHTML = r.ask;

                        line.appendChild(cellDate);
                        line.appendChild(cellLow);
                        line.appendChild(cellHigh);
                        line.appendChild(cellBid);
                        line.appendChild(cellAsk);

                        tBody.appendChild(line);
                    });
                    table.appendChild(tBody);
                    result.appendChild(table);
                })
                .catch(error => alert(error));
            document.body.style = 'cursor: default';
        }, 1000);
    };

    btnConvert.addEventListener('click', coinConvert);
};