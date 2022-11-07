from pathlib import Path
from video import *
from downloader import *
from mp3 import *

save_path=str(Path.home()/'Downloads')
link = input("enter the link:")
# next shown available download type maybe, for now just 2 type (mp4 and mp3)
download_type=input("select download type: \n1. video\n2. mp3\nyour choice: ")

#for now use if, next use while and switch case
if download_type=='1':
  v_select=get_video(link)
  # print(v_select)
  try:
    download(save_path,v_select,download_type)
  except:
    print('failed download')
elif download_type=='2':
  v_select=get_mp3(link)
  try:
    download(save_path,v_select,download_type)
  except:
    print('failed download')
else:
  print("wrong choice")


