import ctRequest from "..";

export function getHomeGoodPriceData() {
  return ctRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return ctRequest.get({
    url: '/home/highscore'
  })
}