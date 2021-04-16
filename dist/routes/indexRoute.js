"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const funReqRes_1 = __importDefault(require("../funReqRes/funReqRes"));
const router = express_1.Router();
router.get('/editor', funReqRes_1.default.editor);
router.get('/analizadores', funReqRes_1.default.analizadores);
router.post('/analizar', funReqRes_1.default.analizar);
router.post('/editor', funReqRes_1.default.regreso);
exports.default = router;
//# sourceMappingURL=indexRoute.js.map