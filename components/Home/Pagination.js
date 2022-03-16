import Link from "next/link";

const Pagination = ({pages, page}) => {

    return (
        <nav aria-label="...">
            <ul className="pagination justify-content-center">

                <li className={`page-item ${page < 2 ? 'disabled' : ''}`}>
                    <Link href={`?page=${page - 1}`}>
                        <a className="page-link" tabIndex="-1">Previous</a>
                    </Link>
                </li>

                {[...Array(pages)].map((i, k) => (
                    <li className={`page-item ${k + 1 == page ? 'active' : ''}`} key={k}>
                        <Link href={`?page=${k + 1}`}>
                            <a className="page-link">
                                {k + 1}
                            </a>
                        </Link>
                    </li>
                ))}
                
                <li className={`page-item ${page >= pages ? 'disabled' : ''}`}>
                    <Link href={`?page=${page + 1}`}>
                        <a className="page-link">Next</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
