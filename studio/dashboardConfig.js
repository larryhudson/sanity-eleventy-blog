export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '62468503f29dad0f5d2d8578',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ihm3jm2w',
                  apiId: '0579da6d-f930-4ddf-b0e9-e880f155c132'
                },
                {
                  buildHookId: '62468503a31efe182724b025',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-tsj5ji1a',
                  apiId: 'b5dbd69d-62bc-4f3b-b716-2af022691141'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/larryhudson/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-tsj5ji1a.netlify.app', category: 'apps'}
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
