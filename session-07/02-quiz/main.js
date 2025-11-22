console.log('Quiz!');

console.log(quizData);

// shuffle an array using Fisher - Yates algorithm
for (let i = quizData.length - 1; i > 0 ; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // console.log(i, randomIndex);

    const aux = quizData[randomIndex];
    quizData[randomIndex] = quizData[i];
    quizData[i] = aux;
}

for (let i = 0; i < quizData.length; i++) {
    alert(`Question: ${i + 1} \nCategory: ${quizData[i].category} \nDifficulty: ${quizData[i].difficulty} \n\n${quizData[i].question}`)
}