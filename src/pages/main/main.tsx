import { useState } from "react";
import { useSelector } from "../../services/hooks";
import { getPostsS } from "../../utils";
import Post from "../../components/post/post";
import LikeIcon from "../../images/like.svg";
import styles from "./main.module.scss";

const Main = () => {
  const { data } = useSelector(getPostsS);
  const [likeFilter, setLikeFilter] = useState(false);

  const toggleFilter = () => {
    setLikeFilter(!likeFilter)
  }

  const posts = data.filter(item => !likeFilter || item.reaction).map(item => <Post key={item.id} {...item} />)
  return ( <div className={styles.content}>
      <section className={styles.header}>
        <button type="button" onClick={toggleFilter} className={`${styles['liked-filter']} ${likeFilter ? styles['active'] : ''}`}>
          <LikeIcon />
          <span className={styles['liked-filter__text']}>toggle</span>
        </button>
      </section>
      <section className={styles.posts}>{posts}</section>
    </div> );
}

export default Main;
