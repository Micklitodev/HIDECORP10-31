

const getRandomInt=()=> {
    return Math.floor(Math.random() * 999);
  } 

let randInt1 = getRandomInt()
let randInt2 = getRandomInt()
let randInt3 = getRandomInt()


let userKey = [`${randInt1}-${randInt2}-${randInt3}`]


console.log(userKey)

const updateEndpoint = 'https://signuphide-default-rtdb.firebaseio.com/.json';



function updateSignUp() {
let usernameInfo = document.getElementById('username').value
let passwordInfo = document.getElementById('password').value

    fetch(updateEndpoint, {
        method: 'PUT',
        body: JSON.stringify( 
           {
            username: usernameInfo,
            password: passwordInfo
    })
    });
};    