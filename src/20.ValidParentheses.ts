const closingBracket: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}'
};

export function isValid(s: string): boolean {
    const len = s.length
    const nextFields: string[] = []
    nextFields.push(closingBracket[s[0]])

    for (let i = 1; i < len; i++) {
        const closing = closingBracket[s[i]]
        const char = s[i]

        if (closing)
            nextFields.push(closingBracket[s[i]])
        else {
            const last = nextFields.pop()
            if (last !== char)
                return false;
        }
    }

    return nextFields.length === 0;
};