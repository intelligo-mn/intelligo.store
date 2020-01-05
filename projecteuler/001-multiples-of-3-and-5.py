#!/bin/python3

import sys

def sumOfMultiples(n):
    a = sum( num for num in range(n) if num % 3 == 0 or num % 5 == 0 )
    return a

t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    print(sumOfMultiples(n))
