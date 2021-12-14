export default function findFriendByName(name, friends) { 
    
    // iterate through the friends
    for (let friend of friends){
        if (friend.name === name){ 
    // when you find a friend with the correct name, return that friend
            return friend;
        }
    }
}