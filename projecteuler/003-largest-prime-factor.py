#!/bin/python3

import sys
import math

def smallestPrimeFactor(number):
    upperBound = int(math.sqrt(number)) + 1
    for i in range(2, upperBound):
        if number % i == 0:
            return i
    return number

def largestPrimeFactor(number):
    while True:
        small = smallestPrimeFactor(number)

        if small < number:
            number //= small
        else:
            return number

t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    print(largestPrimeFactor(n))
