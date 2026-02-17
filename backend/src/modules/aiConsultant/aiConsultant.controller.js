const aiConsultantService = require('./aiConsultant.service');

async function askConsultant(req, res, next) {
  try {
    const { message } = req.body;
    const result = await aiConsultantService.ask({ userId: req.user.id, message });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = { askConsultant };
