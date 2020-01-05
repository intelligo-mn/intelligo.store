#!/bin/python3

import sys

def isPalindrome(n):
    temp=n
    rev=0
    while(n>0):
        dig=n%10
        rev=rev*10+dig
        n=n//10
    return(temp==rev)

def factorsOfNumber(x):
    factors = []
    for i in range(1, x + 1):
        if x % i == 0:
            factors.append(i)
    return(factors)

t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    x = ((n-1)//11)*11
    threeDigitFactors = "FALSE"
    while x > 0:
        if isPalindrome(x):
            factors = factorsOfNumber(x)
            factors_100 = [i for i in factors if i >= 100 and i < 1000]
            for j in range (0,len(factors_100)):
                if x//factors_100[j] >= 100 and x//factors_100[j] < 1000: threeDigitFactors = "TRUE"
        if threeDigitFactors == "TRUE": break
        x -= 11
    print(x)

#!/bin/python3
#
# import sys
#
# def maxPalindrome():
#     palindrome = 0
#     maxPalindrome = 0
#     N = n//1000
#     for i in range(N,1000,1):
#         for j in range(100,1000,1):
#             palindrome = i*j
#             if(str(palindrome) == str(palindrome)[::-1]):
#                 if (palindrome)<n:
#                     if maxPalindrome < palindrome:
#                         maxPalindrome = palindrome
#     return maxPalindrome
#
# t = int(input().strip())
# for a0 in range(t):
#     n = int(input().strip())
#
#     print(maxPalindrome())
