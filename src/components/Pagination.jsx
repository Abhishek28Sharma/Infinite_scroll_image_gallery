const PaginationUI = ({
  handleforwardPagination,
  handlebackwardPagination,
}) => {
  return (
    <>
      <style>{`
        .pagination {
          display: flex;
          gap: 10px;
          justify-content: center;
          align-items: center;
          margin: 30px 0;
          flex-wrap: wrap;
        }

        .page-btn {
          padding: 8px 14px;
          border-radius: 6px;
          border: 1px solid #ccc;
          background: #ffffff;
          cursor: pointer;
          font-size: 16px;
          color:black
        }

        .page-btn:hover {
          background: #f0f0f0;
        }

        .page-btn.active {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
        }

        .page-btn.disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      `}</style>

      <div className="pagination">
        {/* <button className="page-btn disabled">Prev</button>

        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button> */}
        <button className="page-btn" onClick={handlebackwardPagination}>
          Prev
        </button>
        <button className="page-btn" onClick={handleforwardPagination}>
          Next
        </button>
      </div>
    </>
  )
}

export default PaginationUI
