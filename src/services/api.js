import ctRequest from "./index";

export function getEnText(type) {
  return ctRequest.get({
    url: `/api/en?type=${type}`
  })
}