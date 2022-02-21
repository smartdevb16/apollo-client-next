import { useQuery, gql } from "@apollo/client"; 

import styles from '../styles/Home.module.css'
  
const GetPosts = gql`
    query getAllPosts {
        posts {
            id
            title
            description
        }
    }
`;

export default function Book() {
    const { loading, error, data } = useQuery(GetPosts);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {error.message}</p>;

    return(
        <div>
            <h1 className={styles.title}>
                Click to <a href="/">Home</a>
            </h1>

            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="border border-gray-300">id</th>
                        <th className="border border-gray-300">title</th>
                        <th className="border border-gray-300">description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.posts.map(({id, title, description}) => {
                            return(
                                <tr key={id}>
                                    <td className="border border-gray-300">{id}</td>
                                    <td className="border border-gray-300">{title}</td>
                                    <td className="border border-gray-300">{description}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}