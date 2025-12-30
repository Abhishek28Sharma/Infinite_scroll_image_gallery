import styles from '../styles/CardContainer.module.css'
import Card from './Card'
import ShimmerCard from './ShimmerCard.jsx'

const CardContainer = ({ imageData = [] }) => {
  return (
    <div className={styles['card-container']}>
      {imageData.length === 0 ? (
        <ShimmerCard />
      ) : (
        imageData.map((data) => <Card key={data.id} data={data} />)
      )}
    </div>
  )
}

export default CardContainer
