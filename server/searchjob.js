const AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = 'part_orders_x';
exports.handler = (event, context, callback) => {
  var params = {
    TableName: tableName,
    Key: {
      jobName: event.jobName,
    },
  };
  docClient.get(params, function (err, data) {
    callback(err, data);
  });
};
