let topic = ['HTMl', 'CSS', 'Git', 'Javascript'];
let randomTopic = topic[Math.floor(Math.random() * topic.length)];




const listTopics = () => {
        for(let i = 0; i < topic.length; i++){
    console.log(`I love Using ${topic[i]}`);
    }
}



const selectTopic = (arr) => {
if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
}

console.log('Here are thr topics we learned through Prework');
listTopics()
console.log('Which topic should wwe study first?')
selectTopic()
