
const questions = [
    'Quem foi que gritou "independencia ou morte"',
    "Qual é a capital da França?",
    "Qual é o maior planeta do nosso sitema solar",
    "Qual é a atual capital do Brasil",
    "Quem foi o primeiro presidente do Brasil?",
    "Qual é o nome do rio mais longo do mundo?"
];
const options = [
    ["Dom Pedro II", "Tiririca", "Dom Pedro I", "Zacarias"],
    ["Londres", "Paris", "Berlim", "Madrid"],
    ["Vênus", "Marte", "Júpiter", "Saturno"],
    ["Salvador", "Rio de Janeiro", "São Paulo", "Brasilia"],
    ["Duque de Caxias", "Getúlio Vargas", "Deodoro da Fonseca", "Floriano Peixoto"],
    ["Nilo", "Amazonas", "Mississipi", "Yangtzé"]
];
const correctAnswers = [2, 1, 2, 3, 2, 1];

let reloadButton = document.getElementById('reload')
reloadButton.style.display = "none";
let nowQuestion = Math.floor(Math.random() * questions.length);

generateQuestions();
selectButton();

function generateQuestions() {
    document.getElementById("question").innerHTML = questions[nowQuestion];
    const optionsContainer = document.querySelectorAll('button');
    optionsContainer.forEach((element, index) => { element.textContent = options[nowQuestion][index] });
}

function selectButton() {
    const alternatives = document.querySelectorAll('.alternative');
    alternatives.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.value;
            checkAnswer(answer);
        })
    })
}

function checkAnswer(answer) {
    answer = parseInt(answer);
    let statusAnswer = document.getElementById("statusAnswer");
    if (answer == correctAnswers[nowQuestion]) {
        statusAnswer.innerHTML = "Acertou!!!";
        statusAnswer.style.color = "green";
    } else {
        statusAnswer.innerHTML = `Errou, a resposta correta é ${options[nowQuestion][correctAnswers[nowQuestion]]}`;
        statusAnswer.style.color = "red";
    }
    reloadButton.style.display = "block";
}

document.getElementById('reload').addEventListener('click', () => location.reload())