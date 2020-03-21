; (function () {
    let commons = ['flower', 'flow', 'flight'];
    function logestCommonPrefix(strs) {
        if(strs.length === 0){return '';}
        let longestCommon = '';
        let count = 0;
        
        while(isSamePrefix(strs[0][count],count,strs)) {
            longestCommon += strs[0][count];
            count++;
        }

        function isSamePrefix(s,index,strs) {
            let isSame = true;
            let runtimes = 0;
            while(isSame && runtimes < strs.length) {
                if(s !== strs[runtimes][index]) {
                    isSame = false;
                }
                runtimes++;
            }
            return isSame;
        }
        return longestCommon;


        // let firstCommon = strs[0].split('');
        // while (strs.every((str) => str[count] === firstCommon[count])) {
        //     longestCommon += firstCommon[count];
        //     count++;
        // }


        // for(let i = 0;i < strs.length;i++) {
        //     for(let j = i + 1;j < strs.length;j++) {
        //         let now = strs[i].toLowerCase();
        //         let next = strs[j].toLowerCase();
        //         let longest = '';
        //         let count = 0;
        //         while(now[count] === next[count]){
        //             longest += now[count];
        //             count++;
        //         }
        //         longestCommon = longest.length > longestCommon.length ? longest : longestCommon;
        //     }
        // }

    }
    

    console.log(logestCommonPrefix(commons));
})();
