import csv


# initialize lists
titles = []
dates = []
notes = []

seasons = []
first_line =[]


def parse_episode_data(file_name):
    with open(file_name, 'r') as file:
        # read each line
        for line in file:
            line = line.strip()
            title_str = ""
            date_str = ""
            notes_str = ""
            line = line[1:]
            title_str = line.split('"')[0]
            eol = line.split('"')[1].strip()
            date_str = eol[1:].split(')')[0]
            if len(eol.split(')')) > 1:
                notes_str = eol.split(')')[1]
            else:
                notes_str = ""
            titles.append(title_str)
            dates.append(date_str)
            notes.append(notes_str)


def parse_colors_data(file_name):
    with open(file_name, 'r') as file:
        # read each line
        for line in file:
            line = line.strip()
            print(line)



parse_episode_data('./data/episode_data.txt')
parse_colors_data('./data/colors_data.csv')

print()








    
        



