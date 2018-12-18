#!/bin/python3

if __name__ == '__main__':

    n = int(input())

    numbers = str(bin(n)[2:]).split('0')

    lenghts = [len(num) for num in numbers]

    print(max(lenghts))
