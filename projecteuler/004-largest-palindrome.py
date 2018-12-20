#!/bin/python3

import sys

def maxPalindrome():
    palindrome = 0
    maxPalindrome = 0
    N = n//1000
    for i in range(N,1000,1):
        for j in range(100,1000,1):
            palindrome = i*j
            if(str(palindrome) == str(palindrome)[::-1]):
                if (palindrome)<n:
                    if maxPalindrome < palindrome:
                        maxPalindrome = palindrome
    return maxPalindrome

t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())

    print(maxPalindrome())
