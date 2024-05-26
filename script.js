
const calcButton = document.querySelector('#calc'),
    resetButton = document.querySelector('#reset');


calcButton.addEventListener('click', () => {
    const nombre = document.querySelector('#nombre').value,
    ejercicios = document.querySelector('#ejercicios').value,
    teorico = document.querySelector('#teorico').value,
    practico = document.querySelector('#practico').value,
    proyecto = document.querySelector('#proyecto').value;
    
    let total = ejercicios*0.20 + teorico*0.20 + practico*0.30 + proyecto*0.30;

    if (total >= 5){
        document.querySelector('#result-info').innerText = `${nombre}, has aprobado`;
        document.querySelector('#nota').innerText = total;
        document.querySelector('.nota-container').style.backgroundColor = 'rgba(22, 160, 133, 0.5)';
    } else {
        document.querySelector('#result-info').innerText = `${nombre}, has suspendido`;
        document.querySelector('#nota').innerText = total;
        document.querySelector('.nota-container').style.backgroundColor = 'rgba(217, 30, 24, 0.5)';
    }

    document.querySelector('.form-container').setAttribute('style', 'display: none')
    document.querySelector('.result-container').setAttribute('style', 'display: flex')

});

resetButton.addEventListener('click', () => {
    window.location.reload();
});
