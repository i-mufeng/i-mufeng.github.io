import{_ as s,o as a,c as n,U as e}from"./chunks/framework.c8sqUf1u.js";const u=JSON.parse('{"title":"Mysql for Windows 安装及初始化","description":"Mysql for Windows 安装及初始化。","frontmatter":{"description":"Mysql for Windows 安装及初始化。","categories":["教程分享"],"tags":["mysql","windows"],"sticky":2},"headers":[],"relativePath":"technology/service/mysql-for-win-install.md","filePath":"technology/service/mysql-for-win-install.md","lastUpdated":1704354963000}'),p={name:"technology/service/mysql-for-win-install.md"},l=e(`<h1 id="mysql-for-windows-安装及初始化" tabindex="-1">Mysql for Windows 安装及初始化 <a class="header-anchor" href="#mysql-for-windows-安装及初始化" aria-label="Permalink to &quot;Mysql for Windows 安装及初始化&quot;">​</a></h1><h2 id="一、简介" tabindex="-1">一、简介 <a class="header-anchor" href="#一、简介" aria-label="Permalink to &quot;一、简介&quot;">​</a></h2><p>Windows 安装 Mysql 主要还是为了本地调试的方便。8.x 的版本和 5.7 的版本安装过程大差不差，这里以 8.0.35（8.2版本发布前的最新版）举例。</p><h2 id="二、下载安装" tabindex="-1">二、下载安装 <a class="header-anchor" href="#二、下载安装" aria-label="Permalink to &quot;二、下载安装&quot;">​</a></h2><p>Windows 端 Mysql 只需要在 <a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noreferrer">MySQL :: Download MySQL Community Server</a> 页面选择对应版本下载 mysql-xxx-winx64.zip，该压缩包为编译后文件，并非源码， 可以直接运行。</p><p>目录结构如下：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Directory: D:\\Element\\mysql-8.0.35</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Mode                 LastWriteTime         Length Name</span></span>
<span class="line"><span>----                 -------------         ------ ----</span></span>
<span class="line"><span>da---            2024/1/4    15:00                bin</span></span>
<span class="line"><span>da---            2024/1/4    15:00                docs</span></span>
<span class="line"><span>da---            2024/1/4    15:00                include</span></span>
<span class="line"><span>da---            2024/1/4    15:00                lib</span></span>
<span class="line"><span>da---            2024/1/4    15:00                share</span></span>
<span class="line"><span>-a---          2023/10/12    19:45         279355 LICENSE</span></span>
<span class="line"><span>-a---          2023/10/12    19:45            666 README</span></span></code></pre></div><h2 id="四、配置" tabindex="-1">四、配置 <a class="header-anchor" href="#四、配置" aria-label="Permalink to &quot;四、配置&quot;">​</a></h2><h3 id="配置环境变量" tabindex="-1">配置环境变量 <a class="header-anchor" href="#配置环境变量" aria-label="Permalink to &quot;配置环境变量&quot;">​</a></h3><p>为方便 Mysql 服务的使用和管理，可以在 PATH 中加入 Mysql 的 bin 目录。</p><h3 id="修改配置文件" tabindex="-1">修改配置文件 <a class="header-anchor" href="#修改配置文件" aria-label="Permalink to &quot;修改配置文件&quot;">​</a></h3><p>Mysql 配置默认读取自安装目录下 <code>my.ini</code>，如没有需要创建一个，Mysql 默认有一套配置，如端口默认为 3306 等，<code>my.ini</code> 并非必须，只需要在其中写明需要的配置即可，如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[mysqld]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lower_case_table_names=2</span></span></code></pre></div><blockquote><p>注意：此处 lower_case_table_names 有三种取值：</p><ul><li>0：表示表名区分大小写。</li><li>1：表示将表名转换为小写，但在比较时仍然区分大小写。</li><li>2：表示将表名转换为小写，并且在比较时也不区分大小写。</li></ul></blockquote><h3 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h3><p>初始化 Mysql 需要管理员权限，需要管理员权限运行 Powershell 或 CMD。执行 <code>mysqld --initialize --console</code> 既可初始化并在控制台显示密码。</p><p><code>Mysqld</code> 服务初始化过程如下：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PS D:\\Element\\mysql-8.0.35&gt; ./bin/mysqld --initialize  --console</span></span>
<span class="line"><span>2024-01-04T07:08:20.705336Z 0 [System] [MY-013169] [Server] D:\\Element\\mysql-8.0.35\\bin\\mysqld.exe (mysqld 8.0.35) initializing of server in progress as process 3008</span></span>
<span class="line"><span>2024-01-04T07:08:20.730739Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.</span></span>
<span class="line"><span>2024-01-04T07:08:21.033652Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.</span></span>
<span class="line"><span>2024-01-04T07:08:22.291288Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: /YlA-/3M_yny</span></span></code></pre></div><p>初始化完成后，会在 Mysql 安装目录生成一个 <code>data</code> 目录，即为 Mysql 数据存储目录。初始化日志最后一行显示的即为初始化的随机密码，权限为 <code>root@localhost</code>。</p><h3 id="安装服务" tabindex="-1">安装服务 <a class="header-anchor" href="#安装服务" aria-label="Permalink to &quot;安装服务&quot;">​</a></h3><p>运行 <code>mysqld install</code> 即可在 Windows 系统中安装 Mysql 服务。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PS D:\\Element\\mysql-8.0.35&gt; .\\bin\\mysqld install</span></span>
<span class="line"><span>Service successfully installed.</span></span></code></pre></div><h3 id="启动服务" tabindex="-1">启动服务 <a class="header-anchor" href="#启动服务" aria-label="Permalink to &quot;启动服务&quot;">​</a></h3><p>可以使用 <code>net start mysql</code> 命令启动 Mysql 服务，如出现如下内容，即为启动成功：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PS C:\\Users\\mufeng&gt; net start mysql</span></span>
<span class="line"><span>MySQL 服务正在启动 .</span></span>
<span class="line"><span>MySQL 服务已经启动成功。</span></span></code></pre></div><h3 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h3><p>服务启动之后，即可连接 Mysql：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PS C:\\Users\\mufeng&gt; mysql -uroot -p</span></span>
<span class="line"><span>Enter password: ************</span></span>
<span class="line"><span>Welcome to the MySQL monitor.  Commands end with ; or \\g.</span></span>
<span class="line"><span>Your MySQL connection id is 8</span></span>
<span class="line"><span>Server version: 8.0.35</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Copyright (c) 2000, 2023, Oracle and/or its affiliates.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Oracle is a registered trademark of Oracle Corporation and/or its</span></span>
<span class="line"><span>affiliates. Other names may be trademarks of their respective</span></span>
<span class="line"><span>owners.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt;</span></span></code></pre></div><h3 id="修改-mysql-默认密码" tabindex="-1">修改 Mysql 默认密码 <a class="header-anchor" href="#修改-mysql-默认密码" aria-label="Permalink to &quot;修改 Mysql 默认密码&quot;">​</a></h3><p>Mysql 权限管理是基于 <code>域 + 用户 + 权限</code> 的方式，本地对安全性要求不高，此处修改 root 用户随处可以登录。</p><p>如下：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mysql&gt; ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;root&#39;;</span></span>
<span class="line"><span>Query OK, 0 rows affected (0.01 sec)</span></span>
<span class="line"><span>mysql&gt; use mysql;</span></span>
<span class="line"><span>Database changed</span></span>
<span class="line"><span>mysql&gt; update user set host = &#39;%&#39; where host = &#39;localhost&#39; and user = &#39;root&#39;;</span></span>
<span class="line"><span>Query OK, 1 row affected (0.00 sec)</span></span>
<span class="line"><span>Rows matched: 1  Changed: 1  Warnings: 0</span></span></code></pre></div><p>测试：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PS C:\\Users\\mufeng&gt; mysql -uroot -proot</span></span>
<span class="line"><span>mysql: [Warning] Using a password on the command line interface can be insecure.</span></span>
<span class="line"><span>Welcome to the MySQL monitor.  Commands end with ; or \\g.</span></span>
<span class="line"><span>Your MySQL connection id is 10</span></span>
<span class="line"><span>Server version: 8.0.35 MySQL Community Server - GPL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Copyright (c) 2000, 2023, Oracle and/or its affiliates.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Oracle is a registered trademark of Oracle Corporation and/or its</span></span>
<span class="line"><span>affiliates. Other names may be trademarks of their respective</span></span>
<span class="line"><span>owners.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt;</span></span></code></pre></div><p>登录成功！至此，Mysql For Windows 安装完成。</p><h2 id="五、其他" tabindex="-1">五、其他 <a class="header-anchor" href="#五、其他" aria-label="Permalink to &quot;五、其他&quot;">​</a></h2><h3 id="mysql-服务无法启动" tabindex="-1">Mysql 服务无法启动 <a class="header-anchor" href="#mysql-服务无法启动" aria-label="Permalink to &quot;Mysql 服务无法启动&quot;">​</a></h3><p>Mysql 初始化顺序为先修改配置文件，再初始化，如果先初始化，然后修改了诸如忽略大小写等与现有数据冲突的配置，可能会造成无法启动。</p>`,38),t=[l];function i(o,c,r,d,h,m){return a(),n("div",null,t)}const q=s(p,[["render",i]]);export{u as __pageData,q as default};
