import Link from 'next/link';
import styles from '../styles/BlogCard.module.css';
export default function BlogPost({title, author,coverPhoto,datePublished,slug}){
   return(
    <div className={styles.card}>
        <Link href={"/posts/" + slug}>
        <div className={styles.imgContainer}>
            <img src = "https://media.graphassets.com/A4JJ1zniT2qyUVfqw8LO"  alt="" />
        </div>
        </Link>
        <div className={styles.text}>
            <h2>{title}</h2>
            <div className={styles.details}>
                <div className={styles.author}>
                    <img src="https://media.graphassets.com/sM1LqDxTwa3cKuNEEFql" alt="" />
                    <h3>{author.name}</h3>
                </div>
                <div className={styles.date}>
                   <h3>{datePublished}</h3> 
                </div>

            </div>
        </div>
    </div>
   );
}