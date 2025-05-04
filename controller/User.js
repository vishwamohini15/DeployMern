const fs=require('fs');
const { json } = require('stream/consumers');
// const index=fs.readFileSync('index.html', 'utf-8')
const path=require('path');
const data=JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data.json'), 'utf-8'))
const users=data.users;


exports.createuser=(req, res)=>{
     console.log(req.body);
     users.push(req.body)
 res.status(201).jso(req.body)
 }
exports.getAlluser=(req, res)=>{
     res.json(users)
    }
 
exports.getuser=(req, res)=>{
     const id=+req.params.id
     const user=users.find(p=>p.id===id)
     
     res.json(user)
    }
exports.replaceuser=(req, res)=>{
     const id=+req.params.id
     const userindex=users.findIndex(p=>p.id===id)
     users.splice(userindex,1,{...req.body,id:id})
     res.status(201).json()
    }
    exports.updateuser=(req, res)=>{
     const id=+req.params.id
     const userindex=users.findIndex(p=>p.id===id)
     const user=users[userindex]
     users.splice(userindex,1,{...user,...req.body})
     res.status(201).json()
    }
    exports.deleteuser=(req, res)=>{
     const id=+req.params.id
     const userindex=users.findIndex(p=>p.id===id)
     const user=users[userindex]
     users.splice(userindex,1)
     res.status(201).json(user)
    }