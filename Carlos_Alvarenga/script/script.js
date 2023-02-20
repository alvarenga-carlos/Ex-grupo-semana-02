let seuNome = prompt('Digite seu nome');
while(seuNome.length <3){
    seuNome = prompt('Nome inválido. Digite um nome com mais de duas letras');
}

alert('Bem vindo ' + seuNome);

const suaIdade = prompt('Digite sua idade');
let nomeFamoso = prompt('Informe o nome de uma pessoa famosa da área do cinema');
while(nomeFamoso.length <3){
    nomeFamoso = prompt('Nome inválido. Digite um nome com mais de duas letras')
}
let estudo = suaIdade - 10;
alert(nomeFamoso + ' estudou e atuou desde os ' + estudo + ' anos para conquistar o Oscar e tudo leva a crer que em 2023 conseguirá.');
