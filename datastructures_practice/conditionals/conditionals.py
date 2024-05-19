import random
# dow = input("What day of the week is it? ")
# # dow = "Wednesday"

# if (dow == "Wednesday"):
#     print("Happy hump day!")
# elif (dow == "Saturday"):
#     print("Happy weekend!")
# elif (dow == "Sunday"):
#     print("Happy weekend!")
# else:
#     print("Nothing special today :(")

# if (statement1 and statement2) - both have to be true for the condition to pass 
# if (statement1 or statement2) - only one has to be true 
# if (not statement1) - statement one must be false 

# while True:
#     i = 0
#     print(i)
#     i += 1
#     result = input("Would you like to continue?")
#     if (result == "N"):
#         break
while True:
    number1 = random.randint(0,3)
    number2 = random.randint(0.3)
    player1 = None
    player2 = None
    if number1 == 0:
       player1 = "rock"
    elif number1 == 1:
       player1 == "paper"
    elif player1 == 2:
       player1 == "scissors"
    elif number2 == 0:
       player2 = "rock"
    elif number2 == 1:
       player2 == "paper"
    elif player2 == 2:
       player2 == "scissors"

    if (player1 == "rock" and player2 == "paper"):
     print("player one wins")
    elif (player1 == "paper" and player2 == "scissors"):
        print("player one wins")
    elif (player1 == "scissors" and player2 == "paper"):
        print("player1 wins")
    elif (player1 == "rock" and player2 == "scissors"):
      print("player1 won")
    elif (player2 == "rock" and player1 == "paper"):
        print("player 2 wins")
    elif (player2 == "paper" and player1 == "scissors"):
        print("player 2 wins")
    elif (player2 == "rock" and player1 == "scissors"):
     print("player2 won")
    elif (player2 == "scissors" and player1 == "paper"):
      print("player1 wins")
    elif (player1 == player2):
        print("tie")
    result = input("Would you like to continue?")
    if (result == "no"):
        break


# if (player1 == "rock"):
#     if (player2 == "scissors"):
#         print("player 1 wins")
#     elif (player2 == "paper"):
#         print("player 2 wins")
#     else:
#         print("Tie")
# repeat for player 2 but reversed 