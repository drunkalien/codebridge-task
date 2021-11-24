import { useSelector } from "react-redux";
import Link from "next/link";
import { Container, Link as MuiLink } from "@mui/material";

import { selectPosts } from "../../../features/posts/postsSlice";

type Props = {
  id: number;
};

const Post = ({ id }: Props) => {
  const posts = useSelector(selectPosts);
  return (
    <Container>
      <h2>{posts?.articles[id]?.title}</h2>
      <strong>{posts?.articles[id]?.description}</strong>
      <p>{posts?.articles[id]?.content}</p>
      <Link href="/" passHref>
        <MuiLink color="#2832c2" underline="none">
          {"<"} Go Back
        </MuiLink>
      </Link>
    </Container>
  );
};

export default Post;
