class Father{
    addTwo(){
        a=10;
        b=20;
        console.log(a + '+' + b + '=' + a+b);
    }
}

class Son extends Father{
    addTwo(){
        a=10;
        b=20;
        console.log(a + '*' + b + '=' + a * b);

    }
}