import axios from "axios";
import { useQuery } from "react-query";
import { Instagram, QueryParamsType } from "@framework/types";

const INSTAGRAM_TOKEN =
  process.env.NEXT_PUBLIC_INSTAGRAM_BASIC_DISPLAY_USER_TOKEN;
const INSTAGRAM_URL = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=${INSTAGRAM_TOKEN}`;

const fetchInstagram = ({ queryKey }: QueryParamsType) => {
  const [_key, params]: any = queryKey;

  const { limit = 3 } = params as { limit: number };

  // Check token available or not
  if (!INSTAGRAM_TOKEN) return [];

  const urlWithParams = `${INSTAGRAM_URL}&limit=${limit}`;

  return axios
    .get(urlWithParams)
    .then((res) => res?.data)
    .then((data) => data?.data);
};

export function useInstagram(options: { limit: number }) {
  return useQuery<Instagram[], Error>(
    [INSTAGRAM_URL, options],
    fetchInstagram,
    {
      // To Prevent Instagram Expire Request
      staleTime: 60 * 60 * 1000,
    }
  );
}
