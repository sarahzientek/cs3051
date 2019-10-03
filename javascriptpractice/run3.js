var fib = function (num)
{
  if (num<2)
  {
    return num;
  }
  else
  {
   return fib(n-1) + fib(n-2)
  }
};

 console.log(fib(5));