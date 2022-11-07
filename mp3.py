from pytube import YouTube

def get_mp3(url):
    try:
		# link="https://www.youtube.com/watch?v=OTBdO18zmxQ"
        yt=YouTube(url)
    except:
        print("connection error")

    audio=yt.streams.filter(only_audio=True)
    l_itag=[]
    num=1
    for i in audio:
        print(f'{num}. {i.abr}')
        l_itag.append(i.itag)
        num+=1

    a_res=input("choose: ")
    a_select=yt.streams.get_by_itag(l_itag[int(a_res)-1])

    return a_select