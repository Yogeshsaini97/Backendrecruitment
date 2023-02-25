
const Mongoose=require("mongoose")
 const cors=require("cors")   

 const PORT=5000;
 
 Mongoose.connect("mongodb://0.0.0.0:27017/mydatabase",()=>
 {
  console.log("connected to mongoose")
 }); 
 
//  const yogeshschema=new Mongoose.Schema({
//     Name:String,
//     Email:String,
//     Password:String
//  });   

// const yogeshmodel=Mongoose.model("myuser",yogeshschema);


const Companyschema=new Mongoose.Schema({
    companyName: {
        type: String,
        required: true,
       
      },
      Profiles: { type: Array, default: [] },
      Location: {
        type: Array, default: [] 
  
      },
      WorkingDays: {
        type: String,
       
      
      },
      experienceRequired:{
        type: String
      },
      CTC: {
        type: String,
        Default:"as per market standards"
       
      
      },
      Hremailid: {
        type: String,
       
      
      },

 },{timestamps:true});   

const CompanyModel=Mongoose.model("myJobs",Companyschema);



// const connecttodb=async ()=>                                          
// {

// let data=new productmodel({
//     Name:"yogesh",
//     Email:"yogesh.saini@gmail.com",
//     Password:"123@123"


// }); 


// data.save();
// }

// connecttodb();


const express=require("express")
const app=express();

app.use(express.json());
app.use(cors());

// app.post("/Register",async (req,resp)=>
// {
   
//     let data=await new yogeshmodel(req.body); 
//     data.save();
//     resp.send(req.body);
//     console.log(req.body);


// })

// app.post("/Login",async (req,resp)=>
// {
   
//    let data=await yogeshmodel.findOne(req.body);
//    console.log(data);
//    if(data)
//    {
//     resp.send(data);
//    }
//    else
//    {
//     data={error:"No result found"}
//     resp.send(data);
//    }
   
   


// })


app.post("/addcompany",async (req,res)=>
{
   
    let data=await new CompanyModel(req.body); 
    console.log(data)
    const done=await data.save();
    console.log(data)
    res.send(req.body);
    console.log(req.body);


})

app.get("/addcompany",async(req,resp)=>
{

let data=await CompanyModel.find();
console.log("hy");
resp.send("hy");

})

// app.delete("/deleteproduct/:_id", async (req,resp)=>
// {
//     let data=await productmodel.deleteOne(req.params);
//     console.log(data);
//     resp.send(data);
// }
// )

// app.get("/getoneproduct/:_id",async (req,resp)=>
// {
//     let data=await productmodel.findOne(req.params);
//     console.log(data)
//     resp.send(data);


// })


// app.put("/updateproduct/:_id",async (req,resp)=>
// {
//     let data=await productmodel.updateOne(req.params,{$set:req.body})
//     console.log(data)
//     resp.send(data);
// })

// app.get("/searchproduct/:key",async (req,resp)=>
// {
//     let data = await productmodel.find({ $or: [{ Brand: { $regex: req.params.key }}, {Name:{ $regex: req.params.key } }, {Color:{ $regex: req.params.key } }, {Ram:{ $regex: req.params.key } }, {Price:{ $regex: req.params.key } }] });
//     console.log(data);
//     resp.send(data);
// })



app.listen(PORT,()=>
{
    console.log(`connected to ${PORT}`)
});





