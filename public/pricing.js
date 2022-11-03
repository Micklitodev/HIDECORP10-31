

function condition1() {
let value1 = document.getElementById('formSelect1').value
let value2 = document.getElementById('formSelect2').value
let valueEcom = 99;


            if (value1 === "one" && value2 === "no") {
                 var result = 99
            }
             if (value1 === "two" && value2 === "no") {
                 var result = 199
             }
             if (value1 === "three" && value2 === "no") {
                 var result = 299
             }
             if (value1 === "four" && value2 === "no") {
               var result = 399
             }
          if (value1 === "five" && value2 === "no") {
               var result = 499
            }
 

                             if (value1 === "one" && value2 === "yes") {
                                 var result = (99 + valueEcom)
                            }
                            if (value1 === "two" && value2 === "yes") {
                                 var result = (199 + valueEcom)
                            }
                             if (value1 === "three" && value2 === "yes") {
                                 var result = (299 + valueEcom)
                            }
                             if (value1 === "four" && value2 === "yes") {
                                 var result = (399 + valueEcom)
                            }
                            if (value1 === "five" && value2 === "yes") {
                                 var result = (499 + valueEcom)
                            }

                            if (result !== null )  {
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
                                          <h1 class="docwrite"> The price of your renderings by <br> our Expert Designers will cost:  <br><br> $${result}.00
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
}; 


