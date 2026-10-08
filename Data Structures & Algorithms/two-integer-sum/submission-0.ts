class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let seen : Map<number, number> = new Map<number, number>();

        for (let i: number = 0; i < nums.length; i++){
            if (seen.has(target - nums[i])){
                const indexCalc : number = seen.get(target - nums[i])!;

                return [i, indexCalc]
            }

            seen.set(nums[i], i);
        }
    }
}
