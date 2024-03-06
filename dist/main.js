(()=>{"use strict";var t={904:(t,e,n)=>{n.d(e,{c:()=>i});var r=n(500),o=n.n(r),s=n(312),a=n.n(s)()(o());a.push([t.id,":root {\n    --emerald1: #ecfdf5;\n    --emerald2: #a7f3d0;\n    --emerald3: #34d399;\n    --emerald4: #34d399;\n    --emerald5: #065f46;\n    --emerald6: #022c22;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    background-color: var(--emerald1);\n    color: var(--emerald6)\n}\n\nbutton,\ninput {\n  display:block;\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\nheader {\n    background-color: var(--emerald5);\n    color: var(--emerald1);\n    padding: 0.5rem;\n    margin: 0;\n}\n\nmain {\n    display: flex;\n}\n\n/* MAIN NAV SECTION */\n\nmain .nav {\n    padding: 1rem;\n    background-color: var(--emerald2);\n}\n\nmain .nav .home button {\n    padding: 1rem;\n    height: 3rem;\n    width: 15rem;\n    border-radius: 10px;\n    margin-bottom: 0.2rem;\n}\nmain .nav h3 {\n    margin: 1rem 0;\n}\n\nmain .nav .home button {\n    padding: 1rem;\n    margin: 1rem 0;\n}\n\nmain .nav .projects {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n}\n\nmain .nav .project.selected {\n    background-color: lightblue;\n}\n\nmain .nav .projects .project {\n    padding: 0.5rem;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\nmain .nav .project .vert  {\n    margin-left: auto;\n    \n} \n\nmain .nav form section {\n    display: flex;\n    gap: 1rem;\n}\n\n/* MAIN LIST SECTION */\n\nmain .list {\n    width: 900px;\n    padding: 1rem;\n    margin: 0 auto;\n}\n\nmain .list h2 {\n    margin-bottom: 1rem;\n}\n\nmain .list .add-task-button, main .list form button {\n    padding: 1rem;\n    margin-bottom: 1rem;\n}\n\nmain .list .task-item {\n    margin-bottom: 0.5rem;\n    padding: 1rem;\n    border-radius: 16px;\n    display: flex;\n    justify-content: space-between;\n}\n\nmain .list .task-item .right {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\nmain .list .task-item button {\n    background-color: none;\n}\n\nmain .list .task-item:hover {\n    cursor: pointer;\n    background-color: var(--emerald2);\n}\n\nmain .list form section {\n    display: flex;\n    gap: 1rem;\n}\n\nfooter {\n    background-color: var(--emerald3);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    display: flex;\n    height: 3rem;\n    justify-content: center;\n    align-items: center;\n}",""]);const i=a},312:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,s){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},500:t=>{t.exports=function(t){return t[1]}},596:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var s={},a=[],i=0;i<t.length;i++){var c=t[i],l=r.base?c[0]+r.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var m=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=o(p,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var s=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<s.length;a++){var i=n(s[a]);e[i].references--}for(var c=r(t,o),l=0;l<s.length;l++){var d=n(s[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=c}}},176:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},808:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},120:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},520:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},936:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={id:r,exports:{}};return t[r](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(596),e=n.n(t),r=n(520),o=n.n(r),s=n(176),a=n.n(s),i=n(120),c=n.n(i),l=n(808),d=n.n(l),u=n(936),m=n.n(u),p=n(904),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(p.c,f),p.c&&p.c.locals&&p.c.locals;class y{constructor(t,e,n,r){this.title=t,this.description=e,this.priority=n,this.dueDate=r}getTitle(){return this.title}setTitle(t){this.title=t}getDescription(){return this.description}setDescription(t){this.description=t}getDueDate(){return this.dueDate}setDueDate(t){this.dueDate=t}getPrioity(){return this.priority}setTitle(t){this.priority=t}}class g{constructor(t){this.title=t,this.tasks=[]}getTitle(){return this.title}setTitle(t){this.title=t}}class v{static getProjectList(){return JSON.parse(localStorage.getItem("projectList"))}static saveProjectList(t){localStorage.setItem("projectList",JSON.stringify(t))}static getProject(t){return this.getProjectList().find((e=>e.title==t))}static getTask(t,e){return t.tasks.find((t=>t.title==e))}static addProject(t){const e=v.getProjectList();e.push(t),v.saveProjectList(e)}static deleteProject(t){}static addTask(t,e){const n=v.getProjectList(),r=n.findIndex((e=>e.title==t.title));n[r].tasks.push(e),console.log(n[r]),v.saveProjectList(n)}static deleteTask(t,e){const n=v.getProjectList(),r=n.findIndex((e=>e.title==t)),o=n[r].tasks.filter((t=>t.title!==e));console.log(o)}}class b{static tasksNode=document.querySelector("main .tasks");static renderProjects(){const t=document.querySelector(".nav .projects");t.innerHTML="",v.getProjectList().forEach((e=>{const n=document.createElement("button");n.classList.add("project"),n.innerHTML=`\n            <span class="material-icons">menu</span>\n            <div class="project-title">${e.title}</div>\n            <span class="material-icons vert">more_vert</span>\n            `,t.appendChild(n)}))}static renderTasks(t){b.tasksNode.innerHTML="";const e=document.querySelector(".project.selected .project-title").textContent;console.log(e);const n=v.getProjectList(),r=n.findIndex((t=>t.title=e));console.log(n[r].tasks),n[r].tasks.forEach((t=>{document.querySelector(".list .tasks").appendChild(b.addTask(t))}))}static addTask(t){const e=document.createElement("div");return e.classList.add("task-item"),e.innerHTML=`\n        <div class="left">\n            <p class="task-title">${t.title}</p>\n            <p class="task-description">${t.description}</p>\n        </div>\n        <div class="right">\n            <p class="task-due-date">Due Date: ${t.dueDate}</p>\n            <p class="task-priority">Priority: ${t.priority}</p>\n            <button class="delete">X</button>\n        </div>\n        \n  `,e}static taskFormHTML='\n    <p>\n            <label>Title</label>\n            <input type="text" id="title">\n        </p>\n        <p>\n            <label>Description</label>\n            <input type="text" id="description">\n        </p>\n        <p>\n            <label>Priority</label>\n            <input type="text" id="priority">\n        </p>\n        <p>\n            <label>Date</label>\n            <input type="text" id="date">\n        </p>\n        <section>\n            <p>\n                <button type="button" class="submit">Confirm</button>\n            </p>\n            <p>\n                <button type="button" class="cancel">Cancel</button>\n            </p>\n        </section>\n        ';static displayTaskForm(){const t=document.querySelector(".list"),e=document.createElement("form"),n=document.querySelector(".add-task-button");e.innerHTML=this.taskFormHTML,t.insertBefore(e,n)}static displayEditTaskForm(t){const e=document.createElement("form"),n=document.querySelector(".list .tasks");e.innerHTML=this.taskFormHTML;const r=document.querySelector(".task-item.selected");console.log(r),r.style.display="none",n.insertBefore(e,r),document.querySelector(".list form #title").value=t.title,document.querySelector(".list form #description").value=t.description,document.querySelector(".list form #priority").value=t.priority,document.querySelector(".list form #date").value=t.dueDate}static addTaskButton(){document.querySelector(".list > button").style.display="block"}static removeTaskButton(){document.querySelector(".list > button").setAttribute("style","display: none")}static clearTaskForm(){document.querySelector(".list form").remove()}static displayProjectForm(){const t=document.querySelector(".project-section"),e=document.querySelector(".add-project-button"),n=document.createElement("form");n.innerHTML='\n        <p>\n            <label>Title</label>\n            <input type="text" id="title">\n        </p>\n        <section>\n            <p>\n                <button type="button" class="submit">Submit</button>\n            </p>\n            <p>\n                <button type="button" class="cancel">cancel</button>\n            </p>\n        </section>\n        ',t.insertBefore(n,e)}static removeAddProjectButton(){document.querySelector(".nav .add-project-button").style.display="none"}static clearProjectForm(){document.querySelector(".nav form").remove()}static addProjectBtn(){document.querySelector(".nav .add-project-button").style.display="block"}}!function(){if(null===localStorage.getItem("projectList")){console.log("projectList is null");const t=[];console.log(t),t.push(new g("default")),console.log(t),v.saveProjectList(t)}b.renderProjects(),document.querySelector(".projects").firstElementChild.classList.add("selected")}(),document.querySelector(".list button");const h=document.querySelector(".list");document.querySelector(".tasks"),document.querySelectorAll("task-item"),h.addEventListener("click",(function(t){if((t.target.parentNode.classList.contains("left")||t.target.parentNode.classList.contains("right")||t.target.classList.contains("task-item"))&&!t.target.classList.contains("delete")){const e=t.target.closest(".task-item");console.log(e),document.querySelectorAll(".task-item").forEach((t=>t.classList.remove("selected"))),console.log("test"),e.classList.add("selected");const n=document.querySelector(".project.selected div").textContent,r=v.getProject(n),o=document.querySelector(".task-item.selected .task-title").textContent;console.log(v.getTask(r,o));const s=v.getTask(r,o);b.displayEditTaskForm(s),b.removeTaskButton()}const e=document.querySelector(".list #title"),n=document.querySelector(".list #description"),r=document.querySelector(".list #priority"),o=document.querySelector(".list #date");if(t.target.classList.contains("submit")){const t=new y(e.value,n.value,r.value,o.value),s=document.querySelector(".project.selected div").textContent,a=v.getProjectList().find((t=>t.title==s));v.addTask(a,t),b.renderTasks()}if(t.target.classList.contains("cancel")&&(b.clearTaskForm(),b.renderTasks(),b.addTaskButton()),t.target.classList.contains("add-task-button")&&(b.displayTaskForm(),b.removeTaskButton()),t.target.classList.contains("delete")){t.target.closest(".task-item").classList.add("selected");const e=document.querySelector(".project.selected div").textContent,n=document.querySelector(".task-item.selected .task-title").textContent;v.deleteTask(e,n)}})),document.querySelector("main .nav").addEventListener("click",(t=>{t.target.classList.contains("add-project-button")&&(b.displayProjectForm(),b.removeAddProjectButton());const e=document.querySelector(".nav #title");if(t.target.classList.contains("submit")){const t=new g(e.value);v.addProject(t),b.clearProjectForm(),b.addProjectBtn(),b.renderProjects()}if(t.target.classList.contains("cancel")&&(b.clearProjectForm(),b.addProjectBtn()),t.target.closest(".project")){const e=t.target.closest(".project");document.querySelectorAll(".project").forEach((t=>t.classList.remove("selected"))),e.classList.add("selected"),console.log(t.target.closest(".project"));const n=e.querySelector(".project-title").textContent;console.log(n)}v.getProjectList().find((t=>t.title==e))}))})()})();