import { RootState } from "../services/store";

export function checkResponse(res:Response):Promise<any> {
  return res.ok
    ? res.json()
    : Promise.reject(new Error("Ошибка при попытке получить данные"));
}

export const getPostsS = (s: RootState) => s.posts;
