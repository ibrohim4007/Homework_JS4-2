function generateRandomExample() {
    const operators = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let question = `${num1} ${operator} ${num2}`;
    let correctAnswer;

    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = (num2 !== 0) ? (num1 / num2).toFixed(2) : 'Infinity';
            break;
    }

    return { question, correctAnswer };
}

function startQuiz() {
    const numberOfExamples = prompt("Введите количество примеров, которые вы хотите решить:");
    const examplesCount = parseInt(numberOfExamples);

    if (isNaN(examplesCount) || examplesCount <= 0) {
        alert("Пожалуйста, введите корректное количество примеров.");
        return;
    }

    for (let i = 0; i < examplesCount; i++) {
        const example = generateRandomExample();
        const userAnswer = prompt(`Решите пример: ${example.question}`);
        const userAnswerParsed = parseFloat(userAnswer);
        

        if (userAnswerParsed === parseFloat(example.correctAnswer)) {
            console.log(`Ваш ответ верный - ${userAnswerParsed}`);
        } else {
            console.log(`Ваш ответ не верный - ${userAnswerParsed}. Правильный ответ - ${example.correctAnswer}!`);
        }
    }
    alert('Зайдите пожалуйста в консоль')
}

// Запуск викторины
startQuiz();

















