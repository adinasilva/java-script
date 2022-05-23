function verificar() {
    data = new Date()//Data atual
    ano = data.getFullYear() //Ano atual
    fAno = document.getElementById('txtano')
    res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano){
        alert('[Erro] Verifique os dados e tente novamente.')
    } else{
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fAno.value)
        
    }
}