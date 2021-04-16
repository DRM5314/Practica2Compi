"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const indexRoute_1 = __importDefault(require("./routes/indexRoute"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 8888;
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(`${req.url} usa metodo ${req.method}`);
    next();
});
app.use(indexRoute_1.default);
app.listen(port, () => {
    console.log('Servidor en puerto: ', port);
});
//# sourceMappingURL=index.js.map