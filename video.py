from pytube import YouTube

def get_video(url):
	try:
		# link="https://www.youtube.com/watch?v=OTBdO18zmxQ"
		yt=YouTube(url)
	except:
		print("connection error")

	video_w_audio=yt.streams.filter(progressive=True)
	print(f"Title :{yt.title}")

	num=1
	l_itag=[]

	for i in video_w_audio:
		print(f'{num}. {i.resolution}')
		l_itag.append(i.itag)
		num+=1

	v_res=input("choose the resolution :")
	v_select=yt.streams.get_by_itag(l_itag[int(v_res)-1])

	return v_select