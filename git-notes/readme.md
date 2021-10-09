# GIT常用操作:
## git配置：设置名字和邮箱
* _git config --global user.name "Your Name"_
* _git config --global user.email "email@example.com"_
* **查看配置名**：_git config user.name_
* **查看配置邮箱**：_git config user.email_

## 创建仓库：
* **方法一：本地建立仓库**
   _1. 新建文件夹：mkdir test_
   _2. 进入新的文件夹 cd test_
   _3. 初始化仓库：git init_
>注意：关联远程仓库命令是git remote add origin '仓库地址'
查看远程库命令是git remote -v：查看远程仓库

*  **方法二：clone远程仓库到本地：**
        _1.git clone  '仓库地址'_

## 提交一个简单的commit
  1.  **初始化仓库**：_git init_
  2.  **添加文件到暂存区**：_git add <filename>_
  3.  **将暂存区内容添加到仓库中**：_git commit -m <注释>_
  4. **推向远程仓库**：git push

## 使用ssh协议的仓库地址：
  1.  _生成ssh-key：ssh-keygen -t -C ‘邮箱地址' (邮箱地址写配置git时的地址，生成的.ssh文件在c盘Users\用户名\)下，进入.ssh文件有私钥文件id_rsa和公钥文件id_rsa.pub_
  2.  _执行cat id_rsa.pub，生成加密字符_
  3.  _将上述的加密字符复制添加到github中(Personal settings->SSH and GPG keys->New SSh key)_

## 提交与修改:
* _添加文件到仓库：git add filename_
* _查看仓库当前的状态，显示有变更的文件：git status_
* _比较文件的不同，即暂存区和工作区的差异：git diff_ 
* _提交暂存区到本地仓库：git commit_
* _丢弃工作区的内容：git checkout -- filename_
* _丢弃暂存区的内容：git reset HEAD filename_
* _git reset --hard HEAD 丢弃所有工作区的更改，和最后一次的commit的内容一致_
* _git reset --hard commit_id：回退想要的版本_
* _git reset --hard HEAD^：HEAD表示当前版本，回退上个版本是HEAD^，上上个版本是HEAD^^_
* _强制删除暂存区的文件：git rm -f '文件名'_
* _重命名工作区文件：git mv 旧文件 新文件_

## 提交日志：
* **git log** ：_查看历史提交记录_
* **git blame <file>** ：_以列表形式查看指定文件的历史修改记录_

## 分支的概念：
* **创建分支**：_git branch 分支名称_
* **切换分支**：_命令:git checkout 分支名_
* **创建并切换分支**：_命令:git checkout -b 分支名_
* **查看当前分支**：_git branch_
* **合并分支命令**:_git merge 分支名_
* _抓取远程分支(前提远程仓库有分支，该命令创建本地分支并且与远程分支关联)： git checkout -b 本地分支名  远程仓库名/远程分支名_
* _本地分支与远程分支关联：git branch --set-upstream-to=远程仓库/远程分支名 本地分支名_
* _查看已有的本地及远程分支：git branch -a_
* _查看远程仓库：git branch -r_
* _创建远程分支：git push 远程仓库名 本地分支名：远程分支名_
>创建远程分支之前必须有本地分支，本地分支最好和远程分支名保持一致
* _在本地更新远程仓库信息：git fetch origin (git branch -r命令无法显示远程仓库分支名故需要此命令)_
* _删除远程分支：git push 远程仓库 --delete  远程分支名_
* _查看分支关联：git branch -vv_
* _推送分支：命令:git push 远程仓库名 远程分支名( 分支名为master时是推送主分支，如果是远程是dev分支的话就是推送dev的分支，若直接是git push就是推送所有相关联的分支，包括主分支master和其他分支例如dev分支，各自推送各自分支并不相互影响)_
* _推送分支并且与远程仓库相关联：git push -u 远程仓库名 远程分支名_
* _从远程仓库分支同步代码：git pull origin 远程分支名:本地分支名_
* _删除本地分支：git branch -d 本地分支名_
* _删除远程分支：git push origin --delete ’远程分支名‘_
>_从远程库clone时，默认情况下只有看到本地master分支，该命令创建本地分支并且与远程分支关联，本地分支名最好和远程分支名保持一致，抓取分支之前远程仓库必须有该分支_
* **查看分支合并图**：_git log --graph_

  ## 团队协作：
  1. _第一步,管理员在远程库创建一个项目仓库_
  2. _第二步,在项目仓库中添加开发人员_
  3. _第三步,开发人员使用git clone把项目克隆到本地_
   >注意：
   1. _以github远程仓库为例,在项目仓库中添加开发人员时,可以是开发人员的ssh公钥,也可以是开发人员的账号。1. 添加开发人员的ssh公钥步骤为:项目仓库的主页中的Settings->Deploy keys->Add deploy key，2. 添加开发人员的账号步骤为:项目仓库的主页中的Settings->Collaborators_
   2. _开发人员克隆项目时,如果添加的ssh公钥,就用ssh协议的地址,如果添加的账号就用https协议的地址_
   3. _在github中如果项目没有添加开发人员并且也没有在个人设置里添加ssh公钥,只能克隆项目,不能提交项目_

## 团队协作中的分支：
* _创建本地分支并关联远程分支：git checkout -b 分支名 远程仓库名/分支名，如:git checkout -b dev origin/dev_
>**注意点**：_1.从远程库clone时,默认情况下,只能看到本地的master分支，2.创建本地分支并关联远程分支命令，该命令创建本地分支并且和远程仓库里的分支关联，3.本地分支名最好和远程仓库里的分支名保持一致，3.抓取分支前在远程库里必须有该分支_

## 远程操作
  * **git remote**: _远程仓库操作_
  * **git fetch**: _从远程获取代码库_
  * **git pull** :_下载远程代码并合并_
  * **git push**	_上传远程代码并合并_


## 出现的问题需要的注意点：
1. _fatal: pathspec 'aa.txt' did not match any files：文件没有add 跟踪_