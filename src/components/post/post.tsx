import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './post.module.scss'
import TrashIcon from '../../images/trash.svg';
import LikeIcon from '../../images/like.svg'
import { TPost } from '../../utils/types';
import { useDispatch } from '../../services/hooks';
import { postsActions } from '../../services/reducers/posts';

const Post: FC<TPost> = ({id, title, author, content, reaction, image}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openPost = () => {
    navigate(`/${id}`)
  }

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(postsActions.toggleLike(id))
  }

  const removeCard = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(postsActions.removePost(id))
  }

  return ( <article onClick={openPost} className={styles.card}>
    <div className={styles['image-container']}>
      <img loading='lazy' className={styles.image} src={image}/>
    </div>
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.author}>{author}</span>
      <p className={styles.text}>{content}</p>
      <button type="button" onClick={removeCard} className={styles.trash}><TrashIcon /></button>
    </div>
    <button type="button" onClick={toggleLike} className={`${styles.like} ${reaction ? styles.active : ''}`}><LikeIcon /></button>
  </article> );
}

export default Post;
