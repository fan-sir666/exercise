
// 交叉类型 & 多用于两个类型的合并, 而 | 联合类型用于 一个类型可存在多种情况

type PartialPointX = { x: number; };
type Point = PartialPointX & { y: number; };

let point: Point = {
  x: 1,
  y: 1
} 
