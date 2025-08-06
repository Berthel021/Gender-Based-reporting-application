const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const authMiddleware = require('../middleware/auth');

// Public routes
router.post('/', reportController.createReport);

// Protected routes (require admin authentication)
router.get('/', authMiddleware, reportController.getAllReports);
router.put('/:id/status', authMiddleware, reportController.updateReportStatus);

module.exports = router;