from pytube import YouTube
from pathlib import Path

def download(save_path,selected,download_type):
    if download_type=='1':
        selected.download(output_path=save_path)
    elif download_type=='2':
        file_name=selected['title']+".mp3"
        out_file=selected['stream'].download(output_path=save_path,filename=file_name)
