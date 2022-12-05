
let price = []; 

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
                                price.push(result)
                                return document.write(
                                    `<!DOCTYPE html>
                                    <html lang="en">
                                    <head>
                                        <meta charset="UTF-8">
                                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                        
<link
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
rel="stylesheet"
/>

<link
href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
rel="stylesheet"
/>

<link
href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.1/mdb.min.css"
rel="stylesheet"
/>

                                        <title>Price</title>
                                        <link href="styles/style.css" rel="stylesheet"/>
                                        <script src="navbar.js"></script>
                                      
                                    </head>
                                    <body> 
                                    <script> Navbarpasstohtml() </script>
                                          <h1 class="docwrite"> The price of your renderings by <br> our Expert Designers will cost:  <br><br> $${result}.00
                                          </h1> 
                                          </body>
                                        <div class="Paymentbtn"> <a href="payment.html">
                                          <input type="button" class='btn btn-secondary' style='margin-right: 220px' value="Continue" />
                                        </a>
                                        </div>
                                        </html>
                                        <div style="margin-top:300px">
                                        <script>footerPassToHtml()</script>
                                        </div>
                                    </body>
                                    </html>`) 

                            }  
                            
                            

}; 
 

console.log(price)