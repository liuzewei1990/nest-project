"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class CreateAppDto {
}
let AppController = class AppController {
    root() {
        return 'Hello World!';
    }
    root2() {
        let msg = "成功222222";
        let json = { resultCode: 0, resultMsg: msg };
        return json;
    }
    findCustomerInfoById(req, res, next, session, param, body, query, headers) {
        console.log(param.id);
        console.log(body);
        console.log(query);
        res.json({ a: 1 });
    }
    testHttpCodeStatus() {
        return "http:code";
    }
    createDto(createAppDto) {
        console.log(createAppDto);
        return createAppDto;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "root", null);
__decorate([
    common_1.Get("demo"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "root2", null);
__decorate([
    common_1.Get("test/:id"),
    __param(0, common_1.Req()), __param(1, common_1.Res()), __param(2, common_1.Next()), __param(3, common_1.Session()), __param(4, common_1.Param()), __param(5, common_1.Body()), __param(6, common_1.Query()), __param(7, common_1.Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findCustomerInfoById", null);
__decorate([
    common_1.HttpCode(302),
    common_1.Get("http"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "testHttpCodeStatus", null);
__decorate([
    common_1.Post("dto"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAppDto]),
    __metadata("design:returntype", Object)
], AppController.prototype, "createDto", null);
AppController = __decorate([
    common_1.Controller()
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map