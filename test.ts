// tests go here; this will not be compiled when this package is used as an extension.


function test25IsEven():boolean
{
    let num = 24;
    let expectedResult = true;
    let result = EvenNumberChecker.CheckEven(num);
    if (result === expectedResult)
    {
        return true
    }
    return false;
}

test25IsEven() ? led.plot(0,0) : led.unplot(0,0);
