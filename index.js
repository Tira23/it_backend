function search(arr, targetSum) {
    const curObj = {}
    const result = [-1,-1]

    arr.forEach((el,i) => {
        const findEl = targetSum - el
        if(curObj[el]){
            console.log('click')
            result[0] = curObj[findEl]
            result[1] = i
            return;
        }
        curObj[findEl] = i
    })

    return result;
}

console.log(search([1, 2, 3, 4, 6], 6));
