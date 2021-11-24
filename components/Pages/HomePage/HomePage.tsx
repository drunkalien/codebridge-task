import { useEffect, useState } from "react";
import Link from "next/link";
import { CircularProgress, Link as MuiLink } from "@mui/material";
import { Container, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import Search from "../../Search";
import PostCard from "../../PostCard";
import { useFetch } from "../../../hooks";

import { selectKeyword } from "../../../features/keyword/kewordSlice";
import { selectPosts } from "../../../features/posts/postsSlice";
import { addPosts } from "../../../features/posts/postsSlice";
import { Article } from "../../../types/api";

const HomePage = () => {
  const dispatch = useDispatch();
  const keyword = useSelector(selectKeyword);
  const date = new Date().toISOString().slice(0, 10);
  const posts = useSelector(selectPosts);
  const { data, isLoading } = useFetch({
    url: "/",
    params: { q: keyword, from: date, sortBy: "popularity" },
    initialData: posts,
  });

  useEffect(() => {
    dispatch(addPosts(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const articles: Article[] = posts?.articles ? [...posts.articles] : [];

  function compare(article: Article) {
    if (article.title?.includes(keyword)) return -1;
    if (article.description?.includes(keyword)) return 1;
    return 0;
  }

  return (
    <Container>
      <Grid container>
        <Grid>
          <Grid item xs={12}>
            <Search isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        {posts &&
          articles
            .sort(compare)
            .map(({ title, description }: any, idx: number) => {
              return (
                <Grid item key={idx} xs={6}>
                  <Link href={`post/${idx}`} passHref>
                    <MuiLink color="#000" underline="none">
                      <PostCard
                        title={title}
                        description={description}
                        highlightedWords={keyword.split(" ")}
                      />
                    </MuiLink>
                  </Link>
                </Grid>
              );
            })}
      </Grid>
    </Container>
  );
};

export default HomePage;
