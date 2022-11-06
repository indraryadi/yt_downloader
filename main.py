from time import sleep
from pytube import YouTube
from progress.bar import Bar
from pathlib import Path

download_path=str(Path.home()/'Downloads')

# print(download_path)

link = input("enter the link:")
try:
 
  # link="https://www.youtube.com/watch?v=OTBdO18zmxQ"
  yt=YouTube(link)
except:
  print("connection error")
# print(link)

print(f"Title :{yt.title}")
# video + audio
video_w_audio=yt.streams.filter(progressive=True)

num=1
l_itag=[]
for i in video_w_audio:
  # print(i.resolution)
  print(f'{num}. {i.resolution}')
  l_itag.append(i.itag)
  num+=1
v_res=input("choose the resolution :")
v_select=yt.streams.get_by_itag(l_itag[int(v_res)-1])
with Bar('Processing',max=100) as bar:
  for i in range(100):
    v_select.download(output_path=download_path)
    sleep(0.02)
    bar.next()
  bar.finish()
