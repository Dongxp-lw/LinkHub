/**
 * 从给定数组复制固定位数的数组。注：1、没有副作用  2、数组项是浅拷贝。
 * @param list - 源数组
 * @param startIndex - 从源数组的何处开始
 * @param num - 复制多少位
 * @param fill - 可选，返回当源数组不够时的填充值的函数
 * @returns 复制的数组
 */
export function arraySlice<T>(list: Array<T>, startIndex: number = 0, num: number = list.length, fill?: (index: number) => T): Array<T> {
    const overflow = startIndex + num - list.length;
    const endIndex = overflow < 0 ? startIndex + num - 1 : list.length - 1;
    let arr = [...list.slice(startIndex, endIndex+1)];

    if (fill && overflow > 0) {
        for (let i = 0; i < overflow; i++) {
            arr.push(fill(i))
        }
    }
    return arr;
}

