import inquirer from 'inquirer';
import fs from "fs";
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type : 'input',
      name : "name",
      message : "Whats your name ?",
      default : "Gethushan"
    },
    {
      type : 'input',
      name : "age",
      message : "How old are you ?",
      default : "18"
    },
    {
      type : 'list',
      name : "list_q",
      message : "What programming language do you like?",
      choices : ["JavaScript","C++","Python","Java"],
      default : "JavaScript"
    },
    {
      type : 'checkbox',
      name : "checkbox_q",
      message : "how many programming language do you know?",
      choices : ["JavaScript","C++","Python","Java"],
      default : "JavaScript"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const user = {
      id: 1,
      name: answers.input_type,
      age: answers.age,
      favoriteLanguages: answers.list_q,
      knownLanguages: answers.checkbox_q
    };
    
    const data = JSON.stringify(user);

    fs.writeFile("data.json", data, (error) => {

    if (error) {

    console.error(error);

    throw error;
  }

  console.log("data.json written correctly");
});
})
