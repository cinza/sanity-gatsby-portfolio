export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ebebf7e58e87801f84bb2c7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6tzwo3rz',
                  apiId: '2313b24e-d780-415c-8697-08aad68a271b'
                },
                {
                  buildHookId: '5ebebf7ee740ce01d71ec912',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cb7u18eh',
                  apiId: 'faf6a390-0a9f-4e81-8251-83ddf0e62875'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cinza/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-cb7u18eh.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
