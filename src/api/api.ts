const seededRandom = function (seed: number): Function {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function (): number {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date: Date): string[] {
    let result: string[] = [];
    let random = seededRandom(date.getDate());

    for(let i: number = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) { // What? why do the same check here again?
            result.push(i + ':30');
        }
    }
    return result;
};

export const submitAPI = function(formData: any): boolean {
    return true;
};