import { useRouter } from "next/dist/client/router";
import { Post } from "../../components";

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return id && <Post id={parseInt(id as string)} />;
};

export default PostPage;
