addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if(request.method === 'POST'){
    const data = await request.json();
    if(!data.name || !data.email || !data.message){
      return new Response(JSON.stringify({error:"Missing fields"}),{status:400});
    }

    // Example: send email via SendGrid
    const sgRes = await fetch("https://api.sendgrid.com/v3/mail/send",{
      method:"POST",
      headers:{
        "Authorization":"Bearer YOUR_SENDGRID_API_KEY",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        personalizations:[{to:[{email:"kenyarelocationhub@gmail.com"}]}],
        from:{email:data.email,name:data.name},
        subject:"New relocation inquiry",
        content:[{type:"text/plain",value:`Name: ${data.name}\nEmail: ${data.email}\nCountry: ${data.country}\nMove Date: ${data.moveDate}\nBudget: ${data.budget}\nMessage: ${data.message}`}]
      })
    });
    return new Response(JSON.stringify({success:true}),{status:200});
  }
  return new Response("OK",{status:200});
}
