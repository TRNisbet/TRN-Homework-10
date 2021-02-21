const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Ques = require("./lib/Ques");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const Employees = [];
const Postions = {Manager, Engineer, Intern };

const init = () => {
    buildEmployee("Manager");
};

const buildEmployee = async (key) => {
    const result = await inquirer.prompt(Ques[key]);
    const employee = new Postions[key](
        result.name,
        result.id,
        result.email,
        result.other,        
    );
    
    Employees.push(employee);
    additionalEmployees();
};

const additionalEmployees = async () => {
    const { role } = await inquirer.prompt(Ques.additionalEmployees);
    if (role === "No") return buildHTML();   
    selectRole();
};

const selectRole = async () => {
    const { role } = await inquirer.prompt(Ques.selectRole);
    buildEmployee(role);
};

const buildHTML = async () => {
    const HTML = render(Employees);
    try {
        fs.writeFileSync(outputPath, HTML);
    } catch (error) {
        console.log(error.message);
    }
};

init();