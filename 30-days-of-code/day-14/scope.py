class Difference:
    def __init__(self, a):
        self.__elements = a
        self.maximumDifference = 0

    def computeDifference(self):
        for i in self.__elements:
            for j in self.__elements:
                diff = i - j
                if(diff > self.maximumDifference):
                    self.maximumDifference = diff

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)
