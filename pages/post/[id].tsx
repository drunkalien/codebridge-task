import { useRouter } from "next/dist/client/router";
import { Post } from "../../components";

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Post id={Number(id)} />;
};

export default PostPage;
