export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy: ListNode = new ListNode()
    let current: ListNode = dummy
    let carry: number = 0
    let next_l1: ListNode | null = l1
    let next_l2: ListNode | null = l2

    while (next_l1 !== null || next_l2 !== null || carry !== 0) {
        const v1: number = next_l1?.val ?? 0
        const v2: number = next_l2?.val ?? 0

        const sum: number = v1 + v2 + carry
        carry = Math.floor(sum / 10)

        current.next = new ListNode(sum % 10)
        current = current.next

        next_l1 = next_l1?.next ?? null
        next_l2 = next_l2?.next ?? null
    }

    return dummy.next
};