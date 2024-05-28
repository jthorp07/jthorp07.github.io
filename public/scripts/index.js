"use strict";
var PageController = /** @class */ (function () {
    function PageController() {
        var pageId = document.body.id;
        console.log("Constructor");
        switch (pageId) {
            case "landingPage":
                console.log("index");
                this.isIndex = true;
                this.currentPage = new HomePage();
                break;
            case "projectsPage":
                console.log("proj");
                this.isIndex = false;
                this.currentPage = new ProjectsPage();
                break;
            default:
                console.log("def");
                this.isIndex = false;
                this.currentPage = new PageNotFoundPage();
                break;
        }
        this.buildNavLinks();
    }
    PageController.prototype.buildNavLinks = function () {
        var _this = this;
        this.homeNavButton = document.getElementById("homeBtn");
        this.projectsNavButton = document.getElementById("projectsBtn");
        this.resumeNavButton = document.getElementById("resumeBtn");
        this.homeNavButton.onclick = function () {
            window.location.href = ".".concat(_this.isIndex ? "" : "./..", "/index.html");
            _this.isIndex = true;
        };
        this.projectsNavButton.onclick = function () {
            window.location.href = ".".concat(_this.isIndex ? "/public/pages" : "", "/projects.html");
            _this.isIndex = false;
        };
        this.resumeNavButton.onclick = function () {
            window.location.href = ".".concat(_this.isIndex ? "/public/pages" : "", "/resume.html");
            _this.isIndex = false;
        };
    };
    return PageController;
}());
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    return HomePage;
}());
var ProjectsPage = /** @class */ (function () {
    function ProjectsPage() {
    }
    return ProjectsPage;
}());
var ResumePage = /** @class */ (function () {
    function ResumePage() {
    }
    return ResumePage;
}());
var PageNotFoundPage = /** @class */ (function () {
    function PageNotFoundPage() {
    }
    return PageNotFoundPage;
}());
console.log("File ran");
new PageController();
