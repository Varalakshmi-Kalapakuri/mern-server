/*const fs = require("fs")
//const filedata= fs.readFile('read.txt')
//console.log(filedata.toString());
//console.log("Execution completed");
//reading sync
fs.readFile('read.txt',function (ferr,filedata){
    if(ferr) return console.error(ferr)
    console.log(filedata.toString());
})
console.log("Execution completed")*/
/*eventloop
console.log("This is a First Function");
setTimeout( ()=>{
    console.log("This is Second Function");
},5000)
console.log("This is Third Function");*/
/*const server= require('dgram');
const net= require('net');
const server = net.createServer((socket)=>{
    socket.on('close',()=>{
        console.log("socket closed")
    })
})
server.listen(8000)*/
/*promises
const add= (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0){
                return reject("Number must be non zero")
            }
            return resolve(a*b)
        },3000)
    })
}
//we chain our promises with .then()
add(1,2).then((sum)=>{
    console.log(sum)
    return add(sum,4)
}).then((sum2)=>{
    console.log(sum2)
})*/
/*const value =(str)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof str == 'string'){
                resolve("promise initiated "+str)
            }
            reject("The Data is not string type");
        },2000)
    })
}

value("Function 1").then((myvalue)=>{
    console.log(myvalue);
    return value("Function 2")
}).then((myvalue)=>{
    console.log(myvalue);
})*/
/*
const events={
    name:'Birthday party',
    guests:['Ram','Sita'],
    printGuest(){
        console.log('Guest List for  '+this.name)
        this.guests.forEach((guest)=>{
        console.log(guest+' is attending '+this.name)
    })
    }
}
events.printGuest()*/
/*const http = require('http')
http.createServer((request,response)=>{
    response.writeHead(200,{'content-Type':'text/html'})
    response.end('server is Live');
}).listen(8000,()=>{console.log("server live")})*/
/*const http = require('http');
const superagent = require('superagent');
(async () => {
    const data = {
        username: 'raju',
        password: '1234',
        userid: 1011
    };
    try {
        const { body } = await superagent
            .post('https://jsonplaceholder.typicode.com/posts')
            .send(data);
        console.log(body);
    } catch (err) {
        console.error('Error occurred:', err.message || err);
    }
})();*/
//axios
/*const axios = require('axios')
axios.get("http://jsonplaceholder.typicode.com/posts")
.then((res)=>console.log(res.data)).catch((err)=>
console.log(err.message || err))*/
/*const http = require('http');
const { StringDecoder } = require('string_decoder');
const url = require('url');

// Create the server
const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname;
    const method = request.method.toLowerCase();
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    request.on('data', (chunk) => {
        buffer += decoder.write(chunk);
    });

    request.on('end', () => {
        buffer += decoder.end();

        if (method === 'post' && path === '/user') {
const express = require('express');
const mongoose = require('mongoose')
const {ApolloServer,gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const userApiFromRouter = 
require('./routes/userRoutes') //import
const app = express() 
const port = 3001;
const url= 'mongodb+srv://kvaralakshmi2005:m2egOEGhlqLYIhj1@cluster0.xd8hupg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json())
mongoo            const data = JSON.parse(buffer);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "User data received", data }));
        } else {
            response.writeHead(404, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "Not Found" }));
        }
    });
});

// Start the server
server.listen(8000, () => {
    console.log('Server is running on port 8000');

    // Make the axios POST request
    const axios = require('axios');
    const data = {
        username: 'abhi',
        password: '1234',
        userid: 1001
    };

    axios.post('http://localhost:8000/user', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Error: ' + (err.message || err));
        });
});*/

/*//url or api endpoint,function
const express=require('express');
const app=express();
const router = express.Router();
const port=3001;
const homeApi = require('./routes/home')
const loginApi = require('./routes/Login')
app.use("/",homeApi);
app.use("/",loginApi);
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.listen(port,()=>{
    console.log(`Server is live on port ${port}`); 
});*/
/*const express = require('express')
const session = require('express-session')
const app= express();
const port= 3001;
app.unsubscribe(expression.json());

app.listen(port,()=>
    console.log(`Server is live on port ${port}`));*/

/*const express = require('express')
const mongoose=require('mongoose')
const userApi=require('./routes/users')
const app = express()
const port = 3001;// as react is running in 3000 port
app.use(express.json())
const url='mongodb+srv://kvaralakshmi2005:@cluster0.xd8hupg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

//connecting my express app to my mongodb server
mongoose.connect(url).then(()=>{console.log('MongoDB connected')})
.catch((err)=>console.log(err));

app.listen(port,()=>{
    console.log(`Server is live on port`);
});*/

//mongodb+srv://kvaralakshmi2005:m2egOEGhlqLYIhj1@cluster0.xd8hupg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express=require('express');
const mongoose=require('mongoose');
const {ApolloServer,gql}=require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers=require('./resolvers');
const userApiFromRouter=require('./routes/userRoutes');


const app=express();
const port= 3001;
const url='mongodb+srv://kvaralakshmi2005:m2egOEGhlqLYIhj1@cluster0.xd8hupg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
app.use(express.json());
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('DB Connected')})
.catch((err)=>{console.log(err)});
//start my apollo server 
const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRouter);
async function StartServer(){
    await server.start();
    server.applyMiddleware({app}); //run my express code
    app.listen(port,()=>{
        console.log(`server live 3001`);
    })
}
StartServer();