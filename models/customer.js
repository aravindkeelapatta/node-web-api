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
		required: true
	}
});

var Customer = module.exports = mongoose.model("customer", customerSchema, "customer");

module.exports.getCustomer = function(callback) {
	return Customer.find(callback)
} 


module.exports.createCustomer= function(customerObj, callback) {
	return Customer.create(customerObj, callback)
}