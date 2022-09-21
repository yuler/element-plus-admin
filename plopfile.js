// @ignore-ts
// https://plopjs.com

const required = name => v =>
  !v || v.trim() === '' ? `${name} is required` : true

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('page', {
    description: 'Create a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name:',
        validate: required('name'),
      },
    ],
    actions: data => {
      const {name} = data
      return [
        {
          type: 'add',
          path: `src/pages/${name}.vue`,
          templateFile: 'plop-templates/page.hbs',
          data: {
            name,
          },
        },
      ]
    },
  })
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
        validate: required('name'),
      },
    ],
    actions: data => {
      const {name} = data
      return [
        {
          type: 'add',
          path: `src/components/${name}.vue`,
          templateFile: 'plop-templates/component.hbs',
          data: {
            name,
          },
        },
      ]
    },
  })
}
