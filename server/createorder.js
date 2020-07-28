const AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = 'part_orders_x';
exports.handler = (event, context, callback) => {
  var params = {
    TableName: tableName,
    Item: {
      jobName: event.jobName,
      partId: event.partId,
      userId: event.userId,
      qty: event.qty,
    },
  };
  docClient.put(params, function (err, data) {
    callback(err, data);
  });
};
