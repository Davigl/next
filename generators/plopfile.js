/* eslint-disable no-unused-expressions */
module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'rawlist',
        name: 'type',
        message: 'Select a component type!',
        choices: [
          {
            name: 'atom',
            value: 'atoms',
          },
          {
            name: 'molecule',
            value: 'molecules',
          },
          {
            name: 'organism',
            value: 'organisms',
          },
          {
            name: 'template',
            value: 'templates',
          },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{type}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{type}}/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{type}}/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
    ],
  })
}
