const ShimmerCardList = () => {
  return (
    <>
      <style>{`
        .shimmer-container {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .card-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 300px;
          height: 320px;
          border-radius: 10px;
          overflow: hidden;
          align-items: center;
          background: #fff;
        }

        .image-container {
          width: 100%;
          height: 70%;
          border-radius: 10px;
        }

        .text {
          width: 60%;
          height: 24px;
          border-radius: 6px;
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            #e0e0e0 25%,
            #f5f5f5 37%,
            #e0e0e0 63%
          );
          background-size: 400% 100%;
          animation: shimmer 1.4s ease infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>

      <div className="shimmer-container">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div className="card-container" key={index}>
              <div className="image-container shimmer"></div>
              <div className="text shimmer"></div>
            </div>
          ))}
      </div>
    </>
  )
}

export default ShimmerCardList
