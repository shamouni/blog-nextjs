import Link from "next/link";

interface IPaginationProps {
  pages: number;
  page: number;
}

const Pagination = ({ pages, page }: IPaginationProps) => {
  if (pages <= 1) return null;

  return (
    <nav aria-label="Pagination">
      <ul className="pagination justify-content-center">
        {/* Previous button */}
        <li className={`page-item ${page <= 1 ? "disabled" : ""}`}>
          <Link
            href={`?page=${page - 1}`}
            className="page-link"
            tabIndex={page <= 1 ? -1 : 0}
            aria-disabled={page <= 1}
          >
            Previous
          </Link>
        </li>

        {/* Page numbers */}
        {Array.from({ length: pages }, (_, k) => (
          <li
            key={k}
            className={`page-item ${k + 1 === page ? "active" : ""}`}
            aria-current={k + 1 === page ? "page" : undefined}
          >
            <Link href={`?page=${k + 1}`} className="page-link">
              {k + 1}
            </Link>
          </li>
        ))}

        {/* Next button */}
        <li className={`page-item ${page >= pages ? "disabled" : ""}`}>
          <Link
            href={`?page=${page + 1}`}
            className="page-link"
            tabIndex={page >= pages ? -1 : 0}
            aria-disabled={page >= pages}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
