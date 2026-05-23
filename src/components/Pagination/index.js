import './index.css'

const Pagination = props => {
  const {page, setPage, totalPages} = props

  const onClickPrevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const onClickNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  return (
    <div className="pagination-container">
      <button
        type="button"
        onClick={onClickPrevPage}
        disabled={page === 1}
        className="pagination-button"
      >
        Prev
      </button>

      <p className="page-number">{page}</p>

      <button
        type="button"
        onClick={onClickNextPage}
        disabled={page === totalPages}
        className="pagination-button"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
