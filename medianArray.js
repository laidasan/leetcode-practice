;(function () {
    nums1 = [1,2];
    nums2 = [3,4];
    nums3 = [-2,-1];
    nums4 = [1];
    test=[];
    function findMedianSortedArrays(nums1,nums2) {
        // if(!nums1.legth !== 0 && !nums2.length !== 0) {
        //     console.log('cool');
        // }

        if(nums1.length === 0 && nums2.length === 0){return;}
        let ary = nums1.concat(nums2);
        ary.sort((a,b) => a - b);
        console.log(ary);
        let median = Math.floor(ary.length / 2);

        if(ary.length % 2 === 0) {
            return (ary[median] + ary[median - 1]) / 2;
        }else {
            return ary[median];
        }
    }
    console.log(findMedianSortedArrays(test,nums4));
})();