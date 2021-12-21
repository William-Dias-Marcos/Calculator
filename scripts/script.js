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

    try {

        if(result){
            let a = document.getElementById('viewfinder').value = eval(result)
        } 

    } catch (err){

        document.getElementById('viewfinder').value = "Operação inválida"

        setTimeout(function() {
            clean ()
          }, 1000)

    }
}