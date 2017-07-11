
- When you run a command in the terminal, where does BASH look for that command?
```
In the directories listed in the user's PATH
```
- On a UNIX computer, how do you stop a running process?
```bash
$ ps # To get process number
$ kill <process-number>

```
- What packages do you have installed via homebrew?
```
$ brew list
gmp
gnutls
icu4c
libffi
libtasn1
libunistring
nettle
node
openssl
ossp-uuid
p11-kit
postgresql
readline
rename
task
taskd
tasksh


$ brew cask list 
atom                                     libreoffice
battery-time-remaining                   postgres
brackets                                 postico
caffeine                                 slimbatterymonitor
calibre                                  snippets
coconutbattery                           spectacle
firefox                                  taskwarrior-pomodoro
firefoxdeveloperedition                  torbrowser
freesmug-chromium                        transmission
gfxcardstatus                            vagrant
github-desktop                           virtualbox
google-chrome                            visual-studio-code-insiders
google-chrome-canary                     vlc
iterm2                                   webtorrent
```

- On a UNIX computer, how do you find the process id of a running process?
```bash
$ ps
```
- In a terminal, what does control-c do?
```
Sends a SIGINT (signal interrupt) to the currently running process to cause a shutdown of that process
```
- What would be the result of typing the following commands?
```sh
$ cd /Users/steve
$ mkdir foo
$ touch bar
$ cd foo
$ touch bar
$ pwd
```
```
Change to Steve's Home Directory
Make Directory foo
Create File /Users/steve/bar
Change to foo directory
Create File /Users/steve/foo/bar
Print /Users/steve/foo


```
- How do you set an environment variable in your shell?
```
$ env myVar="Value"
```
- What keyboard shortcut do you use to split the screen in your editor?
```
⌘D in the terminal
⌘\ in the Visual Studio Code

```
- How do you create an alias in your shell?
```
alias ddg="lynx https://duckduckgo.com/lite/"
```
- When a terminal command completes, how can you tell if it was successful or not?
```
Successfully completed terminal commands typically silently return to the prompt

```
- What does your `~/.gitconfig` have in it? (paste the whole file here)
```
[color]
	ui = true
[core]
	editor = code

```
- What is the difference between a relative and absolute path?
```
An absolute path starts from the root i.e. /Users/username/Desktop
A relative path starts from the current folder i.e. ../username/Desktop
```
- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to copy the `README.md` file to the `pinterest-for-dogs` folder?
```
$ cp R* ../p*
```
- What keyboard shortcut do you use, in your editor, when you want to open a specific file
```
⌘O - To open the open file/folder dialog
```
- What files or folders do you want all git repositories to ignore?
```
DS_Store
node_modules
```
- What is the main difference between `Array.map` and `Array.forEach` in JavaScript?
```
Both take functions that will be applied to each item in an array however Map returns a mutated array and forEach does not

```