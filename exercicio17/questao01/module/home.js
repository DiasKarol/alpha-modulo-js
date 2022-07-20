export default () => {
    const conteiner = document.createElement('section')

    const content = `
        <div id="info">
            <select name="selectState" id="selectState" required>
                <option value="">Selecione</option>
            </select>
            
            <select name="selectCounty" id="selectCounty" required>
                <option value=""> </option>
            </select>
        </div>

        <div id="result"></div>
    `

    conteiner.innerHTML = content
    return conteiner
}
