"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app.module");
const express = require("express");
const bodyParser = require("body-parser");
const log4js_config_1 = require("./config/log4js.config");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = express();
        app.all('*', function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
            res.header("Content-Type", "application/json;charset=utf-8");
            next();
        });
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(log4js_config_1.connectMyLogger);
        const server = yield core_1.NestFactory.create(app_module_1.ApplicationModule, app, null);
        yield server.listen(8070);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map