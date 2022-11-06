from time import sleep
from pytube import YouTube
from progress.bar import Bar
from pathlib import Path
import os

def download(save_path,selected,download_type):
    if download_type=='1':
        with Bar('Processing',max=100) as bar:
            for i in range(100):
                selected.download(output_path=save_path)
                sleep(0.02)
                bar.next()
        bar.finish()