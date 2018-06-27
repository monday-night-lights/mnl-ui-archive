import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

function getPlayers() {
    return [
        {
            'id': 1,
            'firstname': 'Jeremy',
            'lastname': 'Drager',
            'team': 'Nordiques',
            'number': 22,
            'position': 'D'
        },
        {
            'id': 2,
            'firstname': 'Justin',
            'lastname': 'Wright',
            'team': 'Wheeling Taylors',
            'number': 11,
            'position': 'F'
        },
        {
            id: 3,
            'firstname': 'Troy',
            'lastname': 'Otto',
            'team': 'North Stars',
            'number': 29,
            'position': 'F'
        },
        {
            id: 4,
            'firstname': 'Ryan',
            'lastname': 'Allen',
            'team': 'Americans',
            'number': 43,
            'position': 'F'
        },
        {
            id: 5,
            'firstname': 'Jeremy',
            'lastname': 'Coan',
            'team': 'Shakes',
            'number': 70,
            'position': 'G'
        }
    ]
}


export default () => (
    <Layout>
        <h1>MNL Players</h1>
        <ul>
            {getPlayers().map((player) => (
                <li key={player.id}>
                    <Link as={`/p/${player.id}`} href={`/player?id=${player.id}&firstname=${player.firstname}&lastname=${player.lastname}&position=${player.position}&team=${player.team}&number=${player.number}`}>
                        <a>{player.firstname} {player.lastname}</a>
                    </Link>
                    <div>
                        <span>{player.position}</span> - <span>#{player.number} {player.team}</span>
                    </div>
                </li>
            ))}
        </ul>
        <style jsx>{`
            h1, a {
                font-family: 'Arial';
            }
        `}</style>
    </Layout>

) 