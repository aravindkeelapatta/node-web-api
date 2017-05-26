var mongoose = require("mongoose");

var customerSchema = mongoose.Schema({
	name : {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	mobile: {
		type: String,
		
	}
});

var Customer = module.exports = mongoose.model("customer", customerSchema, "customer");

module.exports.getCustomer = function(callback) {
	return Customer.find(callback)
} 


module.exports.createCustomer= function(customerObj, callback) {
	return Customer.create(customerObj, callback)	
}

module.exports.editCustomer = function(id,customerObj,callback) {
	return Customer.update({_id : id},
		                   {$set : {
		                   	  name : customerObj.name,
		                   	  email : customerObj.email,
		                   	  mobile : customerObj.mobile
		                   }}, callback)
}


module.exports.deleteCustomer = function(id, callback) {
	return Customer.remove({_id : id}, callback)
}


module.exports.getCustomerById = function(id, callback) {
	return Customer.findById({_id : id}, callback)
}