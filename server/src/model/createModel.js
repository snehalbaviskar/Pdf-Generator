const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema( {
    LineItemName: {
        type: String,
        required: true,
        trim: true
      },

      SKU: {
        type: String,
        required: true,
       
      },
      HSN_SAC: {
        type: Number,
        required: true,
     
      },
      Qty: {
        type: Number,
        required: true,
        },

       Rate: {
            type: Number,
            required: true,
            },

        Discount: {
            type: Number,
            required: true,
            },
     CGST_percentage: {
                type: Number,
                required: true,
                },
         CGST_Amt: {
                    type: Number,
                    required: true,
                    },

         SGST_percentage: {
                        type: Number,
                        required: true,
                        },


        SGST_Amt: {
                        type: Number,
                        required: true,
                        },

        Amount: {
                            type: Number,
                            required: true,
                            },
        
    }, { timestamps: true });

module.exports = mongoose.model('Users', clientSchema)