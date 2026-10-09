// Python 3.9+ question bank. Code answers verified with Python when authored.
export const LEVELS = [
  {
    "id": "strings",
    "title": "Strings",
    "glyph": "\"abc\"",
    "questions": [
      {
        "id": "strings-easy-1",
        "difficulty": 0,
        "prompt": "Which data type is used to store text?",
        "code": "",
        "choices": [
          "List",
          "String",
          "Tuple",
          "Dictionary"
        ],
        "answer": 1,
        "explanation": "The str type stores text as a sequence of characters.",
        "scene": 0
      },
      {
        "id": "strings-easy-2",
        "difficulty": 0,
        "prompt": "Which one is a string?",
        "code": "",
        "choices": [
          "25",
          "[1, 2]",
          "'Hello'",
          "(1, 2)"
        ],
        "answer": 2,
        "explanation": "Quotes make Hello a string literal.",
        "scene": 1
      },
      {
        "id": "strings-easy-3",
        "difficulty": 0,
        "prompt": "Are strings changeable in Python?",
        "code": "",
        "choices": [
          "Yes",
          "No",
          "Sometimes",
          "Only numbers"
        ],
        "answer": 1,
        "explanation": "Strings are immutable: methods produce new strings instead of changing the original.",
        "scene": 2
      },
      {
        "id": "strings-easy-4",
        "difficulty": 0,
        "prompt": "Which symbol can be used to create a string?",
        "code": "",
        "choices": [
          "Quotes",
          "Brackets only",
          "Parentheses only",
          "Colon"
        ],
        "answer": 0,
        "explanation": "Either single or double quotes can delimit a string.",
        "scene": 0
      },
      {
        "id": "strings-easy-5",
        "difficulty": 0,
        "prompt": "What does len('Hello') return?",
        "code": "",
        "choices": [
          "4",
          "5",
          "6",
          "0"
        ],
        "answer": 1,
        "explanation": "Hello contains five characters.",
        "scene": 1
      },
      {
        "id": "strings-easy-6",
        "difficulty": 0,
        "prompt": "Which is NOT a string?",
        "code": "",
        "choices": [
          "'Python'",
          "'123'",
          "'Game'",
          "123"
        ],
        "answer": 3,
        "explanation": "Without quotes, 123 is an integer.",
        "scene": 2
      },
      {
        "id": "strings-easy-7",
        "difficulty": 0,
        "prompt": "What is the first character of 'Python'?",
        "code": "",
        "choices": [
          "P",
          "y",
          "1",
          "n"
        ],
        "answer": 0,
        "explanation": "The first character is P.",
        "scene": 0
      },
      {
        "id": "strings-easy-8",
        "difficulty": 0,
        "prompt": "Which method changes a string to uppercase?",
        "code": "",
        "choices": [
          ".lower()",
          ".upper()",
          ".change()",
          ".big()"
        ],
        "answer": 1,
        "explanation": "upper() returns a new string with uppercase letters.",
        "scene": 1
      },
      {
        "id": "strings-easy-9",
        "difficulty": 0,
        "prompt": "Which method changes a string to lowercase?",
        "code": "",
        "choices": [
          ".lower()",
          ".small()",
          ".down()",
          ".upper()"
        ],
        "answer": 0,
        "explanation": "lower() returns a new string with lowercase letters.",
        "scene": 2
      },
      {
        "id": "strings-easy-10",
        "difficulty": 0,
        "prompt": "What does 'Hi' + 'There' do?",
        "code": "",
        "choices": [
          "Adds numbers",
          "Joins the strings",
          "Deletes them",
          "Creates a list"
        ],
        "answer": 1,
        "explanation": "The + operator concatenates strings without adding spaces.",
        "scene": 0
      },
      {
        "id": "strings-easy-11",
        "difficulty": 0,
        "prompt": "Which is a valid string?",
        "code": "",
        "choices": [
          "Hello",
          "'Hello'",
          "[Hello]",
          "{Hello}"
        ],
        "answer": 1,
        "explanation": "A string literal needs matching quotes.",
        "scene": 1
      },
      {
        "id": "strings-easy-12",
        "difficulty": 0,
        "prompt": "What does a string contain?",
        "code": "",
        "choices": [
          "Characters",
          "Only numbers",
          "Only lists",
          "Key-value pairs"
        ],
        "answer": 0,
        "explanation": "A string is a sequence of characters.",
        "scene": 2
      },
      {
        "id": "strings-easy-13",
        "difficulty": 0,
        "prompt": "What does 'Python'[0] return?",
        "code": "",
        "choices": [
          "P",
          "y",
          "0",
          "Python"
        ],
        "answer": 0,
        "explanation": "Index 0 selects the first character.",
        "scene": 0
      },
      {
        "id": "strings-easy-14",
        "difficulty": 0,
        "prompt": "What does 'cat' + 'dog' produce?",
        "code": "",
        "choices": [
          "catdog",
          "cat dog",
          "2",
          "Error"
        ],
        "answer": 0,
        "explanation": "Concatenation does not insert a space automatically.",
        "scene": 1
      },
      {
        "id": "strings-easy-15",
        "difficulty": 0,
        "prompt": "Which data type would store a person's name?",
        "code": "",
        "choices": [
          "String",
          "Tuple",
          "Dictionary",
          "Boolean"
        ],
        "answer": 0,
        "explanation": "Names are text, so a string is suitable.",
        "scene": 2
      },
      {
        "id": "strings-easy-16",
        "difficulty": 0,
        "prompt": "What is '15'?",
        "code": "",
        "choices": [
          "Integer",
          "String",
          "List",
          "Tuple"
        ],
        "answer": 1,
        "explanation": "Quotes make 15 text instead of an integer.",
        "scene": 0
      },
      {
        "id": "strings-easy-17",
        "difficulty": 0,
        "prompt": "Which method removes spaces from the ends of a string?",
        "code": "",
        "choices": [
          ".strip()",
          ".remove()",
          ".space()",
          ".clear()"
        ],
        "answer": 0,
        "explanation": "strip() removes whitespace at both ends.",
        "scene": 1
      },
      {
        "id": "strings-easy-18",
        "difficulty": 0,
        "prompt": "What does len() measure for a string?",
        "code": "",
        "choices": [
          "Its color",
          "Number of characters",
          "Its type",
          "Its value only"
        ],
        "answer": 1,
        "explanation": "len() counts the characters in a string.",
        "scene": 2
      },
      {
        "id": "strings-easy-19",
        "difficulty": 0,
        "prompt": "Which one is a string containing a number?",
        "code": "",
        "choices": [
          "50",
          "'50'",
          "[50]",
          "(50)"
        ],
        "answer": 1,
        "explanation": "Quotes make 50 a string.",
        "scene": 0
      },
      {
        "id": "strings-easy-20",
        "difficulty": 0,
        "prompt": "Strings are sequences of what?",
        "code": "",
        "choices": [
          "Characters",
          "Dictionaries",
          "Variables",
          "Lists"
        ],
        "answer": 0,
        "explanation": "Strings are character sequences.",
        "scene": 1
      },
      {
        "id": "strings-1-1",
        "difficulty": 1,
        "prompt": "Read the arcade sign. What does this expression return?",
        "code": "'ARCADE'[1:4]",
        "choices": [
          "'RCA'",
          "'ARC'",
          "'RCAD'",
          "'CA'"
        ],
        "answer": 0,
        "explanation": "A slice starts at index 1 and stops before index 4.",
        "scene": 0
      },
      {
        "id": "strings-1-2",
        "difficulty": 1,
        "prompt": "The last letter is blinking. What does this return?",
        "code": "'ARCADE'[-1]",
        "choices": [
          "'E'",
          "'A'",
          "'D'",
          "IndexError"
        ],
        "answer": 0,
        "explanation": "Index -1 selects the last character.",
        "scene": 1
      },
      {
        "id": "strings-1-3",
        "difficulty": 1,
        "prompt": "Clean up the player tag. What is the result?",
        "code": "'  arcade  '.strip().upper()",
        "choices": [
          "'ARCADE'",
          "'  ARCADE  '",
          "'arcade'",
          "None"
        ],
        "answer": 0,
        "explanation": "strip() removes outer whitespace, then upper() capitalizes the resulting text.",
        "scene": 2
      },
      {
        "id": "strings-1-4",
        "difficulty": 1,
        "prompt": "The sign repeats. What does this expression return?",
        "code": "'AR' * 3",
        "choices": [
          "'ARARAR'",
          "'ARAR'",
          "'AR3'",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "Multiplying a string by 3 repeats it three times.",
        "scene": 0
      },
      {
        "id": "strings-1-5",
        "difficulty": 1,
        "prompt": "Decode the item labels. What does split() return?",
        "code": "'arcade,coin,key'.split(',')",
        "choices": [
          "['arcade', 'coin', 'key']",
          "'arcade,coin,key'",
          "['arcade,coin,key']",
          "3"
        ],
        "answer": 0,
        "explanation": "split(\",\") returns a list of pieces separated by commas.",
        "scene": 1
      },
      {
        "id": "strings-1-6",
        "difficulty": 1,
        "prompt": "Join the high-score initials. What is returned?",
        "code": "'-'.join(['A', 'R', 'C'])",
        "choices": [
          "'A-R-C'",
          "'ARC'",
          "'-A-R-C-'",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "join() inserts the separator between items, not at the ends.",
        "scene": 2
      },
      {
        "id": "strings-1-7",
        "difficulty": 1,
        "prompt": "Patch the welcome message. What is returned?",
        "code": "'arcade ready'.replace('ready', 'go')",
        "choices": [
          "'arcade go'",
          "'arcade ready'",
          "'go'",
          "None"
        ],
        "answer": 0,
        "explanation": "replace() returns a new string with matching text replaced.",
        "scene": 0
      },
      {
        "id": "strings-1-8",
        "difficulty": 1,
        "prompt": "Read the sign backward. What is the output?",
        "code": "'ARCADE'[::-1]",
        "choices": [
          "'EDACRA'",
          "'ARCADE'",
          "'E'",
          "'RCADE'"
        ],
        "answer": 0,
        "explanation": "A step of -1 traverses the entire string in reverse.",
        "scene": 1
      },
      {
        "id": "strings-1-9",
        "difficulty": 1,
        "prompt": "Count the displayed text. What does len() return?",
        "code": "len('ARCADE GO')",
        "choices": [
          "9",
          "6",
          "8",
          "10"
        ],
        "answer": 0,
        "explanation": "Spaces count as characters too: six letters, one space, and two letters.",
        "scene": 2
      },
      {
        "id": "strings-1-10",
        "difficulty": 1,
        "prompt": "Can the player tag be found? What is returned?",
        "code": "'arcade' in 'ARCADE'",
        "choices": [
          "False",
          "True",
          "None",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "String membership is case-sensitive; lowercase text does not match uppercase text.",
        "scene": 0
      },
      {
        "id": "strings-2-1",
        "difficulty": 2,
        "prompt": "Skip through the sign. What is returned?",
        "code": "'ARCADE'[1::2]",
        "choices": [
          "'RAE'",
          "'ACD'",
          "'RCADE'",
          "'EAR'"
        ],
        "answer": 0,
        "explanation": "Start at index 1 and take every second character: indices 1, 3, and 5.",
        "scene": 0
      },
      {
        "id": "strings-2-2",
        "difficulty": 2,
        "prompt": "A slice overshoots the sign. What happens?",
        "code": "'ARCADE'[20:30]",
        "choices": [
          "''",
          "IndexError",
          "'ARCADE'",
          "None"
        ],
        "answer": 0,
        "explanation": "Slices outside the string are safely clipped, yielding an empty string here.",
        "scene": 1
      },
      {
        "id": "strings-2-3",
        "difficulty": 2,
        "prompt": "Decode two transformations. What is the result?",
        "code": "'arcade'.replace('a', '@').upper()[::-1]",
        "choices": [
          "'ED@CR@'",
          "'EDACRA'",
          "'@RC@DE'",
          "'edacra'"
        ],
        "answer": 0,
        "explanation": "Replace a with @, uppercase the new string, then reverse it.",
        "scene": 2
      },
      {
        "id": "strings-2-4",
        "difficulty": 2,
        "prompt": "A method runs without assignment. What remains in tag?",
        "code": "tag = 'arcade'\ntag.upper()\ntag",
        "choices": [
          "'arcade'",
          "'ARCADE'",
          "None",
          "AttributeError"
        ],
        "answer": 0,
        "explanation": "Strings are immutable. upper() returns a new value, so the original variable is unchanged.",
        "scene": 0
      },
      {
        "id": "strings-2-5",
        "difficulty": 2,
        "prompt": "Extract only the middle of the sign. What is returned?",
        "code": "'ARCADE'[-5:-1:2]",
        "choices": [
          "'RA'",
          "'RCAD'",
          "'ACD'",
          "''"
        ],
        "answer": 0,
        "explanation": "The slice covers indices 1 through 4 with step 2, selecting indices 1 and 3.",
        "scene": 1
      },
      {
        "id": "strings-2-6",
        "difficulty": 2,
        "prompt": "Format the score for the arcade display. What is returned?",
        "code": "f'{42:04d}'",
        "choices": [
          "'0042'",
          "42",
          "43",
          "'0043'"
        ],
        "answer": 0,
        "explanation": "The format 04d pads an integer with leading zeros to a width of four characters.",
        "scene": 2
      },
      {
        "id": "strings-2-7",
        "difficulty": 2,
        "prompt": "The player tag repeats. How many non-overlapping pairs are found?",
        "code": "('A' * 5).count('AA')",
        "choices": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 0,
        "explanation": "count() counts non-overlapping matches: five characters contain two full pairs.",
        "scene": 0
      },
      {
        "id": "strings-2-8",
        "difficulty": 2,
        "prompt": "Trim the code carefully. What is returned?",
        "code": "'AarcadeR'.strip('AR')",
        "choices": [
          "'arcade'",
          "'arcadeR'",
          "'Aarcade'",
          "'ARCADE'"
        ],
        "answer": 0,
        "explanation": "strip(chars) removes any characters in the supplied set from both ends, with case-sensitive matching.",
        "scene": 1
      },
      {
        "id": "strings-2-9",
        "difficulty": 2,
        "prompt": "Split just once to preserve the final part. What is returned?",
        "code": "'arcade:coin:key'.split(':', 1)",
        "choices": [
          "['arcade', 'coin:key']",
          "['arcade', 'coin', 'key']",
          "['arcade:coin', 'key']",
          "'arcade:coin:key'"
        ],
        "answer": 0,
        "explanation": "maxsplit=1 makes only the first split; the rest stays in the second item.",
        "scene": 2
      },
      {
        "id": "strings-2-10",
        "difficulty": 2,
        "prompt": "Build a tag using a nested slice. What is returned?",
        "code": "'ARCADE'[::2].lower() + str(2 ** 3)",
        "choices": [
          "'acd8'",
          "'ACD8'",
          "'acd6'",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "Select every other character, lowercase it, and concatenate the string form of 8.",
        "scene": 0
      },
      {
        "id": "strings-1-11",
        "difficulty": 1,
        "prompt": "Read the arcade sign. What does this expression return?",
        "code": "'PLAYER'[1:4]",
        "choices": [
          "'LAY'",
          "'PLA'",
          "'LAYE'",
          "'AY'"
        ],
        "answer": 0,
        "explanation": "A slice starts at index 1 and stops before index 4.",
        "scene": 1
      },
      {
        "id": "strings-1-12",
        "difficulty": 1,
        "prompt": "The last letter is blinking. What does this return?",
        "code": "'PLAYER'[-1]",
        "choices": [
          "'R'",
          "'P'",
          "'E'",
          "IndexError"
        ],
        "answer": 0,
        "explanation": "Index -1 selects the last character.",
        "scene": 2
      },
      {
        "id": "strings-1-13",
        "difficulty": 1,
        "prompt": "Clean up the player tag. What is the result?",
        "code": "'  player  '.strip().upper()",
        "choices": [
          "'PLAYER'",
          "'  PLAYER  '",
          "'player'",
          "None"
        ],
        "answer": 0,
        "explanation": "strip() removes outer whitespace, then upper() capitalizes the resulting text.",
        "scene": 0
      },
      {
        "id": "strings-1-14",
        "difficulty": 1,
        "prompt": "The sign repeats. What does this expression return?",
        "code": "'PL' * 3",
        "choices": [
          "'PLPLPL'",
          "'PLPL'",
          "'PL3'",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "Multiplying a string by 3 repeats it three times.",
        "scene": 1
      },
      {
        "id": "strings-1-15",
        "difficulty": 1,
        "prompt": "Decode the item labels. What does split() return?",
        "code": "'player,coin,key'.split(',')",
        "choices": [
          "['player', 'coin', 'key']",
          "'player,coin,key'",
          "['player,coin,key']",
          "3"
        ],
        "answer": 0,
        "explanation": "split(\",\") returns a list of pieces separated by commas.",
        "scene": 2
      },
      {
        "id": "strings-1-16",
        "difficulty": 1,
        "prompt": "Join the high-score initials. What is returned?",
        "code": "'-'.join(['P', 'L', 'A'])",
        "choices": [
          "'P-L-A'",
          "'PLA'",
          "'-P-L-A-'",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "join() inserts the separator between items, not at the ends.",
        "scene": 0
      },
      {
        "id": "strings-1-17",
        "difficulty": 1,
        "prompt": "Patch the welcome message. What is returned?",
        "code": "'player ready'.replace('ready', 'go')",
        "choices": [
          "'player go'",
          "'player ready'",
          "'go'",
          "None"
        ],
        "answer": 0,
        "explanation": "replace() returns a new string with matching text replaced.",
        "scene": 1
      },
      {
        "id": "strings-1-18",
        "difficulty": 1,
        "prompt": "Read the sign backward. What is the output?",
        "code": "'PLAYER'[::-1]",
        "choices": [
          "'REYALP'",
          "'PLAYER'",
          "'R'",
          "'LAYER'"
        ],
        "answer": 0,
        "explanation": "A step of -1 traverses the entire string in reverse.",
        "scene": 2
      },
      {
        "id": "strings-1-19",
        "difficulty": 1,
        "prompt": "Count the displayed text. What does len() return?",
        "code": "len('PLAYER GO')",
        "choices": [
          "9",
          "6",
          "8",
          "10"
        ],
        "answer": 0,
        "explanation": "Spaces count as characters too: six letters, one space, and two letters.",
        "scene": 0
      },
      {
        "id": "strings-1-20",
        "difficulty": 1,
        "prompt": "Can the player tag be found? What is returned?",
        "code": "'player' in 'PLAYER'",
        "choices": [
          "False",
          "True",
          "None",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "String membership is case-sensitive; lowercase text does not match uppercase text.",
        "scene": 1
      },
      {
        "id": "strings-2-11",
        "difficulty": 2,
        "prompt": "Skip through the sign. What is returned?",
        "code": "'PLAYER'[1::2]",
        "choices": [
          "'LYR'",
          "'PAE'",
          "'LAYER'",
          "'RYL'"
        ],
        "answer": 0,
        "explanation": "Start at index 1 and take every second character: indices 1, 3, and 5.",
        "scene": 1
      },
      {
        "id": "strings-2-12",
        "difficulty": 2,
        "prompt": "A slice overshoots the sign. What happens?",
        "code": "'PLAYER'[20:30]",
        "choices": [
          "''",
          "IndexError",
          "'PLAYER'",
          "None"
        ],
        "answer": 0,
        "explanation": "Slices outside the string are safely clipped, yielding an empty string here.",
        "scene": 2
      },
      {
        "id": "strings-2-13",
        "difficulty": 2,
        "prompt": "Decode two transformations. What is the result?",
        "code": "'player'.replace('a', '@').upper()[::-1]",
        "choices": [
          "'REY@LP'",
          "'REYALP'",
          "'PL@YER'",
          "'reyalp'"
        ],
        "answer": 0,
        "explanation": "Replace a with @, uppercase the new string, then reverse it.",
        "scene": 0
      },
      {
        "id": "strings-2-14",
        "difficulty": 2,
        "prompt": "A method runs without assignment. What remains in tag?",
        "code": "tag = 'player'\ntag.upper()\ntag",
        "choices": [
          "'player'",
          "'PLAYER'",
          "None",
          "AttributeError"
        ],
        "answer": 0,
        "explanation": "Strings are immutable. upper() returns a new value, so the original variable is unchanged.",
        "scene": 1
      },
      {
        "id": "strings-2-15",
        "difficulty": 2,
        "prompt": "Extract only the middle of the sign. What is returned?",
        "code": "'PLAYER'[-5:-1:2]",
        "choices": [
          "'LY'",
          "'LAYE'",
          "'PAE'",
          "''"
        ],
        "answer": 0,
        "explanation": "The slice covers indices 1 through 4 with step 2, selecting indices 1 and 3.",
        "scene": 2
      },
      {
        "id": "strings-2-16",
        "difficulty": 2,
        "prompt": "Format the score for the arcade display. What is returned?",
        "code": "f'{43:04d}'",
        "choices": [
          "'0043'",
          "42",
          "43",
          "'0042'"
        ],
        "answer": 0,
        "explanation": "The format 04d pads an integer with leading zeros to a width of four characters.",
        "scene": 0
      },
      {
        "id": "strings-2-17",
        "difficulty": 2,
        "prompt": "The player tag repeats. How many non-overlapping pairs are found?",
        "code": "('P' * 5).count('PP')",
        "choices": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 0,
        "explanation": "count() counts non-overlapping matches: five characters contain two full pairs.",
        "scene": 1
      },
      {
        "id": "strings-2-18",
        "difficulty": 2,
        "prompt": "Trim the code carefully. What is returned?",
        "code": "'PplayerL'.strip('PL')",
        "choices": [
          "'player'",
          "'playerL'",
          "'Pplayer'",
          "'PLAYER'"
        ],
        "answer": 0,
        "explanation": "strip(chars) removes any characters in the supplied set from both ends, with case-sensitive matching.",
        "scene": 2
      },
      {
        "id": "strings-2-19",
        "difficulty": 2,
        "prompt": "Split just once to preserve the final part. What is returned?",
        "code": "'player:coin:key'.split(':', 1)",
        "choices": [
          "['player', 'coin:key']",
          "['player', 'coin', 'key']",
          "['player:coin', 'key']",
          "'player:coin:key'"
        ],
        "answer": 0,
        "explanation": "maxsplit=1 makes only the first split; the rest stays in the second item.",
        "scene": 0
      },
      {
        "id": "strings-2-20",
        "difficulty": 2,
        "prompt": "Build a tag using a nested slice. What is returned?",
        "code": "'PLAYER'[::2].lower() + str(2 ** 3)",
        "choices": [
          "'pae8'",
          "'PAE8'",
          "'pae6'",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "Select every other character, lowercase it, and concatenate the string form of 8.",
        "scene": 1
      }
    ]
  },
  {
    "id": "lists",
    "title": "Lists",
    "glyph": "[1, 2]",
    "questions": [
      {
        "id": "lists-easy-1",
        "difficulty": 0,
        "prompt": "Which data type stores a collection that can change?",
        "code": "",
        "choices": [
          "String",
          "List",
          "Tuple",
          "Integer"
        ],
        "answer": 1,
        "explanation": "A list is a mutable collection of items.",
        "scene": 0
      },
      {
        "id": "lists-easy-2",
        "difficulty": 0,
        "prompt": "Which brackets are used for a list?",
        "code": "",
        "choices": [
          "()",
          "{}",
          "[]",
          "<>"
        ],
        "answer": 2,
        "explanation": "List literals use square brackets.",
        "scene": 1
      },
      {
        "id": "lists-easy-3",
        "difficulty": 0,
        "prompt": "Which one is a list?",
        "code": "",
        "choices": [
          "(1, 2, 3)",
          "[1, 2, 3]",
          "'123'",
          "{'x': 1}"
        ],
        "answer": 1,
        "explanation": "Square brackets with comma-separated items create a list.",
        "scene": 2
      },
      {
        "id": "lists-easy-4",
        "difficulty": 0,
        "prompt": "Can a list be changed after it is created?",
        "code": "",
        "choices": [
          "Yes",
          "No",
          "Only once",
          "Never"
        ],
        "answer": 0,
        "explanation": "Lists are mutable, so items can be added, replaced, or removed.",
        "scene": 0
      },
      {
        "id": "lists-easy-5",
        "difficulty": 0,
        "prompt": "What method adds an item to the end of a list?",
        "code": "",
        "choices": [
          "add()",
          "append()",
          "insertEnd()",
          "push()"
        ],
        "answer": 1,
        "explanation": "append() adds one item at the end.",
        "scene": 1
      },
      {
        "id": "lists-easy-6",
        "difficulty": 0,
        "prompt": "What does len([1, 2, 3]) return?",
        "code": "",
        "choices": [
          "2",
          "3",
          "4",
          "1"
        ],
        "answer": 1,
        "explanation": "There are three items in this list.",
        "scene": 2
      },
      {
        "id": "lists-easy-7",
        "difficulty": 0,
        "prompt": "What is the first index of a list?",
        "code": "",
        "choices": [
          "1",
          "0",
          "-1",
          "10"
        ],
        "answer": 1,
        "explanation": "Python sequences start at index 0.",
        "scene": 0
      },
      {
        "id": "lists-easy-8",
        "difficulty": 0,
        "prompt": "Which method removes an item from a list?",
        "code": "",
        "choices": [
          "remove()",
          "deleteList()",
          "erase()",
          "take()"
        ],
        "answer": 0,
        "explanation": "remove(value) removes the first matching item.",
        "scene": 1
      },
      {
        "id": "lists-easy-9",
        "difficulty": 0,
        "prompt": "Which one contains three colors?",
        "code": "",
        "choices": [
          "'red blue green'",
          "['red', 'blue', 'green']",
          "('red')",
          "{'red': 'blue'}"
        ],
        "answer": 1,
        "explanation": "This list contains three separate string items.",
        "scene": 2
      },
      {
        "id": "lists-easy-10",
        "difficulty": 0,
        "prompt": "Can a list contain strings?",
        "code": "",
        "choices": [
          "Yes",
          "No",
          "Only one",
          "Only numbers"
        ],
        "answer": 0,
        "explanation": "Lists can hold strings.",
        "scene": 0
      },
      {
        "id": "lists-easy-11",
        "difficulty": 0,
        "prompt": "Can a list contain numbers?",
        "code": "",
        "choices": [
          "Yes",
          "No",
          "Only decimals",
          "Only integers"
        ],
        "answer": 0,
        "explanation": "Lists can hold numbers.",
        "scene": 1
      },
      {
        "id": "lists-easy-12",
        "difficulty": 0,
        "prompt": "Can a list contain different data types?",
        "code": "",
        "choices": [
          "Yes",
          "No",
          "Only strings",
          "Only numbers"
        ],
        "answer": 0,
        "explanation": "A list can mix items of different types.",
        "scene": 2
      },
      {
        "id": "lists-easy-13",
        "difficulty": 0,
        "prompt": "What does [10, 20, 30][1] return?",
        "code": "",
        "choices": [
          "10",
          "20",
          "30",
          "1"
        ],
        "answer": 1,
        "explanation": "Index 1 selects the second item, 20.",
        "scene": 0
      },
      {
        "id": "lists-easy-14",
        "difficulty": 0,
        "prompt": "Which method sorts a list?",
        "code": "",
        "choices": [
          "sort()",
          "organize()",
          "arrange()",
          "order()"
        ],
        "answer": 0,
        "explanation": "sort() orders a list in place.",
        "scene": 1
      },
      {
        "id": "lists-easy-15",
        "difficulty": 0,
        "prompt": "Which method adds an item at a specific position?",
        "code": "",
        "choices": [
          "append()",
          "insert()",
          "position()",
          "addAt()"
        ],
        "answer": 1,
        "explanation": "insert(index, value) adds an item at a chosen position.",
        "scene": 2
      },
      {
        "id": "lists-easy-16",
        "difficulty": 0,
        "prompt": "What symbol separates items in a list?",
        "code": "",
        "choices": [
          "Comma",
          "Period",
          "Colon",
          "Slash"
        ],
        "answer": 0,
        "explanation": "Commas separate list items.",
        "scene": 0
      },
      {
        "id": "lists-easy-17",
        "difficulty": 0,
        "prompt": "Which is an empty list?",
        "code": "",
        "choices": [
          "()",
          "{}",
          "[]",
          "''"
        ],
        "answer": 2,
        "explanation": "An empty pair of square brackets creates an empty list.",
        "scene": 1
      },
      {
        "id": "lists-easy-18",
        "difficulty": 0,
        "prompt": "What can a list store?",
        "code": "",
        "choices": [
          "Multiple values",
          "Only one value",
          "Only text",
          "Only numbers"
        ],
        "answer": 0,
        "explanation": "Lists collect multiple items.",
        "scene": 2
      },
      {
        "id": "lists-easy-19",
        "difficulty": 0,
        "prompt": "Which list contains numbers?",
        "code": "",
        "choices": [
          "['1', '2']",
          "[1, 2]",
          "(1, 2)",
          "'1,2'"
        ],
        "answer": 1,
        "explanation": "The unquoted items 1 and 2 are integers.",
        "scene": 0
      },
      {
        "id": "lists-easy-20",
        "difficulty": 0,
        "prompt": "What happens when append() is used?",
        "code": "",
        "choices": [
          "An item is added",
          "An item is deleted",
          "The list disappears",
          "The list becomes a tuple"
        ],
        "answer": 0,
        "explanation": "append(value) adds one item to the end.",
        "scene": 1
      },
      {
        "id": "lists-1-1",
        "difficulty": 1,
        "prompt": "Read the second inventory slot. What is returned?",
        "code": "[2, 3, 4][1]",
        "choices": [
          "3",
          "2",
          "4",
          "IndexError"
        ],
        "answer": 0,
        "explanation": "Index 1 refers to the second item.",
        "scene": 0
      },
      {
        "id": "lists-1-2",
        "difficulty": 1,
        "prompt": "Add a coin to the inventory. What is items now?",
        "code": "items = [2, 3]\nitems.append(9)\nitems",
        "choices": [
          "[2, 3, 9]",
          "[2, 3]",
          "[2, 3, [9]]",
          "None"
        ],
        "answer": 0,
        "explanation": "append(9) adds the integer 9 as a single final item.",
        "scene": 1
      },
      {
        "id": "lists-1-3",
        "difficulty": 1,
        "prompt": "Collect a bonus pack. What is items now?",
        "code": "items = [2]\nitems.extend([7, 8])\nitems",
        "choices": [
          "[2, 7, 8]",
          "[2, [7, 8]]",
          "[7, 8, 2]",
          "None"
        ],
        "answer": 0,
        "explanation": "extend() adds each item from the supplied iterable.",
        "scene": 2
      },
      {
        "id": "lists-1-4",
        "difficulty": 1,
        "prompt": "Use the last item. What does pop() return?",
        "code": "items = [2, 5]\nitems.pop()",
        "choices": [
          "5",
          "[2]",
          "2",
          "None"
        ],
        "answer": 0,
        "explanation": "pop() without an index removes and returns the last item.",
        "scene": 0
      },
      {
        "id": "lists-1-5",
        "difficulty": 1,
        "prompt": "Sort the score tokens. What is items now?",
        "code": "items = [4, 2, 3]\nitems.sort()\nitems",
        "choices": [
          "[2, 3, 4]",
          "[4, 2, 3]",
          "[4, 3, 2]",
          "None"
        ],
        "answer": 0,
        "explanation": "sort() modifies the original list in ascending order.",
        "scene": 1
      },
      {
        "id": "lists-1-6",
        "difficulty": 1,
        "prompt": "Take a slice of the inventory. What is returned?",
        "code": "[2, 3, 4, 5][1:3]",
        "choices": [
          "[3, 4]",
          "[2, 3, 4]",
          "[3, 4, 5]",
          "3"
        ],
        "answer": 0,
        "explanation": "The start index is included and the stop index is excluded.",
        "scene": 2
      },
      {
        "id": "lists-1-7",
        "difficulty": 1,
        "prompt": "Replace the first inventory item. What is items now?",
        "code": "items = [2, 3]\nitems[0] = 9\nitems",
        "choices": [
          "[9, 3]",
          "[2, 3, 9]",
          "[2, 9]",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "Lists are mutable; assigning index 0 replaces the first item.",
        "scene": 0
      },
      {
        "id": "lists-1-8",
        "difficulty": 1,
        "prompt": "Read the final slot. What is returned?",
        "code": "[2, 7, 10][-1]",
        "choices": [
          "10",
          "2",
          "7",
          "IndexError"
        ],
        "answer": 0,
        "explanation": "Index -1 selects the final item.",
        "scene": 1
      },
      {
        "id": "lists-1-9",
        "difficulty": 1,
        "prompt": "Remove one matching token. What is items now?",
        "code": "items = [2, 3, 2]\nitems.remove(2)\nitems",
        "choices": [
          "[3, 2]",
          "[3]",
          "[2, 3, 2]",
          "None"
        ],
        "answer": 0,
        "explanation": "remove(value) removes only the first matching item.",
        "scene": 2
      },
      {
        "id": "lists-1-10",
        "difficulty": 1,
        "prompt": "Read the nested inventory slot. What is returned?",
        "code": "[[2, 3], [7, 8]][0][1]",
        "choices": [
          "3",
          "2",
          "7",
          "[2, 3]"
        ],
        "answer": 0,
        "explanation": "The first index selects a list, then index 1 selects its second item.",
        "scene": 0
      },
      {
        "id": "lists-2-1",
        "difficulty": 2,
        "prompt": "Two names point at one inventory. What is items now?",
        "code": "items = [2]\nalias = items\nalias.append(9)\nitems",
        "choices": [
          "[2, 9]",
          "[2]",
          "[2, [9]]",
          "None"
        ],
        "answer": 0,
        "explanation": "Assignment aliases the same list. Mutating alias also changes items.",
        "scene": 0
      },
      {
        "id": "lists-2-2",
        "difficulty": 2,
        "prompt": "Copy before collecting. What is items now?",
        "code": "items = [2]\ncopy = items[:]\ncopy.append(9)\nitems",
        "choices": [
          "[2]",
          "[2, 9]",
          "[9]",
          "None"
        ],
        "answer": 0,
        "explanation": "A slice creates a new outer list, so appending to the copy does not change items.",
        "scene": 1
      },
      {
        "id": "lists-2-3",
        "difficulty": 2,
        "prompt": "A shallow copy shares a nested slot. What is items now?",
        "code": "items = [[2]]\ncopy = items.copy()\ncopy[0].append(9)\nitems",
        "choices": [
          "[[2, 9]]",
          "[[2]]",
          "[[2], [9]]",
          "[2, 9]"
        ],
        "answer": 0,
        "explanation": "A shallow copy shares its nested objects; both outer lists refer to the same inner list.",
        "scene": 2
      },
      {
        "id": "lists-2-4",
        "difficulty": 2,
        "prompt": "Earn only even-numbered bonuses. What is returned?",
        "code": "[x * 2 for x in range(2, 6) if x % 2 == 0]",
        "choices": [
          "[4, 8]",
          "[2, 3, 4, 5]",
          "[2, 4]",
          "[4, 6, 8, 10]"
        ],
        "answer": 0,
        "explanation": "Filter for even x first, then double each selected value.",
        "scene": 0
      },
      {
        "id": "lists-2-5",
        "difficulty": 2,
        "prompt": "Store the return value of sort(). What is result?",
        "code": "items = [3, 2]\nresult = items.sort()\nresult",
        "choices": [
          "None",
          "[2, 3]",
          "[3, 2]",
          "True"
        ],
        "answer": 0,
        "explanation": "sort() mutates the list and returns None.",
        "scene": 1
      },
      {
        "id": "lists-2-6",
        "difficulty": 2,
        "prompt": "Compare appending and extending. What is len(items)?",
        "code": "items = [2]\nitems.append([7, 8])\nlen(items)",
        "choices": [
          "2",
          "3",
          "4",
          "1"
        ],
        "answer": 0,
        "explanation": "append() adds the entire list as one item, leaving two outer items.",
        "scene": 2
      },
      {
        "id": "lists-2-7",
        "difficulty": 2,
        "prompt": "Replace a range of inventory slots. What is items now?",
        "code": "items = [2, 3, 4, 5]\nitems[1:3] = [9]\nitems",
        "choices": [
          "[2, 9, 5]",
          "[2, 9, 4, 5]",
          "[2, [9], 5]",
          "[9, 5]"
        ],
        "answer": 0,
        "explanation": "Slice assignment replaces indices 1 and 2 with one item, shortening the list.",
        "scene": 0
      },
      {
        "id": "lists-2-8",
        "difficulty": 2,
        "prompt": "Mirrored inventory slots share an object. What is slots now?",
        "code": "slots = [[]] * 2\nslots[0].append(2)\nslots",
        "choices": [
          "[[2], [2]]",
          "[[2], []]",
          "[[], [2]]",
          "[[2]]"
        ],
        "answer": 0,
        "explanation": "List repetition duplicates references, so both slots refer to the same inner list.",
        "scene": 1
      },
      {
        "id": "lists-2-9",
        "difficulty": 2,
        "prompt": "Take every other item backward. What is returned?",
        "code": "[2, 3, 4, 5, 6][::-2]",
        "choices": [
          "[6, 4, 2]",
          "[2, 4, 6]",
          "[6, 5, 4, 3, 2]",
          "[5, 3]"
        ],
        "answer": 0,
        "explanation": "A step of -2 starts at the end and moves backward two positions at a time.",
        "scene": 2
      },
      {
        "id": "lists-2-10",
        "difficulty": 2,
        "prompt": "Insert a token, then remove by position. What is items now?",
        "code": "items = [2, 3, 4]\nitems.insert(1, 9)\nitems.pop(2)\nitems",
        "choices": [
          "[2, 9, 4]",
          "[2, 3, 4]",
          "[9, 3, 4]",
          "[2, 9, 3]"
        ],
        "answer": 0,
        "explanation": "insert(1, 9) shifts later items right; pop(2) then removes the old second item.",
        "scene": 0
      },
      {
        "id": "lists-1-11",
        "difficulty": 1,
        "prompt": "Read the second inventory slot. What is returned?",
        "code": "[4, 5, 6][1]",
        "choices": [
          "5",
          "4",
          "6",
          "IndexError"
        ],
        "answer": 0,
        "explanation": "Index 1 refers to the second item.",
        "scene": 1
      },
      {
        "id": "lists-1-12",
        "difficulty": 1,
        "prompt": "Add a coin to the inventory. What is items now?",
        "code": "items = [4, 5]\nitems.append(9)\nitems",
        "choices": [
          "[4, 5, 9]",
          "[4, 5]",
          "[4, 5, [9]]",
          "None"
        ],
        "answer": 0,
        "explanation": "append(9) adds the integer 9 as a single final item.",
        "scene": 2
      },
      {
        "id": "lists-1-13",
        "difficulty": 1,
        "prompt": "Collect a bonus pack. What is items now?",
        "code": "items = [4]\nitems.extend([7, 8])\nitems",
        "choices": [
          "[4, 7, 8]",
          "[4, [7, 8]]",
          "[7, 8, 4]",
          "None"
        ],
        "answer": 0,
        "explanation": "extend() adds each item from the supplied iterable.",
        "scene": 0
      },
      {
        "id": "lists-1-14",
        "difficulty": 1,
        "prompt": "Use the last item. What does pop() return?",
        "code": "items = [4, 7]\nitems.pop()",
        "choices": [
          "7",
          "[4]",
          "4",
          "None"
        ],
        "answer": 0,
        "explanation": "pop() without an index removes and returns the last item.",
        "scene": 1
      },
      {
        "id": "lists-1-15",
        "difficulty": 1,
        "prompt": "Sort the score tokens. What is items now?",
        "code": "items = [6, 4, 5]\nitems.sort()\nitems",
        "choices": [
          "[4, 5, 6]",
          "[6, 4, 5]",
          "[6, 5, 4]",
          "None"
        ],
        "answer": 0,
        "explanation": "sort() modifies the original list in ascending order.",
        "scene": 2
      },
      {
        "id": "lists-1-16",
        "difficulty": 1,
        "prompt": "Take a slice of the inventory. What is returned?",
        "code": "[4, 5, 6, 7][1:3]",
        "choices": [
          "[5, 6]",
          "[4, 5, 6]",
          "[5, 6, 7]",
          "5"
        ],
        "answer": 0,
        "explanation": "The start index is included and the stop index is excluded.",
        "scene": 0
      },
      {
        "id": "lists-1-17",
        "difficulty": 1,
        "prompt": "Replace the first inventory item. What is items now?",
        "code": "items = [4, 5]\nitems[0] = 9\nitems",
        "choices": [
          "[9, 5]",
          "[4, 5, 9]",
          "[4, 9]",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "Lists are mutable; assigning index 0 replaces the first item.",
        "scene": 1
      },
      {
        "id": "lists-1-18",
        "difficulty": 1,
        "prompt": "Read the final slot. What is returned?",
        "code": "[4, 9, 12][-1]",
        "choices": [
          "12",
          "4",
          "9",
          "IndexError"
        ],
        "answer": 0,
        "explanation": "Index -1 selects the final item.",
        "scene": 2
      },
      {
        "id": "lists-1-19",
        "difficulty": 1,
        "prompt": "Remove one matching token. What is items now?",
        "code": "items = [4, 5, 4]\nitems.remove(4)\nitems",
        "choices": [
          "[5, 4]",
          "[5]",
          "[4, 5, 4]",
          "None"
        ],
        "answer": 0,
        "explanation": "remove(value) removes only the first matching item.",
        "scene": 0
      },
      {
        "id": "lists-1-20",
        "difficulty": 1,
        "prompt": "Read the nested inventory slot. What is returned?",
        "code": "[[4, 5], [7, 8]][0][1]",
        "choices": [
          "5",
          "4",
          "7",
          "[4, 5]"
        ],
        "answer": 0,
        "explanation": "The first index selects a list, then index 1 selects its second item.",
        "scene": 1
      },
      {
        "id": "lists-2-11",
        "difficulty": 2,
        "prompt": "Two names point at one inventory. What is items now?",
        "code": "items = [4]\nalias = items\nalias.append(9)\nitems",
        "choices": [
          "[4, 9]",
          "[4]",
          "[4, [9]]",
          "None"
        ],
        "answer": 0,
        "explanation": "Assignment aliases the same list. Mutating alias also changes items.",
        "scene": 1
      },
      {
        "id": "lists-2-12",
        "difficulty": 2,
        "prompt": "Copy before collecting. What is items now?",
        "code": "items = [4]\ncopy = items[:]\ncopy.append(9)\nitems",
        "choices": [
          "[4]",
          "[4, 9]",
          "[9]",
          "None"
        ],
        "answer": 0,
        "explanation": "A slice creates a new outer list, so appending to the copy does not change items.",
        "scene": 2
      },
      {
        "id": "lists-2-13",
        "difficulty": 2,
        "prompt": "A shallow copy shares a nested slot. What is items now?",
        "code": "items = [[4]]\ncopy = items.copy()\ncopy[0].append(9)\nitems",
        "choices": [
          "[[4, 9]]",
          "[[4]]",
          "[[4], [9]]",
          "[4, 9]"
        ],
        "answer": 0,
        "explanation": "A shallow copy shares its nested objects; both outer lists refer to the same inner list.",
        "scene": 0
      },
      {
        "id": "lists-2-14",
        "difficulty": 2,
        "prompt": "Earn only even-numbered bonuses. What is returned?",
        "code": "[x * 2 for x in range(4, 8) if x % 2 == 0]",
        "choices": [
          "[8, 12]",
          "[4, 5, 6, 7]",
          "[4, 6]",
          "[8, 10, 12, 14]"
        ],
        "answer": 0,
        "explanation": "Filter for even x first, then double each selected value.",
        "scene": 1
      },
      {
        "id": "lists-2-15",
        "difficulty": 2,
        "prompt": "Store the return value of sort(). What is result?",
        "code": "items = [5, 4]\nresult = items.sort()\nresult",
        "choices": [
          "None",
          "[4, 5]",
          "[5, 4]",
          "True"
        ],
        "answer": 0,
        "explanation": "sort() mutates the list and returns None.",
        "scene": 2
      },
      {
        "id": "lists-2-16",
        "difficulty": 2,
        "prompt": "Compare appending and extending. What is len(items)?",
        "code": "items = [4]\nitems.append([7, 8])\nlen(items)",
        "choices": [
          "2",
          "3",
          "4",
          "1"
        ],
        "answer": 0,
        "explanation": "append() adds the entire list as one item, leaving two outer items.",
        "scene": 0
      },
      {
        "id": "lists-2-17",
        "difficulty": 2,
        "prompt": "Replace a range of inventory slots. What is items now?",
        "code": "items = [4, 5, 6, 7]\nitems[1:3] = [9]\nitems",
        "choices": [
          "[4, 9, 7]",
          "[4, 9, 6, 7]",
          "[4, [9], 7]",
          "[9, 7]"
        ],
        "answer": 0,
        "explanation": "Slice assignment replaces indices 1 and 2 with one item, shortening the list.",
        "scene": 1
      },
      {
        "id": "lists-2-18",
        "difficulty": 2,
        "prompt": "Mirrored inventory slots share an object. What is slots now?",
        "code": "slots = [[]] * 2\nslots[0].append(4)\nslots",
        "choices": [
          "[[4], [4]]",
          "[[4], []]",
          "[[], [4]]",
          "[[4]]"
        ],
        "answer": 0,
        "explanation": "List repetition duplicates references, so both slots refer to the same inner list.",
        "scene": 2
      },
      {
        "id": "lists-2-19",
        "difficulty": 2,
        "prompt": "Take every other item backward. What is returned?",
        "code": "[4, 5, 6, 7, 8][::-2]",
        "choices": [
          "[8, 6, 4]",
          "[4, 6, 8]",
          "[8, 7, 6, 5, 4]",
          "[7, 5]"
        ],
        "answer": 0,
        "explanation": "A step of -2 starts at the end and moves backward two positions at a time.",
        "scene": 0
      },
      {
        "id": "lists-2-20",
        "difficulty": 2,
        "prompt": "Insert a token, then remove by position. What is items now?",
        "code": "items = [4, 5, 6]\nitems.insert(1, 9)\nitems.pop(2)\nitems",
        "choices": [
          "[4, 9, 6]",
          "[4, 5, 6]",
          "[9, 5, 6]",
          "[4, 9, 5]"
        ],
        "answer": 0,
        "explanation": "insert(1, 9) shifts later items right; pop(2) then removes the old second item.",
        "scene": 1
      }
    ]
  },
  {
    "id": "tuples",
    "title": "Tuples",
    "glyph": "(x, y)",
    "questions": [
      {
        "id": "tuples-easy-1",
        "difficulty": 0,
        "prompt": "Which type creates an immutable collection using comma-separated items such as (10, 20)?",
        "code": "",
        "choices": [
          "List",
          "Tuple",
          "String",
          "Dictionary"
        ],
        "answer": 1,
        "explanation": "A tuple is an ordered collection whose item references cannot be replaced.",
        "scene": 0
      },
      {
        "id": "tuples-easy-2",
        "difficulty": 0,
        "prompt": "Which brackets are normally used for tuples?",
        "code": "",
        "choices": [
          "[]",
          "{}",
          "()",
          "<>"
        ],
        "answer": 2,
        "explanation": "Parentheses commonly surround a tuple, but commas are what form it.",
        "scene": 1
      },
      {
        "id": "tuples-easy-3",
        "difficulty": 0,
        "prompt": "Which one is a tuple?",
        "code": "",
        "choices": [
          "[1, 2]",
          "(1, 2)",
          "{1, 2}",
          "'1,2'"
        ],
        "answer": 1,
        "explanation": "The comma-separated values in parentheses form a tuple.",
        "scene": 2
      },
      {
        "id": "tuples-easy-4",
        "difficulty": 0,
        "prompt": "Can you normally change an item in a tuple?",
        "code": "",
        "choices": [
          "Yes",
          "No",
          "Sometimes",
          "Only strings"
        ],
        "answer": 1,
        "explanation": "Tuple items cannot be reassigned.",
        "scene": 0
      },
      {
        "id": "tuples-easy-5",
        "difficulty": 0,
        "prompt": "Are tuples ordered?",
        "code": "",
        "choices": [
          "Yes",
          "No",
          "Only with numbers",
          "Only with strings"
        ],
        "answer": 0,
        "explanation": "Tuples preserve the order of their items.",
        "scene": 1
      },
      {
        "id": "tuples-easy-6",
        "difficulty": 0,
        "prompt": "What does len((10, 20, 30)) return?",
        "code": "",
        "choices": [
          "2",
          "3",
          "30",
          "10"
        ],
        "answer": 1,
        "explanation": "This tuple contains three items.",
        "scene": 2
      },
      {
        "id": "tuples-easy-7",
        "difficulty": 0,
        "prompt": "What is the first index of a tuple?",
        "code": "",
        "choices": [
          "0",
          "1",
          "-1",
          "10"
        ],
        "answer": 0,
        "explanation": "Tuples use zero-based indexing.",
        "scene": 0
      },
      {
        "id": "tuples-easy-8",
        "difficulty": 0,
        "prompt": "Which is an empty tuple?",
        "code": "",
        "choices": [
          "[]",
          "{}",
          "()",
          "''"
        ],
        "answer": 2,
        "explanation": "Empty parentheses create an empty tuple.",
        "scene": 1
      },
      {
        "id": "tuples-easy-9",
        "difficulty": 0,
        "prompt": "Can a tuple contain strings?",
        "code": "",
        "choices": [
          "Yes",
          "No",
          "Only one",
          "Never"
        ],
        "answer": 0,
        "explanation": "Tuple items can be strings.",
        "scene": 2
      },
      {
        "id": "tuples-easy-10",
        "difficulty": 0,
        "prompt": "Can a tuple contain numbers?",
        "code": "",
        "choices": [
          "Yes",
          "No",
          "Only decimals",
          "Only integers"
        ],
        "answer": 0,
        "explanation": "Tuple items can be numbers.",
        "scene": 0
      },
      {
        "id": "tuples-easy-11",
        "difficulty": 0,
        "prompt": "Which one cannot normally be changed?",
        "code": "",
        "choices": [
          "List",
          "Tuple",
          "Dictionary",
          "Variable"
        ],
        "answer": 1,
        "explanation": "A tuple cannot have its items reassigned.",
        "scene": 1
      },
      {
        "id": "tuples-easy-12",
        "difficulty": 0,
        "prompt": "What does (5, 10, 15)[0] return?",
        "code": "",
        "choices": [
          "5",
          "10",
          "15",
          "0"
        ],
        "answer": 0,
        "explanation": "Index 0 selects the first item, 5.",
        "scene": 2
      },
      {
        "id": "tuples-easy-13",
        "difficulty": 0,
        "prompt": "Why would you use a tuple?",
        "code": "",
        "choices": [
          "For information that should stay fixed",
          "To delete data",
          "To create a loop",
          "To print text"
        ],
        "answer": 0,
        "explanation": "Tuples suit a fixed group of items, such as coordinates.",
        "scene": 0
      },
      {
        "id": "tuples-easy-14",
        "difficulty": 0,
        "prompt": "Which is a tuple of colors?",
        "code": "",
        "choices": [
          "['red', 'blue']",
          "('red', 'blue')",
          "{'red': 'blue'}",
          "'red blue'"
        ],
        "answer": 1,
        "explanation": "The parentheses and comma form a tuple of two strings.",
        "scene": 1
      },
      {
        "id": "tuples-easy-15",
        "difficulty": 0,
        "prompt": "Which data type is immutable?",
        "code": "",
        "choices": [
          "List",
          "Tuple",
          "Dictionary",
          "Set only"
        ],
        "answer": 1,
        "explanation": "Tuples are immutable collections.",
        "scene": 2
      },
      {
        "id": "tuples-easy-16",
        "difficulty": 0,
        "prompt": "What does immutable mean?",
        "code": "",
        "choices": [
          "Cannot normally be changed",
          "Can always be changed",
          "Can only store numbers",
          "Is always empty"
        ],
        "answer": 0,
        "explanation": "Immutable means the object itself cannot be changed after creation.",
        "scene": 0
      },
      {
        "id": "tuples-easy-17",
        "difficulty": 0,
        "prompt": "Which symbol separates tuple items?",
        "code": "",
        "choices": [
          "Comma",
          "Slash",
          "Colon",
          "Period"
        ],
        "answer": 0,
        "explanation": "Commas separate tuple items.",
        "scene": 1
      },
      {
        "id": "tuples-easy-18",
        "difficulty": 0,
        "prompt": "Can a tuple contain a list?",
        "code": "",
        "choices": [
          "Yes",
          "No",
          "Never",
          "Only numbers"
        ],
        "answer": 0,
        "explanation": "A tuple can contain a list; that nested list can still change.",
        "scene": 2
      },
      {
        "id": "tuples-easy-19",
        "difficulty": 0,
        "prompt": "Which is a tuple with two numbers?",
        "code": "",
        "choices": [
          "[10, 20]",
          "(10, 20)",
          "{10: 20}",
          "'10,20'"
        ],
        "answer": 1,
        "explanation": "The comma-separated values form a two-item tuple.",
        "scene": 0
      },
      {
        "id": "tuples-easy-20",
        "difficulty": 0,
        "prompt": "What is one main difference between a list and tuple?",
        "code": "",
        "choices": [
          "Lists can change, tuples cannot normally change",
          "Tuples store text only",
          "Lists cannot store numbers",
          "They are exactly the same"
        ],
        "answer": 0,
        "explanation": "List items can be changed; tuple items cannot be reassigned.",
        "scene": 1
      },
      {
        "id": "tuples-1-1",
        "difficulty": 1,
        "prompt": "Inspect a one-item coordinate packet. What is its type?",
        "code": "type((3,)).__name__",
        "choices": [
          "'tuple'",
          "'int'",
          "'list'",
          "'str'"
        ],
        "answer": 0,
        "explanation": "The trailing comma makes a one-item tuple.",
        "scene": 0
      },
      {
        "id": "tuples-1-2",
        "difficulty": 1,
        "prompt": "Inspect parentheses without a comma. What is the type?",
        "code": "type((3)).__name__",
        "choices": [
          "'int'",
          "'tuple'",
          "'list'",
          "'str'"
        ],
        "answer": 0,
        "explanation": "Parentheses alone group an expression; a comma is needed for a one-item tuple.",
        "scene": 1
      },
      {
        "id": "tuples-1-3",
        "difficulty": 1,
        "prompt": "Unpack the player coordinates. What is y?",
        "code": "x, y = (3, 5)\ny",
        "choices": [
          "5",
          "3",
          "(3, 5)",
          "None"
        ],
        "answer": 0,
        "explanation": "Unpacking assigns the first item to x and the second to y.",
        "scene": 2
      },
      {
        "id": "tuples-1-4",
        "difficulty": 1,
        "prompt": "Combine coordinate packets. What is returned?",
        "code": "(3, 4) + (9,)",
        "choices": [
          "(3, 4, 9)",
          "(3, 4, (9,))",
          "TypeError",
          "[3, 4, 9]"
        ],
        "answer": 0,
        "explanation": "Tuple concatenation produces a new tuple containing items from both tuples.",
        "scene": 0
      },
      {
        "id": "tuples-1-5",
        "difficulty": 1,
        "prompt": "Repeat a coordinate marker. What is returned?",
        "code": "(3,) * 3",
        "choices": [
          "(3, 3, 3)",
          "(9,)",
          "[3, 3, 3]",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "Multiplication repeats the tuple items three times.",
        "scene": 1
      },
      {
        "id": "tuples-1-6",
        "difficulty": 1,
        "prompt": "Count repeated waypoint IDs. What is returned?",
        "code": "(3, 9, 3).count(3)",
        "choices": [
          "2",
          "1",
          "3",
          "0"
        ],
        "answer": 0,
        "explanation": "count(value) returns how many items equal the requested value.",
        "scene": 2
      },
      {
        "id": "tuples-1-7",
        "difficulty": 1,
        "prompt": "Locate a waypoint. What is returned?",
        "code": "(3, 8, 9).index(8)",
        "choices": [
          "1",
          "0",
          "2",
          "8"
        ],
        "answer": 0,
        "explanation": "index(value) returns the zero-based position of the first match.",
        "scene": 0
      },
      {
        "id": "tuples-1-8",
        "difficulty": 1,
        "prompt": "Extract two coordinates. What is returned?",
        "code": "(3, 4, 5)[:2]",
        "choices": [
          "(3, 4)",
          "[3, 4]",
          "(3, 4, 5)",
          "(4, 5)"
        ],
        "answer": 0,
        "explanation": "Slicing a tuple produces another tuple; the stop index is excluded.",
        "scene": 1
      },
      {
        "id": "tuples-1-9",
        "difficulty": 1,
        "prompt": "Convert the inventory into a fixed packet. What is returned?",
        "code": "tuple([3, 9])",
        "choices": [
          "(3, 9)",
          "[3, 9]",
          "('3', '9')",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "tuple() constructs a tuple from the list items.",
        "scene": 2
      },
      {
        "id": "tuples-1-10",
        "difficulty": 1,
        "prompt": "Find the final coordinate. What is returned?",
        "code": "(3, 5, 7)[-1]",
        "choices": [
          "7",
          "3",
          "5",
          "IndexError"
        ],
        "answer": 0,
        "explanation": "Index -1 selects the last tuple item.",
        "scene": 0
      },
      {
        "id": "tuples-2-1",
        "difficulty": 2,
        "prompt": "A fixed packet holds a mutable list. What is packet now?",
        "code": "packet = ([3], 9)\npacket[0].append(8)\npacket",
        "choices": [
          "([3, 8], 9)",
          "([3], 9)",
          "TypeError",
          "([3], [8], 9)"
        ],
        "answer": 0,
        "explanation": "A tuple prevents replacing its item references, but a contained list can still be mutated.",
        "scene": 0
      },
      {
        "id": "tuples-2-2",
        "difficulty": 2,
        "prompt": "Unpack the remaining waypoints. What is rest?",
        "code": "first, *rest = (3, 4, 5)\nrest",
        "choices": [
          "[4, 5]",
          "(4, 5)",
          "5",
          "ValueError"
        ],
        "answer": 0,
        "explanation": "A starred unpacking target collects remaining items into a list.",
        "scene": 1
      },
      {
        "id": "tuples-2-3",
        "difficulty": 2,
        "prompt": "Unpack around the middle waypoint. What is middle?",
        "code": "first, *middle, last = (3, 4, 5)\nmiddle",
        "choices": [
          "[4]",
          "(4,)",
          "4",
          "ValueError"
        ],
        "answer": 0,
        "explanation": "The starred middle target is a list, even when it contains only one item.",
        "scene": 2
      },
      {
        "id": "tuples-2-4",
        "difficulty": 2,
        "prompt": "Compare coordinate packets. What is returned?",
        "code": "(3, 99) < (4, 0)",
        "choices": [
          "True",
          "False",
          "TypeError",
          "None"
        ],
        "answer": 0,
        "explanation": "Tuples compare lexicographically. The first differing item decides the result.",
        "scene": 0
      },
      {
        "id": "tuples-2-5",
        "difficulty": 2,
        "prompt": "Rebind a tuple after concatenation. What is old?",
        "code": "packet = (3,)\nold = packet\npacket += (9,)\nold",
        "choices": [
          "(3,)",
          "(3, 9)",
          "[3]",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "+= creates a new tuple and rebinds packet; old still refers to the original tuple.",
        "scene": 1
      },
      {
        "id": "tuples-2-6",
        "difficulty": 2,
        "prompt": "Look inside a nested packet. What is returned?",
        "code": "((3, 4), (8, 9))[0][-1]",
        "choices": [
          "4",
          "3",
          "8",
          "(3, 4)"
        ],
        "answer": 0,
        "explanation": "Select the first inner tuple, then its final item.",
        "scene": 2
      },
      {
        "id": "tuples-2-7",
        "difficulty": 2,
        "prompt": "A comma wraps the entire packet. What is len(packet)?",
        "code": "packet = (3, 9),\nlen(packet)",
        "choices": [
          "1",
          "2",
          "3",
          "0"
        ],
        "answer": 0,
        "explanation": "The trailing comma outside the parentheses creates a one-item outer tuple.",
        "scene": 0
      },
      {
        "id": "tuples-2-8",
        "difficulty": 2,
        "prompt": "Swap the coordinate axes. What is (x, y)?",
        "code": "x, y = 3, 4\nx, y = y, x\n(x, y)",
        "choices": [
          "(4, 3)",
          "(3, 4)",
          "(4, 4)",
          "(3, 3)"
        ],
        "answer": 0,
        "explanation": "Python evaluates the entire right side before assigning either target.",
        "scene": 1
      },
      {
        "id": "tuples-2-9",
        "difficulty": 2,
        "prompt": "Sort a fixed coordinate packet. What is returned?",
        "code": "sorted((5, 3, 4))",
        "choices": [
          "[3, 4, 5]",
          "(3, 4, 5)",
          "[5, 3, 4]",
          "AttributeError"
        ],
        "answer": 0,
        "explanation": "sorted() accepts a tuple but returns a new list.",
        "scene": 2
      },
      {
        "id": "tuples-2-10",
        "difficulty": 2,
        "prompt": "Hashable coordinates unlock a dictionary slot. What is returned?",
        "code": "{(3, 9): 'portal'}[(3, 9)]",
        "choices": [
          "'portal'",
          "TypeError",
          "KeyError",
          "(3, 9)"
        ],
        "answer": 0,
        "explanation": "A tuple containing only hashable items can be used as a dictionary key.",
        "scene": 0
      },
      {
        "id": "tuples-1-11",
        "difficulty": 1,
        "prompt": "Inspect a one-item coordinate packet. What is its type?",
        "code": "type((6,)).__name__",
        "choices": [
          "'tuple'",
          "'int'",
          "'list'",
          "'str'"
        ],
        "answer": 0,
        "explanation": "The trailing comma makes a one-item tuple.",
        "scene": 1
      },
      {
        "id": "tuples-1-12",
        "difficulty": 1,
        "prompt": "Inspect parentheses without a comma. What is the type?",
        "code": "type((6)).__name__",
        "choices": [
          "'int'",
          "'tuple'",
          "'list'",
          "'str'"
        ],
        "answer": 0,
        "explanation": "Parentheses alone group an expression; a comma is needed for a one-item tuple.",
        "scene": 2
      },
      {
        "id": "tuples-1-13",
        "difficulty": 1,
        "prompt": "Unpack the player coordinates. What is y?",
        "code": "x, y = (6, 8)\ny",
        "choices": [
          "8",
          "6",
          "(6, 8)",
          "None"
        ],
        "answer": 0,
        "explanation": "Unpacking assigns the first item to x and the second to y.",
        "scene": 0
      },
      {
        "id": "tuples-1-14",
        "difficulty": 1,
        "prompt": "Combine coordinate packets. What is returned?",
        "code": "(6, 7) + (9,)",
        "choices": [
          "(6, 7, 9)",
          "(6, 7, (9,))",
          "TypeError",
          "[6, 7, 9]"
        ],
        "answer": 0,
        "explanation": "Tuple concatenation produces a new tuple containing items from both tuples.",
        "scene": 1
      },
      {
        "id": "tuples-1-15",
        "difficulty": 1,
        "prompt": "Repeat a coordinate marker. What is returned?",
        "code": "(6,) * 3",
        "choices": [
          "(6, 6, 6)",
          "(18,)",
          "[6, 6, 6]",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "Multiplication repeats the tuple items three times.",
        "scene": 2
      },
      {
        "id": "tuples-1-16",
        "difficulty": 1,
        "prompt": "Count repeated waypoint IDs. What is returned?",
        "code": "(6, 9, 6).count(6)",
        "choices": [
          "2",
          "1",
          "3",
          "0"
        ],
        "answer": 0,
        "explanation": "count(value) returns how many items equal the requested value.",
        "scene": 0
      },
      {
        "id": "tuples-1-17",
        "difficulty": 1,
        "prompt": "Locate a waypoint. What is returned?",
        "code": "(6, 8, 9).index(8)",
        "choices": [
          "1",
          "0",
          "2",
          "8"
        ],
        "answer": 0,
        "explanation": "index(value) returns the zero-based position of the first match.",
        "scene": 1
      },
      {
        "id": "tuples-1-18",
        "difficulty": 1,
        "prompt": "Extract two coordinates. What is returned?",
        "code": "(6, 7, 8)[:2]",
        "choices": [
          "(6, 7)",
          "[6, 7]",
          "(6, 7, 8)",
          "(7, 8)"
        ],
        "answer": 0,
        "explanation": "Slicing a tuple produces another tuple; the stop index is excluded.",
        "scene": 2
      },
      {
        "id": "tuples-1-19",
        "difficulty": 1,
        "prompt": "Convert the inventory into a fixed packet. What is returned?",
        "code": "tuple([6, 9])",
        "choices": [
          "(6, 9)",
          "[6, 9]",
          "('6', '9')",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "tuple() constructs a tuple from the list items.",
        "scene": 0
      },
      {
        "id": "tuples-1-20",
        "difficulty": 1,
        "prompt": "Find the final coordinate. What is returned?",
        "code": "(6, 8, 10)[-1]",
        "choices": [
          "10",
          "6",
          "8",
          "IndexError"
        ],
        "answer": 0,
        "explanation": "Index -1 selects the last tuple item.",
        "scene": 1
      },
      {
        "id": "tuples-2-11",
        "difficulty": 2,
        "prompt": "A fixed packet holds a mutable list. What is packet now?",
        "code": "packet = ([6], 9)\npacket[0].append(8)\npacket",
        "choices": [
          "([6, 8], 9)",
          "([6], 9)",
          "TypeError",
          "([6], [8], 9)"
        ],
        "answer": 0,
        "explanation": "A tuple prevents replacing its item references, but a contained list can still be mutated.",
        "scene": 1
      },
      {
        "id": "tuples-2-12",
        "difficulty": 2,
        "prompt": "Unpack the remaining waypoints. What is rest?",
        "code": "first, *rest = (6, 7, 8)\nrest",
        "choices": [
          "[7, 8]",
          "(7, 8)",
          "8",
          "ValueError"
        ],
        "answer": 0,
        "explanation": "A starred unpacking target collects remaining items into a list.",
        "scene": 2
      },
      {
        "id": "tuples-2-13",
        "difficulty": 2,
        "prompt": "Unpack around the middle waypoint. What is middle?",
        "code": "first, *middle, last = (6, 7, 8)\nmiddle",
        "choices": [
          "[7]",
          "(7,)",
          "7",
          "ValueError"
        ],
        "answer": 0,
        "explanation": "The starred middle target is a list, even when it contains only one item.",
        "scene": 0
      },
      {
        "id": "tuples-2-14",
        "difficulty": 2,
        "prompt": "Compare coordinate packets. What is returned?",
        "code": "(6, 99) < (7, 0)",
        "choices": [
          "True",
          "False",
          "TypeError",
          "None"
        ],
        "answer": 0,
        "explanation": "Tuples compare lexicographically. The first differing item decides the result.",
        "scene": 1
      },
      {
        "id": "tuples-2-15",
        "difficulty": 2,
        "prompt": "Rebind a tuple after concatenation. What is old?",
        "code": "packet = (6,)\nold = packet\npacket += (9,)\nold",
        "choices": [
          "(6,)",
          "(6, 9)",
          "[6]",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "+= creates a new tuple and rebinds packet; old still refers to the original tuple.",
        "scene": 2
      },
      {
        "id": "tuples-2-16",
        "difficulty": 2,
        "prompt": "Look inside a nested packet. What is returned?",
        "code": "((6, 7), (8, 9))[0][-1]",
        "choices": [
          "7",
          "6",
          "8",
          "(6, 7)"
        ],
        "answer": 0,
        "explanation": "Select the first inner tuple, then its final item.",
        "scene": 0
      },
      {
        "id": "tuples-2-17",
        "difficulty": 2,
        "prompt": "A comma wraps the entire packet. What is len(packet)?",
        "code": "packet = (6, 9),\nlen(packet)",
        "choices": [
          "1",
          "2",
          "3",
          "0"
        ],
        "answer": 0,
        "explanation": "The trailing comma outside the parentheses creates a one-item outer tuple.",
        "scene": 1
      },
      {
        "id": "tuples-2-18",
        "difficulty": 2,
        "prompt": "Swap the coordinate axes. What is (x, y)?",
        "code": "x, y = 6, 7\nx, y = y, x\n(x, y)",
        "choices": [
          "(7, 6)",
          "(6, 7)",
          "(7, 7)",
          "(6, 6)"
        ],
        "answer": 0,
        "explanation": "Python evaluates the entire right side before assigning either target.",
        "scene": 2
      },
      {
        "id": "tuples-2-19",
        "difficulty": 2,
        "prompt": "Sort a fixed coordinate packet. What is returned?",
        "code": "sorted((8, 6, 7))",
        "choices": [
          "[6, 7, 8]",
          "(6, 7, 8)",
          "[8, 6, 7]",
          "AttributeError"
        ],
        "answer": 0,
        "explanation": "sorted() accepts a tuple but returns a new list.",
        "scene": 0
      },
      {
        "id": "tuples-2-20",
        "difficulty": 2,
        "prompt": "Hashable coordinates unlock a dictionary slot. What is returned?",
        "code": "{(6, 9): 'portal'}[(6, 9)]",
        "choices": [
          "'portal'",
          "TypeError",
          "KeyError",
          "(6, 9)"
        ],
        "answer": 0,
        "explanation": "A tuple containing only hashable items can be used as a dictionary key.",
        "scene": 1
      }
    ]
  },
  {
    "id": "dictionaries",
    "title": "Dictionaries",
    "glyph": "{k: v}",
    "questions": [
      {
        "id": "dictionaries-easy-1",
        "difficulty": 0,
        "prompt": "What does a dictionary store?",
        "code": "",
        "choices": [
          "Key-value pairs",
          "Only numbers",
          "Only strings",
          "Ordered characters"
        ],
        "answer": 0,
        "explanation": "Dictionaries map keys to values.",
        "scene": 0
      },
      {
        "id": "dictionaries-easy-2",
        "difficulty": 0,
        "prompt": "Which brackets are used for dictionaries?",
        "code": "",
        "choices": [
          "[]",
          "()",
          "{}",
          "<>"
        ],
        "answer": 2,
        "explanation": "Dictionary literals use curly braces with key-value pairs.",
        "scene": 1
      },
      {
        "id": "dictionaries-easy-3",
        "difficulty": 0,
        "prompt": "Which one is a dictionary?",
        "code": "",
        "choices": [
          "[1, 2]",
          "(1, 2)",
          "{'name': 'Alex'}",
          "'Alex'"
        ],
        "answer": 2,
        "explanation": "The colon connects the key name to its value Alex.",
        "scene": 2
      },
      {
        "id": "dictionaries-easy-4",
        "difficulty": 0,
        "prompt": "What is a key used for?",
        "code": "",
        "choices": [
          "To identify a value",
          "To delete the dictionary",
          "To create a loop",
          "To store only numbers"
        ],
        "answer": 0,
        "explanation": "A key identifies an associated value.",
        "scene": 0
      },
      {
        "id": "dictionaries-easy-5",
        "difficulty": 0,
        "prompt": "What is a value?",
        "code": "",
        "choices": [
          "Information connected to a key",
          "Always a number",
          "A bracket",
          "A loop"
        ],
        "answer": 0,
        "explanation": "Each key is associated with a value.",
        "scene": 1
      },
      {
        "id": "dictionaries-easy-6",
        "difficulty": 0,
        "prompt": "Which symbol separates a key from its value?",
        "code": "",
        "choices": [
          "Comma",
          "Colon",
          "Period",
          "Slash"
        ],
        "answer": 1,
        "explanation": "A colon separates each key from its value.",
        "scene": 2
      },
      {
        "id": "dictionaries-easy-7",
        "difficulty": 0,
        "prompt": "Which dictionary stores a person's age?",
        "code": "",
        "choices": [
          "{'age': 15}",
          "['age', 15]",
          "('age', 15)",
          "'age:15'"
        ],
        "answer": 0,
        "explanation": "The key age maps to the integer 15.",
        "scene": 0
      },
      {
        "id": "dictionaries-easy-8",
        "difficulty": 0,
        "prompt": "Can dictionary values be strings?",
        "code": "",
        "choices": [
          "Yes",
          "No",
          "Only one",
          "Never"
        ],
        "answer": 0,
        "explanation": "Dictionary values can be strings.",
        "scene": 1
      },
      {
        "id": "dictionaries-easy-9",
        "difficulty": 0,
        "prompt": "Can dictionary values be numbers?",
        "code": "",
        "choices": [
          "Yes",
          "No",
          "Only integers",
          "Never"
        ],
        "answer": 0,
        "explanation": "Dictionary values can be numbers.",
        "scene": 2
      },
      {
        "id": "dictionaries-easy-10",
        "difficulty": 0,
        "prompt": "Which method gets a value using a key?",
        "code": "",
        "choices": [
          "get()",
          "findValue()",
          "value()",
          "search()"
        ],
        "answer": 0,
        "explanation": "get(key) returns the value, or a default if the key is missing.",
        "scene": 0
      },
      {
        "id": "dictionaries-easy-11",
        "difficulty": 0,
        "prompt": "What does {'name': 'Sam'}['name'] return?",
        "code": "",
        "choices": [
          "name",
          "Sam",
          "{'name'}",
          "Error"
        ],
        "answer": 1,
        "explanation": "Looking up name returns its associated value, Sam.",
        "scene": 1
      },
      {
        "id": "dictionaries-easy-12",
        "difficulty": 0,
        "prompt": "What separates dictionary items?",
        "code": "",
        "choices": [
          "Commas",
          "Periods",
          "Slashes",
          "Spaces"
        ],
        "answer": 0,
        "explanation": "Commas separate key-value pairs.",
        "scene": 2
      },
      {
        "id": "dictionaries-easy-13",
        "difficulty": 0,
        "prompt": "Which is an empty dictionary?",
        "code": "",
        "choices": [
          "[]",
          "()",
          "{}",
          "''"
        ],
        "answer": 2,
        "explanation": "Empty curly braces create a dictionary.",
        "scene": 0
      },
      {
        "id": "dictionaries-easy-14",
        "difficulty": 0,
        "prompt": "Can a dictionary store multiple key-value pairs?",
        "code": "",
        "choices": [
          "Yes",
          "No",
          "Only two",
          "Only one"
        ],
        "answer": 0,
        "explanation": "Dictionaries can contain many key-value pairs.",
        "scene": 1
      },
      {
        "id": "dictionaries-easy-15",
        "difficulty": 0,
        "prompt": "What would be a good key for a student's grade?",
        "code": "",
        "choices": [
          "'grade'",
          "500",
          "[]",
          "()"
        ],
        "answer": 0,
        "explanation": "A descriptive key such as grade makes the data easier to understand.",
        "scene": 2
      },
      {
        "id": "dictionaries-easy-16",
        "difficulty": 0,
        "prompt": "Which code accesses the value for 'color'?",
        "code": "",
        "choices": [
          "dictionary['color']",
          "dictionary(color)",
          "dictionary.color",
          "dictionary{color}"
        ],
        "answer": 0,
        "explanation": "Square-bracket lookup accesses the value associated with the key.",
        "scene": 0
      },
      {
        "id": "dictionaries-easy-17",
        "difficulty": 0,
        "prompt": "What does a dictionary connect?",
        "code": "",
        "choices": [
          "Keys and values",
          "Lists and loops",
          "Strings and numbers only",
          "Tuples and lists only"
        ],
        "answer": 0,
        "explanation": "Dictionaries associate keys with values.",
        "scene": 1
      },
      {
        "id": "dictionaries-easy-18",
        "difficulty": 0,
        "prompt": "Can a dictionary value be a list?",
        "code": "",
        "choices": [
          "Yes",
          "No",
          "Never",
          "Only with strings"
        ],
        "answer": 0,
        "explanation": "Values can be lists or other Python objects.",
        "scene": 2
      },
      {
        "id": "dictionaries-easy-19",
        "difficulty": 0,
        "prompt": "Which is a dictionary with two items?",
        "code": "",
        "choices": [
          "{'name': 'Alex', 'age': 15}",
          "['name', 'age']",
          "('name', 'age')",
          "'name, age'"
        ],
        "answer": 0,
        "explanation": "This dictionary has two keys: name and age.",
        "scene": 0
      },
      {
        "id": "dictionaries-easy-20",
        "difficulty": 0,
        "prompt": "What is the main purpose of a dictionary?",
        "code": "",
        "choices": [
          "Organizing information using keys and values",
          "Storing only text",
          "Making random numbers",
          "Creating loops"
        ],
        "answer": 0,
        "explanation": "Dictionaries organize data so it can be looked up by key.",
        "scene": 1
      },
      {
        "id": "dictionaries-1-1",
        "difficulty": 1,
        "prompt": "Read the coin counter. What is returned?",
        "code": "{'coins': 3, 'lives': 2}['coins']",
        "choices": [
          "3",
          "2",
          "'coins'",
          "KeyError"
        ],
        "answer": 0,
        "explanation": "Square-bracket lookup returns the value associated with coins.",
        "scene": 0
      },
      {
        "id": "dictionaries-1-2",
        "difficulty": 1,
        "prompt": "Use a fallback for a missing item. What is returned?",
        "code": "{'coins': 3}.get('key', 0)",
        "choices": [
          "0",
          "None",
          "KeyError",
          "3"
        ],
        "answer": 0,
        "explanation": "get(key, default) returns the default when the key is absent.",
        "scene": 1
      },
      {
        "id": "dictionaries-1-3",
        "difficulty": 1,
        "prompt": "Collect an extra coin. What is stats now?",
        "code": "stats = {'coins': 3}\nstats['coins'] += 1\nstats",
        "choices": [
          "{'coins': 4}",
          "{'coins': 3}",
          "{'coins': 1}",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "The current value is increased by one and stored under the same key.",
        "scene": 2
      },
      {
        "id": "dictionaries-1-4",
        "difficulty": 1,
        "prompt": "Add a new inventory field. How many keys are there?",
        "code": "stats = {'coins': 3}\nstats['lives'] = 2\nlen(stats)",
        "choices": [
          "2",
          "1",
          "3",
          "6"
        ],
        "answer": 0,
        "explanation": "Adding a new key increases the number of entries to two.",
        "scene": 0
      },
      {
        "id": "dictionaries-1-5",
        "difficulty": 1,
        "prompt": "Check whether the map has a key. What is returned?",
        "code": "'coins' in {'coins': 3}",
        "choices": [
          "True",
          "False",
          "3",
          "KeyError"
        ],
        "answer": 0,
        "explanation": "The in operator tests dictionary keys, not values.",
        "scene": 1
      },
      {
        "id": "dictionaries-1-6",
        "difficulty": 1,
        "prompt": "Read the values from the scoreboard. What is returned?",
        "code": "list({'coins': 3, 'lives': 2}.values())",
        "choices": [
          "[3, 2]",
          "['coins', 'lives']",
          "[2, 3]",
          "[(3, 2)]"
        ],
        "answer": 0,
        "explanation": "values() exposes the values in insertion order.",
        "scene": 2
      },
      {
        "id": "dictionaries-1-7",
        "difficulty": 1,
        "prompt": "Use and remove a key token. What does pop() return?",
        "code": "stats = {'keys': 3}\nstats.pop('keys')",
        "choices": [
          "3",
          "None",
          "{'keys': 3}",
          "KeyError"
        ],
        "answer": 0,
        "explanation": "pop(key) removes an entry and returns its value.",
        "scene": 0
      },
      {
        "id": "dictionaries-1-8",
        "difficulty": 1,
        "prompt": "Overwrite an existing score. What is stats now?",
        "code": "stats = {'score': 3}\nstats.update({'score': 10})\nstats",
        "choices": [
          "{'score': 10}",
          "{'score': 3}",
          "{'score': 3, 'bonus': 10}",
          "None"
        ],
        "answer": 0,
        "explanation": "update() replaces the value of an existing key.",
        "scene": 1
      },
      {
        "id": "dictionaries-1-9",
        "difficulty": 1,
        "prompt": "Read a nested player record. What is returned?",
        "code": "{'player': {'lives': 3}}['player']['lives']",
        "choices": [
          "3",
          "{'lives': 3}",
          "'player'",
          "KeyError"
        ],
        "answer": 0,
        "explanation": "The first lookup returns the inner dictionary, and the second reads its lives value.",
        "scene": 2
      },
      {
        "id": "dictionaries-1-10",
        "difficulty": 1,
        "prompt": "Inspect the item pairs. What is returned?",
        "code": "list({'coins': 3}.items())",
        "choices": [
          "[('coins', 3)]",
          "['coins', 3]",
          "{'coins': 3}",
          "[3]"
        ],
        "answer": 0,
        "explanation": "items() provides key-value tuples; list() collects them into a list.",
        "scene": 0
      },
      {
        "id": "dictionaries-2-1",
        "difficulty": 2,
        "prompt": "A level file repeats a key. What is returned?",
        "code": "{'coins': 3, 'coins': 99}['coins']",
        "choices": [
          "99",
          "3",
          "KeyError",
          "[3, 99]"
        ],
        "answer": 0,
        "explanation": "A later value for the same key overwrites the earlier value.",
        "scene": 0
      },
      {
        "id": "dictionaries-2-2",
        "difficulty": 2,
        "prompt": "Build a bonus lookup table. What is returned?",
        "code": "{x: x * x for x in range(3, 5)}",
        "choices": [
          "{3: 9, 4: 16}",
          "{3: 3, 4: 4}",
          "[9, 16]",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "A dictionary comprehension creates one key-value pair for each x.",
        "scene": 1
      },
      {
        "id": "dictionaries-2-3",
        "difficulty": 2,
        "prompt": "Merge two score records. What is returned?",
        "code": "{'coins': 3, 'lives': 2} | {'coins': 99}",
        "choices": [
          "{'coins': 99, 'lives': 2}",
          "{'coins': 3, 'lives': 2}",
          "{'coins': 99}",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "The dictionary union keeps all keys; the right-hand value wins for shared keys (Python 3.9+).",
        "scene": 2
      },
      {
        "id": "dictionaries-2-4",
        "difficulty": 2,
        "prompt": "A copied record contains a shared list. What is stats now?",
        "code": "stats = {'loot': [3]}\ncopy = stats.copy()\ncopy['loot'].append(9)\nstats",
        "choices": [
          "{'loot': [3, 9]}",
          "{'loot': [3]}",
          "{'loot': [9]}",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "dict.copy() is shallow, so nested lists remain shared.",
        "scene": 0
      },
      {
        "id": "dictionaries-2-5",
        "difficulty": 2,
        "prompt": "Try a default on an existing key. What does result contain?",
        "code": "stats = {'coins': 3}\nresult = stats.setdefault('coins', 99)\nresult",
        "choices": [
          "3",
          "99",
          "None",
          "KeyError"
        ],
        "answer": 0,
        "explanation": "setdefault() returns the existing value and does not overwrite it.",
        "scene": 1
      },
      {
        "id": "dictionaries-2-6",
        "difficulty": 2,
        "prompt": "Initialize a missing inventory slot. What is stats now?",
        "code": "stats = {'coins': 3}\nstats.setdefault('loot', []).append('key')\nstats",
        "choices": [
          "{'coins': 3, 'loot': ['key']}",
          "{'coins': 3}",
          "{'coins': 3, 'loot': []}",
          "None"
        ],
        "answer": 0,
        "explanation": "setdefault() inserts the missing key with a list, then append() mutates that list.",
        "scene": 2
      },
      {
        "id": "dictionaries-2-7",
        "difficulty": 2,
        "prompt": "Two generated slots share one default. What is stats now?",
        "code": "stats = dict.fromkeys(['a', 'b'], [])\nstats['a'].append(3)\nstats",
        "choices": [
          "{'a': [3], 'b': [3]}",
          "{'a': [3], 'b': []}",
          "{'a': [], 'b': [3]}",
          "{'a': [], 'b': []}"
        ],
        "answer": 0,
        "explanation": "fromkeys() uses the same value object for every key, so the list is shared.",
        "scene": 0
      },
      {
        "id": "dictionaries-2-8",
        "difficulty": 2,
        "prompt": "A key view stays connected to its map. What is list(keys)?",
        "code": "stats = {'coins': 3}\nkeys = stats.keys()\nstats['lives'] = 2\nlist(keys)",
        "choices": [
          "['coins', 'lives']",
          "['coins']",
          "['lives', 'coins']",
          "RuntimeError"
        ],
        "answer": 0,
        "explanation": "Dictionary views are live; the new key is visible when the view is later read.",
        "scene": 1
      },
      {
        "id": "dictionaries-2-9",
        "difficulty": 2,
        "prompt": "Test for a value using in. What is returned?",
        "code": "3 in {'coins': 3}",
        "choices": [
          "False",
          "True",
          "KeyError",
          "None"
        ],
        "answer": 0,
        "explanation": "Membership on a dictionary checks keys. The integer is a value, not a key.",
        "scene": 2
      },
      {
        "id": "dictionaries-2-10",
        "difficulty": 2,
        "prompt": "Use a safe lookup for nested data. What is returned?",
        "code": "{'coins': 3}.get('player', {}).get('lives', 0)",
        "choices": [
          "0",
          "None",
          "KeyError",
          "3"
        ],
        "answer": 0,
        "explanation": "The missing player defaults to an empty dictionary; missing lives then defaults to 0.",
        "scene": 0
      },
      {
        "id": "dictionaries-1-11",
        "difficulty": 1,
        "prompt": "Read the coin counter. What is returned?",
        "code": "{'coins': 7, 'lives': 2}['coins']",
        "choices": [
          "7",
          "2",
          "'coins'",
          "KeyError"
        ],
        "answer": 0,
        "explanation": "Square-bracket lookup returns the value associated with coins.",
        "scene": 1
      },
      {
        "id": "dictionaries-1-12",
        "difficulty": 1,
        "prompt": "Use a fallback for a missing item. What is returned?",
        "code": "{'coins': 7}.get('key', 0)",
        "choices": [
          "0",
          "None",
          "KeyError",
          "7"
        ],
        "answer": 0,
        "explanation": "get(key, default) returns the default when the key is absent.",
        "scene": 2
      },
      {
        "id": "dictionaries-1-13",
        "difficulty": 1,
        "prompt": "Collect an extra coin. What is stats now?",
        "code": "stats = {'coins': 7}\nstats['coins'] += 1\nstats",
        "choices": [
          "{'coins': 8}",
          "{'coins': 7}",
          "{'coins': 1}",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "The current value is increased by one and stored under the same key.",
        "scene": 0
      },
      {
        "id": "dictionaries-1-14",
        "difficulty": 1,
        "prompt": "Add a new inventory field. How many keys are there?",
        "code": "stats = {'coins': 7}\nstats['lives'] = 2\nlen(stats)",
        "choices": [
          "2",
          "1",
          "3",
          "10"
        ],
        "answer": 0,
        "explanation": "Adding a new key increases the number of entries to two.",
        "scene": 1
      },
      {
        "id": "dictionaries-1-15",
        "difficulty": 1,
        "prompt": "Check whether the map has a key. What is returned?",
        "code": "'coins' in {'coins': 7}",
        "choices": [
          "True",
          "False",
          "7",
          "KeyError"
        ],
        "answer": 0,
        "explanation": "The in operator tests dictionary keys, not values.",
        "scene": 2
      },
      {
        "id": "dictionaries-1-16",
        "difficulty": 1,
        "prompt": "Read the values from the scoreboard. What is returned?",
        "code": "list({'coins': 7, 'lives': 2}.values())",
        "choices": [
          "[7, 2]",
          "['coins', 'lives']",
          "[2, 7]",
          "[(7, 2)]"
        ],
        "answer": 0,
        "explanation": "values() exposes the values in insertion order.",
        "scene": 0
      },
      {
        "id": "dictionaries-1-17",
        "difficulty": 1,
        "prompt": "Use and remove a key token. What does pop() return?",
        "code": "stats = {'keys': 7}\nstats.pop('keys')",
        "choices": [
          "7",
          "None",
          "{'keys': 7}",
          "KeyError"
        ],
        "answer": 0,
        "explanation": "pop(key) removes an entry and returns its value.",
        "scene": 1
      },
      {
        "id": "dictionaries-1-18",
        "difficulty": 1,
        "prompt": "Overwrite an existing score. What is stats now?",
        "code": "stats = {'score': 7}\nstats.update({'score': 10})\nstats",
        "choices": [
          "{'score': 10}",
          "{'score': 7}",
          "{'score': 7, 'bonus': 10}",
          "None"
        ],
        "answer": 0,
        "explanation": "update() replaces the value of an existing key.",
        "scene": 2
      },
      {
        "id": "dictionaries-1-19",
        "difficulty": 1,
        "prompt": "Read a nested player record. What is returned?",
        "code": "{'player': {'lives': 7}}['player']['lives']",
        "choices": [
          "7",
          "{'lives': 7}",
          "'player'",
          "KeyError"
        ],
        "answer": 0,
        "explanation": "The first lookup returns the inner dictionary, and the second reads its lives value.",
        "scene": 0
      },
      {
        "id": "dictionaries-1-20",
        "difficulty": 1,
        "prompt": "Inspect the item pairs. What is returned?",
        "code": "list({'coins': 7}.items())",
        "choices": [
          "[('coins', 7)]",
          "['coins', 7]",
          "{'coins': 7}",
          "[7]"
        ],
        "answer": 0,
        "explanation": "items() provides key-value tuples; list() collects them into a list.",
        "scene": 1
      },
      {
        "id": "dictionaries-2-11",
        "difficulty": 2,
        "prompt": "A level file repeats a key. What is returned?",
        "code": "{'coins': 7, 'coins': 99}['coins']",
        "choices": [
          "99",
          "7",
          "KeyError",
          "[7, 99]"
        ],
        "answer": 0,
        "explanation": "A later value for the same key overwrites the earlier value.",
        "scene": 1
      },
      {
        "id": "dictionaries-2-12",
        "difficulty": 2,
        "prompt": "Build a bonus lookup table. What is returned?",
        "code": "{x: x * x for x in range(7, 9)}",
        "choices": [
          "{7: 49, 8: 64}",
          "{7: 7, 8: 8}",
          "[49, 64]",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "A dictionary comprehension creates one key-value pair for each x.",
        "scene": 2
      },
      {
        "id": "dictionaries-2-13",
        "difficulty": 2,
        "prompt": "Merge two score records. What is returned?",
        "code": "{'coins': 7, 'lives': 2} | {'coins': 99}",
        "choices": [
          "{'coins': 99, 'lives': 2}",
          "{'coins': 7, 'lives': 2}",
          "{'coins': 99}",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "The dictionary union keeps all keys; the right-hand value wins for shared keys (Python 3.9+).",
        "scene": 0
      },
      {
        "id": "dictionaries-2-14",
        "difficulty": 2,
        "prompt": "A copied record contains a shared list. What is stats now?",
        "code": "stats = {'loot': [7]}\ncopy = stats.copy()\ncopy['loot'].append(9)\nstats",
        "choices": [
          "{'loot': [7, 9]}",
          "{'loot': [7]}",
          "{'loot': [9]}",
          "TypeError"
        ],
        "answer": 0,
        "explanation": "dict.copy() is shallow, so nested lists remain shared.",
        "scene": 1
      },
      {
        "id": "dictionaries-2-15",
        "difficulty": 2,
        "prompt": "Try a default on an existing key. What does result contain?",
        "code": "stats = {'coins': 7}\nresult = stats.setdefault('coins', 99)\nresult",
        "choices": [
          "7",
          "99",
          "None",
          "KeyError"
        ],
        "answer": 0,
        "explanation": "setdefault() returns the existing value and does not overwrite it.",
        "scene": 2
      },
      {
        "id": "dictionaries-2-16",
        "difficulty": 2,
        "prompt": "Initialize a missing inventory slot. What is stats now?",
        "code": "stats = {'coins': 7}\nstats.setdefault('loot', []).append('key')\nstats",
        "choices": [
          "{'coins': 7, 'loot': ['key']}",
          "{'coins': 7}",
          "{'coins': 7, 'loot': []}",
          "None"
        ],
        "answer": 0,
        "explanation": "setdefault() inserts the missing key with a list, then append() mutates that list.",
        "scene": 0
      },
      {
        "id": "dictionaries-2-17",
        "difficulty": 2,
        "prompt": "Two generated slots share one default. What is stats now?",
        "code": "stats = dict.fromkeys(['a', 'b'], [])\nstats['a'].append(7)\nstats",
        "choices": [
          "{'a': [7], 'b': [7]}",
          "{'a': [7], 'b': []}",
          "{'a': [], 'b': [7]}",
          "{'a': [], 'b': []}"
        ],
        "answer": 0,
        "explanation": "fromkeys() uses the same value object for every key, so the list is shared.",
        "scene": 1
      },
      {
        "id": "dictionaries-2-18",
        "difficulty": 2,
        "prompt": "A key view stays connected to its map. What is list(keys)?",
        "code": "stats = {'coins': 7}\nkeys = stats.keys()\nstats['lives'] = 2\nlist(keys)",
        "choices": [
          "['coins', 'lives']",
          "['coins']",
          "['lives', 'coins']",
          "RuntimeError"
        ],
        "answer": 0,
        "explanation": "Dictionary views are live; the new key is visible when the view is later read.",
        "scene": 2
      },
      {
        "id": "dictionaries-2-19",
        "difficulty": 2,
        "prompt": "Test for a value using in. What is returned?",
        "code": "7 in {'coins': 7}",
        "choices": [
          "False",
          "True",
          "KeyError",
          "None"
        ],
        "answer": 0,
        "explanation": "Membership on a dictionary checks keys. The integer is a value, not a key.",
        "scene": 0
      },
      {
        "id": "dictionaries-2-20",
        "difficulty": 2,
        "prompt": "Use a safe lookup for nested data. What is returned?",
        "code": "{'coins': 7}.get('player', {}).get('lives', 0)",
        "choices": [
          "0",
          "None",
          "KeyError",
          "7"
        ],
        "answer": 0,
        "explanation": "The missing player defaults to an empty dictionary; missing lives then defaults to 0.",
        "scene": 1
      }
    ]
  }
];

export const DIFFICULTIES = ["Easy", "Medium", "Hard"];
export const QUESTIONS_PER_LEVEL = 20;
export const CHECKPOINT_EVERY = 5;
export const PASS_PERCENT = 80;
