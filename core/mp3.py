from pytube import YouTube

def get_video_stream_and_quality(url):
    try:
        _yt=YouTube(url)
        _raw_data=_yt.streams.filter(only_audio=True,mime_type="audio/mp4")
        _quality={}
        # print(_raw_data)
        for i in _raw_data:
            _quality[i.itag]=i.abr

        return {"streams":_yt.streams,"title":_yt.title,"qualities":_quality}

    except Exception as e:
        print(e)

def get_mp3_link(stream,selected_quality):

    try:
        link=stream.get_by_itag(selected_quality)
        return link
    except:
        print("connection error")

if __name__=="__main__":
    yt=get_video_stream_and_quality("https://www.youtube.com/watch?v=OTBdO18zmxQ")
    link=get_mp3_link(yt["streams"],139)
    print(link)