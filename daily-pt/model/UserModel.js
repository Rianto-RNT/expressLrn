const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type:String,
        require:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);
// module.exports = UserSchema;