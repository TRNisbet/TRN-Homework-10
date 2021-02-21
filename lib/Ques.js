const genQues = (role) => [
    {
        type: 'input',
        name: 'name',
        message: `What is the ${role}s name?`,
    },
    
    {
        type: 'input',
        name: 'id',
        message: `What is ${role}'s Work ID?`,
    },
    
    {
        type: 'input',
        name: 'email',
        message: `What is ${role}'s work email address?`,
    },
];

module.exports = {
    
    selectRole: {
        name: "role",
        type: "list",
        message: "What type of employee do you want to add?",
        choices: ["Manager", "Engineer", "Intern"]
    },
    Manager: [
        ...genQues("Manager"),
        {
            type: "input",
            name: "other",
            message: "What is Manager's office number",
        },
    ],
    
    Engineer: [
        ...genQues("Engineer"),
        {
            type: "input",
            name: "other",
            message: "What is Engineer's Github?",
        },
    ],
    
    Intern: [
        ...genQues("Intern"),
        {
            type: "input",
            name: "other",
            message: "What is Intern's School?",
        },
    ],
    
    additionalEmployees: {
        type: "list",
        name: "role",
        message: "Do you have more employees to add?",
        choices: ["Yes", "No"],
    },
    
    
};