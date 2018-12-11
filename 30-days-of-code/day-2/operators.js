#!/bin/python3


import math
import os
import random
import re
import sys

def solve(mealCost, tipPercent, taxPercent):

    totalCost = mealCost + (tipPercent * (mealCost / 100)) + (taxPercent * (mealCost/100))
    print (round(totalCost))

if __name__ == '__main__':
    mealCost = float(input())

    tipPercent = int(input())

    taxPercent = int(input())

    solve(mealCost, tipPercent, taxPercent)
