const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'Firstname must be at least 3 characters long'],
        },
        lastname:{
            type: String,
            minlength: [3, 'Lastname must be at least 3 characters long'],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters long'],
    },
    password:{
        type: String,
        required: true,
        select: false,
        minlength: [8, 'Password must be at least 8 characters long'],
    },
    socketId:{
        type: String,
    },
})


userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' } // Token expires in 24 hours
    );
    return token;
}


userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}

const userModel = mongoose.model('user', userSchema)


module.exports = userModel;