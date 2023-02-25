
const Mongoose=require("mongoose")
const express=require("express")
const app=express();
const cors=require("cors")  



Mongoose.set("strictQuery",false);

const connectDB=async ()=>
{
    try {
        const conn=await Mongoose.connect("mongodb://0.0.0.0:27017/mydatabase",()=>
        {
         console.log("connected to mongoose")
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
         
         const CompanyModel= Mongoose.model("myJobs",Companyschema);
         
         
         
         
         
         
         const PORT=5000;
         
         app.use(express.json());
         app.use(cors());
         
         console.log("hy")
         
         
         
         
         // app.post("/addcompany",async (req,res)=>
         // {
           
         //     let data=await new CompanyModel(req.body); 
         //     console.log(data)
         //     const done=await data.save();
         //     console.log(data)
         //     res.send(req.body);
         //     console.log(req.body);
         
         
         // })
         
         app.get("/addcompany",async(req,resp)=>
         {
         
         let data=await CompanyModel.find();
         console.log("hy");
         resp.send(data);
         
         })
         app.listen(PORT,()=>
         {
            console.log(`connected to ${PORT}`)
         })
        }); 

       
        
        
    } catch (error) {

        console.log(error);
        process.exit(1);
        
    }
}






connectDB();








