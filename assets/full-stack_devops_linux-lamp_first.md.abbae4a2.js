import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.5584abd2.js";const f=JSON.parse('{"title":"第一步 编译安装httpd服务器","description":"","frontmatter":{"tags":["Linux","架构","运维","LAMP"],"category":"Linux 运维"},"headers":[],"relativePath":"full-stack/devops/linux-lamp/first.md","filePath":"full-stack/devops/linux-lamp/first.md","lastUpdated":1696930315000}'),p={name:"full-stack/devops/linux-lamp/first.md"},l=e(`<h1 id="第一步-编译安装httpd服务器" tabindex="-1">第一步 编译安装httpd服务器 <a class="header-anchor" href="#第一步-编译安装httpd服务器" aria-label="Permalink to &quot;第一步 编译安装httpd服务器&quot;">​</a></h1><h2 id="_1、安装前准备" tabindex="-1">1、安装前准备 <a class="header-anchor" href="#_1、安装前准备" aria-label="Permalink to &quot;1、安装前准备&quot;">​</a></h2><p>解压apr apr-util pcre httpd expat包</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost app]# tar -xvf apr-1.6.5.tar.xz -C /app/</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost app]# tar -xvf apr-util-1.6.1.tar.xz -C /app/</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost app]# tar -xvf pcre-8.42.tar.xz -C /app/</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost app]# tar -xvf httpd-2.4.46.tar.xz -C /app/</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost app]# ls</span></span>
<span class="line"><span style="color:#e1e4e8;">apr-1.6.5  apr-util-1.6.1  httpd-2.4.46  packages  pcre-8.42</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost app]# tar -xvf apr-1.6.5.tar.xz -C /app/</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost app]# tar -xvf apr-util-1.6.1.tar.xz -C /app/</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost app]# tar -xvf pcre-8.42.tar.xz -C /app/</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost app]# tar -xvf httpd-2.4.46.tar.xz -C /app/</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[root@localhost app]# ls</span></span>
<span class="line"><span style="color:#24292e;">apr-1.6.5  apr-util-1.6.1  httpd-2.4.46  packages  pcre-8.42</span></span></code></pre></div><p>安装软件支持</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost apr-1.6.5]# dnf -y install gcc gcc-c++ make cmake gdb libstdc++*</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost apr-1.6.5]# dnf -y install gcc gcc-c++ make cmake gdb libstdc++*</span></span></code></pre></div><h2 id="_2、编译安装apr" tabindex="-1">2、编译安装apr <a class="header-anchor" href="#_2、编译安装apr" aria-label="Permalink to &quot;2、编译安装apr&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost apr-1.6.5]# pwd</span></span>
<span class="line"><span style="color:#e1e4e8;">/app/apr-1.6.5</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost apr-1.6.5]# ./configure --prefix=/usr/local/apr</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost apr-1.6.5]# make &amp;&amp; make install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost apr-1.6.5]# pwd</span></span>
<span class="line"><span style="color:#24292e;">/app/apr-1.6.5</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[root@localhost apr-1.6.5]# ./configure --prefix=/usr/local/apr</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[root@localhost apr-1.6.5]# make &amp;&amp; make install</span></span></code></pre></div><p>这里运行编译文件时可能会报错</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">rm: cannot remove &#39;libtoolT&#39;: No such file or directory</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">rm: cannot remove &#39;libtoolT&#39;: No such file or directory</span></span></code></pre></div><p>解决：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost apr-1.6.5]# vim configure</span></span>
<span class="line"><span style="color:#e1e4e8;">#把RM=&#39;$RM&#39;改为RM=&#39;$RM  -f&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost apr-1.6.5]# vim configure</span></span>
<span class="line"><span style="color:#24292e;">#把RM=&#39;$RM&#39;改为RM=&#39;$RM  -f&#39;</span></span></code></pre></div><h2 id="_3、编译安装expat" tabindex="-1">3、编译安装expat <a class="header-anchor" href="#_3、编译安装expat" aria-label="Permalink to &quot;3、编译安装expat&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost expat-2.2.3]# pwd</span></span>
<span class="line"><span style="color:#e1e4e8;">/app/expat-2.2.3</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost expat-2.2.3]# ./configure --prefix=/usr/local/expat</span></span>
<span class="line"><span style="color:#e1e4e8;">make &amp;&amp; make install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost expat-2.2.3]# pwd</span></span>
<span class="line"><span style="color:#24292e;">/app/expat-2.2.3</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost expat-2.2.3]# ./configure --prefix=/usr/local/expat</span></span>
<span class="line"><span style="color:#24292e;">make &amp;&amp; make install</span></span></code></pre></div><h2 id="_4、编译安装apr-util" tabindex="-1">4、编译安装apr-util <a class="header-anchor" href="#_4、编译安装apr-util" aria-label="Permalink to &quot;4、编译安装apr-util&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost apr-util-1.6.1]# pwd</span></span>
<span class="line"><span style="color:#e1e4e8;">/app/apr-util-1.6.1</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost apr-util-1.6.1]# ./configure --prefix=/usr/local/apr-util --with-apr=/usr/local/apr --with-expat=/usr/local/expat</span></span>
<span class="line"><span style="color:#e1e4e8;">make &amp;&amp; make install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost apr-util-1.6.1]# pwd</span></span>
<span class="line"><span style="color:#24292e;">/app/apr-util-1.6.1</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost apr-util-1.6.1]# ./configure --prefix=/usr/local/apr-util --with-apr=/usr/local/apr --with-expat=/usr/local/expat</span></span>
<span class="line"><span style="color:#24292e;">make &amp;&amp; make install</span></span></code></pre></div><h2 id="_5、编译安装pcre" tabindex="-1">5、编译安装pcre <a class="header-anchor" href="#_5、编译安装pcre" aria-label="Permalink to &quot;5、编译安装pcre&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost pcre-8.42]# pwd</span></span>
<span class="line"><span style="color:#e1e4e8;">/app/pcre-8.42</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost pcre-8.42]# ./configure --prefix=/usr/local/pcre</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost pcre-8.42]# make &amp;&amp; make install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost pcre-8.42]# pwd</span></span>
<span class="line"><span style="color:#24292e;">/app/pcre-8.42</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost pcre-8.42]# ./configure --prefix=/usr/local/pcre</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost pcre-8.42]# make &amp;&amp; make install</span></span></code></pre></div><h2 id="_6、编译安装httpd" tabindex="-1">6、编译安装httpd <a class="header-anchor" href="#_6、编译安装httpd" aria-label="Permalink to &quot;6、编译安装httpd&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# pwd</span></span>
<span class="line"><span style="color:#e1e4e8;">/app/httpd-2.4.46</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# ./configure --prefix=/usr/local/apache --with-apr=/usr/local/apr --with-apr-util=/usr/local/apr-util --with-pcre=/usr/local/pcre  --enable-so   --enable-rewrite --enable-ssl  --with-ssl=/usr/lib  --enable-auth-digest --enable-cgi --enable-suexec  --with-suexec-caller=daemon --with-suexec-docroot=/usr/local/apache/htdocs</span></span>
<span class="line"><span style="color:#e1e4e8;">#这里的编译选项应当是需要什么加什么，具体选项见说明文档</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# pwd</span></span>
<span class="line"><span style="color:#24292e;">/app/httpd-2.4.46</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# ./configure --prefix=/usr/local/apache --with-apr=/usr/local/apr --with-apr-util=/usr/local/apr-util --with-pcre=/usr/local/pcre  --enable-so   --enable-rewrite --enable-ssl  --with-ssl=/usr/lib  --enable-auth-digest --enable-cgi --enable-suexec  --with-suexec-caller=daemon --with-suexec-docroot=/usr/local/apache/htdocs</span></span>
<span class="line"><span style="color:#24292e;">#这里的编译选项应当是需要什么加什么，具体选项见说明文档</span></span></code></pre></div><blockquote><p>httpd服务的目录结构</p><p>服务目录：/usr/local/apache/</p><p>主配置文件：/usr/local/apache/conf/httpd.conf</p><p>网页目录：/usr/local/apache/htdocs/</p><p>服务脚本：/usr/local/apache/bin/apachectl</p><p>执行程序：/usr/local/apache/bin/httpd</p><p>访问日志： /usr/local/apache/log/access_log</p><p>错误日志： /usr/local/apache/log/error_log</p></blockquote><h2 id="_7、selinux配置" tabindex="-1">7、selinux配置 <a class="header-anchor" href="#_7、selinux配置" aria-label="Permalink to &quot;7、selinux配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# getsebool -a | grep httpd</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_anon_write --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_builtin_scripting --&gt; on</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_can_check_spam --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_can_connect_ftp --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_can_connect_ldap --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_can_connect_mythtv --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_can_connect_zabbix --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_can_network_connect --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_can_network_connect_cobbler --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_can_network_connect_db --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_can_network_memcache --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_can_network_relay --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_can_sendmail --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_dbus_avahi --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_dbus_sssd --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_dontaudit_search_dirs --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_enable_cgi --&gt; on</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_enable_ftp_server --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_enable_homedirs --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_execmem --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_graceful_shutdown --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_manage_ipa --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_mod_auth_ntlm_winbind --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_mod_auth_pam --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_read_user_content --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_run_ipa --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_run_preupgrade --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_run_stickshift --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_serve_cobbler_files --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_setrlimit --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_ssi_exec --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_sys_script_anon_write --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_tmp_exec --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_tty_comm --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_unified --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_use_cifs --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_use_fusefs --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_use_gpg --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_use_nfs --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_use_opencryptoki --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_use_openstack --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_use_sasl --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;">httpd_verify_dns --&gt; off</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# setsebool -P httpd_anon_write on</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# setsebool -P httpd_can_check_spam on</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# setsebool -P httpd_can_network_connect on</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# setsebool -P httpd_can_network_connect_db on</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# setsebool -P httpd_can_network_relay on</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# setsebool -P httpd_tmp_exec on</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# setsebool -P httpd_ssi_exec  on</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# setsebool -P httpd_enable_cgi  on</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# getsebool -a | grep httpd</span></span>
<span class="line"><span style="color:#24292e;">httpd_anon_write --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_builtin_scripting --&gt; on</span></span>
<span class="line"><span style="color:#24292e;">httpd_can_check_spam --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_can_connect_ftp --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_can_connect_ldap --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_can_connect_mythtv --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_can_connect_zabbix --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_can_network_connect --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_can_network_connect_cobbler --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_can_network_connect_db --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_can_network_memcache --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_can_network_relay --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_can_sendmail --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_dbus_avahi --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_dbus_sssd --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_dontaudit_search_dirs --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_enable_cgi --&gt; on</span></span>
<span class="line"><span style="color:#24292e;">httpd_enable_ftp_server --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_enable_homedirs --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_execmem --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_graceful_shutdown --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_manage_ipa --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_mod_auth_ntlm_winbind --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_mod_auth_pam --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_read_user_content --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_run_ipa --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_run_preupgrade --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_run_stickshift --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_serve_cobbler_files --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_setrlimit --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_ssi_exec --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_sys_script_anon_write --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_tmp_exec --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_tty_comm --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_unified --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_use_cifs --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_use_fusefs --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_use_gpg --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_use_nfs --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_use_opencryptoki --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_use_openstack --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_use_sasl --&gt; off</span></span>
<span class="line"><span style="color:#24292e;">httpd_verify_dns --&gt; off</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# setsebool -P httpd_anon_write on</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# setsebool -P httpd_can_check_spam on</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# setsebool -P httpd_can_network_connect on</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# setsebool -P httpd_can_network_connect_db on</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# setsebool -P httpd_can_network_relay on</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# setsebool -P httpd_tmp_exec on</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# setsebool -P httpd_ssi_exec  on</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# setsebool -P httpd_enable_cgi  on</span></span></code></pre></div><h2 id="_8、防火墙配置" tabindex="-1">8、防火墙配置 <a class="header-anchor" href="#_8、防火墙配置" aria-label="Permalink to &quot;8、防火墙配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# firewall-cmd  --add-port=80/tcp --permanent </span></span>
<span class="line"><span style="color:#e1e4e8;">success</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# firewall-cmd  --add-port=443/tcp --permanent </span></span>
<span class="line"><span style="color:#e1e4e8;">success</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# firewall-cmd  --add-port=8080/tcp --permanent </span></span>
<span class="line"><span style="color:#e1e4e8;">success</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# firewall-cmd  --add-port=8888/tcp --permanent </span></span>
<span class="line"><span style="color:#e1e4e8;">success</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# firewall-cmd  --add-service=http  --permanent </span></span>
<span class="line"><span style="color:#e1e4e8;">success</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# firewall-cmd  --add-service=https  --permanent </span></span>
<span class="line"><span style="color:#e1e4e8;">success</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost httpd-2.4.46]# firewall-cmd  --reload</span></span>
<span class="line"><span style="color:#e1e4e8;">success</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# firewall-cmd  --add-port=80/tcp --permanent </span></span>
<span class="line"><span style="color:#24292e;">success</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# firewall-cmd  --add-port=443/tcp --permanent </span></span>
<span class="line"><span style="color:#24292e;">success</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# firewall-cmd  --add-port=8080/tcp --permanent </span></span>
<span class="line"><span style="color:#24292e;">success</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# firewall-cmd  --add-port=8888/tcp --permanent </span></span>
<span class="line"><span style="color:#24292e;">success</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# firewall-cmd  --add-service=http  --permanent </span></span>
<span class="line"><span style="color:#24292e;">success</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# firewall-cmd  --add-service=https  --permanent </span></span>
<span class="line"><span style="color:#24292e;">success</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost httpd-2.4.46]# firewall-cmd  --reload</span></span>
<span class="line"><span style="color:#24292e;">success</span></span></code></pre></div><h2 id="_9、修改主配置文件httpd-conf" tabindex="-1">9、修改主配置文件httpd.conf <a class="header-anchor" href="#_9、修改主配置文件httpd-conf" aria-label="Permalink to &quot;9、修改主配置文件httpd.conf&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost conf]# pwd</span></span>
<span class="line"><span style="color:#e1e4e8;">/usr/local/apache/conf</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost conf]# vim httpd.conf </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ServerAdmin mufeng.yu@qq.com		#管理员邮箱</span></span>
<span class="line"><span style="color:#e1e4e8;">ServerName www.mufeng.com:80	#站点名称</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost conf]# pwd</span></span>
<span class="line"><span style="color:#24292e;">/usr/local/apache/conf</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost conf]# vim httpd.conf </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ServerAdmin mufeng.yu@qq.com		#管理员邮箱</span></span>
<span class="line"><span style="color:#24292e;">ServerName www.mufeng.com:80	#站点名称</span></span></code></pre></div><blockquote><p>ServerRoot：服务目录</p><p>ServerAdmin：管理员邮箱</p><p>User：运行服务的用户身份</p><p>Group：运行服务的组身份</p><p>ServerName：网站服务器的域名</p><p>DocumentRoot：网页文档的根目录</p><p>Listen：监听的IP地址、端口号</p><p>PidFile：保存httpd进程PID号的文件</p><p>DirectoryIndex：默认的索引页文件</p><p>ErrorLog：错误日志文件的位置</p><p>CustomLog：访问日志文件的位置</p><p>LogLevel：记录日志的级别，默认为warn</p><p>Timeout：网络连接超时，默认为300秒</p><p>KeepAlive：是否保持连接，可选On或Off</p><p>MaxKeepAliveRequests：每次连接最多请求文件数</p><p>KeepAliveTimeout：保持连接状态时的超时时间</p><p>Include：需要包含进来的其他配置文件</p></blockquote><h2 id="_10、http-conf-语法检查" tabindex="-1">10、http.conf 语法检查 <a class="header-anchor" href="#_10、http-conf-语法检查" aria-label="Permalink to &quot;10、http.conf 语法检查&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost conf]# /usr/local/apache/bin/apachectl  -t</span></span>
<span class="line"><span style="color:#e1e4e8;">Syntax OK</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost conf]# /usr/local/apache/bin/apachectl  -t</span></span>
<span class="line"><span style="color:#24292e;">Syntax OK</span></span></code></pre></div><h2 id="_11、启动httpd服务" tabindex="-1">11、启动httpd服务 <a class="header-anchor" href="#_11、启动httpd服务" aria-label="Permalink to &quot;11、启动httpd服务&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost conf]# /usr/local/apache/bin/apachectl start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost conf]# /usr/local/apache/bin/apachectl start</span></span></code></pre></div><h2 id="_12、测试" tabindex="-1">12、测试 <a class="header-anchor" href="#_12、测试" aria-label="Permalink to &quot;12、测试&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost conf]# wget www.mufeng.com</span></span>
<span class="line"><span style="color:#e1e4e8;">--2020-12-01 08:41:48--  http://www.mufeng.com/</span></span>
<span class="line"><span style="color:#e1e4e8;">Resolving www.mufeng.com (www.mufeng.com)... 192.35.35.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Connecting to www.mufeng.com (www.mufeng.com)|192.35.35.1|:80... connected.</span></span>
<span class="line"><span style="color:#e1e4e8;">HTTP request sent, awaiting response... 200 OK</span></span>
<span class="line"><span style="color:#e1e4e8;">Length: 45 [text/html]</span></span>
<span class="line"><span style="color:#e1e4e8;">Saving to: ‘index.html’</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">index.html                        100%[==========================================================&gt;]      45  --.-KB/s    in 0s      </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">2020-12-01 08:41:48 (7.99 MB/s) - ‘index.html’ saved [45/45]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost conf]# vim index.html </span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html&gt;&lt;body&gt;&lt;h1&gt;It works!&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost conf]# wget www.mufeng.com</span></span>
<span class="line"><span style="color:#24292e;">--2020-12-01 08:41:48--  http://www.mufeng.com/</span></span>
<span class="line"><span style="color:#24292e;">Resolving www.mufeng.com (www.mufeng.com)... 192.35.35.1</span></span>
<span class="line"><span style="color:#24292e;">Connecting to www.mufeng.com (www.mufeng.com)|192.35.35.1|:80... connected.</span></span>
<span class="line"><span style="color:#24292e;">HTTP request sent, awaiting response... 200 OK</span></span>
<span class="line"><span style="color:#24292e;">Length: 45 [text/html]</span></span>
<span class="line"><span style="color:#24292e;">Saving to: ‘index.html’</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">index.html                        100%[==========================================================&gt;]      45  --.-KB/s    in 0s      </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">2020-12-01 08:41:48 (7.99 MB/s) - ‘index.html’ saved [45/45]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[root@localhost conf]# vim index.html </span></span>
<span class="line"><span style="color:#24292e;">&lt;html&gt;&lt;body&gt;&lt;h1&gt;It works!&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;</span></span></code></pre></div><blockquote><p>这个测试完全可以通过ip地址来实现，如果想通过域名访问，需要配置自己的DNS域名服务器bind</p></blockquote><h2 id="_13、测试本机httpd服务器的性能" tabindex="-1">13、测试本机httpd服务器的性能 <a class="header-anchor" href="#_13、测试本机httpd服务器的性能" aria-label="Permalink to &quot;13、测试本机httpd服务器的性能&quot;">​</a></h2><p>ab命令格式说明</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ab [-q] -c 并发请求数 -n 总的请求数 [http://]域名[:端口]/路径</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ab [-q] -c 并发请求数 -n 总的请求数 [http://]域名[:端口]/路径</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@localhost conf]# ulimit -n 3600</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost bin]# pwd</span></span>
<span class="line"><span style="color:#e1e4e8;">/usr/local/apache/bin</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@localhost bin]# ./ab -q -c 2000 -n 4000 http://www.mufeng.com/ </span></span>
<span class="line"><span style="color:#e1e4e8;">This is ApacheBench, Version 2.3 &lt;$Revision: 1879490 $&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/</span></span>
<span class="line"><span style="color:#e1e4e8;">Licensed to The Apache Software Foundation, http://www.apache.org/</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Benchmarking www.mufeng.com (be patient).....done</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Server Software:        Apache/2.4.46</span></span>
<span class="line"><span style="color:#e1e4e8;">Server Hostname:        www.mufeng.com</span></span>
<span class="line"><span style="color:#e1e4e8;">Server Port:            80</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Document Path:          /</span></span>
<span class="line"><span style="color:#e1e4e8;">Document Length:        45 bytes</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Concurrency Level:      2000</span></span>
<span class="line"><span style="color:#e1e4e8;">Time taken for tests:   0.519 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Complete requests:      4000</span></span>
<span class="line"><span style="color:#e1e4e8;">Failed requests:        0</span></span>
<span class="line"><span style="color:#e1e4e8;">Total transferred:      1156000 bytes</span></span>
<span class="line"><span style="color:#e1e4e8;">HTML transferred:       180000 bytes</span></span>
<span class="line"><span style="color:#e1e4e8;">Requests per second:    7703.79 [#/sec] (mean)</span></span>
<span class="line"><span style="color:#e1e4e8;">Time per request:       259.613 [ms] (mean)</span></span>
<span class="line"><span style="color:#e1e4e8;">Time per request:       0.130 [ms] (mean, across all concurrent requests)</span></span>
<span class="line"><span style="color:#e1e4e8;">Transfer rate:          2174.21 [Kbytes/sec] received</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Connection Times (ms)</span></span>
<span class="line"><span style="color:#e1e4e8;">              min  mean[+/-sd] median   max</span></span>
<span class="line"><span style="color:#e1e4e8;">Connect:        0    9  17.2      4      71</span></span>
<span class="line"><span style="color:#e1e4e8;">Processing:     0   17  46.8      8     428</span></span>
<span class="line"><span style="color:#e1e4e8;">Waiting:        0   16  46.7      7     428</span></span>
<span class="line"><span style="color:#e1e4e8;">Total:          0   26  58.4     12     498</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Percentage of the requests served within a certain time (ms)</span></span>
<span class="line"><span style="color:#e1e4e8;">  50%     12</span></span>
<span class="line"><span style="color:#e1e4e8;">  66%     13</span></span>
<span class="line"><span style="color:#e1e4e8;">  75%     15</span></span>
<span class="line"><span style="color:#e1e4e8;">  80%     16</span></span>
<span class="line"><span style="color:#e1e4e8;">  90%     24</span></span>
<span class="line"><span style="color:#e1e4e8;">  95%     81</span></span>
<span class="line"><span style="color:#e1e4e8;">  98%    283</span></span>
<span class="line"><span style="color:#e1e4e8;">  99%    288</span></span>
<span class="line"><span style="color:#e1e4e8;"> 100%    498 (longest request)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost conf]# ulimit -n 3600</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost bin]# pwd</span></span>
<span class="line"><span style="color:#24292e;">/usr/local/apache/bin</span></span>
<span class="line"><span style="color:#24292e;">[root@localhost bin]# ./ab -q -c 2000 -n 4000 http://www.mufeng.com/ </span></span>
<span class="line"><span style="color:#24292e;">This is ApacheBench, Version 2.3 &lt;$Revision: 1879490 $&gt;</span></span>
<span class="line"><span style="color:#24292e;">Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/</span></span>
<span class="line"><span style="color:#24292e;">Licensed to The Apache Software Foundation, http://www.apache.org/</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Benchmarking www.mufeng.com (be patient).....done</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Server Software:        Apache/2.4.46</span></span>
<span class="line"><span style="color:#24292e;">Server Hostname:        www.mufeng.com</span></span>
<span class="line"><span style="color:#24292e;">Server Port:            80</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Document Path:          /</span></span>
<span class="line"><span style="color:#24292e;">Document Length:        45 bytes</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Concurrency Level:      2000</span></span>
<span class="line"><span style="color:#24292e;">Time taken for tests:   0.519 seconds</span></span>
<span class="line"><span style="color:#24292e;">Complete requests:      4000</span></span>
<span class="line"><span style="color:#24292e;">Failed requests:        0</span></span>
<span class="line"><span style="color:#24292e;">Total transferred:      1156000 bytes</span></span>
<span class="line"><span style="color:#24292e;">HTML transferred:       180000 bytes</span></span>
<span class="line"><span style="color:#24292e;">Requests per second:    7703.79 [#/sec] (mean)</span></span>
<span class="line"><span style="color:#24292e;">Time per request:       259.613 [ms] (mean)</span></span>
<span class="line"><span style="color:#24292e;">Time per request:       0.130 [ms] (mean, across all concurrent requests)</span></span>
<span class="line"><span style="color:#24292e;">Transfer rate:          2174.21 [Kbytes/sec] received</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Connection Times (ms)</span></span>
<span class="line"><span style="color:#24292e;">              min  mean[+/-sd] median   max</span></span>
<span class="line"><span style="color:#24292e;">Connect:        0    9  17.2      4      71</span></span>
<span class="line"><span style="color:#24292e;">Processing:     0   17  46.8      8     428</span></span>
<span class="line"><span style="color:#24292e;">Waiting:        0   16  46.7      7     428</span></span>
<span class="line"><span style="color:#24292e;">Total:          0   26  58.4     12     498</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Percentage of the requests served within a certain time (ms)</span></span>
<span class="line"><span style="color:#24292e;">  50%     12</span></span>
<span class="line"><span style="color:#24292e;">  66%     13</span></span>
<span class="line"><span style="color:#24292e;">  75%     15</span></span>
<span class="line"><span style="color:#24292e;">  80%     16</span></span>
<span class="line"><span style="color:#24292e;">  90%     24</span></span>
<span class="line"><span style="color:#24292e;">  95%     81</span></span>
<span class="line"><span style="color:#24292e;">  98%    283</span></span>
<span class="line"><span style="color:#24292e;">  99%    288</span></span>
<span class="line"><span style="color:#24292e;"> 100%    498 (longest request)</span></span></code></pre></div><p>注：构建服务所需的包可在<a href="https://download.csdn.net/download/qq_45417634/13208956" target="_blank" rel="noreferrer">server_source_2020.iso </a>请自行下载，您也可以在所需安装包官网下载 本地源配置、防火墙、selinux等是linux较为基础的内容，不再赘述。 本文均为原创，如需与博主交流可email至mufeng.yu@qq.com</p>`,40),o=[l];function t(c,r,i,d,h,y){return a(),n("div",null,o)}const g=s(p,[["render",t]]);export{f as __pageData,g as default};
