const inquirer = require('inquirer')
const fs = require('fs');
const  Employee  = require('./employee.js');


const teamProfile = (response) =>

    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
<div class="container">
<h1> ${response.teamName}</h1>
<a href="mailto:${response.Email}">Send email</a>
https://github.com/${response.github}
${response.id}
${response.officeNumber}


</div>



</body>
</html>
    `;
inquirer
    .prompt([
        {
            type: 'Input',
            name: 'teamName',
            message: 'What is your team managers name?'




        },
        {
            type: 'Input',
            name: 'Email',
            message: 'What is your Email?'
        },
        {
            type: 'Input',
            name: 'github',
            message: 'What is your Github name?'
        },
        {
            type: 'Input',
            name: 'id',
            message: 'What is your id number?'
        },
        {
            type: 'Input',
            name: 'officeNumber',
            message: 'What is your office number?'
        }

    ])
    .then((response) => {
        const newEmployee =new Employee(response.teamName,response.Email,response.github,response.id,response.officeNumber)
        const html = teamProfile(response)
        fs.writeFile('profile.html', html, (err) =>
            err ? console.log(err) : console.log('Successfully created Team profile!')
        )
    });


