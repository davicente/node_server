let SIMPLE_ARRAY: string[];
const simpleArrayContent = process.env.SIMPLE_ARRAY || '';        
if (simpleArrayContent) {
    SIMPLE_ARRAY = simpleArrayContent.split(',');
}

export function append(start: string = '', end: string = ''): string[] {
    const simpleArray = [...SIMPLE_ARRAY];
    if(start) simpleArray.unshift(start);
    if(end) simpleArray.push(end);
    return simpleArray;
};
