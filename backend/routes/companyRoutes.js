const express = require('express');
const {
  getCompanies,
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  getAllCompanies,
  getCompanyStats
} = require('../controllers/companyController');

const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// All routes require authentication
router.use(protect);

router.route('/')
  .get(getCompanies)
  .post(createCompany);

router.route('/:id')
  .get(getCompany)
  .put(updateCompany)
  .delete(deleteCompany);

// Get all companies for dropdown
router.get('/all', getAllCompanies);

// Company statistics
router.get('/stats/overview', getCompanyStats);

module.exports = router;