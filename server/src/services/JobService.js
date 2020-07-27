const mysql = require('mysql');
const Database = require('config/database');
const queries = require('app-data/queries');
const dbConfig = require('app-data/dbConfig');

/**
 * Creating a new database instance
 */
const database = new Database(dbConfig);

function JobService() {}

JobService.prototype.getAll = async function getAll() {
  const getJobsQuery = queries.getAllJobs;
  console.log(`The Query for returning all Job information - ${getJobsQuery}`);
  try {
    let items = await database.query(getJobsQuery);
    return {
      success: true,
      statusCode: 200,
      items,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

JobService.prototype.getAllorders = async function getAllorders() {
  const getAllordersQuery = queries.getAllorders;
  console.log(`The Query for returning all orders information - ${getAllordersQuery}`);
  try {
    let items = await database.query(getAllordersQuery);
    return {
      success: true,
      statusCode: 200,
      items,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

JobService.prototype.getaJob = async function getaJob(params) {
  const getajobQuery = mysql.format(queries.getaJob, [params.jobname, params.partid]);
  console.log(`The Query for returning a Job information - ${getajobQuery}`);
  try {
    let items = await database.query(getajobQuery);
    return {
      success: true,
      statusCode: 200,
      items,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

JobService.prototype.createjob = async function cratejob(data) {
  const newjobquery = mysql.format(queries.createjob, [data.jobName, data.partId, data.qty]);

  console.log(`The Query for creating a job entry - ${newjobquery}`);

  try {
    let items = await database.query(newjobquery);
    return {
      success: true,
      statusCode: 200,
      items,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

JobService.prototype.updatejob = async function updatejob(data) {
  const updatejobquery = mysql.format(queries.updatejob, [data.qty, data.jobName, data.partId]);

  console.log(`The Query for updating a job entry - ${updatejobquery}`);

  try {
    let items = await database.query(updatejobquery);
    if (items.affectedRows == 0) {
      console.log('No job avaiable with the jobName and partId');
      return {
        success: false,
        statusCode: 500,
        error: 'No job available with the jobName and partId',
      };
    }
    return {
      success: true,
      statusCode: 200,
      items,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

JobService.prototype.searchjob = async function searchjob(params) {
  const searchjobQuery = mysql.format(queries.searchjob, [params.jobname]);
  console.log(`The Query for searching a Job information - ${searchjobQuery}`);
  try {
    let items = await database.query(searchjobQuery);
    return {
      success: true,
      statusCode: 200,
      items,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

JobService.prototype.searchjob_y = async function searchjob_y(params) {
  const searchjobQuery_y = mysql.format(queries.searchjob_y, [params.jobname]);
  console.log(`The Query for searching a Job information for y - ${searchjobQuery_y}`);
  try {
    let items = await database.query(searchjobQuery_y);
    return {
      success: true,
      statusCode: 200,
      items,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

JobService.prototype.deletejob = async function deletejob(params) {
  const deletejobQuery = mysql.format(queries.deletejob, [params.jobname, params.partid]);
  console.log(`The Query for delete a Job information - ${deletejobQuery}`);
  try {
    let items = await database.query(deletejobQuery);
    if (items.affectedRows == 0) {
      return {
        success: true,
        statusCode: 200,
        items,
        message: 'Job with jobName does not exist',
      };
    } else {
      return {
        success: true,
        statusCode: 200,
        items,
      };
    }
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

JobService.prototype.createorder = async function createorder(data) {
  const neworderquery = mysql.format(queries.neworderquery, [data.partId, data.jobName, data.userId, data.qty]);

  console.log(`The Query for creating a order - ${neworderquery}`);

  try {
    let items = await database.query(neworderquery);
    return {
      success: true,
      statusCode: 200,
      items,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

module.exports = JobService;
