var student = {
   name:"Vishal",
   email:"Vishal@gmail.com",
   address : {
       city:"Indore",          //   student.address.city = "Bhopal"
       state:"MP",              //        student.address.pin = 999999
       pin:789865,
       getDetail:function(x,y){console.log()}
   },
   Qual:["Btech","Mtech","MBA",{
       subjects : {
           WebTech:["HTML","CSS","JS","React"] // student.Qual[3].subject.webTech[3]
       }
   }]
                               //student.Qual[3].subjects.WebTech[3]

}
         console.log(student.address.pin)
         student.address.city = "Bhopal"
         console.log(student)
         console.log(student.Qual[2])
         console.log(student.Qual[3].subjects.WebTech[3]);