const Router = require('express')
const userController = require('../controllers/user-controller');
const dataController = require('../controllers/data-controller')
const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);

//data
router.get('/questionnaire', dataController.questionnaire);
router.post('/questionnaireId', dataController.questionnaireId);
router.get('/exam', dataController.exam);

module.exports = router;