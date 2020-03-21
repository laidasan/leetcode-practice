;(function() {
    let height = [1,8,6,2,5,4,8,3,7];
    
    function mostWater(height) {
        let left = 0;
        let right = height.length -1;
        let containHeight = 0;
        let containWidth = 0;
        let containArea = 0;
        
        while(left < right) {
            containWidth = right - left;
            containHeight = height[left] > height[right] ? height[right] : height[left];
            containArea = containArea > containWidth * containHeight ? containArea : containWidth * containHeight;
            if(height[left] <= height[right]) {
                left++;
            }else {
                right--;
            }
        }

        return containArea;
    }

    console.log(mostWater(height));
})();