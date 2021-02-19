export default {
  widgets: [
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
                  buildHookId: '602fdf37567e983a7e7130f3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-yi7n938e',
                  apiId: '0700a879-65af-4cc3-9331-a610c5f2c184'
                },
                {
                  buildHookId: '602fdf37d52bff4b0b3ff14c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z1hpvf3b',
                  apiId: '141a78c8-3849-4531-9176-4a2ef0b9aea7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/roistyr/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z1hpvf3b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
