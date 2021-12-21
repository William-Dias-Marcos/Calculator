function insert (num){

    let digit = document.getElementById('viewfinder').value
    document.getElementById('viewfinder').value = digit + num
}

function clean (){
    document.getElementById('viewfinder').value = ""
}

function back (){
    var dell = document.getElementById('viewfinder').value
    document.getElementById('viewfinder').value = dell.substring(0, dell.length -1)
}

function calculate (){
    let  result = document.getElementById('viewfinder').value

    if(result){

        let a = document.getElementById('viewfinder').value = eval(result)

    } 
        
        //mostrar msg de erro no cálculo que o usuário tentou executar

}