document.getElementById('idade').addEventListener('input', function(){
    let idade = parseInt(this.value, 10);
    if(idade >= 18){
        document.getElementById('adulto').classList.remove('hidden');
        document.getElementById('crianca').classList.add('hidden');
    }
    else{
        document.getElementById('adulto').classList.add('hidden');
        document.getElementById('crianca').classList.remove('hidden');
    }
});
