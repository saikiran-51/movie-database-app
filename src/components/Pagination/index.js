import './index.css'

const Pagination = props => {
  const {page, setPage} = props

  const onClickPrevPage = () => {
    if (page > 1) {
      setPage(prev => prev - 1)
    }
  }

  const onClickNextPage = () => {
    setPage(prev => prev + 1)
  }

  return (
    <div className="pagination-container">
      <button
        type="button"
        className="pagination-button"
        onClick={onClickPrevPage}
      >
        Prev
      </button>

      <p className="page-number">{page}</p>

      <button
        type="button"
        className="pagination-button"
        onClick={onClickNextPage}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
