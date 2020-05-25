export const getPostUrl = post => post.node.frontmatter.url ? `/blog/${post.node.frontmatter.url}` : '/404'
