class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const conjunto : Set<number> = new Set<number>();

        for(let i : number = 0; i < nums.length; i++){
            if (conjunto.has(nums[i])){
                return true;
            }

            conjunto.add(nums[i]);
        }

        return false;
    }
}
