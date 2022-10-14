Explicação do código do desafio:

<!-- Aqui nós temos uma variável no formato de array recebendo objetos, que são os alunos e suas respectivas notas -->
let students = [
    {
        name: 'João',
        firstNote: 9,
        secondNote: 9
    },
    {
        name: 'Felipe',
        firstNote: 9,
        secondNote: 2
    },
    {
        name: 'Júlia',
        firstNote: 5,
        secondNote: 4
    },
    {
        name: 'Dandara',
        firstNote: 8,
        secondNote: 6
    }
]

<!-- Logo abaixo, criei essa função chamada Média, que recebe como parâmetros a note1 e note2 (são duas variáveis, porém, essas variáveis serão/foram criadas no escopo da função) -->
function media (note1, note2) {
    <!-- Dentro da função, estamos retornando o cálculo da média ((note1 + note2) / ), todavia, são duas variáveis vazias até então, pois não estão recebendo nenhum valor até o momento -->
    return ((note1 + note2) / 2)
}

<!-- Novamente uma função foi criada, porém, essa função foi um pouco mais complexa para mim. Aqui criei a função studentMedia, focada em informar as informações do aluno, sua média e se ele foi aprovado ou não. (Aqui entre os parênteses, foi criada a variável student, que até então, está vazia) -->
function studentMedia (student) {
    if (media(student.firstNote, student.secondNote) >= 7) {
        <!-- Dentro da função, criei um fluxo da aplicação, uma estrutura condicional -->
        <!-- (Entre os parênteses do if, adicionei a função Média, criada anteriormente, porém, logo em seguida, precisei atribuir a ela os valores do note1 e note2, para que então ela retornasse a função e realizasse o cálculo solicitado) -->
        <!-- Se a média fosse igual ou maior que 7, a função studentMedia iria retornar a frase abaixo, parabenizando o aluno -->
        return `A média do(a) aluno(a) ${student.name} é ${media(student.firstNote, student.secondNote)}\n
        Parabéns, você foi aprovado(a) no concurso! `
        <!-- Mas calma lá, como que dentro do ${} está sendo atribuido student.objeto sendo que a variável craida dentro do escopo dessa função ainda está vazia? -->
    } else {
        <!-- Neste else, caso a média seja menor que 7, a mensagem abaixo reprovando o aluno seria exibida -->
        return `A média do(a) aluno(a) ${student.name} é ${media(student.firstNote, student.secondNote)}\n
        Poxa vida, não foi dessa vez! Você foi reprovado(a) no concurso.`
    }
     

}

<!-- E aqui temos uma estrutura de repetição, com o intuito de repetir todas as funções e "impressões" na tela para cada um dos estudantes do array -->
for (let student of students) {
   <!-- Com isso, criei uma variável chamada student e peguei ela de dentro da variável principal, students. Ou seja, a variável student estava pegando todos os objetos de dentro do array -->
    let studentMessage = studentMedia(student)

    <!-- Acima, criei mais uma variável, a studentMessage, com o foco em mostrar no alert("") a mensagem, isso sendo feito com cada aluno. Ela recebeu a função studentMedia com o parâmetro sendo a variável (student). Com a função recebendo a student em seu parâmetro,  essa variável do for, foi atribuida ao student da função, que na realidade é uma outra variável que só funciona no escopo da função-->
    
    alert(studentMessage)
    
    <!-- E aqui, para encerrarmos, criei esse alert que recebia em seu parâmetro a variável studentMessage, facilitando assim, todo o processo de fazer aparecer na tela, dispensando diversos alert() -->
     
}


