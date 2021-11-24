import { useRouter } from "next/dist/client/router";
import { Post } from "../../components";

const PostPage = () => {
  const router = useRouter();

  return <Post id={parseInt(router.query?.id as string)} />;
};

export default PostPage;
