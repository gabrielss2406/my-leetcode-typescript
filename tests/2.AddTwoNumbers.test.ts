import { describe, test, expect } from 'vitest';
import { addTwoNumbers } from '../src/2.AddTwoNumbers';

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function arrayToList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    const dummy = new ListNode();
    let current = dummy;
    for (const num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

describe('addTwoNumbers', () => {
    test('deve retornar [7,0,8] para l1 = [2,4,3] e l2 = [5,6,4]', () => {
        const l1 = arrayToList([2, 4, 3]);
        const l2 = arrayToList([5, 6, 4]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([7, 0, 8]);
    });

    test('deve retornar [0] para l1 = [0] e l2 = [0]', () => {
        const l1 = arrayToList([0]);
        const l2 = arrayToList([0]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([0]);
    });

    test('deve retornar [8,9,9,9,0,0,0,1] para l1 = [9,9,9,9,9,9,9] e l2 = [9,9,9,9]', () => {
        const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
        const l2 = arrayToList([9, 9, 9, 9]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });
});