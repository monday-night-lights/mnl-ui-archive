import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'
import { withRouter } from 'next/router'

const Player = withRouter((props) => (
    <Layout>
        <h1>{props.router.query.firstname} {props.router.query.lastname}</h1>
        <h2>#{props.router.query.number} - {props.router.query.team} - {props.router.query.position}</h2>
    </Layout>
))

export default Player