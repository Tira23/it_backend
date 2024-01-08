interface ICounts{
    id: number
    count: number
}
export let arrayCounts:ICounts[] = [{
    id: 1,
    count: 42
}]
export function update (arr:ICounts[]) {
    arrayCounts = arr
}
