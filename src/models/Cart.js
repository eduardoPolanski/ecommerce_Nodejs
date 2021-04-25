const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
        }],
    
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    address: {
        street: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        city: {
            type: String,
            required: true
        },
    },

    payment: {
        card: {
            number: {
                type: String,
            },
            cvc: {
                type: Number
            },
        }, 
    },
});


module.exports = mongoose.model('Cart', CartSchema);