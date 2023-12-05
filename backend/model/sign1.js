const mongoose = require("mongoose")

const SignSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    Phonenumber: {
        type: String,
        require: true
    },
    pasword: {
        type: String,
        require: true
    },
    confirmpassword: {
        type: String,
        require: true
    },
    Gender: {
        type: String,
        require: true
    },

})
const signData =mongoose.model("SignSchema", SignSchema);
module.exports =signData;