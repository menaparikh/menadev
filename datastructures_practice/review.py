# """
# loops:

# for loops, while loops
# """
def add(x, y):
    return x + y
# for i in range(10):
#     print(i)

# i = 0
# while i < 10: # i is called a counter
#     print(i)
#     i += 1

# my_string = "This is a sentence." # variable <= value of the variable

# # take the length of a string
# length_of_my_string = len(my_string) # this is an integer value
# print("the length of my string is" + str(length_of_my_string)) # "casting" => reassigning the "type" of the variable

# to get input 
# inputted_value = input("Type in a value") # input will always output a value is a string "2" => int(inputted_value) to get an int

# try asking the user for their name and age 
name = input("what is your name? ")
age = input("what is your age? ")
print("My name is " + name + " and my age is " + age + ".")

x = "hello"
# how do you get the first letter of x and print it out 
first_letter = x[0]
last_letter = x[-1]
last_letter = x[4]
last_letter = x[len(x) - 1]

print(first_letter)

# ask the user for a random word and print the first letter
random_word = input("give me a random word")
first_letter = random_word[0]
print(first_letter)

# print out "Your word has ____ letters" and fill in the ___ with the number of letters in the string
print("Your word has " + str(len(x)) + " letters.")

number1 = int(input("give me a random number"))
number2 = int(input("give me a second random number"))

# print the sum of number1 and number 2, formatted as "the sum of your random numbers is ____"

print("The sum of your random numbers is " + str(add(number1,number2)))

# https://www.madtakes.com/libs/176.html
# homework: create your own mad lib! ask the user for 5 adjectives, nouns, verbs, etc. and fill in a mad lib of your own
# (5 total)

noun1 = input("give me a noun")
adj1 = input("give me an adjective")
verb1 = input("give me a verb")
noun2 = input("give me another noun")
adj2 = input("give me another adjective")

print("Once upon a time there was a " + noun1 + ". They were very " + adj1 + ". They liked to " + verb1 + ". " + noun1 + "'s bestie was " + noun2 + " and they were " + adj2 + " together. The end.")
word = input("give me a word")
index = input("give me an index")
print(word)
print(word[int(index)])