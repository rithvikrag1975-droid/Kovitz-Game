# ============================================================
#              PROGRAMMING BASICS KNOWLEDGE GAME
# ============================================================
#
# Level 1 = Strings
# Level 2 = Lists
# Level 3 = Tuples
# Level 4 = Dictionaries
#
# Each level has 20 questions.
# After every 5 questions, the player gets a score check.
# If the player has 80% or higher, they can move on
# or continue practicing.
#
# This is the original console version. The web version
# lives in public/ and uses the same questions.
# ============================================================

# ------------------------------------------------------------
# LEVEL 1 - STRINGS
# ------------------------------------------------------------

string_questions = [
    ("Which data type is used to store text?",
     ["A. List", "B. String", "C. Tuple", "D. Dictionary"], "B"),

    ("Which one is a string?",
     ["A. 25", "B. [1, 2]", "C. 'Hello'", "D. (1, 2)"], "C"),

    ("Are strings changeable in Python?",
     ["A. Yes", "B. No", "C. Sometimes", "D. Only numbers"], "B"),

    ("Which symbol can be used to create a string?",
     ["A. Quotes", "B. Brackets only", "C. Parentheses only", "D. Colon"], "A"),

    ("What does len('Hello') return?",
     ["A. 4", "B. 5", "C. 6", "D. 0"], "B"),

    ("Which is NOT a string?",
     ["A. 'Python'", "B. '123'", "C. 'Game'", "D. 123"], "D"),

    ("What is the first character of 'Python'?",
     ["A. P", "B. y", "C. 1", "D. n"], "A"),

    ("Which method changes a string to uppercase?",
     ["A. .lower()", "B. .upper()", "C. .change()", "D. .big()"], "B"),

    ("Which method changes a string to lowercase?",
     ["A. .lower()", "B. .small()", "C. .down()", "D. .upper()"], "A"),

    ("What does 'Hi' + 'There' do?",
     ["A. Adds numbers", "B. Joins the strings", "C. Deletes them", "D. Creates a list"], "B"),

    ("Which is a valid string?",
     ["A. Hello", "B. 'Hello'", "C. [Hello]", "D. {Hello}"], "B"),

    ("What does a string contain?",
     ["A. Characters", "B. Only numbers", "C. Only lists", "D. Key-value pairs"], "A"),

    ("What does 'Python'[0] return?",
     ["A. P", "B. y", "C. 0", "D. Python"], "A"),

    ("What does 'cat' + 'dog' produce?",
     ["A. catdog", "B. cat dog", "C. 2", "D. Error"], "A"),

    ("Which data type would store a person's name?",
     ["A. String", "B. Tuple", "C. Dictionary", "D. Boolean"], "A"),

    ("What is '15'?",
     ["A. Integer", "B. String", "C. List", "D. Tuple"], "B"),

    ("Which method removes spaces from the ends of a string?",
     ["A. .strip()", "B. .remove()", "C. .space()", "D. .clear()"], "A"),

    ("What does len() measure for a string?",
     ["A. Its color", "B. Number of characters", "C. Its type", "D. Its value only"], "B"),

    ("Which one is a string containing a number?",
     ["A. 50", "B. '50'", "C. [50]", "D. (50)"], "B"),

    ("Strings are sequences of what?",
     ["A. Characters", "B. Dictionaries", "C. Variables", "D. Lists"], "A")
]


# ------------------------------------------------------------
# LEVEL 2 - LISTS
# ------------------------------------------------------------

list_questions = [
    ("Which data type stores a collection that can change?",
     ["A. String", "B. List", "C. Tuple", "D. Integer"], "B"),

    ("Which brackets are used for a list?",
     ["A. ()", "B. {}", "C. []", "D. <>"], "C"),

    ("Which one is a list?",
     ["A. (1, 2, 3)", "B. [1, 2, 3]", "C. '123'", "D. {'x': 1}"], "B"),

    ("Can a list be changed after it is created?",
     ["A. Yes", "B. No", "C. Only once", "D. Never"], "A"),

    ("What method adds an item to the end of a list?",
     ["A. add()", "B. append()", "C. insertEnd()", "D. push()"], "B"),

    ("What does len([1, 2, 3]) return?",
     ["A. 2", "B. 3", "C. 4", "D. 1"], "B"),

    ("What is the first index of a list?",
     ["A. 1", "B. 0", "C. -1", "D. 10"], "B"),

    ("Which method removes an item from a list?",
     ["A. remove()", "B. deleteList()", "C. erase()", "D. take()"], "A"),

    ("Which one contains three colors?",
     ["A. 'red blue green'", "B. ['red', 'blue', 'green']", "C. ('red')", "D. {'red': 'blue'}"], "B"),

    ("Can a list contain strings?",
     ["A. Yes", "B. No", "C. Only one", "D. Only numbers"], "A"),

    ("Can a list contain numbers?",
     ["A. Yes", "B. No", "C. Only decimals", "D. Only integers"], "A"),

    ("Can a list contain different data types?",
     ["A. Yes", "B. No", "C. Only strings", "D. Only numbers"], "A"),

    ("What does [10, 20, 30][1] return?",
     ["A. 10", "B. 20", "C. 30", "D. 1"], "B"),

    ("Which method sorts a list?",
     ["A. sort()", "B. organize()", "C. arrange()", "D. order()"], "A"),

    ("Which method adds an item at a specific position?",
     ["A. append()", "B. insert()", "C. position()", "D. addAt()"], "B"),

    ("What symbol separates items in a list?",
     ["A. Comma", "B. Period", "C. Colon", "D. Slash"], "A"),

    ("Which is an empty list?",
     ["A. ()", "B. {}", "C. []", "D. ''"], "C"),

    ("What can a list store?",
     ["A. Multiple values", "B. Only one value", "C. Only text", "D. Only numbers"], "A"),

    ("Which list contains numbers?",
     ["A. ['1', '2']", "B. [1, 2]", "C. (1, 2)", "D. '1,2'"], "B"),

    ("What happens when append() is used?",
     ["A. An item is added", "B. An item is deleted", "C. The list disappears", "D. The list becomes a tuple"], "A")
]


# ------------------------------------------------------------
# LEVEL 3 - TUPLES
# ------------------------------------------------------------

tuple_questions = [
    ("Which data type stores ordered information that cannot change?",
     ["A. List", "B. Tuple", "C. String", "D. Dictionary"], "B"),

    ("Which brackets are normally used for tuples?",
     ["A. []", "B. {}", "C. ()", "D. <>"], "C"),

    ("Which one is a tuple?",
     ["A. [1, 2]", "B. (1, 2)", "C. {1, 2}", "D. '1,2'"], "B"),

    ("Can you normally change an item in a tuple?",
     ["A. Yes", "B. No", "C. Sometimes", "D. Only strings"], "B"),

    ("Are tuples ordered?",
     ["A. Yes", "B. No", "C. Only with numbers", "D. Only with strings"], "A"),

    ("What does len((10, 20, 30)) return?",
     ["A. 2", "B. 3", "C. 30", "D. 10"], "B"),

    ("What is the first index of a tuple?",
     ["A. 0", "B. 1", "C. -1", "D. 10"], "A"),

    ("Which is an empty tuple?",
     ["A. []", "B. {}", "C. ()", "D. ''"], "C"),

    ("Can a tuple contain strings?",
     ["A. Yes", "B. No", "C. Only one", "D. Never"], "A"),

    ("Can a tuple contain numbers?",
     ["A. Yes", "B. No", "C. Only decimals", "D. Only integers"], "A"),

    ("Which one cannot normally be changed?",
     ["A. List", "B. Tuple", "C. Dictionary", "D. Variable"], "B"),

    ("What does (5, 10, 15)[0] return?",
     ["A. 5", "B. 10", "C. 15", "D. 0"], "A"),

    ("Why would you use a tuple?",
     ["A. For information that should stay fixed", "B. To delete data", "C. To create a loop", "D. To print text"], "A"),

    ("Which is a tuple of colors?",
     ["A. ['red', 'blue']", "B. ('red', 'blue')", "C. {'red': 'blue'}", "D. 'red blue'"], "B"),

    ("Which data type is immutable?",
     ["A. List", "B. Tuple", "C. Dictionary", "D. Set only"], "B"),

    ("What does immutable mean?",
     ["A. Cannot normally be changed", "B. Can always be changed", "C. Can only store numbers", "D. Is always empty"], "A"),

    ("Which symbol separates tuple items?",
     ["A. Comma", "B. Slash", "C. Colon", "D. Period"], "A"),

    ("Can a tuple contain a list?",
     ["A. Yes", "B. No", "C. Never", "D. Only numbers"], "A"),

    ("Which is a tuple with two numbers?",
     ["A. [10, 20]", "B. (10, 20)", "C. {10: 20}", "D. '10,20'"], "B"),

    ("What is one main difference between a list and tuple?",
     ["A. Lists can change, tuples cannot normally change", "B. Tuples store text only", "C. Lists cannot store numbers", "D. They are exactly the same"], "A")
]


# ------------------------------------------------------------
# LEVEL 4 - DICTIONARIES
# ------------------------------------------------------------

dictionary_questions = [
    ("What does a dictionary store?",
     ["A. Key-value pairs", "B. Only numbers", "C. Only strings", "D. Ordered characters"], "A"),

    ("Which brackets are used for dictionaries?",
     ["A. []", "B. ()", "C. {}", "D. <>"], "C"),

    ("Which one is a dictionary?",
     ["A. [1, 2]", "B. (1, 2)", "C. {'name': 'Alex'}", "D. 'Alex'"], "C"),

    ("What is a key used for?",
     ["A. To identify a value", "B. To delete the dictionary", "C. To create a loop", "D. To store only numbers"], "A"),

    ("What is a value?",
     ["A. Information connected to a key", "B. Always a number", "C. A bracket", "D. A loop"], "A"),

    ("Which symbol separates a key from its value?",
     ["A. Comma", "B. Colon", "C. Period", "D. Slash"], "B"),

    ("Which dictionary stores a person's age?",
     ["A. {'age': 15}", "B. ['age', 15]", "C. ('age', 15)", "D. 'age:15'"], "A"),

    ("Can dictionary values be strings?",
     ["A. Yes", "B. No", "C. Only one", "D. Never"], "A"),

    ("Can dictionary values be numbers?",
     ["A. Yes", "B. No", "C. Only integers", "D. Never"], "A"),

    ("Which method gets a value using a key?",
     ["A. get()", "B. findValue()", "C. value()", "D. search()"], "A"),

    ("What does {'name': 'Sam'}['name'] return?",
     ["A. name", "B. Sam", "C. {'name'}", "D. Error"], "B"),

    ("What separates dictionary items?",
     ["A. Commas", "B. Periods", "C. Slashes", "D. Spaces"], "A"),

    ("Which is an empty dictionary?",
     ["A. []", "B. ()", "C. {}", "D. ''"], "C"),

    ("Can a dictionary store multiple key-value pairs?",
     ["A. Yes", "B. No", "C. Only two", "D. Only one"], "A"),

    ("What would be a good key for a student's grade?",
     ["A. 'grade'", "B. 500", "C. []", "D. ()"], "A"),

    ("Which code accesses the value for 'color'?",
     ["A. dictionary['color']", "B. dictionary(color)", "C. dictionary.color", "D. dictionary{color}"], "A"),

    ("What does a dictionary connect?",
     ["A. Keys and values", "B. Lists and loops", "C. Strings and numbers only", "D. Tuples and lists only"], "A"),

    ("Can a dictionary value be a list?",
     ["A. Yes", "B. No", "C. Never", "D. Only with strings"], "A"),

    ("Which is a dictionary with two items?",
     ["A. {'name': 'Alex', 'age': 15}", "B. ['name', 'age']", "C. ('name', 'age')", "D. 'name, age'"], "A"),

    ("What is the main purpose of a dictionary?",
     ["A. Organizing information using keys and values", "B. Storing only text", "C. Making random numbers", "D. Creating loops"], "A")
]


# ============================================================
# FUNCTION TO PLAY A LEVEL
# ============================================================

def play_level(level_name, questions):

    # Start the score for this level at 0
    level_score = 0

    print("\n========================================")
    print("          " + level_name)
    print("========================================")
    print("You have 20 questions.")
    print("You will get a checkpoint after every 5 questions.")
    print()

    # Go through all 20 questions
    for number, question_data in enumerate(questions, start=1):

        question = question_data[0]
        choices = question_data[1]
        correct_answer = question_data[2]

        # Display question number
        print("----------------------------------------")
        print("Question", number)
        print(question)

        # Display answer choices
        for choice in choices:
            print(choice)

        # Get the player's answer
        answer = input("Your answer: ").upper()

        # Check the answer
        if answer == correct_answer:
            print("Correct!")
            level_score += 1
        else:
            print("Incorrect.")
            print("Correct answer:", correct_answer)

        print("Current score:", level_score, "/", number)

        # ----------------------------------------
        # CHECKPOINT AFTER EVERY 5 QUESTIONS
        # ----------------------------------------

        if number % 5 == 0:

            percentage = (level_score / number) * 100

            print("\n========================================")
            print("             CHECKPOINT")
            print("========================================")
            print("You answered", number, "questions.")
            print("Your score:", level_score, "/", number)
            print("Percentage:", percentage, "%")

            # If the player has 80% or higher,
            # they can choose whether to continue
            # or move to the next level.
            if percentage >= 80:

                if number < 20:

                    print("\nGreat job! You have 80% or higher.")
                    print("1. Move to the next level")
                    print("2. Continue practicing")

                    choice = input("Choose 1 or 2: ")

                    if choice == "1":
                        print("Moving to the next level!")
                        return level_score, True

                    else:
                        print("Keep practicing!")
                        print()

            else:
                print("\nYou need at least 80% to move ahead.")
                print("Keep practicing this level!")

    # The player completed all 20 questions
    print("\n========================================")
    print("       LEVEL COMPLETE!")
    print("========================================")

    percentage = (level_score / 20) * 100

    print("Final level score:", level_score, "/ 20")
    print("Final percentage:", percentage, "%")

    # The player must have 80% or higher
    # to move to the next level.
    if percentage >= 80:
        print("You passed the level!")
        return level_score, True

    else:
        print("You did not reach 80%.")
        print("Practice this level again.")
        return level_score, False


# ============================================================
# MAIN GAME
# ============================================================

print("========================================")
print("       PROGRAMMING BASICS GAME")
print("========================================")

print("\nYour four levels are:")
print("Level 1 - Strings")
print("Level 2 - Lists")
print("Level 3 - Tuples")
print("Level 4 - Dictionaries")

input("\nPress ENTER to start the game...")

score1, passed1 = play_level("LEVEL 1 - STRINGS", string_questions)

if not passed1:
    print("\nGame stopped at Level 1.")
    print("Practice Strings and try again!")

else:
    score2, passed2 = play_level("LEVEL 2 - LISTS", list_questions)

    if not passed2:
        print("\nGame stopped at Level 2.")
        print("Practice Lists and try again!")

    else:
        score3, passed3 = play_level("LEVEL 3 - TUPLES", tuple_questions)

        if not passed3:
            print("\nGame stopped at Level 3.")
            print("Practice Tuples and try again!")

        else:
            score4, passed4 = play_level(
                "LEVEL 4 - DICTIONARIES",
                dictionary_questions
            )

            if not passed4:
                print("\nGame stopped at Level 4.")
                print("Practice Dictionaries and try again!")

            else:
                total_score = score1 + score2 + score3 + score4

                print("\n========================================")
                print("             GAME COMPLETE!")
                print("========================================")

                print("Strings:", score1, "/ 20")
                print("Lists:", score2, "/ 20")
                print("Tuples:", score3, "/ 20")
                print("Dictionaries:", score4, "/ 20")

                print("----------------------------------------")
                print("TOTAL SCORE:", total_score, "/ 80")
                print("========================================")

                if total_score >= 72:
                    print("Excellent! You mastered the game!")
                elif total_score >= 64:
                    print("Great job! You have strong programming knowledge!")
                else:
                    print("Good work! Keep practicing!")