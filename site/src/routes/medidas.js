var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})


router.get("/tempo-real-Isa/", function (req, res) {
    medidaController.TempoRealIsa(req, res);
})

router.get("/ultimasIsa/", function (req, res) {
    medidaController.MedidasIsa(req, res);
});


router.get("/ultimas-med/", function (req, res) {
    medidaController.buscarUltimasMed(req, res);
});

router.get("/ultimas-kt/", function (req, res) {
    medidaController.buscarUltimaskt(req, res);
});
router.get("/vm/", function (req, res) {
    medidaController.buscarUltimasvm(req, res);
});

router.get("/tempo-real-bytes/", function (req, res) {
    medidaController.MedidasBytes(req, res);
})

// router.get("/tempo-real/", function (req, res) {
//     medidaController.buscarDadosMaquina(req, res);
// })

module.exports = router;