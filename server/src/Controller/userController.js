const userModel = require("../model/createModel")
const pdf = require('html-pdf');



/////////////////////////////////////////////////create User////////////////////////////////////////////////////////////////////////////////

// const createUser= async function(req, res) {
//     try{
//     let data= req.body

//     let {LineItemName,SKU,HSN_SAC,Qty,Rate,Discount,CGST_percentage,CGST_AMt,SGST_percentage,SGST_AMt,
//         Amount}= data
   
//     let userData= await userModel.create(data)
//     res.status(201).send({status: true, message: "User created successfully", data: userData})
//     }catch(err){
//         res.status(500).send({status: false, Error: err.message})
//     }
// }



const createUser =async(req, res) => {

    let data= req.body
    let {LineItemName,SKU,HSN_SAC,Qty,Rate,Discount,CGST_percentage,CGST_AMt,SGST_percentage,SGST_AMt,
        Amount}= data


    pdf.create(pdfTemplate(data), {}).toFile('invoice.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
}



// app.get('/fetch-pdf', (req, res) => {
//     res.sendFile(`${__dirname}/invoice.pdf`)
// })


module.exports = { createUser}