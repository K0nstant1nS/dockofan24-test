import styles from './post.module.scss';
import BackIcon from '../../images/back.svg';
import { useSelector } from 'react-redux';
import { getPostsS } from '../../utils';
import { useNavigate, useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams()
  const navigate = useNavigate();
  const post = useSelector(getPostsS).data.find(item => item.id === postId)

  const goBack = () => {
    navigate('/')
  }

  if(!post) {
    goBack()
    return <></>
  }

  return ( <div className={styles.root}>
    <button type="button" onClick={goBack} className={styles.back}><BackIcon /></button>
    <img className={styles.image} src={post.image} />
    <div className={styles['text-content']}>
      <h1 className={styles.title}>{post.title}</h1>
      <h3 className={styles.author}>{post.author}</h3>
      <hr/>
      <p className={styles.text}>{post.content}</p>
    </div>
  </div> );
}

export default Post;
