import { FC, useState } from "react";
import { TPostsStatus } from "../../utils/types";
import Loader from "../loader/loader";

type TProps = React.ImgHTMLAttributes<HTMLImageElement>

const Image: FC<TProps> = (props) => {
  const [imageStatus, setImageStatus] = useState<TPostsStatus>('onload');

  const setSuccess = () => setImageStatus('success')

  const setError = () => setImageStatus('error')


  return ( <>
  <img {...props} onLoad={setSuccess} onError={setError}/>
  {imageStatus === 'onload' && <Loader />}
  </> );
}

export default Image;
