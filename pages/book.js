import { useQuery, gql } from "@apollo/client"; 

import styles from '../styles/Home.module.css'
  
const GetBooks = gql`
    query getAllBooks {
        books {
            id
            title
            author
        }
    }
`;

export default function Book() {
    const { loading, error, data } = useQuery(GetBooks);
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
                        <th className="border border-gray-300">author</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.books.map(({id, title, author}) => {
                            return(
                                <tr key={id}>
                                    <td className="border border-gray-300">{id}</td>
                                    <td className="border border-gray-300">{title}</td>
                                    <td className="border border-gray-300">{author}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}