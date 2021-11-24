import { useSelector } from "react-redux";
import Link from "next/link";
import { Container, Link as MuiLink } from "@mui/material";

import { selectPosts } from "../../../features/posts/postsSlice";
import { useRouter } from "next/router";

const Post = () => {
  const posts = useSelector(selectPosts);
  const router = useRouter();
  const { id } = router.query;
  const idx = parseInt(id as string);

  return (
    <Container>
      <h2>{posts?.articles[idx]?.title}</h2>
      <strong>{posts?.articles[idx]?.description}</strong>
      <p>{posts?.articles[idx]?.content}</p>
      <Link href="/" passHref>
        <MuiLink color="#2832c2" underline="none">
          {"<"} Go Back
        </MuiLink>
      </Link>
    </Container>
  );
};

export default Post;
