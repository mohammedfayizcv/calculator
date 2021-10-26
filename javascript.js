function press (num){
    document.getElementById('input').value += num;

}

function allclear () {
    document.getElementById('input').value =''
    
}
function equalDis (){
    let text=document.getElementById('input').value
    let result =eval(text)
    document.getElementById('input').value=result
}