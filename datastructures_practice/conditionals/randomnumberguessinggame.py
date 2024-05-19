import random

def number_guessing_game():
    secret_number = random.randint(1, 50)
    guess_count = 0

    print(secret_number)

    print("welcome to the number guessing game!")
    print("i've picked a number between 1 and 50. try to guess it!")

    while True:
        guess = int(input("enter your guess: "))
        guess_count = guess_count + 1
        
        if guess == secret_number:
            print("congratulations! you've guessed the correct number" + str(secret_number))
            print("it took you " + str(guess_count) + " guesses.")
            break
        elif guess < secret_number:
            print("too low! try again.")
        else:
            print("too high! try again.")

# number_guessing_game()

def product(x,y,z):
    print(x*y*z)

# result = product(1,2,3)
# print(result)

def average(x,y):
    return (x+y)/2

answer = average(5,6)
# print(answer)
 
def factorial(x):
    result = x
    for i in range (1,x):
        result = result * i
    return(result)

# print(factorial(4))

def factorialdownwards(n):
    result = 1
    while n>0:
        result = result * n
        n = n-1
    return(result)

def coinflip():
    answer = random.randint(1,2)
    if answer == 1:
        return("heads")
    if answer == 2:
        return("tails")

heads = 0
tails = 0
for i in range (10000):
    result = coinflip()
    if result == "heads":
        heads = heads + 1
    else:
        tails = tails + 1

print(heads / (heads + tails))
print(tails/ (heads+tails))

def diceroller ():
    x = random.randint (1,6)
    y = random.randint (1,6)
    return (x+y)

x = 0
y = 0
z = 0
a = 0
b = 0
c = 0
d = 0
e = 0
f = 0
g = 0
h = 0
j = 0
for i in range (1000):
    result = diceroller()
    if result == 1:
        x = x+1
    elif result == 2:
        y = y+1
    elif result == 3:
        z = z+1
    elif result == 4:
        a=a+1
    elif result == 5:
        b=b+1
    elif result == 6:
        c=c+1
    elif result == 7:
        d=d+1
    elif result == 8:
        e=e+1
    elif result == 9:
        f=f+1
    elif result == 10:
        g=g+1
    elif result == 11:
        h=h+1
    elif result == 12:
        j=j+1
print("rolls")
print(x/1000)
print(y/1000)
print(z/1000)
print(a/1000)
print(b/1000)
print(c/1000)
print(d/1000)
print(e/1000)
print(f/1000)
print(g/1000)
print(h/1000)
print(j/1000)