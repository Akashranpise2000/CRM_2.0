const express = require('express');
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
  getContactsByCompany,
  getAllContacts,
  importContacts
} = require('../controllers/contactController');

const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// All routes require authentication
router.use(protect);

router.route('/')
  .get(getContacts)
  .post(createContact);

router.route('/:id')
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

// Get contacts by company
router.get('/company/:companyId', getContactsByCompany);

// Get all contacts for dropdown
router.get('/all', getAllContacts);

// Import contacts
router.post('/import', importContacts);

module.exports = router;