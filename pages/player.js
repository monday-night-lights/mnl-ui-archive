import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'
import { withRouter } from 'next/router'

const Player = withRouter((props) => (
    <Layout>
        <h1>{props.router.query.title}</h1>
    </Layout>
))



export default Player