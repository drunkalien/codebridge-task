import { useState, useEffect } from "react";
import { AxiosResponse, AxiosError } from "axios";

import request from "../api/request";

type Params = {
  q?: string;
  from?: string;
  sortBy?: string;
};

type Args = {
  url: string;
  params?: Params;
  initialData?: any;
};

const useFetch = ({ url, params = {}, initialData = null }: Args) => {
  const [data, setData] = useState<any>(initialData);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const fetchData = () => {
    request
      .get(url, { params })
      .then((response: AxiosResponse) => {
        setData(response.data);
        setIsloading(false);
      })
      .catch((err: AxiosError) => setError(err));
  };

  useEffect(() => {
    if (params.q) {
      setIsloading(true);
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, params.q]);

  return { data, isLoading, error };
};

export default useFetch;
