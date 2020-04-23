// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3


// 先把所有的1搜索出來
// 再從所有的是1的point 上 下 左 右 是不是1 , 是的話就是一直往下搜索 , 搜索到沒有1了 , 就代表那是某一個島的所有點
// 直時搜尋到所有的1都搜索完畢
function Point(x,y) {
    this.x = x
    this.y = y
}

var numIslands = function(grid) {
    if(grid.length === 0) return 0
    // islands => 所有島嶼與該島的points , islandPoints => 所有是1的point , islandNO => 島嶼編號
    let islands = {0:[]} , islandPoints = [] , islandNO = 0
    
    for(let i = 0 ; i < grid.length ; i++) {
        for(let j = 0 ; j < grid[i].length ; j++){
            if(grid[i][j] === '1') islandPoints.push([i,j])
        }
    }
    // find all island point
    islandPoints = islandPoints.map(point => new Point(point[1],point[0])) 
    if(islandPoints.length === 0) return 0
    
    // 從所有的 islandPoints(是1的point)
    while(islandPoints[0]) {
        islands[islandNO] ? '' : islands[islandNO] = []  // 如果該編號島嶼還不存在 , 就新增
        islands[islandNO].push(islandPoints[0])  // 先把要準備搜索最初的點推進島嶼
        findIsland(islandPoints[0],islandPoints,islands,islandNO)  // 開始搜索
        islandNO++ // 搜索完畢 , 編號 + 1
    }

    return Object.keys(islands).length
};


function findIsland(point,islandPoints,islands,islandNO) {
    // 如果該點還沒被push 進islands , 就push進
    let pointInAryIndex = findPointIndex(point,islandPoints)
    pointInAryIndex !== -1 ? islandPoints.splice(pointInAryIndex,1) : ''
    
    // 上 下 左 右 up down left right points
    let upPoint = new Point(point.x , point.y - 1)
    let downPoint = new Point(point.x , point.y + 1)
    let leftPoint  = new Point(point.x - 1 , point.y)
    let rightPoint = new Point(point.x + 1 , point.y)
    let points = [upPoint,downPoint,leftPoint,rightPoint]

    // havePoints => check這些點是不是1(從islandPoints找就知道了)
    let havePoints = points.map(thispoint => findPoint(thispoint,islandPoints))
    // 是1的話就push到 islands
    havePoints.forEach(point => {
        point ? islands[islandNO].push(point) : ''
        point ? islandPoints.splice(findPointIndex(point,islandPoints),1) : ''
    })
    // 是1的話就就繼續往下搜索
    havePoints.forEach(point => point ? findIsland(point,islandPoints,islands,islandNO) : '')
}


function findPoint(point,islandPoints) {
    return islandPoints.find(thispoint => point.x === thispoint.x  && point.y === thispoint.y)
}
function findPointIndex(point,islandPoints) {
    return islandPoints.findIndex(thispoint => point.x === thispoint.x  && point.y === thispoint.y)
}

// function checkPoint(point) {
//     let upPoint = new Point(point.x , point.y - 1)
//     let downPoint = new Point(point.x , point.y + 1)
//     let leftPoint  = new Point(point.x - 1 , point.y)
//     let rightPoint = new Point(point.x + 1 , point.y)
//     let checkPoints = [upPoint,downPoint,leftPoint,rightPoint]
//     let i = 0 , j = 0 , result = false , nowIslands = Object.keys(islands).length
//     while(!result && i < nowIslands) {
//         while(!result && j < islands[i].length) {
//             let upResult = upPoint.x === islands[i][j].x && upPoint.y === islands[i][j].y
//             let downResult = downPoint.x === islands[i][j].x && downPoint.y === islands[i][j].y
//             let leftResult = leftPoint.x === islands[i][j].x && leftPoint.y === islands[i][j].y
//             let rightResult = rightPoint.x === islands[i][j].x && rightPoint.y === islands[i][j].y

//             upResult || downResult || leftResult || rightResult ? result = true : ''
//             j++
//         }
//         i++
//         j = 0
//     }
//     i = i - 1
    
//     if(result) {
//         let upIndex = islandPoints.findIndex(thispoint => thispoint.x === upPoint.x && thispoint.y === upPoint.y)
//         let downIndex = islandPoints.findIndex(thispoint => thispoint.x === downPoint.x && thispoint.y === downPoint.y)
//         let leftIndex = islandPoints.findIndex(thispoint => thispoint.x === leftPoint.x && thispoint.y === leftPoint.y)
//         let rightIndex = islandPoints.findIndex(thispoint => thispoint.x === rightPoint.x && thispoint.y === rightPoint.y)
//         let findPointResults = [upIndex,downIndex,leftIndex,rightIndex]
//         findPointResults.forEach( (result,index) => {
//             if(result !== -1) {
//                 islands[i].push(checkPoints[index])
//                 islandPoints.splice(result,1)
//             }
//         })
        
//     }
    
//     return {result : result , index : i}
// }








// function Point(x,y) {
//     this.x = x
//     this.y = y
// }

// var numIslands = function(grid) {
//     if(grid.length === 0) return 0
//     let islands = {0:[]} , islandPoints = [] , islandNO = 0
    
//     for(let i = 0 ; i < grid.length ; i++) {
//         for(let j = 0 ; j < grid[i].length ; j++){
//             if(grid[i][j] === '1') islandPoints.push([i,j])
//         }
//     }
//     // find all island point
//     islandPoints = islandPoints.map(point => new Point(point[1],point[0])) 
//     if(islandPoints.length === 0) return 0
//     // console.log(islandPoints)
    
//     // search islands
//     while(islandPoints[0]) {
//         let point = islandPoints[0]
//         // check point connect or not
//         let check = checkPointConnect(point, islands,islandPoints,grid)
//         // console.log(check)
//             if (!check.result) {
                
//                 islands[islandNO] = []
//                 islands[islandNO].push(point)
//                 islandPoints.splice(0, 1)
//                 let dePoint = new Point(point.x, point.y + 1)

//                 //先找深度
//                 while (islandPoints.find((thispoint, index) => thispoint.y === dePoint.y && thispoint.x === dePoint.x)) {
//                     let findPoint = islandPoints.find((thispoint, index) => thispoint.y === dePoint.y && thispoint.x === dePoint.x)
//                     islands[islandNO].push(findPoint)
//                     islandPoints.splice(islandPoints.findIndex(thispoint => thispoint.x === findPoint.x && thispoint.y === findPoint.y), 1)
//                     dePoint = new Point(dePoint.x, dePoint.y + 1)
//                 }

//                 //再找隔壁
//                 islands[islandNO].forEach((point, index) => {
//                     let hPoint = new Point(point.x + 1, point.y)
//                     while (islandPoints.find(thispoint => thispoint.x === hPoint.x && thispoint.y === hPoint.y)) {
//                         let findPoint = islandPoints.find((thispoint, index) => thispoint.y === hPoint.y && thispoint.x === hPoint.x)
//                         islands[islandNO].push(findPoint)
//                         islandPoints.splice(islandPoints.findIndex(thispoint => thispoint.x === findPoint.x && thispoint.y === findPoint.y), 1)
//                         hPoint = new Point(hPoint.x + 1, hPoint.y)
//                     }
//                 })
//                 islandNO++
//             } else {
//                 // console.log('point is already connect another island')
//                 islands[check.index].push(point)
//                 islandPoints.splice(0, 1)
//             }
//     }
    

//     console.log('all islands',islands)
//     // console.log('islands points',islandPoints)
    
//     return Object.keys(islands).length
// };


// function checkPointConnect(point,islands,islandPoints,grid) {
    
//     let upPoint = new Point(point.x , point.y - 1)
//     let downPoint = new Point(point.x , point.y + 1)
//     let leftPoint  = new Point(point.x - 1 , point.y)
//     let rightPoint = new Point(point.x + 1 , point.y)
//     let checkPoints = [upPoint,downPoint,leftPoint,rightPoint]
//     let k = point.y + 1 , i = 0 , j = 0 , result = false , nowIslands = Object.keys(islands).length
    
//     let nextDown = new Point(point.x , point.y + 1)
//     let connect = false
//     if(nextDown.y < grid.length) {
//         connect = grid[nextDown.y][nextDown.x] === '1' ? true : false
//     }
//     while(!result && connect && k < grid.length) {
//         // console.log('enter check')
//         // let nextDown = new Point(point.x , point.y + 1)
//         while(!result && j < nowIslands) {
//             let isfind = islands[j].find(thispoint => nextDown.x === thispoint.x && nextDown.y === thispoint.y)
//             isfind ? result = true : ''
//             isfind ? i = j : ''
//             j++
//         }
//         nextDown.y = nextDown.y + 1
//         k++
//         j = 0
//     }
//     // console.log(result)
//     if(result) return {result:result , index : i}
    
//     i = 0 , j = 0
//     while(!result && i < nowIslands) {
//         while(!result && j < islands[i].length) {
//             let upResult = upPoint.x === islands[i][j].x && upPoint.y === islands[i][j].y
//             let downResult = downPoint.x === islands[i][j].x && downPoint.y === islands[i][j].y
//             let leftResult = leftPoint.x === islands[i][j].x && leftPoint.y === islands[i][j].y
//             let rightResult = rightPoint.x === islands[i][j].x && rightPoint.y === islands[i][j].y

//             upResult || downResult || leftResult || rightResult ? result = true : ''
//             j++
//         }
//         i++
//         j = 0
//     }
//     i = i - 1
    
//     if(result) {
//         let upIndex = islandPoints.findIndex(thispoint => thispoint.x === upPoint.x && thispoint.y === upPoint.y)
//         let downIndex = islandPoints.findIndex(thispoint => thispoint.x === downPoint.x && thispoint.y === downPoint.y)
//         let leftIndex = islandPoints.findIndex(thispoint => thispoint.x === leftPoint.x && thispoint.y === leftPoint.y)
//         let rightIndex = islandPoints.findIndex(thispoint => thispoint.x === rightPoint.x && thispoint.y === rightPoint.y)
//         let findPointResults = [upIndex,downIndex,leftIndex,rightIndex]
//         findPointResults.forEach( (result,index) => {
//             if(result !== -1) {
//                 islands[i].push(checkPoints[index])
//                 islandPoints.splice(result,1)
//             }
//         })
        
//     }
    
//     return {result : result , index : i}
// }