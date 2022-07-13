namespace EvenNumberChecker{

    export function CheckEven(num:number):boolean
    {
        const result = !! (num % 2);
        return result;
    }
}
