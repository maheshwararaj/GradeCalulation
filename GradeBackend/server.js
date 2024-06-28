import express, { response } from "express";
import cors from "cors"
//app config
const app = express()
const port = 3000

//middleware
app.use(express.json())
app.use(cors())



app.listen(port,()=>{
           console.log("Server running in http://localhost:"+port)
         })

app.get("/",(req,res)=>{
    res.send("API working")
})



function calculateCGPA(marks) {
    const totalMarks = Object.values(marks).reduce((acc, curr) => acc + parseInt(curr), 0);
    console.log(totalMarks);
    const cgpa = (totalMarks / 600 )* 10; 
    return cgpa.toFixed(2); 
  }
  
  app.post('/getcgpa', (req, res) => {
    const { name, rollno, sub1, sub2, sub3, sub4, sub5, sub6 } = req.body;
  
    if (!name || !rollno || !sub1 || !sub2 || !sub3 || !sub4 || !sub5 || !sub6) {
      return res.json({success:false})
    }
  
    const cgpa = calculateCGPA({ sub1, sub2, sub3, sub4, sub5, sub6 });
  
    res.json({success:true,cgparesult:cgpa});
  });
  
//mongodb+srv://maheshwararaj2003:mahesh0407@cluster0.rwqcpw4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0