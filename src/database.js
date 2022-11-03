

async function databasePush() {
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const comment = document.getElementById("comment").value
    const name = document.getElementById("name").value
    const info = [name, email, phone, comment] 
    
   console.log(info)
   
   let dbObject = {}
  await fetch("https://web-dev-returns-default-rtdb.firebaseio.com/.json", {
        method: 'POST',
        body: JSON.stringify({  
            name: name,
            email: email,
            phone: phone,
            comment: comment,
        
        }), 
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
   })
   .then(res => res.json())
   .then(data => console.log(data));
   
};  
  