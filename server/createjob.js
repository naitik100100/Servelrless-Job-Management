const AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = 'jobs_x';
exports.handler = (event, context, callback) => {
  var params = {
    TableName: tableName,
    Item: {
      jobName: event.jobName,
      partId: event.partId,
      qty: event.qty,
    },
  };
  docClient.put(params, function (err, data) {
    callback(err, data);
  });
};
