const AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = 'jobs_x';
exports.handler = (event, context, callback) => {
  var params = {
    TableName: tableName,
    Key: {
      jobName: event.jobName,
      partId: event.partId,
    },
    UpdateExpression: 'set qty=:q',
    ExpressionAttributeValues: {
      ':q': event.qty,
    },
  };
  docClient.update(params, function (err, data) {
    callback(err, data);
  });
};
