

const getRandomInt=()=> {
    return Math.floor(Math.random() * 999);
  } 

let randInt1 = getRandomInt()

const getRandomInt2=()=> {
    return Math.floor(Math.random() * 999);
  } 

let randInt2 = getRandomInt2()

const getRandomInt3=()=> {
    return Math.floor(Math.random() * 999);
  } 

let randInt3 = getRandomInt3()

let userKey = [`${randInt1}-${randInt2}-${randInt3}`]




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