export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e17c99a747c8e01a9bdc356',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qo5u5goj',
                  apiId: '1ac156c3-6cfd-4bb2-a867-168e1c50e53b'
                },
                {
                  buildHookId: '5e17c99aa1d9ee01daf0c320',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tq5pumqq',
                  apiId: '8ba4af12-5ab3-4a6d-8cb2-84544a683a12'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fcongson/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tq5pumqq.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
