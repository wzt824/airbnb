import ctRequest from "..";

// 高分好评房源
export function getHomeGoodPriceData() {
  return ctRequest.get({
    url: '/home/goodprice'
  })
}

// 高性价比房源
export function getHomeHighScoreData() {
  return ctRequest.get({
    url: '/home/highscore'
  })
}

// 探索精彩之地
export function getHomeDiscountData() {
  return ctRequest.get({
    url: '/home/discount'
  })
}

// 热门目的地
export function getHomeHotRecommendData() {
  return ctRequest.get({
    url: '/home/hotrecommenddest'
  })
}

// 可能想去的地方
export function getHomeLongforData() {
  return ctRequest.get({
    url: '/home/longfor'
  })
}

// plus
export function getHomePlusData() {
  return ctRequest.get({
    url: '/home/plus'
  })
}