import ctRequest from "..";

export function getEntireRoomListData(offset = 0, size = 20) {
  return ctRequest.get({
    url: '/entire/list',
    params: {
      offset,
      size
    }
  })
}