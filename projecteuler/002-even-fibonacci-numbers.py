#!/bin/python3
import sys

def fibonacci (limit):
    a, b = 0, 1
    fibSequence = []
    while b < limit:
        a, b = b, a + b
        fibSequence.append(a)

    return fibSequence

def sumEvenNumbers(sequence):
    return sum(num for num in sequence if num % 2 == 0 )

t = int(input().strip())

for a0 in range(t):
    n = int(input().strip())
    print(sumEvenNumbers(fibonacci(n)))
