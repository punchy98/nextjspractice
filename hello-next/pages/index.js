import Header from '../components/Header'
import Layout from '../components/MyLayout'
import Link from 'next/link'


const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-next.js" title="Hello Next.js"/>
      <PostLink id="learn-next.js"title="Learn Next.js is awesome"/>
      <PostLink id="deploy-next.js"title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)
