const AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  console.log(event);
  var tableName = 'jobs_x';
  var params = {
    TableName: tableName,
    Key: {
      jobName: event.jobName,
      partId: event.partId,
    },
  };

  docClient.delete(params, function (err, data) {
    console.log(event);
    callback(err, data);
  });
};
