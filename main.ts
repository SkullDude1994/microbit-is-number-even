/**
 * Custom blocks
 */
//% weight=1000 color=#20bd93
namespace EvenNumberChecker{

    /**
     *  Checks if a number is even
     */

    //% blockID = CheckIfANumberIsEven
    //% block = "Check if number is even"
    export function CheckEven(num:number):boolean
    {
        let result = false;
        let value = num % 2;
        if(value === 0)
        {
            result = true;
        }
        return result;
    }
}
