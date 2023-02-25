
const Mongoose=require("mongoose")
const express=require("express")
const app=express();
const cors=require("cors")  


const runbackend= async ()=>
{
    
 Mongoose.connect("mongodb://0.0.0.0:27017/mydatabase",()=>
{
 console.log("connected to mongoose")
})

  



const PORT=5000;

app.use(express.json());
app.use(cors());

app.get("/addcompany",async(req,resp)=>
{

// let data=await CompanyModel.find();
resp.send("hy");

})

app.listen(PORT,()=>
{
   console.log(`connected to ${PORT}`)
})

}

runbackend();


