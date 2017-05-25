var express = require("express");

var app = express();

var router = express.Router();

var mongoose = require("mongoose");

var Customer = require("./models/customer");

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost/techminds", function() {
	console.log("successfully connected to mongodb database !!")
})


router.get("/", function(request,response) {
	response.json({name : "Aravind"})
})

router.get("/customers", function(request, response) {
	Customer.getCustomer(function(err, customerData) {
		response.json(customerData);
	})
})

router.post("/customer", function(request, response) {

	var customerObj = request.body;
	Customer.createCustomer(customerObj, function(err, data) {
		if(err) {
			throw  err;
		}
		response.json(data);
	})
})

app.use("/api", router);

var PORT = process.env.PORT || 8081;

app.listen(PORT, function() {
	console.log("SErver is listening to PORT" +PORT)
})



