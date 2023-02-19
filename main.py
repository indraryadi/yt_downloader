from pathlib import Path
from core.video import *
from core.downloader import *
from core.mp3 import *
import time

save_path=str(Path.home()/'Downloads')
link = input("enter the link:")
# next shown available download type maybe, for now just 2 type (mp4 and mp3)
download_type=input("select download type: \n1. video\n2. mp3\nyour choice: ")

#for now use if, next use while and switch case
if download_type=='1':
  v_select=get_video(link)
  # print(v_select)
  try:
    print("downloading video ...")
    t1=time.time()
    download(save_path,v_select,download_type)
    t2=time.time()
    tot_time=t2-t1
    tot_time=time.strftime("%H:%M:%S", time.gmtime(tot_time))
    print(f"download success, finished in: {tot_time}")
  except:
    print('failed download')
elif download_type=='2':
  v_select=get_mp3(link)
  try:
    print("downloading mp3 ...")
    t1=time.time()
    download(save_path,v_select,download_type)
    t2=time.time()
    tot_time=t2-t1
    tot_time=time.strftime("%H:%M:%S", time.gmtime(tot_time))
    print(f"download success, finished in: {tot_time}")

    print("download success")
  except:
    print('failed download')
else:
  print("wrong choice")


