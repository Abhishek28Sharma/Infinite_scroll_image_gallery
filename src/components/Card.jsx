import styles from '../styles/Card.module.css'

const Card = ({ data }) => {
  return (
    <div className={styles['card-container']}>
      <div className={styles['image-container']}>
        <img src={data.download_url} />
      </div>
      <p>{data.author}</p>
    </div>
  )
}

export default Card
