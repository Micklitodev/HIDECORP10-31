

const getRandomInt=()=> {
    return Math.floor(Math.random() * 999);
  } 

let randInt1 = getRandomInt()
let randInt2 = getRandomInt()
let randInt3 = getRandomInt()


let userKey = [`${randInt1}-${randInt2}-${randInt3}`]


console.log(userKey)

const updateEndpoint = 'https://signuphide-default-rtdb.firebaseio.com/.json';



async function updateSignUp() {
let usernameInfo = document.getElementById('username').value
let passwordInfo = document.getElementById('password').value

        fetch(updateEndpoint, {
        method: 'POST',
        body: JSON.stringify( 
           { 
            username: usernameInfo,
            password: passwordInfo
    })
    });
};    

function redirect() { 
  return document.write(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Price</title>
        <link href="styles/style.css" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body> 
    <script src="navbar.js"></script>
    <script> Navbarpasstohtml() </script>
          <h1 class="docwrite"> 
          </h1> 
          </body>
        <div class="Paymentbtn"> <a href="login.html">
          <input type="button" value="LOGIN" />
        </a>
        </div>
        </html>
        <br> 
        <footer class="footer">Email: Micklito.dev@gmail.com | Phone: 470-831-4159 | <a href="contactus.html">
      <input type="button" value="Contact Us" />
    </a> </footer>`)
  
}



