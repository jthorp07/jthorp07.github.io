"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadProjects() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('../data/projects.json');
        const data = yield response.json();
        const projects = data.projects;
        const projectsContainer = document.getElementById('projects-container');
        if (projectsContainer) {
            projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project-card');
                projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-card-image">
                <div class="project-card-content">
                    <h3 class="project-card-title">${project.title}</h3>
                    <a href="project-details.html?id=${project.id}" class="project-card-button">View Details</a>
                </div>
            `;
                projectsContainer.appendChild(projectElement);
            });
        }
    });
}
function loadProjectDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        if (projectId) {
            const response = yield fetch('../data/projects.json');
            const data = yield response.json();
            const projects = data.projects;
            const project = projects.find(p => p.id === projectId);
            if (project) {
                const titleElement = document.getElementById('project-detail-title');
                const imageElement = document.getElementById('project-detail-image');
                const descriptionElement = document.getElementById('project-detail-description');
                if (titleElement)
                    titleElement.textContent = project.title;
                if (imageElement)
                    imageElement.src = project.image;
                if (descriptionElement)
                    descriptionElement.textContent = project.details;
            }
        }
    });
}
if (document.getElementById('projects-container')) {
    loadProjects();
}
else if (document.getElementById('project-detail-title')) {
    loadProjectDetails();
}
