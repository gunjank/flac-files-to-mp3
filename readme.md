# Flac to MP3

Convert .flac file(s) to .mp3 for a given directory. 

## Usage

First install ffmpeg.

On Mac, `brew install ffmpeg` is the easiest option. For others, visit [ffmpeg.org](https://www.ffmpeg.org/download.html).

To test whether ffmpeg is installed, simply run `ffmpeg` on the command line. You should see output like the following:

```
ffmpeg version 2.6 Copyright (c) 2000-2015 the FFmpeg developers
  built with Apple LLVM version 6.0 (clang-600.0.56) (based on LLVM 3.5svn)
  configuration: --prefix=/usr/local/Cellar/ffmpeg/2.6 --enable-shared --enable-pthreads --enable-gpl --enable-version3 --enable-hardcoded-tables --enable-avresample --cc=clang --host-cflags= --host-ldflags= --enable-libx264 --enable-libmp3lame --enable-libvo-aacenc --enable-libxvid --enable-vda
  libavutil      54. 20.100 / 54. 20.100
  libavcodec     56. 26.100 / 56. 26.100
  libavformat    56. 25.101 / 56. 25.101
  libavdevice    56.  4.100 / 56.  4.100
  libavfilter     5. 11.102 /  5. 11.102
  libavresample   2.  1.  0 /  2.  1.  0
  libswscale      3.  1.101 /  3.  1.101
  libswresample   1.  1.100 /  1.  1.100
  libpostproc    53.  3.100 / 53.  3.100
Hyper fast Audio and Video encoder
usage: ffmpeg [options] [[infile options] -i infile]... {[outfile options] outfile}...
```

### Install flac-to-mp3 and other dependencies

```
npm install 
```


### To convert modify below code under index.js

```
const flacFilePath = "C:\\temp\\del";//** YOUR FLAC DIRECTORY */
```

## Todo

- Convert and move to given directry


## Credits

https://www.npmjs.com/package/flac-to-mp3

https://www.linkedin.com/in/gunjankumar/

