import styles from '../styles/components/Profile.module.css';

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src='https://github.com/doglast.png' alt='Douglas Evangelista dos Santos'/>
      <div>
        <strong>Douglas Evangelista</strong>
        <p>Level 1</p>
      </div>
    </div>
  )
}