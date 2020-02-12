
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for todo object.
 */

let Invoice = new Schema({
    /**
     * First Name of the user.
     */
    name: {
        type: String
    },
    /**
     * Last Name of the user.
     */
    Details: {
        type: String,
        // required: "title is required"
    },
    /**
     * User Name of the user.
     */
    Price: {
        type: Integer,
    },
    
    nId: {
        type: Integer,
    }
    /**
     * Password of the user.
     */
    duration: {
        type: String,
    }
}, {
    versionKey: false
});
// Duplicate the id field as mongoose returns _id field instead of id.
Invoice.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialized.
Invoice.set('toJSON');


module.exports = mongoose.model('Invoice', Invoice);