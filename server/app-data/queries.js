/**
 * Centralized queries required for various endpoints
 */
module.exports = {
  getAllJobs: 'SELECT * FROM jobs_x',
  getAllorders: 'SELECT * FROM part_orders_x',
  getaJob: 'SELECT * FROM jobs_x WHERE jobName= ?  AND partId= ?',
  createjob: 'INSERT INTO jobs_x (jobName,partId,qty) VALUES (?,?,?)',
  updatejob: 'UPDATE jobs_x SET qty=? WHERE jobName=? AND partId=?',
  searchjob: 'SELECT * FROM part_orders_x where jobName= ?',
  searchjob_y: 'SELECT * FROM jobs_x where jobName= ?',
  deletejob: 'DELETE FROM jobs_x where jobName= ? AND partId= ?',
  neworderquery: 'INSERT INTO part_orders_x (partId,jobName,userId,qty) VALUES (?,?,?,?)',
};
