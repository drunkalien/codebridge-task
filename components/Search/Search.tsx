import { useState } from "react";
import { TextField, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { addKeyword, selectKeyword } from "../../features/keyword/kewordSlice";

import { useDebounce } from "../../hooks";

import classes from "./search.module.scss";

type Props = {
  isLoading: boolean;
};

const Search = ({ isLoading }: Props) => {
  const keyword = useSelector(selectKeyword);
  const [val, setVal] = useState(keyword || "");
  const dispatch = useDispatch();

  useDebounce(
    () => {
      if (val !== "") dispatch(addKeyword(val));
    },
    1000,
    [val]
  );

  return (
    <div>
      <h3 className={classes.heading}>Filter by keywords:</h3>
      <div className={classes["search-container"]}>
        <TextField
          variant="outlined"
          label="Search"
          value={val}
          sx={{
            width: 500,
          }}
          onChange={(e: any) => setVal(e.target.value)}
        />
        <div className={classes.spinner}>
          {isLoading && <CircularProgress size={24} />}
        </div>
      </div>
    </div>
  );
};

export default Search;
