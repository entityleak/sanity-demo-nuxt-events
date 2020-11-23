export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-demo-nuxt-events-studio',
                  apiId: '6e6aca18-97ef-49d5-ab4a-069fa7ff2e83'
                },
                {
                  buildHookId: '5fbb84b9d05eed71833ef681',
                  title: 'Events Website',
                  name: 'sanity-demo-nuxt-events',
                  apiId: '9ac1ab58-bcfa-4344-a9d4-ec6a1f1249b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/entityleak/sanity-demo-nuxt-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-demo-nuxt-events.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
