const jwt = require('jsonwebtoken');

function validarToken(req, res, next) {
   const token = req.headers['authorization'];
   if (jwt.verify(token, process.env.SEGREDO)) {
     next();
   } else {
    res.status(401).json({msg: 'acesso negado'});
   }
}

module.exports = validarToken;