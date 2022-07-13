namespace EvenNumberChecker{

/**
 *  Checks if a number is even
 */

//% blockID = CheckIfANumberIsEven
//% block = "Check if number is even"
    export function CheckEven(num:number):boolean
    {
        const result = !! (num % 2);
        return result;
    }
}
