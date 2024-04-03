import csv


# initialize lists
titles = []
dates = []
notes = []

painting_indexs = []
img_srcs = []
seasons = []
episodes =[]
num_of_colors = []
yt_srcs = []
colors_list = []
hex_list = []

subject_lists = []


# function 1 - gets 3 lists
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


# function 2 - gets 8 lists
def parse_colors_data(file_name):
    with open(file_name, 'r') as file:
        # read each line
        for line in file:
            line = line.strip()
            painting_ndx_str, img_src_str, season_str, episode_str = "", "", "", ""
            num_colors_str, yt_src_str, colors_str, hex_str = "", "", "", ""

            painting_ndx_str, img_src_str = line.split(',')[1], line.split(',')[2]
            season_str, episode_str = line.split(',')[4], line.split(',')[5]
            num_colors_str, yt_src_str = line.split(',')[6], line.split(',')[7]

            if len(line.split('"')) > 1:
                colors_str = line.split('"')[1]
                hex_str = line.split('"')[3]

            painting_indexs.append(painting_ndx_str)
            img_srcs.append(img_src_str)
            seasons.append(season_str)
            episodes.append(episode_str)
            num_of_colors.append(num_colors_str)
            yt_srcs.append(yt_src_str)
            colors_list.append(colors_str)
            hex_list.append(hex_str)
         

# function 3 - gets lists
def parse_subject_data(file_name):
    with open(file_name, 'r') as file:
        sl =[]
        mock_data = []
        # read each line
        for line in file:
            line = line.strip()
            
            if line[0] == 'E':
                sl = line.split(',')[2:69]
            else:
                sub_data = line.split(',')[2:69]
                mock_data.append(sub_data)
            
        for i in mock_data:
            mock_list = []
            for j in range(len(sl)):
                if i[j] == '1':
                    mock_list.append(sl[j])
            subject_lists.append(mock_list)

        
        
# creating new file
def createfile():
    
    with open('./data/new_data.csv', 'w') as new_file:
        writer = csv.writer(new_file)
        writer.writerow(['painting_index', 'title', 'season', 'episode', 'img_src', 'num_of_colors', 'colors', 'hex_list','subject', 'yt_src', 'notes'])
        for i in range(len(painting_indexs)):
            writer.writerow([painting_indexs[i], titles[i], seasons[i], episodes[i], img_srcs[i], num_of_colors[i], colors_list[i], hex_list[i], subject_lists[i], yt_srcs[i], notes[i]]) 
            

# calling functions with apropiate files
parse_episode_data('./data/episode_data.txt')
parse_colors_data('./data/colors_data.csv')
parse_subject_data('./data/subject_data.csv')
painting_indexs = painting_indexs[1:]
img_srcs = img_srcs[1:]
seasons = seasons[1:]
episodes = episodes[1:]
num_of_colors = num_of_colors[1:]
yt_srcs = yt_srcs[1:]
colors_list = colors_list[1:]
hex_list = hex_list[1:]
createfile()
