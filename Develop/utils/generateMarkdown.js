// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generateMarkdown = answers => {
`
# ${answers.title}

#description

${answers.descrption}

## Installation
${answers.installation}

## Usage

${answers.usage}






`
}



module.exports = generateMarkdown;
