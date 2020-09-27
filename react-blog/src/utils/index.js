import { COLOR_LIST } from '../config';

export const randomIndex = arr => Math.floor(Math.random() * arr.length);

// 生成 color
export function genertorColor(list = [], colorList = COLOR_LIST) {
  const _list = [...list];
  _list.forEach((l, i) => {
    l.color = colorList[i] || colorList[randomIndex(colorList)];
  });
  return _list;
}
