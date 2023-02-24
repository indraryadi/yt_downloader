from pytube import YouTube
from pathlib import Path

def download(save_path,selected,download_type,title):
    if download_type=='mp4':
        selected.download(output_path=save_path)
    elif download_type=='mp3':
        # file_name=selected['title']+".mp3"
        file_name=title+".mp3"
        out_file=selected.download(output_path=save_path,filename=file_name)
