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

function media (note1, note2) {
    return ((note1 + note2) / 2)
}

function studentMedia (student) {
    if (media(student.firstNote, student.secondNote) >= 7) {
        return `A média do(a) aluno(a) ${student.name} é ${media(student.firstNote, student.secondNote)}\n
        Parabéns, você foi aprovado(a) no concurso! `
    } else {
        return `A média do(a) aluno(a) ${student.name} é ${media(student.firstNote, student.secondNote)}\n
        Poxa vida, não foi dessa vez! Você foi reprovado(a) no concurso.`
    }
     

}

for (let student of students) {
   
    let studentMessage = studentMedia(student)
    alert(studentMessage)
}


