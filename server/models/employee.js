const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const EmployeeSchema = new mongoose.Schema({
    id: Number,
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean,
        default: true
    }
});

EmployeeSchema.plugin(autoIncrement, { id: 'idSeq', inc_field: 'id' });
    
module.exports = EmployeeSchema;