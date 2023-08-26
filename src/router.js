const { Router } = require("express")
const paisController = require("./paisController")

const router = Router()

router.get("/pais", paisController.listarPaises)
router.get("/pais/:idPais", paisController.getPaisById)
router.get("/pais/:continente/continente", paisController.getPaisByContinente)
router.post("/pais", paisController.createPais)
router.delete("/pais/:idPais", paisController.deletePais)

module.exports = { router }
