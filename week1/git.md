# git/github
## 安裝
* 到[https://git-scm.com/downloads](https://git-scm.com/downloads)下載git軟體
* 打 git 指令,會出現下面訊息
```md
$ git
usage: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

...
```
# 基本用法
## 下載專案
```md
$ git clone https://github.com/xxxxxxx/xxx.git
... 若你是修改後還要推回的，xxxxxxx 應該是你自己的帳號 ...
... 若只是要 clone 老師的，那 xxxxxx 應該是 cccnqu ...

$ cd xxx  註: 切換到 clone 的資料夾 xxx 當中
... 接著加入一些新檔案，或者修改某些檔案後 ...
```md
## 將專案推回
```md
$ git add -A
$ git commit -m "xxxxxxxx"
$ git push origin master
Username : xxxxxx    <-- 輸入你的帳號 (github 上的)
Password :           <-- 輸入你的密碼
注意：在 Password 裡你打任何字，都不會印出來 (也不會印 * 號)，這是正常的。 (不要覺得為何打了沒反應 ....)
...
如果你是第一次在自己電腦上用 git push，那麼必須要先設定自己的 email 和 name， name 必須是 github 上的帳號。

$ git config --global user.email "xxxxx@gmail.com"
$ git config --global user.name "xxxxx"
```