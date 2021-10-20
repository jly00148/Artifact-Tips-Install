# [Nodejs安装及环境配置](https://blog.csdn.net/alnorthword/article/details/88420874):

## 下载安装：
 **1**. _下载地址：https://nodejs.org/zh-cn/download/ 根据自己电脑系统及位数选择，我这里选择windows64位.msi格式安装包。（注：因为nodejs版本太高了，v12.16.2以上版本不支持win7系统）_
 **2**. _下载完成后，双击安装包，开始安装，一直点next即可，安装路径默认在C:\Program Files下，也可以自定义修改_

 ## 修改包路径：
 **1**.  _在node安装目录下下新建两个文件夹:_  
 * node_global 全局包下载存放
 * node_cache node缓存
 
**2**. _修改路径_:
 *  npm config set prefix "D:\software_download\nodejs\node_global"
 *  npm config set cache "D:\software_download\node_cache"

## 修改用户变量path：
* path---"D:\software_download\nodejs\node_global"

## 新增系统变量NODE_PATH:
 * NODE_PATH---"E:\nodejs\software_download\node_modules"
