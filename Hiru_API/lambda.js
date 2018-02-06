let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
const rds = new SL.AWS.RDS(connectionManager);
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {


	ddb.put({
		TableName: 'Hiru',
		Item: {}
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});


	rds.beginTransaction({
		instanceIdentifier: 'Hiru'
	}, function (error, connection) {
		if (error) { throw err; }
	});


	callback(null, 'Successfully executed');
























}