# 问题：
 	1，克隆远程仓库后，删掉本地文件，新建文件并修改后提交失败
	提示：fatal: Not a git repository (or any of the parent directories) 

       	原因：缺少.git文件

	解决：git init

	仍然失败 ，提示hint: Updates were rejected because a pushed branch tip is behind its remoter

	原因：之前已提交.gitignore and README.md文件，与本地文件冲突

	解决：使用git pull，提示
	It seems that there is already a rebase-apply directory, and 
	I wonder if you are in the middle of another rebase.  If that is the
	case, please try
    		git rebase (--continue | --abort | --skip)
	于是git rebase --abort，使用git status查看：

	Unmerged paths:
  	(use "git add <file>..." to mark resolution)

        both added:      .gitignore
        both added:      README.md
	然后git add文件，git status查看：
	
	All conflicts fixed but you are still merging.
  	(use "git commit" to conclude merge)

	Changes to be committed:

        modified:   .gitignore
        modified:   README.md
	然后git commit -m，git status查看：

	On branch master
	nothing to commit, working directory clean
	最后重新git push成功，ctrl+z退出git命令bash乱码

	2，根据官方文档，安装项目模板vue init webpack my-project失败

	提示：SyntaxError: Block-scoped declarations (let, const, function, class) not yet
	nodejs/node_modules/vue-clibin/vue-init:60 let template = program.args[0]
	解决：更新了node的版本：下载官方文件覆盖安装
	随后把npm也更新到最新版V5.5.0，然后又出现问题

	3，npm install出错，
	提示：npm ERR! errno -4048，
	Error: EPERM: operation not permitted
	unlink 'E:\Webstorm\Vue\vue-demo\node_modules\fsevents\node_modules\delayed-stream\lib\delayed_stream.js
	Please try running this command again as root/Administrator.
	于是清理缓存npm cache clean --force(v5以上使用)，使用管理员权限均无效，最后根据网友提示降级npm，
	npm install -g npm@5.2.0解决问题 github讨论https://github.com/npm/npm/issues/17671

	
