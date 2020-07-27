const { collapseTextChangeRangesAcrossMultipleVersions } = require('typescript');

/**
 * Controller class handling job resource and delegating business work to the service layer
 * @param {instance of a JobService class} service
 */
function JobController(service) {
  this.service = service;
  this.getAll = this.getAll.bind(this);
  this.getaJob = this.getaJob.bind(this);
  this.createjob = this.createjob.bind(this);
  this.updatejob = this.updatejob.bind(this);
  this.searchjob = this.searchjob.bind(this);
  this.deletejob = this.deletejob.bind(this);
  this.createorder = this.createorder.bind(this);
  this.searchjob_y = this.searchjob_y.bind(this);
  this.getAllorders = this.getAllorders.bind(this);
}
JobController.prototype.getAll = async function getAll(req, res) {
  let response = await this.service.getAll();
  res.status(response.statusCode).send(response);
};

JobController.prototype.getAllorders = async function getAllorders(req, res) {
  let response = await this.service.getAllorders();
  res.status(response.statusCode).send(response);
};

JobController.prototype.getaJob = async function getaJob(req, res) {
  let response = await this.service.getaJob(req.params);
  res.status(response.statusCode).send(response);
};

JobController.prototype.createjob = async function createjob(req, res) {
  let response = await this.service.createjob(req.body);
  res.status(response.statusCode).send(response);
};

JobController.prototype.updatejob = async function updatejob(req, res) {
  console.log('in controller');
  console.log(req.body);
  let response = await this.service.updatejob(req.body);
  res.status(response.statusCode).send(response);
};

JobController.prototype.searchjob = async function searchjob(req, res) {
  let response = await this.service.searchjob(req.params);
  res.status(response.statusCode).send(response);
};
JobController.prototype.searchjob_y = async function searchjob_y(req, res) {
  let response = await this.service.searchjob_y(req.params);
  res.status(response.statusCode).send(response);
};

JobController.prototype.deletejob = async function deletejob(req, res) {
  let response = await this.service.deletejob(req.params);
  res.status(response.statusCode).send(response);
};

JobController.prototype.createorder = async function createorder(req, res) {
  let response = await this.service.createorder(req.body);
  res.status(response.statusCode).send(response);
};

module.exports = JobController;
