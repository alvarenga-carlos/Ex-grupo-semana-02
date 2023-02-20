let seuNome = prompt('Digite seu nome');
while(seuNome.length <3){
    seuNome = prompt('Nome inválido. Digite um nome com mais de duas letras');
}

alert('Bem vindo ' + seuNome);

let suaIdade = prompt('Digite sua idade');

while(!Number.isInteger(parseInt(suaIdade))){
  suaIdade = prompt('Digite uma idade válida')
}

let nomeFamoso = prompt('Informe o nome de uma pessoa famosa da área do cinema').toLowerCase();
while(nomeFamoso.length <3){
    nomeFamoso = prompt('Nome inválido. Digite um nome com mais de duas letras')
}
let estudo = suaIdade - 10;
alert(nomeFamoso + ' estudou e atuou desde os ' + estudo + ' anos para conquistar o oscar e tudo leva a crer que em 2023 conseguirá.').toLowerCase();
