
const pullFromEndpoint =  'https://signuphide-default-rtdb.firebaseio.com/.json' 



const getCreds = () => {
// const logInUser = document.getElementById('logInUser')
// const logInPass = document.getElementById('logInPass')
const logInUser = 'michaelvrms@gmail.com'
const logInPass = 'TEST'

fetch(pullFromEndpoint) 
.then(function(response)
{
    response.json().then(function(data) {
   let val = Object.values(data) 
   console.log(val)
    
   if (val[1] === logInUser && val[0] === logInPass) {
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
              <h1 class="docwrite"> we fucking did it beckky!
              </h1> 
              </body>
            <div class="Paymentbtn"> <a href="payment.html">
              <input type="button" value="Continue" />
            </a>
            </div>
            </html>
            <br> 
            <footer class="footer">Email: Micklito.dev@gmail.com | Phone: 470-831-4159 | <a href="contactus.html">
          <input type="button" value="Contact Us" />
        </a> </footer>`)
}
    }); 
}).catch(function(error) {
    console.log('Fetch Error:', error);
});  
}

getCreds()
