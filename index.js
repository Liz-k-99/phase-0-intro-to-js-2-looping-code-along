// Code your solutions in this file
for (let age = 20; age < 30; age++) {
    console.log(`You are ${age} old.`);
};
const gifts = ['car', 'football', 'T.V', 'shoes'];
const wrapGifts = (gifts) => {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`The ${gifts[i]} is wrapped with a bow on the top!`);
    };
    return gifts;
}
wrapGifts(gifts);

let names = [];
const writeCards = (names, events) => {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return messages;
};
//writeCards(names, events);

const countDown = (count) => {
    while (count >= 0) {
        console.log(count--);
    }
};
countDown(10);