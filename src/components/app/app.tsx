import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../pages/main/main";
import Post from "../../pages/post/post";
import styles from './app.module.scss'
import { useDispatch } from "../../services/hooks";
import { useEffect } from "react";
import { getPosts } from "../../services/actions/posts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [])
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />
    },
    {
      path: '/:postId',
      element: <Post />
    }
  ])
  return ( <div className={styles.app}>
    <RouterProvider router={router} />
  </div> );
}

export default App;
