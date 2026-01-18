export function twoSum(nums: number[], target: number): number[] {
    const visiteds = {
        [nums[0]]: 0
    }

    for (let i = 1; i < nums.length; i++) {
        const missing_value = visiteds[target - nums[i]]
        if (missing_value != undefined)
            return [missing_value, i]
        visiteds[nums[i]] = i
    }
    return [];
};