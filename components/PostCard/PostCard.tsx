import Highlighter from "react-highlight-words";
import { Card, CardContent } from "@mui/material";

import classes from "./postCard.module.scss";

type Props = {
  title: string;
  description: string;
  highlightedWords: string[];
};

const PostCard = ({ title, description, highlightedWords }: Props) => {
  return (
    <Card
      sx={{
        cursor: "pointer",
        height: "220px",
      }}
      variant="outlined"
    >
      <CardContent>
        <p className={classes.title}>
          <Highlighter searchWords={highlightedWords} textToHighlight={title} />
        </p>

        <p className={classes.desc}>Description:</p>
        <p>
          <Highlighter
            searchWords={highlightedWords}
            textToHighlight={
              description?.length < 100
                ? description
                : description?.slice(0, 100) + "..."
            }
          />
        </p>
      </CardContent>
    </Card>
  );
};

export default PostCard;
