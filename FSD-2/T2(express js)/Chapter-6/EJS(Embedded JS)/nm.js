

var nm=require("nodemailer");
var trans=nm.createTransport({host:"smtp.gmail.com",
    port:465,
    auth:{
        user:'parmarjayveer3000@gmail.com',
        pass:'jkrn lyxs aelx yxih',
    }
})
var mailoptions={
    from:"noreply@gmail.com",
    to:"parmarjayveer3000@gmail.com,davedhairya21@gmail.com,pasupatelp@gmail.com",
    subject:"NodeMailer Example",
    text:"Testing mail",
    html:"<h1>Done!!!</h1><h3>Thank you Sexyy Jadu & pusssy pasu </h3>",
    attachments:[{filename:"1.jpg",
        path:"./1.jpg"
    }]
}
trans.sendMail(mailoptions,(e,d)=>{
    if(e) console.log(e);
    else console.log(d);
})
