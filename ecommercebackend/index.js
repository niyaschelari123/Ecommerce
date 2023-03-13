const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'niyas',
    database: 'myres'
  });
  
  db.connect();


  const MongoClient = require("mongodb").MongoClient;
const connection_string = "mongodb://localhost:27017/"

var dbb={};

var cond=false;
MongoClient.connect(connection_string,{useUnifiedTopology:true},(err,client)=>{
    if(err) throw err;
    console.log("connected successfully")
     dbb = client.db("ecommerce");
     
});


  const port=5000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.post("/api/post",(req,res)=>{
    console.log(req.body);
    const item=req.body;
    const {name,price,rating,desc,catg,image}=req.body;
    const sql="insert into products (name,price,rating,description,catg,image) values (?,?,?,?,?,?)";
    db.query(sql,[name,price,rating,desc,catg,image],(err,res)=>{
        if(err) throw err;
        console.log("inserted");
    })
})

app.get("/products",(req,res)=>{
   /* dbb.collection("products").find({}).toArray(function(err, result) {
        if (err) throw err;
        
        res.send(result);
      });*/
      const sql="select * from products";
      db.query(sql,(error,result)=>{
        if(error) throw error;
        res.send(result);
      })
})

app.post("/signupdata",(req,resp)=>{
    
    
    const item=req.body;

   

    dbb.collection("signup").insertOne(item,function(err,result){
        if(err) throw err;
        console.log("inserted")
        
    })
})

app.get("/logindata",(req,res)=>{
    dbb.collection("signup").find({}).toArray(function(err, result) {
        if (err) throw err;
        
        res.send(result);
      });

})

app.post("/addCart",(req,res)=>{
    console.log(req.body);
    const {id,name,price,image,quantity}=req.body;

    const sqlw="select * from cart where id=?";
    db.query(sqlw,id,(err,res)=>{
        if(err) throw err;
        if(res.length>0){
            console.log("already exists");
        }else{
            const sql="INSERT INTO cart (id,name,image,price,quantity) VALUES (?,?,?,?,?)";
    db.query(sql,[id,name,image,price,quantity],(error,result)=>{
        if(error) throw error;
        console.log("Inserted to cart");
    })

        }
    })

    
})

app.get("/cartItems",(req,res)=>{
    const sql="SELECT * FROM cart";
    db.query(sql,(error,result)=>{
        if(error) throw error;
        res.send(result);
    })
})

app.post("/removecartitem/:id",(req,res)=>{
    const id=req.params.id;
    console.log(id);
    const sql="DELETE FROM cart WHERE id=?";
    db.query(sql,id,(error,result)=>{
        if(error) throw error;
        console.log("removed");
    })
})

app.post("/cartincrement/:id",(req,res)=>{
    console.log(req.params.id);
    const id=req.params.id;
    const sql="UPDATE cart SET quantity=quantity+1 WHERE id=?";
    db.query(sql,id,(err,res)=>{
        if(err) throw err;
        console.log("incremented");
    })
})

app.post("/cartdecrement/:id",(req,res)=>{
    const id=req.params.id;
    
    const sqly="SELECT * FROM cart WHERE id=?";
    db.query(sqly,id,(err,res)=>{
        console.log(res[0].quantity);
        if(res[0].quantity>1){
            const sql = "UPDATE cart SET quantity=quantity-1 WHERE id=?";
            db.query(sql,id,(err,res)=>{
                if(err) throw err;
                console.log("deleted");
            })

        }else{
            const sqlt="DELETE FROM cart WHERE id=?";
    db.query(sqlt,id,(error,result)=>{
        if(error) throw error;
        console.log("removed");
    })

        }
       
    })

    
})



app.get("/admin",(req,res)=>{
    const sql="select * from admin";
    db.query(sql,(err,result)=>{
        if(err) throw err;
         res.send(result);
    })
    
})

app.post("/admintemp",(req,res)=>{
    const {nameto} = req.body;
    const sql="insert into admintemp(name) values (?)";
    db.query(sql,nameto,(err,res)=>{
        if(err) throw err;
        console.log("inserted");
    })
})

app.get("/admintemp",(req,res)=>{
    const sql="select * from admintemp";
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.post("/ordered/",(req,res)=>{
    
    console.log("ordered");
    
    const sql="select * from cart";
    
    
   db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        

         dbb.collection("ordered").insertMany(result,function(err,result){
            if(err) throw err;
            console.log("inserted")
            
        })
    })
})

app.get("/orderitems",(req,res)=>{
    console.log(req.body);
    const peru=req.body.peru;
    /*const sql=`select * from ${peru}`;
    db.query(sql,(err,res)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    }) */
})

app.get("/odItems",(req,res)=>{
    dbb.collection("ordered").find({}).toArray(function(err, result) {
        if (err) throw err;
        
        res.send(result);
      });

})

app.post("/removeorder/:id",(req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
    dbb.collection("ordered").deleteOne(req.body,(err,result)=>{
        if(err) throw err;
        console.log("removed");
    })
    

})

app.post("/productupdate",(req,res)=>{
    console.log(req.body);
    const {_id,name,price,rating,desc,catg,image} = req.body;
    console.log(_id);
    const sql="update products set name=?,price=?,rating=?,description=?,catg=?,image=? where id=? ";
    db.query(sql,[name,price,rating,desc,catg,image,_id],(err,res)=>{
        if(err) throw err;
        console.log("updated")
    })
})




app.listen(port,()=>{
    console.log(`server running on 5000`);
    
})