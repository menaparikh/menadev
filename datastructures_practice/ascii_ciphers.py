x = ord("A") # remember that in ASCII, "A" is 65
print(x) # => converts TO ascii (to a number)

y = chr(13 * 5) 
print(y) # => converts TO letter (from ASCII)

# string concatenation in a loop
my_string = ""
my_old_string = "hello"
for i in range(len(my_old_string)):
    # my_string = my_string + my_old_string[i]
    my_string += my_old_string[i]
    print(my_string)

# write out a loop to convert every character in an input string into an ascii string (with a space between)
# by the end of this loop, what will be printed
secretmessage = input("say a secret message\n")
converted_string = "" # "accumulator" variable because it holds the state of something that changes over time
for i in range(len(secretmessage)):
    current_letter = secretmessage[i]
    print("current_letter:", current_letter)
    ascii = ord(current_letter)
    print("ascii:", ascii)
    converted_string += str(ascii) + " "
    print("converted_string:", converted_string)
    print("------------")

print(converted_string)

# ask the user for another secret message, but print out the message translated into ASCII with a 
# constant number (a key) added to each number. this is the "secret key" the recipient would use to decode your message.

#"hi" => "104 105" // "hi" secret_key: "5" => "109 110" 
encoded_message = ""
newsecretmessage = input("enter your secret message ")
key = 5
for i in range (len(newsecretmessage)):
    currentletter = newsecretmessage[i] 
    encodedascii = ord(currentletter) + key
    encoded_message += str(encodedascii) + " "
print("encoded message", encoded_message)

# ask the user for a secret message, and print the message translated into ASCII with a 
# constant number (a key) added to each letter.

# example: "dog" => "100 111 103" => key = 8 => "108 119 111" => "lwo"

# if u wanted to have the final output be "dog", with a key of 8 => original string would be "\g_" => (92 103 95)
def encrypt_letter(letter, key):
    # get the base letter to start at 
    base_ascii = ord('a') if letter.islower() else ord('A') # 97 if ('d', 8)

    encrypted_ascii = (ord(letter) - base_ascii + key) % 26 + base_ascii # (100 - 97 + 8) % 26 + 97
    encrypted_letter = chr(encrypted_ascii) # converts the letter (currently in ascii) to a character
    return encrypted_letter

original_letter = 'd'
key = 8
result = encrypt_letter(original_letter, key)
print(result)

# example ('d', 8)
# base_ascii = ord('a') => 97
# encrypted_ascii = (100 - 97 + 8) % 26 + 97 => (11 % 26) + 97 => 11 + 97 => 108
# chr(108) => "l"
# return "l"

# ('d', 12) ('K', 28), ('Z', 1)

# example ('d', 12)
# base_ascii = ord('d') => 100
# encrypted_ascii = (100 - 97 + 12) % 26 + 97 => (15 % 26) + 97 => 15 + 97 => 112
# chr(108) => "p"
# return "p"

# example ('K', 28)
# base_ascii = ord('K') => 75
# encrypted_ascii = (75 - 65 + 28) % 26 + 65 => (38 % 26) + 65 => 12 + 65 => 77
# chr(77) => "M"
# return "M"

# example ('z', 1)
# base_ascii = ord('z') => 122
# encrypted_ascii = (122 - 97 + 1) % 26 + 97 => (26 % 26) + 97 => 0 + 97 => 97
# chr(97) => "a"
# return "a"