// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
import findFriendByName from './data-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2
    },
    {
        name: 'Sarah',
        satisfaction: 3
    },
    {
        name: 'Missael',
        satisfaction: 1
    },
    {
        name: 'Soraya',
        satisfaction: 2
    },
];


addFriendButton.addEventListener('click', () => {
    // get the name from the input
    const name = friendInputEl.value
    // create a new friend object
    const newFriendData = {
        name: name,
        satisfaction: 1,
    };
    // push it into the friends state array, passed in as an argument
    friendData.push(newFriendData);
    // reset the input
   friendInputEl.value='';
    // display all the friends (use a function here)
    displayFriends();
});


addMushroomButton.addEventListener('click', () => {
    if (Math.random() > .5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});


function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';
    // for each friend in state . . .
    for (let friend of friendData) {
        const friendEl = renderFriend(friend);
        if(friend.satisfaction >3){
        // this is a clickable list, so . . .
        friendEl.addEventListener('click', () => {
            findFriendByName(friend.name, friendData);
        //     add an event listener to each friend
        //         on click, go find the clicked friend in state
        if (friend.satisfaction  < 3, mushroomCount > 0){
            friend.satisfaction++;
            mushroomCount--;
            alert('your friend/s satisfaction levels are bellow three feed them some mushrooms' + friendData.name);
        } 
        //             increment the friends satisfaction and decrement your mushrooms
        //             mushroomCount--;
        //             then display your friends and mushrooms with the updated state
            displayFriends();
            displayMushrooms();
        // append the friendEl to the friends list in DOM
            friendsEl.append(friendEl);
            })
        }
    }
    
}


function displayMushrooms() { 
    //clear out the mushroom div
    mushroomsEl.textcontent='';
    for (let i = 0; i < mushroomCount; i++) { 
        // for each mushroom in your mushroom state, render and append a mushroom
    const mushroomEl = renderMushroom();
    mushroomsEl.append(mushroomEl)
    }
}

displayFriends();
displayMushrooms();

function resetFriendInputEl() {
    const newFriendData = {
        name: 'friend',
        satisfaction: Math.ceil(Math.random() * 5),
    };

}