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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"about\">\n    <div class=\"container\">\n      <div class=\"card\" data-aos=\"fade-up\" data-aos-offset=\"10\">\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"card-body\">\n              <div class=\"h4 mt-0 title\">About</div>\n              <p>Hi I'm <strong>Chandrakanth Saranam</strong>.Currently I am AEM Developer and also have expertise with Angular8 ,Django,Python, Java and front end . Done few live projects and portfolio work in above.Won the best student award 3 times at college.Also won Devang Mehta IT awards which is one of biggest event of Gujurat in which Best Student of Year of college get awards.Maintained above 9.57 cgpa.</p>\n\n\n              <p>\n                Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.\n              </p> \n                \n          \n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"card-body\">\n              <div class=\"h4 mt-0 title\">Basic Information</div>\n              <div class=\"row\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Date of Birth:</strong>\n                </div>\n                <div class=\"col-sm-8\">July 03, 1997</div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Email:</strong>\n                </div>\n                <div class=\"col-sm-8\">mehulkothari05@gmail.com</div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Phone:</strong>\n                </div>\n                <div class=\"col-sm-8\">+91 9974990993</div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Address:</strong>\n                </div>\n                <div class=\"col-sm-8\">D-101,Trishla Appartment,near sakar school,new cg chandkheda,Ahmedabad,382424\n                </div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Language:</strong>\n                </div>\n                <div class=\"col-sm-8\">Hindi, English</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"contact\">\n  <div class=\"cc-contact-information\" style=\"background-image: url('assets/images/contact.jpg');\">\n    <div class=\"container\">\n      <div class=\"cc-contact\">\n        <div class=\"row\">\n          <div class=\"col-md-9\">\n            <div class=\"card mb-0\" data-aos=\"zoom-in\">\n              <div class=\"h4 text-center title\">Contact Me</div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"card-body\">\n                    <form name=\"form\" (ngSubmit)=\"f.form.valid ; f.resetForm()\" #f=\"ngForm\" novalidate>\n                      <div class=\"p pb-3\">\n                        <strong>Feel free to contact me </strong>\n                      </div>\n                      <div class=\"row mb-3\">\n                        <div class=\"col\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"fa fa-user-circle\"></i>\n                            </span>\n                            <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Name\"\n                              [(ngModel)]=\"model.name\" #name=\"ngModel\"\n                              [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row mb-3\">\n                        <div class=\"col\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"fa fa-file-text\"></i>\n                            </span>\n                            <input class=\"form-control\" type=\"text\" name=\"subject\" placeholder=\"Subject\"\n                              [(ngModel)]=\"model.subject\" #subject=\"ngModel\"\n                              [ngClass]=\"{ 'is-invalid': f.submitted && subject.invalid }\" required />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row mb-3\">\n                        <div class=\"col\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"fa fa-envelope\"></i>\n                            </span>\n                            <input class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"E-mail\"\n                              [(ngModel)]=\"model.email\" #email=\"ngModel\"\n                              [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\"\n                              pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" required />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row mb-3\">\n                        <div class=\"col\">\n                          <div class=\"form-group\">\n                            <textarea class=\"form-control\" name=\"message\" placeholder=\"Your Message\"\n                              [(ngModel)]=\"model.message\" #message=\"ngModel\"\n                              [ngClass]=\"{ 'is-invalid': f.submitted && message.invalid }\" required></textarea>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col\">\n                          <button class=\"btn btn-primary\" type=\"submit\">Send</button>\n                        </div>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"card-body\">\n                    <p class=\"mb-0\">\n                      <strong>Phone</strong>\n                    </p>\n                    <p class=\"pb-2\">+91 9974990993</p>\n                    <p class=\"mb-0\">\n                      <strong>Email</strong>\n                    </p>\n                    <p>mehulkothari05@gmail.com</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-snotify class=\"material\"></ng-snotify>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"education\">\n    <div class=\"container cc-education\">\n      <div class=\"h4 text-center mb-4 title\">Education</div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2015 - 2019</p>\n              <div class=\"h5\">Bachelor's Degree</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Bachelor of Engineering</div>\n               <h4 class=\"category\">Aditya Silver Oak Institute Of Technology\n               </h4>\n               <ul>\n                <li> Aditya Silver Oak Institute is GTU Affiliated and <b>ranks 7th</b> in Gujurat </li>\n                    <li>Completed B.E in Computer Engineering with <b>9.54 CGPA</b>.</li>\n                 <li>Won the <b>Best Student Award</b> 3 times for excellent Academic records at College.</li>\n                 <li>Maintained above <b>9.1 spi</b> in every semester of college academic .</li>\n             </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2013 - 2015</p>\n              <div class=\"h5\">Higher Secondary</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Higher Secondary</div>\n               <h4 class=\"category\">Gyandeeep Vidhyalaya\n               </h4>\n               <ul>\n                <li>\n                  The High School was mainly focus on the bases of science, mathematics, and Chemistry\n                                  </li>\n                                  <li>\n                                     There was also a good base on physics, mathematics and chemistry.\n                                  </li>\n                                  <li>\n                                      Completed my high school with<b> 78%</b>.\n                                  </li>\n             </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2012 - 2013</p>\n              <div class=\"h5\">Sedcondary School</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Secondary School</div>\n               <h4 class=\"category\">Gyandeeep Vidhyalaya\n               </h4>\n               <ul>\n                <li>The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.\n                </li>\n               \n                <li>\n                    Completed my Secondary school with <b>84%</b>.\n                </li>\n             </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"experience\">\n        <div class=\"container cc-education\">\n            <div class=\"h4 text-center mb-4 title\">Work Experience</div>\n    <div class=\"colorlib-narrow-content\">\n       \n        <div class=\"row\">\n            <div class=\"col-md-12\">\n             <div class=\"timeline-centered\">\n                 <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n                    <div class=\"timeline-entry-inner\">\n\n                       <div class=\"timeline-icon color-1\">\n                          <i class=\"icon-pen2\"></i>\n                       </div>\n\n                       <div class=\"timeline-label\">\n                        <h2>Assistant System Trainee Engineer <span>June, 2019</span></h2>\n                         <h4> TATA Consultancy Services</h4>\n                          <p>As an Associate Trainee I've been given training on Adobe Expereience Manager(AEM) and Site Core:</p>\n                        <ul>\n                            <li>Software development.</li>\n                            <li>Application development.</li>\n                            <li>Web Development.</li>\n                        </ul>\n                       \n                       </div>\n                    </div>\n                 </article>\n\n\n                 <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInRight\">\n                    <div class=\"timeline-entry-inner\">\n                       <div class=\"timeline-icon color-2\">\n                          <i class=\"icon-pen2\"></i>\n                       </div>\n                        <div class=\"timeline-label\">\n                        <h2>Intern <span>May, 2018 - August,2018</span></h2>\n                         <h4> Intern at Inno Tracks</h4>\n                          <p>Completed Internship on Android . Worked as an Intern to develop mobile application using android Studio. Technologies and Language used:\n                         </p><ul>\n                            <li>Android</li>\n                            <li>Firebase</li>\n                            <li>SqlLite</li>\n                            <li>Java</li>\n                            <li>Xml</li>\n                        </ul>\n                        \n                       </div>\n                    </div>\n                 </article>\n\n                 \n</div>\n                \n                \n              </div>\n           </div>\n       </div>\n    </div>\n   </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container text-center\">\n      <a class=\"cc-facebook btn btn-link\" href=\"https://www.facebook.com/mehul.kothari.39\" target=\"_blank\">\n        <i class=\"fa fa-facebook fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      <a class=\"cc-instagram btn btn-link\" href=\"https://www.instagram.com/mehul_kothari05/\" target=\"_blank\">\n        <i class=\"fa fa-instagram fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      <a class=\"cc-twitter btn btn-link \" href=\"https://twitter.com/MehulKo18943279\" target=\"_blank\">\n        <i class=\"fa fa-twitter fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n\n      <a class=\"cc-github btn btn-link \" href=\"https://github.com/mehulk05\" target=\"_blank\">\n        <i class=\"fa fa-github fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      <!-- <a class=\"cc-google-plus btn btn-link\" href=\"#\" target=\"_blank\">\n        <i class=\"fa fa-google-plus fa-2x\" aria-hidden=\"true\"></i>\n      </a> -->\n    </div>\n    <div class=\"text-center text-muted\">\n      <p>&copy; All rights reserved.\n      </p>\n    </div>\n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <div class=\"profile-page sidebar-collapse\">\n      <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent bg-primary\" color-on-scroll=\"400\">\n        <div class=\"container\">\n          <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" href=\"#\" rel=\"tooltip\">Mehul's CV</a>\n            <button class=\"navbar-toggler navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\n              aria-controls=\"navigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-bar bar1\"></span>\n              <span class=\"navbar-toggler-bar bar2\"></span>\n              <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n          </div>\n          <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#about\">About</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link smooth-scroll\" href=\"#experience\">Experience</a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <a class=\"nav-link smooth-scroll\" href=\"#projects\">Projects</a>\n                  </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#skill\">Skills</a>\n              </li>\n             \n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#education\">Education</a>\n              </li>\n\n              <li class=\"nav-item\">\n                  <a class=\"nav-link smooth-scroll\" href=\"#reference\">Reference</a>\n                </li>\n\n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#contact\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n    </div>\n  </header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-page\">\n    <div class=\"wrapper\">\n      <div class=\"page-header page-header-small\" filter-color=\"green\">\n        <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: url('assets/images/intro.jpg');\">\n        </div>\n        <div class=\"container\">\n          <div class=\"content-center\">\n            <div class=\"cc-profile-image\">\n              <a href=\"#\">\n                <img src=\"assets/images/chandra_kanth.jpeg\" alt=\"Image\" />\n              </a>\n            </div>\n            <div class=\"h2 title\">Chandra Kanth Saranam</div>\n            <p class=\"category text-white\">Workday Certified Principal Solutions Architect</p>\n            <!-- <a class=\"btn btn-primary smooth-scroll mr-2\" href=\"#contact\" data-aos=\"zoom-in\"\n              data-aos-anchor=\"data-aos-anchor\">Hire Me</a> -->\n            <a class=\"btn btn-primary\"\n              href=\"https://drive.google.com/open?id=1uy3Afn8RI9dLkc3d9YuOCFozdhX4LWPb\" target=\"_blank\"\n              data-aos=\"zoom-in\" data-aos-anchor=\"data-aos-anchor\">Download CV</a>\n          </div>\n        </div>\n        <div class=\"section\">\n          <div class=\"container\">\n            <div class=\"button-container\">\n              <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.facebook.com/chandrakanth.saranam\"\n                target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Facebook\">\n                <i class=\"fa fa-facebook\"></i>\n              </a>\n              <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.instagram.com/chandrakanthsaranam/\"\n                target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Instagram\">\n                <i class=\"fa fa-instagram\"></i>\n              </a>\n              <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.linkedin.com/in/chandu-saranam/\"\n                target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Linkedin\">\n                <i class=\"fa fa-linkedin\"></i>\n              </a>\n              <!-- <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://github.com/mehulk05\"\n                target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Github\">\n                <i class=\"fa fa-github\"></i>\n              </a> -->\n              <!-- <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://twitter.com/MehulKo18943279\"\n                target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Twitter\">\n                <i class=\"fa fa-twitter\"></i>\n              </a> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/portfolio/portfolio.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/portfolio/portfolio.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"portfolio\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 ml-auto mr-auto\">\n          <div class=\"h4 text-center mb-4 title\">Portfolio</div>\n          <div class=\"nav-align-center\">\n            <ul class=\"nav nav-pills nav-pills-primary\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#web-development\" role=\"tablist\">\n                  <i class=\"fa fa-laptop\" aria-hidden=\"true\"></i>\n                </a>\n              </li>\n              \n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-content gallery mt-5\">\n        <div class=\"tab-pane active\" id=\"web-development\">\n          <div class=\"ml-auto mr-auto\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                  <a href=\"https://personal-portfolio0320.000webhostapp.com/\">\n                    <figure class=\"cc-effect\">\n                      <img src=\"assets/images/portfolio1.PNG\" alt=\"Image\" />\n                      <figcaption>\n                        <div class=\"h4\">Made Using Angular8</div>\n                        <p>Web Development</p>\n                      </figcaption>\n                    </figure>\n                  </a>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                  <a href=\"http://msgc320.pythonanywhere.com/\">\n                    <figure class=\"cc-effect\">\n                      <img src=\"assets/images/portfolio2.PNG\" alt=\"Image\" />\n                      <figcaption>\n                        <div class=\"h4\">Made Using Django</div>\n                        <p>Web Development</p>\n                      </figcaption>\n                    </figure>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"page-content\">\n    <app-intro></app-intro>\n    <app-about></app-about>\n    <app-experience></app-experience>\n    <app-projects></app-projects>\n    <app-skills></app-skills>\n    <app-education></app-education>\n    \n     <app-portfolio></app-portfolio> \n    <app-reference></app-reference> \n    <app-contact></app-contact>\n</div>\n<app-footer></app-footer>\n<ngx-spinner bdColor=\"rgba(255,255,255,1)\" size=\"medium\" color=\"#033d5b\" type=\"ball-spin-clockwise\"></ngx-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"projects\">\n    <div class=\"container cc-education\">\n        <div class=\"h4 text-center mb-4 title\">Projects</div>\n            \n     <div class=\"row\">\n    \n    \n       <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n      <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/p11.PNG\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Personal Portfolio Using Angular8</h4>\n          <h5 class=\"card-text\"><b>Technology :</b> Angular8,Bootstrap3 </h5>\n            <h5 class=\"card-text\"><a href=\"http://my-personal-portfolio.epizy.com/?i=2\">View my Live Demo</a></h5>\n           \n          <a href=\"https://medium.com/@mehulkothari05/personal-portfolio-using-django-dba49c355905\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See Project</a>\n          <a href=\"https://github.com/mehulk05/My-Personal-Portfolio\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        \n        </div>\n      </div>\n    </div>\n    </div>\n    \n    <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n       <div class=\"card\" >\n        <img class=\"card-img-top\"src=\"assets/images/p2.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Personal Portfolio Using Django</h4>\n           <h5 class=\"card-text\"><b>Technology :</b> Django,Python,Bootstrap3 </h5>\n    \n            <h5 class=\"card-text\"><a href=\"http://msgc320.pythonanywhere.com/\">View my Live Demo</a></h5>\n    \n        <a href=\"https://medium.com/@mehulkothari05/personal-portfolio-using-django-dba49c355905\" class=\"btn btn-primary  stretched-link ml-2 mr-5 \">See Project</a>\n          <a href=\"https://github.com/mehulk05/My-Personal-Portfolio\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        </div>\n    </div>\n    </div>\n      </div>\n    \n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n      <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/p44.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Matrimonial Website(Live Project)</h4>\n          <h5 class=\"card-text\"><b>Technology :</b> HTML5,CSS3,JS,MYSQL,PHP </h5>\n            <h5 class=\"card-text\"><a href=\"http://www.brahmanvarvadhusuchak.com/\">View my Live Demo</a></h5>\n        <a href=\"https://medium.com/@mehulkothari05/matrimonial-website-9cd5247f477d\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See Project</a>\n          <a href=\"https://github.com/mehulk05/Matrimonial-Website\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        </div>\n      </div>\n    </div>\n    </div>\n    \n    \n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n       <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/p3.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n         <h4 class=\"card-title\">Movie Success Prediction(Hackathon)</h4>\n           <h5 class=\"card-text\"><b>Technology :</b> Django,Python,ML,DataScience </h5>\n           <h5 class=\"card-text\"><a href=\"https://medium.com/@mehulkothari05/movie-success-prediction-a67d871a7b1\"> Read Blog on this  Project</a></h5>\n        <a href=\"https://medium.com/@mehulkothari05/movie-success-prediction-a67d871a7b1\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See Project</a>\n          <a href=\"https://github.com/mehulk05?tab=repositories\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        </div>\n    </div>\n    </div>\n      </div>\n    \n       \n    <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n       <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/p5.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Smart Baby Stroller(Final Year)</h4>\n           <h5 class=\"card-text\"><b>Technology :</b> Python,Android,Firebase </h5>\n             <h5 class=\"card-text\"><a href=\"https://medium.com/@mehulkothari05/smart-baby-stroller-system-3f6b4f49476a\"> Read Blog on this  Project</a></h5>\n          <a href=\"https://medium.com/@mehulkothari05/smart-baby-stroller-system-3f6b4f49476a\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See Project</a>\n          <a href=\"https://github.com/mehulk05/Smart-Baby-Stroller-System.git\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        </div>\n        </div>\n        </div>\n      </div>\n    \n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n           <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/p6.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n         <h4 class=\"card-title\">Simple Chat Application Using Firebase</h4>\n           <h5 class=\"card-text\"><b>Technology :</b> Android,Java,Firebase </h5>\n             <h5 class=\"card-text\"><a href=\"https://code.tutsplus.com/tutorials/how-to-create-an-android-chat-app-using-firebase--cms-27397\"> Read Blog on this  Project</a></h5>\n          <a href=\"https://github.com/mehulk05?tab=repositories\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See Project</a>\n          <a href=\"https://github.com/mehulk05?tab=repositories\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        </div>\n        </div>\n        </div>\n        </div>\n    \n    \n     <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n      <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/p8.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Know Your Disease</h4>\n          <h5 class=\"card-text\"><b>Technology :</b> HTML5,CSS3,JS,MYSQL,PHP </h5>\n         <a href=\"https://github.com/mehulk05/Know-Your-Disease\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See Project</a>\n          <a href=\"https://github.com/mehulk05/Know-Your-Disease\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        </div>\n      </div>\n    </div>\n    </div>\n    \n    <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n       <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/p9.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Pizza Ordering System</h4>\n           <h5 class=\"card-text\"><b>Technology :</b> Java,Servlet,JSP,JDBC </h5>\n       <a href=\"https://github.com/mehulk05/Pizza-Ordering-System\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See Project</a>\n          <a href=\"https://github.com/mehulk05/Pizza-Ordering-System\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        </div>\n        </div>\n        </div>\n      </div>\n    \n      \n    \n    \n    </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"reference\">\n        <div class=\"container cc-reference\">\n          <div class=\"h4 mb-4 text-center title\">References</div>\n          <div class=\"card\" data-aos=\"zoom-in\">\n            <div class=\"carousel slide\" id=\"cc-Indicators\" data-ride=\"carousel\">\n              <ol class=\"carousel-indicators\">\n                <li class=\"active\" data-target=\"#cc-Indicators\" data-slide-to=\"0\"></li>\n                <li data-target=\"#cc-Indicators\" data-slide-to=\"1\"></li>\n               \n              </ol>\n              <div class=\"carousel-inner\">\n                <div class=\"carousel-item active\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                      <img src=\"assets/images/sg.jpg\" alt=\"Image\" />\n                      <div class=\"h5 pt-2\">Sagar Patel</div>\n                      <p class=\"category\">HOD </p>\n                      <p class=\"category\">at ASOIT </p>\n                    </div>\n                    <div class=\"col-lg-10 col-md-9\">\n                    <p>\n                      Mehul is creative, innovative, responsible and quite a rational thinker. \n                    Coding as a way of life, his work presents products with great quality, following standards\n                     and good practices.He completed one of my live project on matrimonial website and \n                     I am so impressed with his techniques.\n                    </p>\n                    <p>He has always been hardworking ,creaive,and absolute genius in his creative criticial thinking \n                      He is always ready to take challege as his new opprotunities.\n                    </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"carousel-item\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                      <img src=\"assets/images/hn.jpg\" alt=\"Image\" />\n                      <h4>Hetal </h4>\n                      <p class=\"category\">Associate S/W Developer,</p>\n                      <p class=\"category\">at Sygnet</p>\n                    </div>\n                    <div class=\"col-lg-10 col-md-9\">\n                      <p> Mehul is a really good working partner with high knowledge on backend and frontend development , \n                        he is always concerned with going forward never afraid of improving or making use of new technologies, \n                        helping his peers whenever\n                         he is able to and solving problems in a quick and efficient manner with his typical optimism</p>\n\n                         <p>We have worked two years togather in same project ,so i know him from my personal experience\n                           Every person want this guy to be in his team.And as a persona I m sure company wont regret for hiring him\n                         </p>\n                    </div>\n                  </div>\n                </div>\n               \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"skill\">\n        <div class=\"container\">\n          <div class=\"h4 text-center mb-4 title\">Skills</div>\n          <div class=\"card\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"progress-container progress-primary\">\n                    <span class=\"progress-badge\">Java</span>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                        data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                        style=\"width: 85%;\"></div>\n                      <span class=\"progress-value\">85%</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"progress-container progress-primary\">\n                    <span class=\"progress-badge\">Python</span>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                        data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                        style=\"width: 80%;\"></div>\n                      <span class=\"progress-value\">80%</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"progress-container progress-primary\">\n                    <span class=\"progress-badge\">Django</span>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                        data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                        style=\"width: 80%;\"></div>\n                      <span class=\"progress-value\">80%</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"progress-container progress-primary\">\n                    <span class=\"progress-badge\">Angular8</span>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                        data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                        style=\"width: 75%;\"></div>\n                      <span class=\"progress-value\">75%</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"progress-container progress-primary\">\n                    <span class=\"progress-badge\">SQL and MYSQL</span>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                        data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                        style=\"width: 75%;\"></div>\n                      <span class=\"progress-value\">75%</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"progress-container progress-primary\">\n                    <span class=\"progress-badge\">HTML,CSS,JS</span>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                        data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                        style=\"width: 70%;\"></div>\n                      <span class=\"progress-value\">70%</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








const routes = [
    {
        path: '',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }
];
const config = {
    useHash: true,
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, config),
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfileModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/profile/about/about.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/about/about.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row p {\n  font-weight: 700px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2hpdGF0dGFsdXJpL0Rvd25sb2Fkcy9Qb3J0Zm9saW8tYW5ndWxhci10ZW1wbGF0ZS9zcmMvYXBwL3Byb2ZpbGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIFxufSIsIi5yb3cgcCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDBweDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/profile/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/profile/contact/contact.component.scss":
/*!********************************************************!*\
  !*** ./src/app/profile/contact/contact.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/contact/contact.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/contact/contact.component.ts ***!
  \******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() {
        this.model = {};
    }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/profile/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/profile/education/education.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/education/education.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  color: #4a4843;\n  font-size: 20px;\n  margin-bottom: 10px;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2hpdGF0dGFsdXJpL0Rvd25sb2Fkcy9Qb3J0Zm9saW8tYW5ndWxhci10ZW1wbGF0ZS9zcmMvYXBwL3Byb2ZpbGUvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0csY0FBQTtFQUNKLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBoNHtcbiAgICBjb2xvcjojNGE0ODQzO1xuZm9udC1zaXplOiAyMHB4O1xubWFyZ2luLWJvdHRvbTogMTBweDtcbm1hcmdpbi10b3A6MnB4O1xufSIsImg0IHtcbiAgY29sb3I6ICM0YTQ4NDM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/education/education.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/education/education.component.ts ***!
  \**********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EducationComponent = class EducationComponent {
    constructor() { }
    ngOnInit() {
    }
};
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.scss */ "./src/app/profile/education/education.component.scss")).default]
    })
], EducationComponent);



/***/ }),

/***/ "./src/app/profile/experience/experience.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".colorlib-experience {\n  padding-top: 4em;\n  padding-bottom: 9em;\n  clear: both;\n  width: 100%;\n  display: block;\n}\n\n@media screen and (max-width: 768px) {\n  .colorlib-experience {\n    padding-top: 5em;\n    padding-bottom: 8em;\n  }\n}\n\n.timeline-centered {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 4px;\n  background: #f2f3f7;\n  top: 20px;\n  bottom: 20px;\n  margin-left: 29px;\n}\n\n.timeline-centered .timeline-entry {\n  position: relative;\n  margin-top: 5px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n  clear: both;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner {\n  position: relative;\n  margin-left: -20px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: #2c98f0;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 0 0 5px #f2f3f7;\n  line-height: 40px;\n  float: left;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon i {\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-2 {\n  background: #ec5453;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-3 {\n  background: #f9bf3f;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-4 {\n  background: #a84cb8;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-5 {\n  background: #2fa499;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-none {\n  background: #fff;\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\n  position: relative;\n  background: #f2f3f7;\n  padding: 1.5em;\n  margin-left: 60px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 9px 9px 0;\n  border-color: transparent #f2f3f7 transparent transparent;\n  left: 0;\n  top: 10px;\n  margin-left: -9px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {\n  margin-top: 15px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\n  font-size: 20px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  font-weight: 500;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\n  color: #000;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\n  -webkit-opacity: 0.4;\n  -moz-opacity: 0.4;\n  opacity: 0.4;\n  -ms-filter: alpha(opacity=40);\n  filter: alpha(opacity=40);\n  font-size: 16px;\n}\n\n.timeline-label h4 {\n  margin-top: -15px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  color: #545755;\n  font-weight: 500;\n}\n\n.timeline-label span {\n  color: #000;\n  font-weight: 600;\n}\n\n.timeline-label p {\n  font-size: 1.3em;\n  font-weight: 500;\n}\n\n.timeline-label ul {\n  font-size: 1.3em;\n  font-weight: 500;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2hpdGF0dGFsdXJpL0Rvd25sb2Fkcy9Qb3J0Zm9saW8tYW5ndWxhci10ZW1wbGF0ZS9zcmMvYXBwL3Byb2ZpbGUvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNESjs7QURHSTtFQUVJO0lBRUksZ0JBQUE7SUFDQSxtQkFBQTtFQ0ZWO0FBQ0Y7O0FETUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDSlI7O0FETU07RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0hSOztBREtNO0VBQ0UsV0FBQTtBQ0ZSOztBRElNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNEUjs7QURHTTtFQUNFLFdBQUE7QUNBUjs7QURFTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ1I7O0FEQ007RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0VSOztBREFNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0dSOztBRERNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFJQSxrQkFBQTtFQUNBLGtCQUFBO0VBR0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNJUjs7QURIUTtFQUNFLFdBQUE7QUNNVjs7QURMUTtFQUNFLG1CQUFBO0FDUVY7O0FEUFE7RUFDRSxtQkFBQTtBQ1VWOztBRFRRO0VBQ0UsbUJBQUE7QUNZVjs7QURYUTtFQUNFLG1CQUFBO0FDY1Y7O0FEYlE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNnQlY7O0FEZE07RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDaUJSOztBRGZNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlEQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ2tCUjs7QURoQk07RUFDRSxnQkFBQTtBQ21CUjs7QURqQk07RUFDRSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQ29CUjs7QURsQk07RUFDRSxXQUFBO0FDcUJSOztBRG5CTTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNzQlI7O0FEbEJNO0VBRUUsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7RUFBZSxnQkFBQTtBQ3FCdkI7O0FEakJNO0VBRUMsV0FBQTtFQUFZLGdCQUFBO0FDb0JuQjs7QURqQk07RUFFRSxnQkFBQTtFQUFpQixnQkFBQTtBQ29CekI7O0FEbEJNO0VBQ0UsZ0JBQUE7RUFBaUIsZ0JBQUE7RUFBaUIsMkNBQUE7QUN1QjFDIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3JsaWItZXhwZXJpZW5jZVxue1xuICAgIHBhZGRpbmctdG9wOiA0ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDllbTtcbiAgXG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7IFxufVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KVxuICAgIHtcbiAgICAgICAgLmNvbG9ybGliLWV4cGVyaWVuY2VcbiAgICAgICAge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4ZW07XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC50aW1lbGluZS1jZW50ZXJlZCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLCAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgZGlzcGxheTogdGFibGU7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgICAgICAgY2xlYXI6IGJvdGg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlOyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gICAgICAgIGNsZWFyOiBib3RoOyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjNmNztcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOXB4OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGNsZWFyOiBib3RoOyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTIwcHg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzJjOThmMDtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmbG9hdDogbGVmdDsgfVxuICAgICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiBpIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci0yIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWM1NDUzOyB9XG4gICAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTMge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWJmM2Y7IH1cbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItNCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2E4NGNiODsgfVxuICAgICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci01IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmZhNDk5OyB9XG4gICAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLW5vbmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjNmNztcbiAgICAgICAgcGFkZGluZzogMS41ZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbDphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItd2lkdGg6IDlweCA5cHggOXB4IDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2YyZjNmNyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTlweDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgcCArIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNTAwOyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiBhIHtcbiAgICAgICAgY29sb3I6ICMwMDA7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIHNwYW4ge1xuICAgICAgICAtd2Via2l0LW9wYWNpdHk6IC40O1xuICAgICAgICAtbW96LW9wYWNpdHk6IC40O1xuICAgICAgICBvcGFjaXR5OiAuNDtcbiAgICAgICAgLW1zLWZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDsgXG4gICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWxhYmVsIGg0e1xuICAgICAgIFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogIzU0NTc1NTtmb250LXdlaWdodDo1MDA7XG4gICAgICBcbiAgICAgIFxuICAgICAgfVxuICAgICAgLnRpbWVsaW5lLWxhYmVsIHNwYW57XG4gICAgICBcbiAgICAgICBjb2xvcjogIzAwMDtmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtbGFiZWwgcHtcbiAgICAgIFxuICAgICAgICBmb250LXNpemU6IDEuM2VtO2ZvbnQtd2VpZ2h0OjUwMDtcbiAgICAgIH1cbiAgICAgIC50aW1lbGluZS1sYWJlbCB1bHtcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtmb250LXdlaWdodDo1MDA7IGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIH0iLCIuY29sb3JsaWItZXhwZXJpZW5jZSB7XG4gIHBhZGRpbmctdG9wOiA0ZW07XG4gIHBhZGRpbmctYm90dG9tOiA5ZW07XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb2xvcmxpYi1leHBlcmllbmNlIHtcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA4ZW07XG4gIH1cbn1cbi50aW1lbGluZS1jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIHRvcDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjlweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICMyYzk4ZjA7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uIGkge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItMiB7XG4gIGJhY2tncm91bmQ6ICNlYzU0NTM7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTMge1xuICBiYWNrZ3JvdW5kOiAjZjliZjNmO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci00IHtcbiAgYmFja2dyb3VuZDogI2E4NGNiODtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItNSB7XG4gIGJhY2tncm91bmQ6ICMyZmE0OTk7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLW5vbmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogOXB4IDlweCA5cHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjJmM2Y3IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBsZWZ0OiAwO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgcCArIHAge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIGEge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIHNwYW4ge1xuICAtd2Via2l0LW9wYWNpdHk6IDAuNDtcbiAgLW1vei1vcGFjaXR5OiAwLjQ7XG4gIG9wYWNpdHk6IDAuNDtcbiAgLW1zLWZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIGg0IHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM1NDU3NTU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50aW1lbGluZS1sYWJlbCBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50aW1lbGluZS1sYWJlbCBwIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIHVsIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/experience/experience.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.ts ***!
  \************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExperienceComponent = class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience.component.scss */ "./src/app/profile/experience/experience.component.scss")).default]
    })
], ExperienceComponent);



/***/ }),

/***/ "./src/app/profile/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/footer/footer.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/profile/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/profile/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/header/header.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/profile/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/profile/intro/intro.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/intro/intro.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profile/intro/intro.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/intro/intro.component.ts ***!
  \**************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntroComponent = class IntroComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intro.component.scss */ "./src/app/profile/intro/intro.component.scss")).default]
    })
], IntroComponent);



/***/ }),

/***/ "./src/app/profile/portfolio/portfolio.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/portfolio/portfolio.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/portfolio/portfolio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/portfolio/portfolio.component.ts ***!
  \**********************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PortfolioComponent = class PortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
};
PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portfolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/portfolio/portfolio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/profile/portfolio/portfolio.component.scss")).default]
    })
], PortfolioComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");



let ProfileComponent = class ProfileComponent {
    constructor(spinner) {
        this.spinner = spinner;
    }
    ngOnInit() {
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 2000);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/profile/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/profile/footer/footer.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/profile/intro/intro.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/profile/about/about.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/profile/skills/skills.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/profile/portfolio/portfolio.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/profile/experience/experience.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./education/education.component */ "./src/app/profile/education/education.component.ts");
/* harmony import */ var _reference_reference_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reference/reference.component */ "./src/app/profile/reference/reference.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/profile/contact/contact.component.ts");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/profile/projects/projects.component.ts");


















let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyModule"],
            _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"]
        ],
        declarations: [
            _profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__["IntroComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
            _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
            _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"],
            _experience_experience_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceComponent"],
            _education_education_component__WEBPACK_IMPORTED_MODULE_13__["EducationComponent"],
            _reference_reference_component__WEBPACK_IMPORTED_MODULE_14__["ReferenceComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_17__["ProjectsComponent"]
        ],
        providers: [
            { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_4__["ToastDefaults"] },
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"],
        ]
    })
], ProfileModule);



/***/ }),

/***/ "./src/app/profile/projects/projects.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/profile/projects/projects.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blog-entry {\n  width: 100%;\n  float: left;\n  background: #fff;\n  margin-bottom: 3em;\n}\n\n@media screen and (max-width: 768px) {\n  .blog-entry {\n    margin-bottom: 3em;\n  }\n}\n\n.blog-entry .blog-img {\n  width: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  margin-bottom: 25px;\n}\n\n.blog-entry .blog-img img {\n  position: relative;\n  max-width: 100%;\n  transform: scale(1);\n  transition: 0.3s;\n}\n\n.blog-entry .desc h3 {\n  font-size: 16px;\n  margin-bottom: 25px;\n  line-height: auto;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n\n.blog-entry .desc h3 a {\n  color: #000;\n  text-decoration: none;\n}\n\n.blog-entry .desc span {\n  display: block;\n  margin-bottom: 20px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.4) !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n}\n\n.blog-entry .desc span small i {\n  color: #999999;\n}\n\n.blog-entry .desc .lead {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #000;\n}\n\n.blog-entry:hover .blog-img img {\n  transform: scale(1.1);\n}\n\n.blog-entry h4 {\n  font-weight: 560;\n  margin-top: 8px;\n  font-size: 20px;\n}\n\n.blog-entry h5 {\n  line-height: normal;\n  font-weight: 500;\n  font-size: 1.3em;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2hpdGF0dGFsdXJpL0Rvd25sb2Fkcy9Qb3J0Zm9saW8tYW5ndWxhci10ZW1wbGF0ZS9zcmMvYXBwL3Byb2ZpbGUvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURBSTtFQUNFO0lBQ0Usa0JBQUE7RUNHTjtBQUNGOztBREhJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDS047O0FESk07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFLQSxtQkFBQTtFQUdBLGdCQUFBO0FDT1I7O0FETkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FDU047O0FEUk07RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNXUjs7QURWSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2FOOztBRFpNO0VBQ0UsY0FBQTtBQ2VSOztBRGRJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDaUJOOztBRGhCSTtFQUtFLHFCQUFBO0FDbUJOOztBRGpCTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNvQlI7O0FEakJRO0VBQ0ssbUJBQUE7RUFDRCxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ29CWiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1lbnRyeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLmJsb2ctZW50cnkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzZW07IH0gfVxuICAgIC5ibG9nLWVudHJ5IC5ibG9nLWltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XG4gICAgICAuYmxvZy1lbnRyeSAuYmxvZy1pbWcgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzOyB9XG4gICAgLmJsb2ctZW50cnkgLmRlc2MgaDMge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiBhdXRvO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyB9XG4gICAgICAuYmxvZy1lbnRyeSAuZGVzYyBoMyBhIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgIC5ibG9nLWVudHJ5IC5kZXNjIHNwYW4ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KSAhaW1wb3J0YW50O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwOyB9XG4gICAgICAuYmxvZy1lbnRyeSAuZGVzYyBzcGFuIHNtYWxsIGkge1xuICAgICAgICBjb2xvcjogIzk5OTk5OTsgfVxuICAgIC5ibG9nLWVudHJ5IC5kZXNjIC5sZWFkIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgY29sb3I6ICMwMDA7IH1cbiAgICAuYmxvZy1lbnRyeTpob3ZlciAuYmxvZy1pbWcgaW1nIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XG4gIFxuICAgICAgLmJsb2ctZW50cnkgaDR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OjU2MDtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gIFxuICAgICAgICAuYmxvZy1lbnRyeSBoNXtcbiAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOjEuM2VtO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrXG4gICAgICAgICAgIFxuICAgICAgICB9IiwiLmJsb2ctZW50cnkge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJsb2ctZW50cnkge1xuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgfVxufVxuLmJsb2ctZW50cnkgLmJsb2ctaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5ibG9nLWVudHJ5IC5ibG9nLWltZyBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBsaW5lLWhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyBoMyBhIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2Mgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCkgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2Mgc3BhbiBzbWFsbCBpIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIC5sZWFkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmJsb2ctZW50cnk6aG92ZXIgLmJsb2ctaW1nIGltZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5ibG9nLWVudHJ5IGg0IHtcbiAgZm9udC13ZWlnaHQ6IDU2MDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5ibG9nLWVudHJ5IGg1IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/projects/projects.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/projects/projects.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/profile/projects/projects.component.scss")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/profile/reference/reference.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/reference/reference.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cc-reference p {\n  font-weight: 1000px;\n  color: black;\n  font-style: bold;\n}\n\n.category p {\n  width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2hpdGF0dGFsdXJpL0Rvd25sb2Fkcy9Qb3J0Zm9saW8tYW5ndWxhci10ZW1wbGF0ZS9zcmMvYXBwL3Byb2ZpbGUvcmVmZXJlbmNlL3JlZmVyZW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9yZWZlcmVuY2UvcmVmZXJlbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNJLFVBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcmVmZXJlbmNlL3JlZmVyZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYy1yZWZlcmVuY2UgcHtcbiAgICBmb250LXdlaWdodDogMTAwMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXN0eWxlOiBib2xkO1xuICB9XG5cbiAgLmNhdGVnb3J5IHB7XG4gICAgICB3aWR0aDogMTAlXG4gIH0iLCIuY2MtcmVmZXJlbmNlIHAge1xuICBmb250LXdlaWdodDogMTAwMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG59XG5cbi5jYXRlZ29yeSBwIHtcbiAgd2lkdGg6IDEwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/reference/reference.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/reference/reference.component.ts ***!
  \**********************************************************/
/*! exports provided: ReferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function() { return ReferenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReferenceComponent = class ReferenceComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReferenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reference',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reference.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reference.component.scss */ "./src/app/profile/reference/reference.component.scss")).default]
    })
], ReferenceComponent);



/***/ }),

/***/ "./src/app/profile/skills/skills.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/skills/skills.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/skills/skills.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/skills/skills.component.ts ***!
  \****************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsComponent = class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.scss */ "./src/app/profile/skills/skills.component.scss")).default]
    })
], SkillsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");


// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
    //baseUrl : `http://localhost:4200/`,
    snotifyConfig: {
        showProgressBar: true,
        position: ng_snotify__WEBPACK_IMPORTED_MODULE_1__["SnotifyPosition"].rightTop,
    },
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rohitattaluri/Downloads/Portfolio-angular-template/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map