const { Router } = require('express');
const controller = require('controller');


const router = Router();


router.get('/test', controller.test);
router.get('/:id', controller.getPainting);
router.get('/titles', controller.getTitles);
router.get('/month/:month', controller.getMonth);
router.get('/subject/:subject', controller.getSubject);

module.exports = router;