(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard *ngIf=\"this.auth.checkSession()\">\r\n    <router-outlet></router-outlet>\r\n</app-dashboard>\r\n\r\n<router-outlet *ngIf=\"!this.auth.checkSession()\"></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/challenger/challenger.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/challenger/challenger.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-controle\" placeholder=\"Nome do desasfio\">\r\n                <label for=\"\">Nivel requerido</label>\r\n                <select class=\"form-control form-control-sm\">\r\n                    <option>1</option>\r\n                    <option>2</option>\r\n                    <option>3</option>\r\n                    <option>4</option>\r\n                    <option>5</option>\r\n            \r\n                  </select>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/challenger/create/create.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/challenger/create/create.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"page-header\">\r\n                <h2>Novo Desafio</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <form action=\"\">\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">Nome do Desafio</label>\r\n                    <input name=\"name\" [(ngModel)]=\"data.name\" type=\"text\" class=\"form-control\">\r\n                 \r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"level\">Nivel para fazer o Desasfio</label>\r\n                    <select [(ngModel)]=\"data.level\" name=\"level\" class=\"form-control form-control-sm\">\r\n                                        <option selected>1</option>\r\n                                        <option>2</option>\r\n                                        <option>3</option>\r\n                                        <option>4</option>\r\n                                        <option>5</option>\r\n                            </select>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"level\">Grupo</label>\r\n                    <select [(ngModel)]=\"data.group\" name=\"group\" class=\"form-control form-control-sm\">\r\n                        <option>Nenhum</option>\r\n                        <option  *ngFor=\"let grupo of grupos\">\r\n                            {{grupo.id}}\r\n                        </option>\r\n                                           \r\n                    </select>\r\n                </div>\r\n\r\n            \r\n\r\n\r\n\r\n\r\n            </form>\r\n          \r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Dificuldade</label>\r\n                <select [(ngModel)]=\"data.difficulty\" class=\"form-control\" name=\"difficulty\" id=\"difficulty\">\r\n                    <option>Facil</option>\r\n                    <option>Medio</option>\r\n                    <option>Dificil</option>\r\n                </select>\r\n            </div>\r\n          \r\n        </div>\r\n\r\n\r\n    </div>\r\n    <button (click)=\"next()\" class=\"btn btn-success\">Avançar -></button>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/challenger/create/questions/questions.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/challenger/create/questions/questions.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"card col-6\">\r\n            <div class=\"page-header\">\r\n                <h3>Nova Questão</h3>\r\n            </div>\r\n\r\n            <div class=\"card-body\">\r\n\r\n                <label for=\"questionName\">Descrição</label>\r\n                <div class=\"form-group\">\r\n                   <ckeditor [(ngModel)]=\"data.question.name\"></ckeditor>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Habildidade</label>\r\n                <select [(ngModel)]=\"data.question.habilidade\" class=\"form-control\" name=\"habilidade\" id=\"habilidade\">\r\n                    <option>Abstração</option>\r\n                    <option>Herança</option>\r\n                    <option>Polimorfismo</option>\r\n                    <option>Objetos</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"alternatives container\">\r\n                <h1>Alternativas</h1>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\">\r\n                                        <input type=\"checkbox\" [(ngModel)]=\"data.question.alternatives.one.correct\" value=\"1\" name=\"band-rock\" aria-label=\"Radio button for following text input\">\r\n                                    </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"data.question.alternatives.one.name\" class=\"form-control\" name=\"alternative-1\" placeholder=\"Alternativa 1\">\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\">\r\n                                        <input type=\"checkbox\" name=\"band-rock\" [(ngModel)]=\"data.question.alternatives.two.correct\" aria-label=\"Radio button for following text input\"> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"data.question.alternatives.two.name\" class=\"form-control\" name=\"alternative-2\" placeholder=\"Alternativa 2\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\">\r\n                                        <input type=\"checkbox\" value=\"3\" [(ngModel)]=\"data.question.alternatives.three.correct\" name=\"band-rock\" aria-label=\"Radio button for following text input\">\r\n                                    </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"data.question.alternatives.three.name\" class=\"form-control\" name=\"alternative-3\" placeholder=\"Alternativa 3\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\">\r\n                                        <input type=\"checkbox\" value=\"4\" [(ngModel)]=\"data.question.alternatives.four.correct\" name=\"band-rock\" aria-label=\"Radio button for following text input\">\r\n                                    </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"data.question.alternatives.four.name\" class=\"form-control\" name=\"alternative-4\" placeholder=\"Alternativa 4\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n                    <button (click)=\"saveQuestion()\" class=\"btn btn-custom btn-primary\">Salvar Questão</button>\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n\r\n        \r\n                <div class=\"col-6\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h1>Questões do desafio</h1>\r\n                           \r\n                        </div>\r\n\r\n                        <div class=\"card-body\">\r\n\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>ID</th>\r\n                                        <th>Descrição</th>\r\n\r\n                                        <th>Opções</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let question of questionsArray\">\r\n                                        <td>{{question.id}}</td>\r\n                                        <td>{{question.name}}</td>\r\n\r\n                                        <td>\r\n                                            <button class=\"btn btn-danger\">Excluir</button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n        \r\n\r\n        <div class=\"col-md-10\"></div>\r\n        <div class=\"col-md-2\">\r\n            <button (click)=\"saveChallenger()\" class=\"btn btn-custom btn-primary\">Salvar Desafio</button>\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <div *ngIf=\"status\">\r\n            Gravado com sucesso Alternativa: {{data.question.alternatives.one.name}}\r\n        </div>\r\n\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/challenger/list-challengers/list-challengers.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/challenger/list-challengers/list-challengers.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"page-header\">\r\n            <h1>Seus Desafios</h1>\r\n        </div>\r\n        <button routerLink=\"/desafios/novo\" class=\"button-custom btn btn-primary\">Novo Desafio</button>\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>ID</th>\r\n                    <th>Nome</th>\r\n                    <th>Nivel</th>\r\n                    <th>Grupo</th>\r\n                    <th>Opções</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let challenger of challengers\">\r\n                    <td>{{challenger.id}}</td>\r\n                    <td>{{challenger.name}}</td>\r\n                    <td>{{challenger.level}}</td>\r\n                    <td>{{challenger.group }}</td>\r\n                    <td>\r\n                        <button class=\"btn btn-success\">Acessar</button>\r\n                        <button (click)=\"deleteChallenger(challenger.id)\" class=\"btn btn-danger\">Excluir</button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n\r\n        </table>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/challenger/list-general/list-general.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/challenger/list-general/list-general.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"page-header\">\r\n                        <h3>Desafio - Conclua em ganhe Experiênncia</h3>\r\n                    </div>\r\n\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>ID</th>\r\n                                <th>Nome</th>\r\n                                <th>Experiênica</th>\r\n                                <th>Opções</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let challenger of challengers\">\r\n\r\n                                <td>{{challenger.id}}</td>\r\n                                <td>{{challenger.name}}</td>\r\n                                <td>{{challenger.experience}} XP</td>\r\n                                <td>\r\n                                    <button (click)=\"goChallenger(challenger.id)\" class=\"btn btn-success\">Fazer</button>\r\n                                </td>\r\n\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/challenger/menu/menu.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/challenger/menu/menu.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container menu-layout\">\r\n    <div class=\"row\">\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h3>Concluir Desafios</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Conclua desafios em ganhe XP</h5>\r\n                    <p class=\"card-text\">Ganhe Desafios para conquistar XP e avançar de niveis em suas habilidades e atingir maiores colocações no ranking !</p>\r\n                    <a href=\"#\" routerLink=\"/desafios/lista/fazer\" class=\"btn btn-primary\">Vamos la !</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h3>Criar Desafios</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Cria Desafios para seus grupos</h5>\r\n                    <p class=\"card-text\">Cria desafios baseado no foco do seu grupo e disponibilize para seus amigos fazerem eles</p>\r\n                    <a href=\"#\" routerLink=\"/desafios/lista\" class=\"btn btn-primary\">Criar Desafios !</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/challenger/solved/solved.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/challenger/solved/solved.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"card col-12\">\r\n        \r\n            <div class=\"page-header\">\r\n                <h1>Questão 1</h1>\r\n            </div>\r\n\r\n            <div class=\"card-body\">\r\n                <div *ngIf=\"msgEnd\">\r\n                    <h1 align=\"center\">Parabéns você concluiu o desafio</h1>\r\n                </div>\r\n                <div *ngIf=\"!msgEnd\">\r\n                <label for=\"\">\r\n                    <div [innerHtml]=\"Question.name\"> </div>\r\n                        \r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n            <div class=\"alternatives\" *ngIf=\"!msgEnd\">\r\n                <div class=\"row\" *ngFor=\"let alternativa of alternativas\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"input-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <div class=\"input-group-text\">\r\n                                    <input type=\"radio\" (click)=\"setAnswer(alternativa.name)\" name=\"answer\" aria-label=\"Radio button for following text input\">\r\n                                    \r\n                                </div>\r\n                            </div>\r\n                            <input type=\"text\"  value=\"{{alternativa.name}}\" class=\"form-control\" aria-label=\"Text input with radio button\">\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n            \r\n                <br>\r\n              \r\n            </div>\r\n            <button *ngIf=\"!msgEnd\" class=\"btn btn-primary\" (click)=\"NextQuestion()\"> Avançar </button>\r\n            <button *ngIf=\"msgEnd\" (click)=\"finishChallenger()\" class=\"btn btn-success btn-lg\">Concluir Desafio</button>\r\n\r\n            <br>\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<!--\r\n* CoreUI - Free Bootstrap Admin Template\r\n* @version v2.1.15\r\n* @link https://coreui.io\r\n* Copyright (c) 2018 creativeLabs Łukasz Holeczek\r\n* Licensed under MIT (https://coreui.io/license)\r\n-->\r\n\r\n<link rel=\"stylesheet\" href=\"https://unpkg.com/@coreui/icons/css/coreui-icons.min.css\">\r\n\r\n<div class=\"app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show\">\r\n    <app-navbar-top (event)=\"logout()\"></app-navbar-top>\r\n    <div class=\"app-body\">\r\n        <div class=\"sidebar\">\r\n            <app-sidebar></app-sidebar>\r\n            <button class=\"sidebar-minimizer brand-minimizer\" type=\"button\"></button>\r\n        </div>\r\n        <main class=\"main\">\r\n            <ng-content>\r\n\r\n            </ng-content>\r\n        </main>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/home/home.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/home/home.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/group/create-group/create-group.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/group/create-group/create-group.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"card\">\r\n\r\n        <div class=\"card-body\">\r\n            <div class=\"header\">\r\n                <h1>Novo Grupo</h1>\r\n            </div>\r\n            <form>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"text\" [(ngModel)]=\"group.name\" name=\"groupName\" class=\"form-control\" placeholder=\"Nome do Grupo\" id=\"staticEmail\">\r\n                    </div>\r\n                </div>\r\n                <div class=\" form-group row \">\r\n\r\n                    <div class=\"col-sm-10 \">\r\n                        <textarea type=\"text\" [(ngModel)]=\"group.description\" name=\"description\" rows=\"6\" class=\"form-control \" id=\"inputPassword \" placeholder=\"Descrição do grupo \"></textarea>\r\n                    </div>\r\n                </div>\r\n                <button (click)=\"createGroup()\" class=\"btn btn-primary \">Salvar</button>\r\n\r\n                <button routerLink=\"/grupo\" class=\"btn btn-warning \">Voltar</button>\r\n\r\n\r\n\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/group/group-information/group-information.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/group/group-information/group-information.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid page-header bg-primary\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n\r\n\r\n            <div class=\"card card-data\">\r\n                <div class=\"card-body\">\r\n\r\n\r\n                    <div class=\"title\">\r\n                        <h4>Meu Grupo</h4> <br>\r\n                        <h5>Membros</h5>\r\n                    </div>\r\n\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\">#</th>\r\n                                <th scope=\"col\">First</th>\r\n                                <th scope=\"col\">Last</th>\r\n                                <th scope=\"col\">Handle</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <th scope=\"row\">1</th>\r\n                                <td>Mark</td>\r\n                                <td>Otto</td>\r\n                                <td>@mdo</td>\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card card-data\">\r\n                <div class=\"card-body\">\r\n\r\n                    <div class=\"title-group\">\r\n                        <img src=\"./../../../assets/images/group-logo\" class=\"img-responsive\">\r\n                        <h3>{{group.name}}</h3>\r\n                    </div>\r\n\r\n                    <div class=\"row data-group\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"group-information\">\r\n                                <h3>22</h3>\r\n                                <h5>Membros</h5>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"group-information\">\r\n                                <h3>10</h3>\r\n                                <h5>Desafios</h5>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"group-information\">\r\n                                <h3>12</h3>\r\n                                <h5>Conquista</h5>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"group-description\">\r\n                        <p>\r\n                            {{group.description}}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/group/list-groups/list-groups.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/group/list-groups/list-groups.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card container\">\r\n    <div class=\"header row\">\r\n        <div class=\"col-md-9\">\r\n            <h2>Grupos</h2>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <button routerLink=\"/grupo/novo\" class=\"btn btn-primary\">Novo Grupo</button>\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"card-body row\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>ID</th>\r\n                    <th>Nome do Grupo</th>\r\n                    <th>Opções</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let group of groups\">\r\n                    <td>{{group.id}}</td>\r\n                    <td>{{group.name}}</td>\r\n                    <td>\r\n                        <button routerLink=\"/grupo/{{group.id}}\" class=\"btn btn-warning\">Acessar</button>\r\n                        <button (click)=\"deleteGroup(group.id)\" class=\"btn btn-danger\">Excluir</button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/navbar-top/navbar-top.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/navbar-top/navbar-top.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\r\n    <button class=\"navbar-toggler sidebar-toggler d-lg-none mr-auto navbar-dark\" type=\"button\" data-toggle=\"sidebar-show\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n    </a>\r\n    <button class=\"navbar-toggler sidebar-toggler d-md-down-none\" type=\"button\" data-toggle=\"sidebar-lg-show\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <ul class=\"nav navbar-nav d-md-down-none\">\r\n        <li class=\"nav-item px-3\">\r\n            <a class=\"nav-link\" href=\"#\">Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item px-3\">\r\n            <a class=\"nav-link\" href=\"#\">Users</a>\r\n        </li>\r\n        <li class=\"nav-item px-3\">\r\n            <a class=\"nav-link\" href=\"#\">Settings</a>\r\n        </li>\r\n    </ul>\r\n\r\n    <ul class=\"nav navbar-nav ml-auto\">\r\n\r\n\r\n        <li class=\"nav-item\">\r\n\r\n            <button class=\"nav-link\" (click)=\"emitEvent()\" class=\"btn btn-primary\">\r\n                        Sair\r\n            </button>\r\n        </li>\r\n    </ul>\r\n    <button class=\"navbar-toggler aside-menu-toggler d-lg-none\" type=\"button\" data-toggle=\"aside-menu-show\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/page-header/page-header.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/page-header/page-header.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <h1>{{NamePage}}</h1>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar-nav\">\r\n    <ul class=\"nav\">\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/dashboard\" href=\"#\">\r\n                <i class=\"fas fa-tachometer-alt\"></i> Dashboard\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/profile\" href=\"#\">\r\n                <i class=\"fas fa-address-card\"></i> Profile\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n            <a routerLink=\"/rank\" class=\"nav-link\">\r\n                <i class=\"fas fa-bars\"></i>Ranking\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/grupo\" href=\"#\">\r\n                <i class=\"fas fa-users\"></i>Grupos\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/desafios\" href=\"#\">\r\n                <i class=\"fas fa-chalkboard\"></i> Desafios\r\n            </a>\r\n        </li>\r\n\r\n    </ul>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rank/rank.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rank/rank.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n\n\n        <div class=\"page-header\">\n            <h2>Ranking Global</h2>\n        </div>\n\n        <div class=\"col-12\">\n                <table class=\"table\">\n                        <thead class=\"thead-dark\">\n                          <tr>\n                            <th scope=\"col\">Posição</th>\n                            <th scope=\"col\">Nome do Usuario</th>\n                            <th scope=\"col\">Nivel</th>\n                            <th scope=\"col\">Experiencia</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let user of users\">\n                            <th scope=\"row\">{{user.position}}</th>\n                            <td>{{user.username}}</td>\n                            <td>{{user.level}}</td>\n                            <td>\n                                {{user.experience}}\n                            </td>\n                          </tr>\n                        \n                        </tbody>\n                      </table>\n\n                      <button (click)=\"generateRank()\" class=\"btn btn-warning\">Atualizar ranking</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\">\r\n    <main class=\"main d-flex align-items-center\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mx-auto\">\r\n                    <div class=\"card-group\">\r\n                        <div class=\"card p-4\">\r\n                            <div class=\"card-body\">\r\n                                <form (submit)=\"login()\">\r\n                                    <h1>Login</h1>\r\n                                    <p class=\"text-muted\">Acessa o ambiente com seu usuario e senha</p>\r\n                                    <div class=\"input-group mb-3\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                                        </div>\r\n                                        <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\r\n                                    </div>\r\n                                    <div class=\"input-group mb-4\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                                        </div>\r\n                                        <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\" required>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <button type=\"submit\" class=\"btn btn-primary px-4\">Login</button>\r\n                                        </div>\r\n                                        <div class=\"msg-errors\">\r\n                                            <span>* {{statusAuth}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\r\n                            <div class=\"card-body text-center\">\r\n                                <div>\r\n                                    <h2>REGISTRAR-SE</h2>\r\n                                    <p>Ainda não possui uma conta registre-se agora em nosso sistema.</p>\r\n                                    <button routerLink=\"/register\" type=\"button\" class=\"btn btn-primary active mt-3\">Registrar Agora</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </main>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/profile/dados/dados.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/profile/dados/dados.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-profile [tab]=\"active\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n                <div *ngIf=\"status\" class=\"col-md-12\">\r\n                        <div class=\"alert alert-success\" role=\"alert\">\r\n                                Dados Salvos com sucesso\r\n                         </div>\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Nome de Usuario</label>\r\n                            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.username\">\r\n                        </div>\r\n                 </div>\r\n            <div class=\"col-md-8\">\r\n                   <div class=\"form-group\">\r\n                       <label for=\"\">E-mail</label>\r\n                       <input type=\"email\" class=\"form-control\"  [(ngModel)]=\"user.email\">\r\n                   </div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Senha</label>\r\n                        <input type=\"password\" class=\"form-control\"  [(ngModel)]=\"user.password\" placeholder=\"Digite Sua nova Senha\">\r\n                    </div>\r\n\r\n                    <button (click)=\"saveData()\" class=\"btn btn-success\">Atualizar Dados</button>\r\n             </div>\r\n\r\n           \r\n            \r\n            \r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</app-profile>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/profile/habilidades/habilidades.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/profile/habilidades/habilidades.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-profile [tab]=\"active\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Cod. habilidade</th>\r\n                            <th>Habilidade</th>\r\n                            <th>Experiencia</th>\r\n                            <th>Nivel</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let skil of skils\">\r\n                            <td>{{skil.idskil}}</td>\r\n                            <td>{{skil.name}}</td>\r\n                            <td>{{skil.experience}}</td>\r\n                            <td>{{skil.level}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"level\">\r\n                    <h2>LV {{user.level}}</h2>\r\n                    <p>Experiencia: {{user.experience}}</p>\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</app-profile>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/profile/profile.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/profile/profile.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"capa\">\r\n    <img src=\"./../../../assets/images/bg-profile.jpg\">\r\n\r\n    <div class=\"img-profile\">\r\n        <h2> {{user.username}}</h2>\r\n        <div class=\"bio\">\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content card\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <ul class=\"nav nav-tabs\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link {{tab}}\" routerLink=\"/profile/habilidades\">Habilidades</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link \" routerLink=\"/profile/dados\">Dados</a>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <ng-content>\r\n\r\n    </ng-content>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\">\r\n    <main class=\"main d-flex align-items-center\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 mx-auto\">\r\n                    <div class=\"card mx-4\">\r\n                        <div class=\"card-body p-4\">\r\n                            <form *ngIf=\"!status\">\r\n                                <h1>Registrar</h1>\r\n                                <p class=\"text-muted\">Preencha os campos para completar seu cadastro</p>\r\n                                <div class=\"input-group mb-3\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                                    </div>\r\n                                    <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\r\n                                </div>\r\n                                <div class=\"input-group mb-3\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\">@</span>\r\n                                    </div>\r\n                                    <input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" required class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\" required>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Por favor insira um e-mail valido\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"input-group mb-3\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                                    </div>\r\n                                    <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"new-password\" required>\r\n                                </div>\r\n                                <div class=\"input-group mb-4\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                                    </div>\r\n                                    <input type=\"password\" class=\"form-control\" name=\"repeatPassword\" [(ngModel)]=\"repeatPassword\" placeholder=\"Repeat password\" autocomplete=\"new-password\" required>\r\n                                </div>\r\n                                <div *ngIf=\"statusPassword\" [class.showMsg]=\"statusPassword\">\r\n                                    * As senhas não conferem.\r\n                                </div>\r\n                                <div class=\"showMsg\" *ngIf=\"msgError !== ''\">\r\n                                    * {{msgError}}\r\n                                </div>\r\n                                <div class=\"showMsg\" *ngIf=\"retorno\">\r\n                                    * Username ja está sendo utilizado\r\n                                </div>\r\n                                <button type=\"button\" (click)=\"registerUser()\" class=\"btn btn-block btn-success\">Criar Conta</button>\r\n                            </form>\r\n                            <a href=\"\" *ngIf=\"!status\" routerLink=\"/login \">Voltar para a tela de login</a>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"status \" class=\"login-success \">\r\n                            <span> Usuario Registrado com sucesso </span> <br>\r\n                            <button routerLink=\"/login \" class=\"btn btn-success \">Fazer Login</button>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </main>\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _not_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-auth.guard */ "./src/app/not-auth.guard.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _user_profile_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/profile/habilidades/habilidades.component */ "./src/app/user/profile/habilidades/habilidades.component.ts");
/* harmony import */ var _user_profile_dados_dados_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/profile/dados/dados.component */ "./src/app/user/profile/dados/dados.component.ts");
/* harmony import */ var _challenger_list_challengers_list_challengers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./challenger/list-challengers/list-challengers.component */ "./src/app/challenger/list-challengers/list-challengers.component.ts");
/* harmony import */ var _challenger_create_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./challenger/create/create.component */ "./src/app/challenger/create/create.component.ts");
/* harmony import */ var _group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./group/create-group/create-group.component */ "./src/app/group/create-group/create-group.component.ts");
/* harmony import */ var _group_list_groups_list_groups_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./group/list-groups/list-groups.component */ "./src/app/group/list-groups/list-groups.component.ts");
/* harmony import */ var _group_group_information_group_information_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./group/group-information/group-information.component */ "./src/app/group/group-information/group-information.component.ts");
/* harmony import */ var _challenger_create_questions_questions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./challenger/create/questions/questions.component */ "./src/app/challenger/create/questions/questions.component.ts");
/* harmony import */ var _challenger_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./challenger/menu/menu.component */ "./src/app/challenger/menu/menu.component.ts");
/* harmony import */ var _challenger_list_general_list_general_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./challenger/list-general/list-general.component */ "./src/app/challenger/list-general/list-general.component.ts");
/* harmony import */ var _challenger_solved_solved_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./challenger/solved/solved.component */ "./src/app/challenger/solved/solved.component.ts");
/* harmony import */ var _rank_rank_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rank/rank.component */ "./src/app/rank/rank.component.ts");




















const routes = [
    {
        path: 'login',
        canActivate: [_not_auth_guard__WEBPACK_IMPORTED_MODULE_6__["NotAuthGuard"]],
        component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        canActivate: [_not_auth_guard__WEBPACK_IMPORTED_MODULE_6__["NotAuthGuard"]],
        component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
    },
    {
        path: 'dashboard',
        component: _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: "profile",
        redirectTo: "profile/habilidades",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: "profile/habilidades",
        component: _user_profile_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_8__["HabilidadesComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: "profile/dados",
        component: _user_profile_dados_dados_component__WEBPACK_IMPORTED_MODULE_9__["DadosComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: "desafios",
        component: _challenger_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: "desafios/lista",
        component: _challenger_list_challengers_list_challengers_component__WEBPACK_IMPORTED_MODULE_10__["ListChallengersComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: "desafios/lista/fazer",
        component: _challenger_list_general_list_general_component__WEBPACK_IMPORTED_MODULE_17__["ListGeneralComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: "desafios/novo",
        component: _challenger_create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: "desafios/fazer/:challenger/:question",
        component: _challenger_solved_solved_component__WEBPACK_IMPORTED_MODULE_18__["SolvedComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: "desafios/novo/questions/:id",
        component: _challenger_create_questions_questions_component__WEBPACK_IMPORTED_MODULE_15__["QuestionsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: "grupo/novo",
        component: _group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_12__["CreateGroupComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: "grupo",
        component: _group_list_groups_list_groups_component__WEBPACK_IMPORTED_MODULE_13__["ListGroupsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: "grupo/:id",
        component: _group_group_information_group_information_component__WEBPACK_IMPORTED_MODULE_14__["GroupInformationComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: "rank",
        component: _rank_rank_component__WEBPACK_IMPORTED_MODULE_19__["RankComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'LPOO - Sistema de Aprendizado de Programação Orientada a Objetos';
    }
    ngOnInit() {
        this.AuthStatus = this.auth.checkSession();
        console.log("status:" + this.AuthStatus);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _layout_navbar_top_navbar_top_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/navbar-top/navbar-top.component */ "./src/app/layout/navbar-top/navbar-top.component.ts");
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/profile/profile.component */ "./src/app/user/profile/profile.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _user_profile_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/profile/habilidades/habilidades.component */ "./src/app/user/profile/habilidades/habilidades.component.ts");
/* harmony import */ var _user_profile_dados_dados_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/profile/dados/dados.component */ "./src/app/user/profile/dados/dados.component.ts");
/* harmony import */ var _challenger_challenger_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./challenger/challenger.component */ "./src/app/challenger/challenger.component.ts");
/* harmony import */ var _challenger_list_challengers_list_challengers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./challenger/list-challengers/list-challengers.component */ "./src/app/challenger/list-challengers/list-challengers.component.ts");
/* harmony import */ var _challenger_create_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./challenger/create/create.component */ "./src/app/challenger/create/create.component.ts");
/* harmony import */ var _challenger_create_questions_questions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./challenger/create/questions/questions.component */ "./src/app/challenger/create/questions/questions.component.ts");
/* harmony import */ var _group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./group/create-group/create-group.component */ "./src/app/group/create-group/create-group.component.ts");
/* harmony import */ var _group_list_groups_list_groups_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./group/list-groups/list-groups.component */ "./src/app/group/list-groups/list-groups.component.ts");
/* harmony import */ var _layout_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layout/page-header/page-header.component */ "./src/app/layout/page-header/page-header.component.ts");
/* harmony import */ var _group_group_information_group_information_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./group/group-information/group-information.component */ "./src/app/group/group-information/group-information.component.ts");
/* harmony import */ var _challenger_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./challenger/menu/menu.component */ "./src/app/challenger/menu/menu.component.ts");
/* harmony import */ var _challenger_list_general_list_general_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./challenger/list-general/list-general.component */ "./src/app/challenger/list-general/list-general.component.ts");
/* harmony import */ var _challenger_solved_solved_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./challenger/solved/solved.component */ "./src/app/challenger/solved/solved.component.ts");
/* harmony import */ var _rank_rank_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rank/rank.component */ "./src/app/rank/rank.component.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js");






























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            _layout_navbar_top_navbar_top_component__WEBPACK_IMPORTED_MODULE_11__["NavbarTopComponent"],
            _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
            _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _user_profile_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_15__["HabilidadesComponent"],
            _user_profile_dados_dados_component__WEBPACK_IMPORTED_MODULE_16__["DadosComponent"],
            _challenger_challenger_component__WEBPACK_IMPORTED_MODULE_17__["ChallengerComponent"],
            _challenger_list_challengers_list_challengers_component__WEBPACK_IMPORTED_MODULE_18__["ListChallengersComponent"],
            _challenger_create_create_component__WEBPACK_IMPORTED_MODULE_19__["CreateComponent"],
            _challenger_create_questions_questions_component__WEBPACK_IMPORTED_MODULE_20__["QuestionsComponent"],
            _group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_21__["CreateGroupComponent"],
            _group_list_groups_list_groups_component__WEBPACK_IMPORTED_MODULE_22__["ListGroupsComponent"],
            _layout_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_23__["PageHeaderComponent"],
            _group_group_information_group_information_component__WEBPACK_IMPORTED_MODULE_24__["GroupInformationComponent"],
            _challenger_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__["MenuComponent"],
            _challenger_list_general_list_general_component__WEBPACK_IMPORTED_MODULE_26__["ListGeneralComponent"],
            _challenger_solved_solved_component__WEBPACK_IMPORTED_MODULE_27__["SolvedComponent"],
            _rank_rank_component__WEBPACK_IMPORTED_MODULE_28__["RankComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_29__["CKEditorModule"]
        ],
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.checkSession()) {
            this.router.navigateByUrl("login");
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/challenger/challenger.component.scss":
/*!******************************************************!*\
  !*** ./src/app/challenger/challenger.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYWxsZW5nZXIvY2hhbGxlbmdlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/challenger/challenger.component.ts":
/*!****************************************************!*\
  !*** ./src/app/challenger/challenger.component.ts ***!
  \****************************************************/
/*! exports provided: ChallengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengerComponent", function() { return ChallengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChallengerComponent = class ChallengerComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChallengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-challenger',
        template: __webpack_require__(/*! raw-loader!./challenger.component.html */ "./node_modules/raw-loader/index.js!./src/app/challenger/challenger.component.html"),
        styles: [__webpack_require__(/*! ./challenger.component.scss */ "./src/app/challenger/challenger.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChallengerComponent);



/***/ }),

/***/ "./src/app/challenger/create/create.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/challenger/create/create.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 20px;\n  background: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlci9jcmVhdGUvQzpcXGRldmVsb3BcXFRDQ1xcY2xpZW50ZVxcUlBPTy1DTElFTlRFL3NyY1xcYXBwXFxjaGFsbGVuZ2VyXFxjcmVhdGVcXGNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbGxlbmdlci9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGFsbGVuZ2VyL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlXHJcbn0iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/challenger/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/challenger/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_challenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/challenger.service */ "./src/app/services/challenger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/group.service */ "./src/app/services/group.service.ts");





let CreateComponent = class CreateComponent {
    constructor(group, Challenger, router) {
        this.group = group;
        this.Challenger = Challenger;
        this.router = router;
        this.data = {
            name: "",
            level: "",
            group: "",
            user: localStorage.getItem("id"),
            difficulty: "",
        };
        this.challenger = {
            id: "",
            name: "",
        };
    }
    ngOnInit() {
        this.group.getGroups().subscribe((groups) => {
            this.grupos = groups;
        });
    }
    next() {
        this.Challenger.saveChallenger(this.data).subscribe((id) => {
            this.router.navigateByUrl("/desafios/novo/questions/" + id);
        });
    }
};
CreateComponent.ctorParameters = () => [
    { type: src_app_services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"] },
    { type: src_app_services_challenger_service__WEBPACK_IMPORTED_MODULE_2__["ChallengerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: __webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/index.js!./src/app/challenger/create/create.component.html"),
        styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/challenger/create/create.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"], src_app_services_challenger_service__WEBPACK_IMPORTED_MODULE_2__["ChallengerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CreateComponent);



/***/ }),

/***/ "./src/app/challenger/create/questions/questions.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/challenger/create/questions/questions.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-custom {\n  height: 35px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlci9jcmVhdGUvcXVlc3Rpb25zL0M6XFxkZXZlbG9wXFxUQ0NcXGNsaWVudGVcXFJQT08tQ0xJRU5URS9zcmNcXGFwcFxcY2hhbGxlbmdlclxcY3JlYXRlXFxxdWVzdGlvbnNcXHF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbGxlbmdlci9jcmVhdGUvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2hhbGxlbmdlci9jcmVhdGUvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY3VzdG9tIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iLCIuYnRuLWN1c3RvbSB7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/challenger/create/questions/questions.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/challenger/create/questions/questions.component.ts ***!
  \********************************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/question.service */ "./src/app/services/question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let QuestionsComponent = class QuestionsComponent {
    constructor(router, QuestionService, route) {
        this.router = router;
        this.QuestionService = QuestionService;
        this.route = route;
        this.data = {
            question: {
                name: "",
                habilidade: "",
                alternatives: {
                    one: {
                        name: "",
                        correct: "",
                    },
                    two: {
                        name: "",
                        correct: "",
                    },
                    three: {
                        name: "",
                        correct: "",
                    },
                    four: {
                        name: "",
                        correct: "",
                    },
                },
            }
        };
        this.msgSucess = "";
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.challengerID = params['id'];
        });
        this.getQuestionsChallenger();
    }
    getQuestionsChallenger() {
        this.QuestionService.getQuestionsByChallenger(this.challengerID).subscribe((questions) => {
            console.log(questions);
            this.questionsArray = questions;
        });
    }
    saveQuestion() {
        const id = this.challengerID;
        this.QuestionService.saveQuestion(this.data, id).subscribe(() => {
            this.getQuestionsChallenger();
        });
    }
    saveChallenger() {
        this.router.navigateByUrl("/desafios/lista");
    }
};
QuestionsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuestionsComponent.prototype, "challenger", void 0);
QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questions',
        template: __webpack_require__(/*! raw-loader!./questions.component.html */ "./node_modules/raw-loader/index.js!./src/app/challenger/create/questions/questions.component.html"),
        styles: [__webpack_require__(/*! ./questions.component.scss */ "./src/app/challenger/create/questions/questions.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], QuestionsComponent);



/***/ }),

/***/ "./src/app/challenger/list-challengers/list-challengers.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/challenger/list-challengers/list-challengers.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-custom {\n  height: 35px;\n  margin-left: 20px;\n  margin-top: 5px;\n}\n\n.container {\n  padding: 30px;\n}\n\n.btn-danger {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlci9saXN0LWNoYWxsZW5nZXJzL0M6XFxkZXZlbG9wXFxUQ0NcXGNsaWVudGVcXFJQT08tQ0xJRU5URS9zcmNcXGFwcFxcY2hhbGxlbmdlclxcbGlzdC1jaGFsbGVuZ2Vyc1xcbGlzdC1jaGFsbGVuZ2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbGxlbmdlci9saXN0LWNoYWxsZW5nZXJzL2xpc3QtY2hhbGxlbmdlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2hhbGxlbmdlci9saXN0LWNoYWxsZW5nZXJzL2xpc3QtY2hhbGxlbmdlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWN1c3RvbSB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufSIsIi5idXR0b24tY3VzdG9tIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLmJ0bi1kYW5nZXIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/challenger/list-challengers/list-challengers.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/challenger/list-challengers/list-challengers.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListChallengersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListChallengersComponent", function() { return ListChallengersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_challenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/challenger.service */ "./src/app/services/challenger.service.ts");



let ListChallengersComponent = class ListChallengersComponent {
    constructor(ChallengerService) {
        this.ChallengerService = ChallengerService;
    }
    listChallenger() {
        this.ChallengerService.getChallengers().subscribe((challengers) => {
            this.challengers = challengers;
        });
    }
    ngOnInit() {
        this.listChallenger();
    }
    deleteChallenger(id) {
        this.ChallengerService.deleteChallenger(id).subscribe(() => {
            this.listChallenger();
        });
    }
};
ListChallengersComponent.ctorParameters = () => [
    { type: src_app_services_challenger_service__WEBPACK_IMPORTED_MODULE_2__["ChallengerService"] }
];
ListChallengersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-challengers',
        template: __webpack_require__(/*! raw-loader!./list-challengers.component.html */ "./node_modules/raw-loader/index.js!./src/app/challenger/list-challengers/list-challengers.component.html"),
        styles: [__webpack_require__(/*! ./list-challengers.component.scss */ "./src/app/challenger/list-challengers/list-challengers.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_challenger_service__WEBPACK_IMPORTED_MODULE_2__["ChallengerService"]])
], ListChallengersComponent);



/***/ }),

/***/ "./src/app/challenger/list-general/list-general.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/challenger/list-general/list-general.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlci9saXN0LWdlbmVyYWwvQzpcXGRldmVsb3BcXFRDQ1xcY2xpZW50ZVxcUlBPTy1DTElFTlRFL3NyY1xcYXBwXFxjaGFsbGVuZ2VyXFxsaXN0LWdlbmVyYWxcXGxpc3QtZ2VuZXJhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbGxlbmdlci9saXN0LWdlbmVyYWwvbGlzdC1nZW5lcmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NoYWxsZW5nZXIvbGlzdC1nZW5lcmFsL2xpc3QtZ2VuZXJhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn0iLCJ0YWJsZSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/challenger/list-general/list-general.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/challenger/list-general/list-general.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGeneralComponent", function() { return ListGeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_challenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/challenger.service */ "./src/app/services/challenger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ListGeneralComponent = class ListGeneralComponent {
    constructor(router, ChallengerService) {
        this.router = router;
        this.ChallengerService = ChallengerService;
    }
    ngOnInit() {
        this.getChallengers();
    }
    getChallengers() {
        this.ChallengerService.getChallengersGlobal().subscribe((challengers) => {
            this.challengers = challengers;
        });
    }
    goChallenger(challenger) {
        this.ChallengerService.getFirstQuestion(challenger).subscribe((question) => {
            this.router.navigateByUrl("desafios/fazer/" + challenger + "/" + question);
        });
    }
};
ListGeneralComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_challenger_service__WEBPACK_IMPORTED_MODULE_2__["ChallengerService"] }
];
ListGeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-general',
        template: __webpack_require__(/*! raw-loader!./list-general.component.html */ "./node_modules/raw-loader/index.js!./src/app/challenger/list-general/list-general.component.html"),
        styles: [__webpack_require__(/*! ./list-general.component.scss */ "./src/app/challenger/list-general/list-general.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_challenger_service__WEBPACK_IMPORTED_MODULE_2__["ChallengerService"]])
], ListGeneralComponent);



/***/ }),

/***/ "./src/app/challenger/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/challenger/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-layout {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlci9tZW51L0M6XFxkZXZlbG9wXFxUQ0NcXGNsaWVudGVcXFJQT08tQ0xJRU5URS9zcmNcXGFwcFxcY2hhbGxlbmdlclxcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbGxlbmdlci9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2hhbGxlbmdlci9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1sYXlvdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn0iLCIubWVudS1sYXlvdXQge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/challenger/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/challenger/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/challenger/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/challenger/menu/menu.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuComponent);



/***/ }),

/***/ "./src/app/challenger/solved/solved.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/challenger/solved/solved.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\n  padding: 1px;\n  border-radius: 1px;\n  background: silver;\n}\n\n.alternatives {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlci9zb2x2ZWQvQzpcXGRldmVsb3BcXFRDQ1xcY2xpZW50ZVxcUlBPTy1DTElFTlRFL3NyY1xcYXBwXFxjaGFsbGVuZ2VyXFxzb2x2ZWRcXHNvbHZlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbGxlbmdlci9zb2x2ZWQvc29sdmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGFsbGVuZ2VyL3NvbHZlZC9zb2x2ZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogc2lsdmVyXHJcbn1cclxuXHJcbi5hbHRlcm5hdGl2ZXMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iLCIucGFnZS1oZWFkZXIge1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgYmFja2dyb3VuZDogc2lsdmVyO1xufVxuXG4uYWx0ZXJuYXRpdmVzIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/challenger/solved/solved.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/challenger/solved/solved.component.ts ***!
  \*******************************************************/
/*! exports provided: SolvedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolvedComponent", function() { return SolvedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_challenger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/challenger.service */ "./src/app/services/challenger.service.ts");




let SolvedComponent = class SolvedComponent {
    constructor(router, route, ChallegerService) {
        this.router = router;
        this.route = route;
        this.ChallegerService = ChallegerService;
        this.msgEnd = false;
        this.answer = {
            answer: "",
            question: "",
            experience: 10,
            skil: 1,
            user: localStorage.getItem("id")
        };
    }
    ngOnInit() {
        this.showRouterParams =
            this.route.params.subscribe((data3) => {
                this.getQuestion(data3.challenger, data3.question);
                this.getAlternatives(data3.question);
                this.challenger = data3.challenger;
                this.question = data3.question;
                this.answer.question = data3.question;
            });
        this.getChallenger();
    }
    getQuestion(challenger, question) {
        this.ChallegerService.getQuestion(challenger, question).subscribe((data2) => {
            this.Question = data2;
        });
    }
    getAlternatives(question) {
        this.ChallegerService.getAlternatives(question).subscribe((data) => {
            if (data.length > 0) {
                this.alternativas = data;
            }
            else {
                this.msgEnd = true;
            }
        });
    }
    getChallenger() {
        this.ChallegerService.getChallengerById(this.challenger).subscribe((challengerFound) => {
            this.Challenger = challengerFound;
        });
    }
    finishChallenger() {
        let data = {
            challenger: this.challenger,
            skil: "2",
            user: localStorage.getItem("id")
        };
        this.ChallegerService.finishChallenger(data).subscribe(() => {
            this.router.navigateByUrl("/desafios/lista/fazer");
        });
        /*"challenger": "1",
        "skil": "1",
        "user": "2"*/
    }
    setAnswer(answerName) {
        this.answer.answer = answerName;
    }
    NextQuestion() {
        console.log(this.answer);
        if (this.Question.habilidade == "Herança") {
            this.answer.skil = 2;
        }
        if (this.Question.habilidade == "Polimorfismo") {
            this.answer.skil = 3;
        }
        if (this.Question.habilidade == "Objetos") {
            this.answer.skil = 4;
        }
        if (this.Question.habilidade == "Abstração") {
            this.answer.skil = 1;
        }
        console.log("Dificuldade: " + this.challenger.difficulty);
        if (this.Challenger.difficulty == "h") {
            this.answer.experience = 50;
        }
        if (this.Challenger.difficulty == "m") {
            this.answer.experience = 20;
        }
        if (this.Challenger.difficulty == "e") {
            this.answer.experience = 5;
        }
        this.ChallegerService.answerTheQuestion(this.answer).subscribe((msg) => {
            var proximaQuestao = parseInt(this.question);
            proximaQuestao = proximaQuestao + 1;
            this.router.navigateByUrl("/desafios/fazer/" + this.challenger + "/" + proximaQuestao);
        });
    }
};
SolvedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_challenger_service__WEBPACK_IMPORTED_MODULE_3__["ChallengerService"] }
];
SolvedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-solved',
        template: __webpack_require__(/*! raw-loader!./solved.component.html */ "./node_modules/raw-loader/index.js!./src/app/challenger/solved/solved.component.html"),
        styles: [__webpack_require__(/*! ./solved.component.scss */ "./src/app/challenger/solved/solved.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_challenger_service__WEBPACK_IMPORTED_MODULE_3__["ChallengerService"]])
], SolvedComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxkZXZlbG9wXFxUQ0NcXGNsaWVudGVcXFJQT08tQ0xJRU5URS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59IiwiaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DashboardComponent = class DashboardComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        this.auth.destroySession();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/dashboard/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/dashboard/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/group/create-group/create-group.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/group/create-group/create-group.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  border-bottom: 1px black solid;\n  padding: 10px;\n  -webkit-margin-after: 10p;\n          margin-block-end: 10p;\n  margin-bottom: 30px;\n}\n\nbutton {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAvY3JlYXRlLWdyb3VwL0M6XFxkZXZlbG9wXFxUQ0NcXGNsaWVudGVcXFJQT08tQ0xJRU5URS9zcmNcXGFwcFxcZ3JvdXBcXGNyZWF0ZS1ncm91cFxcY3JlYXRlLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ncm91cC9jcmVhdGUtZ3JvdXAvY3JlYXRlLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXAvY3JlYXRlLWdyb3VwL2NyZWF0ZS1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEwcDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufSIsIi5oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDEwcDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/group/create-group/create-group.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/group/create-group/create-group.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupComponent", function() { return CreateGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CreateGroupComponent = class CreateGroupComponent {
    constructor(GroupService, router) {
        this.GroupService = GroupService;
        this.router = router;
        this.group = {
            name: "",
            description: ""
        };
    }
    ngOnInit() {
    }
    createGroup() {
        this.GroupService.createGroup(this.group).subscribe(() => {
            this.router.navigateByUrl("/grupo");
        });
    }
};
CreateGroupComponent.ctorParameters = () => [
    { type: src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CreateGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-group',
        template: __webpack_require__(/*! raw-loader!./create-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/group/create-group/create-group.component.html"),
        styles: [__webpack_require__(/*! ./create-group.component.scss */ "./src/app/group/create-group/create-group.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CreateGroupComponent);



/***/ }),

/***/ "./src/app/group/group-information/group-information.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/group/group-information/group-information.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\n  padding: 30px;\n  height: 200px;\n  position: relative;\n}\n\n.card-data {\n  margin-top: 90px;\n}\n\n.card {\n  color: black;\n}\n\n.title {\n  color: black;\n}\n\n.title-group {\n  color: black;\n  margin-left: 60px;\n  height: 80px;\n  align-items: center;\n}\n\n.title-group img {\n  height: 160px;\n  border-radius: 100px;\n}\n\n.title-group h3 {\n  margin-left: 50px;\n  margin-top: 20px;\n}\n\n.data-group {\n  margin-top: 160px;\n}\n\n.data-group h3 {\n  margin-left: 20px;\n}\n\n.group-description {\n  margin-top: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAvZ3JvdXAtaW5mb3JtYXRpb24vQzpcXGRldmVsb3BcXFRDQ1xcY2xpZW50ZVxcUlBPTy1DTElFTlRFL3NyY1xcYXBwXFxncm91cFxcZ3JvdXAtaW5mb3JtYXRpb25cXGdyb3VwLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ncm91cC9ncm91cC1pbmZvcm1hdGlvbi9ncm91cC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURBSTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQ0VSOztBREFJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0VSOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURBSTtFQUNJLGlCQUFBO0FDRVI7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ncm91cC9ncm91cC1pbmZvcm1hdGlvbi9ncm91cC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcblxyXG4uY2FyZC1kYXRhIHtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGNvbG9yOiBibGFja1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6IGJsYWNrXHJcbn1cclxuXHJcbi50aXRsZS1ncm91cCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRhdGEtZ3JvdXAge1xyXG4gICAgbWFyZ2luLXRvcDogMTYwcHg7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ncm91cC1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn0iLCIucGFnZS1oZWFkZXIge1xuICBwYWRkaW5nOiAzMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkLWRhdGEge1xuICBtYXJnaW4tdG9wOiA5MHB4O1xufVxuXG4uY2FyZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udGl0bGUtZ3JvdXAge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGl0bGUtZ3JvdXAgaW1nIHtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG4udGl0bGUtZ3JvdXAgaDMge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmRhdGEtZ3JvdXAge1xuICBtYXJnaW4tdG9wOiAxNjBweDtcbn1cbi5kYXRhLWdyb3VwIGgzIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5ncm91cC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/group/group-information/group-information.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/group/group-information/group-information.component.ts ***!
  \************************************************************************/
/*! exports provided: GroupInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupInformationComponent", function() { return GroupInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GroupInformationComponent = class GroupInformationComponent {
    constructor(GroupService, route) {
        this.GroupService = GroupService;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.GroupService.findOne(params["id"]).subscribe((group) => {
                this.group = group;
                console.log(group.description);
            });
        });
    }
};
GroupInformationComponent.ctorParameters = () => [
    { type: src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
GroupInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-information',
        template: __webpack_require__(/*! raw-loader!./group-information.component.html */ "./node_modules/raw-loader/index.js!./src/app/group/group-information/group-information.component.html"),
        styles: [__webpack_require__(/*! ./group-information.component.scss */ "./src/app/group/group-information/group-information.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], GroupInformationComponent);



/***/ }),

/***/ "./src/app/group/list-groups/list-groups.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/group/list-groups/list-groups.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  margin-top: 15px;\n}\n\nbutton {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAvbGlzdC1ncm91cHMvQzpcXGRldmVsb3BcXFRDQ1xcY2xpZW50ZVxcUlBPTy1DTElFTlRFL3NyY1xcYXBwXFxncm91cFxcbGlzdC1ncm91cHNcXGxpc3QtZ3JvdXBzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ncm91cC9saXN0LWdyb3Vwcy9saXN0LWdyb3Vwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXAvbGlzdC1ncm91cHMvbGlzdC1ncm91cHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufSIsIi5oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/group/list-groups/list-groups.component.ts":
/*!************************************************************!*\
  !*** ./src/app/group/list-groups/list-groups.component.ts ***!
  \************************************************************/
/*! exports provided: ListGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroupsComponent", function() { return ListGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ListGroupsComponent = class ListGroupsComponent {
    constructor(GroupService, router) {
        this.GroupService = GroupService;
        this.router = router;
        this.name = "Grupos";
    }
    ngOnInit() {
        this.getGroups();
    }
    getGroups() {
        this.GroupService.getGroups().subscribe((groups) => {
            this.groups = groups;
        });
    }
    deleteGroup(id) {
        this.GroupService.deleteGroup(id).subscribe((err) => {
            this.router.navigateByUrl("/grupo");
            this.getGroups();
        });
    }
};
ListGroupsComponent.ctorParameters = () => [
    { type: src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ListGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-groups',
        template: __webpack_require__(/*! raw-loader!./list-groups.component.html */ "./node_modules/raw-loader/index.js!./src/app/group/list-groups/list-groups.component.html"),
        styles: [__webpack_require__(/*! ./list-groups.component.scss */ "./src/app/group/list-groups/list-groups.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ListGroupsComponent);



/***/ }),

/***/ "./src/app/layout/navbar-top/navbar-top.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/navbar-top/navbar-top.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXZiYXItdG9wL25hdmJhci10b3AuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/navbar-top/navbar-top.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/navbar-top/navbar-top.component.ts ***!
  \***********************************************************/
/*! exports provided: NavbarTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarTopComponent", function() { return NavbarTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavbarTopComponent = class NavbarTopComponent {
    constructor(router) {
        this.router = router;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    emitEvent() {
        this.event.emit();
        this.router.navigateByUrl("/login");
    }
};
NavbarTopComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavbarTopComponent.prototype, "event", void 0);
NavbarTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar-top',
        template: __webpack_require__(/*! raw-loader!./navbar-top.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/navbar-top/navbar-top.component.html"),
        styles: [__webpack_require__(/*! ./navbar-top.component.scss */ "./src/app/layout/navbar-top/navbar-top.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NavbarTopComponent);



/***/ }),

/***/ "./src/app/layout/page-header/page-header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/page-header/page-header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  border-bottom: 1px black solid;\n  padding: 10px;\n  -webkit-margin-after: 10p;\n          margin-block-end: 10p;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2UtaGVhZGVyL0M6XFxkZXZlbG9wXFxUQ0NcXGNsaWVudGVcXFJQT08tQ0xJRU5URS9zcmNcXGFwcFxcbGF5b3V0XFxwYWdlLWhlYWRlclxccGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMTBwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufSIsIi5oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDEwcDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/page-header/page-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/page-header/page-header.component.ts ***!
  \*************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageHeaderComponent = class PageHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PageHeaderComponent.prototype, "NamePage", void 0);
PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-header',
        template: __webpack_require__(/*! raw-loader!./page-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/page-header/page-header.component.html"),
        styles: [__webpack_require__(/*! ./page-header.component.scss */ "./src/app/layout/page-header/page-header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageHeaderComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpZGViYXIvQzpcXGRldmVsb3BcXFRDQ1xcY2xpZW50ZVxcUlBPTy1DTElFTlRFL3NyY1xcYXBwXFxsYXlvdXRcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59IiwiaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/sidebar/sidebar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SidebarComponent);



/***/ }),

/***/ "./src/app/not-auth.guard.ts":
/*!***********************************!*\
  !*** ./src/app/not-auth.guard.ts ***!
  \***********************************/
/*! exports provided: NotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function() { return NotAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");




let NotAuthGuard = class NotAuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (this.auth.checkSession()) {
            this.router.navigateByUrl("/dashboard");
        }
        return !this.auth.checkSession();
    }
};
NotAuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NotAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NotAuthGuard);



/***/ }),

/***/ "./src/app/rank/rank.component.scss":
/*!******************************************!*\
  !*** ./src/app/rank/rank.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhbmsvcmFuay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/rank/rank.component.ts":
/*!****************************************!*\
  !*** ./src/app/rank/rank.component.ts ***!
  \****************************************/
/*! exports provided: RankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankComponent", function() { return RankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ranking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ranking.service */ "./src/app/services/ranking.service.ts");



let RankComponent = class RankComponent {
    constructor(RankService) {
        this.RankService = RankService;
    }
    ngOnInit() {
        this.generateRank();
    }
    generateRank() {
        this.RankService.getRankingGlobal().subscribe((users) => {
            this.users = users;
        });
    }
};
RankComponent.ctorParameters = () => [
    { type: _services_ranking_service__WEBPACK_IMPORTED_MODULE_2__["RankingService"] }
];
RankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rank',
        template: __webpack_require__(/*! raw-loader!./rank.component.html */ "./node_modules/raw-loader/index.js!./src/app/rank/rank.component.html"),
        styles: [__webpack_require__(/*! ./rank.component.scss */ "./src/app/rank/rank.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ranking_service__WEBPACK_IMPORTED_MODULE_2__["RankingService"]])
], RankComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);






let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    login(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": 'application/json'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/login";
        return this.http.post(url, user, httpOptions);
    }
    genSession(user, token) {
        src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TOKEN = "token";
        localStorage.setItem("token", token);
        localStorage.setItem("id", user.id);
        localStorage.setItem("username", user.username);
    }
    destroySession() {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem("username");
    }
    checkSession() {
        if (localStorage.getItem("token") !== "") {
            if (localStorage.token === undefined) {
                return false;
            }
            const decodeToken = jwt_decode__WEBPACK_IMPORTED_MODULE_5__(localStorage.getItem("token"));
            if (decodeToken.id == localStorage.getItem("id")) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/challenger.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/challenger.service.ts ***!
  \************************************************/
/*! exports provided: ChallengerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengerService", function() { return ChallengerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ChallengerService = class ChallengerService {
    constructor(http) {
        this.http = http;
    }
    getChallengers() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/challengers";
        return this.http.get(url);
    }
    getChallengerById(idChallenger) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/challenger/" + idChallenger;
        return this.http.get(url);
    }
    getChallengersGlobal() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/challengers/all";
        return this.http.get(url);
    }
    saveChallenger(data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-type": "application/json"
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/challenger/create";
        return this.http.post(url, data, httpOptions);
    }
    deleteChallenger(id) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/challengers/delete/" + id;
        return this.http.delete(url);
    }
    getQuestion(challenger, question) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/challengers/questao/" + question + "/" + challenger;
        return this.http.get(url);
    }
    getAlternatives(question) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/challengers/questao/alternativas/" + question;
        return this.http.get(url);
    }
    getFirstQuestion(challenger) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/challenger/questao/primeira/" + challenger;
        return this.http.get(url);
    }
    answerTheQuestion(dataAnswer) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-type": "application/json"
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/challenger/check";
        return this.http.post(url, dataAnswer, httpOptions);
    }
    finishChallenger(data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-type": "application/json"
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/challengers/end";
        return this.http.post(url, data, httpOptions);
    }
};
ChallengerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ChallengerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ChallengerService);



/***/ }),

/***/ "./src/app/services/group.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/group.service.ts ***!
  \*******************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let GroupService = class GroupService {
    constructor(http) {
        this.http = http;
    }
    getGroups() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/groups";
        return this.http.get(url);
    }
    createGroup(group) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'content-type': 'application/json'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/groups/create";
        console.log("Funcionou " + group.name);
        return this.http.post(url, group, httpOptions);
    }
    findOne(id) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/groups/find/" + id;
        return this.http.get(url);
    }
    deleteGroup(id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'content-type': 'application/json'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/groups/delete/" + id;
        return this.http.delete(url, httpOptions);
    }
};
GroupService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GroupService);



/***/ }),

/***/ "./src/app/services/question.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let QuestionService = class QuestionService {
    constructor(http) {
        this.http = http;
    }
    saveQuestion(data, id) {
        const HttpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "content-type": "application/json"
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/question/create/" + id;
        return this.http.post(url, data, HttpOptions);
    }
    getQuestionsByChallenger(id) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/questions/challenger/" + id;
        return this.http.get(url);
    }
};
QuestionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], QuestionService);



/***/ }),

/***/ "./src/app/services/ranking.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/ranking.service.ts ***!
  \*********************************************/
/*! exports provided: RankingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingService", function() { return RankingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let RankingService = class RankingService {
    constructor(http) {
        this.http = http;
    }
    getRankingGlobal() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/rank";
        return this.http.get(url);
    }
};
RankingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RankingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RankingService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    register(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/user", user, httpOptions);
    }
    getUser(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/user/" + id);
    }
    getSkils(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/skil/find/" + id);
    }
    updateData(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/user/update/" + localStorage.getItem("id");
        return this.http.post(url, user, httpOptions);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/app/user/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-body {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9DOlxcZGV2ZWxvcFxcVENDXFxjbGllbnRlXFxSUE9PLUNMSUVOVEUvc3JjXFxhcHBcXHVzZXJcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1ib2R5IHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59IiwiLmFwcC1ib2R5IHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(AuthService, router) {
        this.AuthService = AuthService;
        this.router = router;
        this.user = {
            username: "",
            password: ""
        };
    }
    ngOnInit() {
    }
    login() {
        this.AuthService.login(this.user).subscribe((autenticado) => {
            const token = autenticado.token.token;
            this.AuthService.genSession(autenticado, token);
            this.router.navigateByUrl("/dashboard");
        });
    }
    loginFailed() {
        this.msgStatus = "Usuario ou senha incorretos";
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/user/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/user/profile/dados/dados.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/user/profile/dados/dados.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcHJvZmlsZS9kYWRvcy9kYWRvcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/profile/dados/dados.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/profile/dados/dados.component.ts ***!
  \*******************************************************/
/*! exports provided: DadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosComponent", function() { return DadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



let DadosComponent = class DadosComponent {
    constructor(UserService) {
        this.UserService = UserService;
        this.status = false;
    }
    ngOnInit() {
        this.getUserData();
    }
    getUserData() {
        this.UserService.getUser(localStorage.getItem("id")).subscribe((user) => {
            this.user = user;
        });
    }
    saveData() {
        this.UserService.updateData(this.user).subscribe((respon) => {
            if (respon) {
                this.status = true;
            }
            this.getUserData();
        });
    }
};
DadosComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
DadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dados',
        template: __webpack_require__(/*! raw-loader!./dados.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/profile/dados/dados.component.html"),
        styles: [__webpack_require__(/*! ./dados.component.scss */ "./src/app/user/profile/dados/dados.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], DadosComponent);



/***/ }),

/***/ "./src/app/user/profile/habilidades/habilidades.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/user/profile/habilidades/habilidades.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".level {\n  border: 1px black solid;\n  border-radius: 100%;\n  height: 100px;\n  width: 110px;\n  align-items: center;\n  text-align: center;\n}\n.level h1 {\n  margin-left: 3px;\n  margin-top: 15px;\n  font-size: 52px;\n  font-weight: 900;\n}\n.level h2 {\n  margin-top: 30px;\n}\n.level p {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlL2hhYmlsaWRhZGVzL0M6XFxkZXZlbG9wXFxUQ0NcXGNsaWVudGVcXFJQT08tQ0xJRU5URS9zcmNcXGFwcFxcdXNlclxccHJvZmlsZVxcaGFiaWxpZGFkZXNcXGhhYmlsaWRhZGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL3Byb2ZpbGUvaGFiaWxpZGFkZXMvaGFiaWxpZGFkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBREFJO0VBQ0ksZ0JBQUE7QUNFUjtBREFJO0VBQ0ksZ0JBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcHJvZmlsZS9oYWJpbGlkYWRlcy9oYWJpbGlkYWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZXZlbCB7XHJcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICB9XHJcbn0iLCIubGV2ZWwge1xuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDExMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGV2ZWwgaDEge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDUycHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4ubGV2ZWwgaDIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmxldmVsIHAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/profile/habilidades/habilidades.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/profile/habilidades/habilidades.component.ts ***!
  \*******************************************************************/
/*! exports provided: HabilidadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabilidadesComponent", function() { return HabilidadesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



let HabilidadesComponent = class HabilidadesComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getSkils(localStorage.getItem("id")).subscribe((skil) => {
            this.skils = skil;
            console.log(this.skils);
        });
        this.getDataUser();
    }
    makeTab() {
    }
    getDataUser() {
        this.userService.getUser(localStorage.getItem("id")).subscribe((user) => {
            this.user = user;
            if (this.user.experience == null) {
                this.user.experience = '0';
            }
        });
    }
};
HabilidadesComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
HabilidadesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-habilidades',
        template: __webpack_require__(/*! raw-loader!./habilidades.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/profile/habilidades/habilidades.component.html"),
        styles: [__webpack_require__(/*! ./habilidades.component.scss */ "./src/app/user/profile/habilidades/habilidades.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], HabilidadesComponent);



/***/ }),

/***/ "./src/app/user/profile/profile.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/user/profile/profile.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".capa img {\n  width: 100%;\n  height: 200px;\n}\n\n.img-profile {\n  position: absolute;\n  margin-top: -120px;\n  margin-left: 500px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlL0M6XFxkZXZlbG9wXFxUQ0NcXGNsaWVudGVcXFJQT08tQ0xJRU5URS9zcmNcXGFwcFxcdXNlclxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0FSOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FwYSB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWctcHJvZmlsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iLCIuY2FwYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmltZy1wcm9maWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MDBweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(userService) {
        this.userService = userService;
        this.tab = "";
    }
    getUser() {
        const id = localStorage.getItem("id");
        this.userService.getUser(id).subscribe((user) => {
            this.user = user;
        });
    }
    ngOnInit() {
        this.getUser();
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProfileComponent.prototype, "tab", void 0);
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/user/profile/profile.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/user/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showMsg {\n  color: red;\n}\n\n.usernameFieldError {\n  border-color: red;\n}\n\n.login-success {\n  align-items: center;\n  text-align: center;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWdpc3Rlci9DOlxcZGV2ZWxvcFxcVENDXFxjbGllbnRlXFxSUE9PLUNMSUVOVEUvc3JjXFxhcHBcXHVzZXJcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd01zZyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4udXNlcm5hbWVGaWVsZEVycm9yIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkXHJcbn1cclxuXHJcbi5sb2dpbi1zdWNjZXNzIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59IiwiLnNob3dNc2cge1xuICBjb2xvcjogcmVkO1xufVxuXG4udXNlcm5hbWVGaWVsZEVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbi5sb2dpbi1zdWNjZXNzIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



let RegisterComponent = class RegisterComponent {
    constructor(userService) {
        this.userService = userService;
        this.user = {
            username: "",
            password: "",
            email: ""
        };
        this.status = false;
        this.teste = "pequeno";
        this.statusPassword = false;
        this.msgError = "";
        this.statusErrors = false;
        this.retorno = false;
    }
    ngOnInit() {
    }
    checkPassword(password, repeatePassword) {
        if (password === repeatePassword) {
            return true;
        }
        else {
            return false;
        }
    }
    validFields() {
        if (this.user.username == "") {
            this.msgError = "Preencha todos os campos para se cadastrar";
        }
        if (this.user.email == "") {
            this.msgError = "Preencha todos os campos para se cadastrar";
        }
    }
    registerUser() {
        this.retorno = false;
        this.validFields();
        if (this.checkPassword(this.user.password, this.repeatPassword)) {
            this.validFields();
            this.userService.register(this.user).subscribe((response) => {
                if (!response) {
                    this.statusErrors = true;
                    this.retorno = !response;
                }
                else {
                    this.status = true;
                }
            });
        }
        else {
            this.statusPassword = true;
            console.log(this.statusPassword);
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/user/register/register.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api: "http://localhost:9000",
    TOKEN: ""
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\develop\TCC\cliente\RPOO-CLIENTE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map