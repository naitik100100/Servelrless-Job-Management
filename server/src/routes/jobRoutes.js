const JobService = require('src/services/JobService');
const JobController = require('src/controllers/JobController');
const jobController = new JobController(new JobService());

module.exports = (server) => {
  server.get(`/api/jobs`, jobController.getAll),
    server.get(`/api/getAllorders`, jobController.getAllorders),
    server.get('/api/jobs/:jobname/:partid', jobController.getaJob),
    server.post('/api/jobs', jobController.createjob),
    server.put('/api/jobs', jobController.updatejob),
    server.get('/api/searchjobs/:jobname', jobController.searchjob),
    server.get('/api/jobs/:jobname', jobController.searchjob_y),
    server.delete('/api/jobs/:jobname/:partid', jobController.deletejob),
    server.post('/api/partorders', jobController.createorder);
};
