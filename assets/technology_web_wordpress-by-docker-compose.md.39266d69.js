import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.5584abd2.js";const m=JSON.parse('{"title":"基于DockerCompose的WordPress环境部署（附配置优化）","description":"本文将带你快速了解 docker compose 安装部署 WordPress。","frontmatter":{"description":"本文将带你快速了解 docker compose 安装部署 WordPress。","categories":["建站笔记"],"tags":["Linux","Docker","WordPress"],"sticky":2},"headers":[],"relativePath":"technology/web/wordpress-by-docker-compose.md","filePath":"technology/web/wordpress-by-docker-compose.md","lastUpdated":1697707273000}'),l={name:"technology/web/wordpress-by-docker-compose.md"},o=p(`<h1 id="基于dockercompose的wordpress环境部署-附配置优化" tabindex="-1">基于DockerCompose的WordPress环境部署（附配置优化） <a class="header-anchor" href="#基于dockercompose的wordpress环境部署-附配置优化" aria-label="Permalink to &quot;基于DockerCompose的WordPress环境部署（附配置优化）&quot;">​</a></h1><blockquote><p>观前提醒：通过本文安装<code>WordPress</code>，需要你有一定的Linux基础，并且安装了最新版的<code>Docker</code>。</p></blockquote><h2 id="一、为什么是dockercompose" tabindex="-1">一、为什么是DockerCompose <a class="header-anchor" href="#一、为什么是dockercompose" aria-label="Permalink to &quot;一、为什么是DockerCompose&quot;">​</a></h2><p>回答：<strong>因为懒</strong></p><p>之前在跟其他人沟通的时候，看到我使用Docker Compose部署 WordPress，都有些嗤之以鼻，觉得没有必要,也不够高大上。但是问他们用什么？其实很多都是第三方托管，或者干脆自己从零搭建环境，而像我这种对Linux环境稍微有点了解，并且做过一些LAMP/LNMP架构定制化编译安装的，也并不认为靠第三方托管的方式有多么便携又高大上，或者编译安装一套LNMP架构有多么优雅。</p><h2 id="二、怎么用dockercompose" tabindex="-1">二、怎么用DockerCompose <a class="header-anchor" href="#二、怎么用dockercompose" aria-label="Permalink to &quot;二、怎么用DockerCompose&quot;">​</a></h2><p>Docker的使用已经成为运维人员的必修课，而使用Docker能够极大地简化环境部署，减少大部分重复性的手动操作。这里先介绍DockerCompose搭建环境的一个基本流程，至于Docker的安装那些，也比较简单，我后边慢慢写。</p><blockquote><p>顺便说一下，现在Docker已经自带<code>compose</code>了，不需要单独安装 <code>docker-compose</code></p></blockquote><p>DockerCompose部署环境只需要一个文件，<code>docker-compose.yaml</code> 所有的配置都在这个文件中。DockerCompose常用命令如下：</p><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td>docker compose up &lt;-d&gt;</td><td>启动yaml文件中定义的所有服务。<br>-d表示后台启动</td></tr><tr><td>docker compose down</td><td>停止并删除所有容器</td></tr><tr><td>docker compose ps</td><td>查看服务运行状态</td></tr><tr><td>docker compose restart</td><td>重新启动所有服务</td></tr><tr><td>docker compose logs</td><td>查看所有日志</td></tr></tbody></table><blockquote><p>上述命令在后边跟上yaml文件中定义的ServiceName，则可以操作单独的服务</p></blockquote><h2 id="三、开始部署" tabindex="-1">三、开始部署 <a class="header-anchor" href="#三、开始部署" aria-label="Permalink to &quot;三、开始部署&quot;">​</a></h2><h3 id="_3-1-yaml文件示例" tabindex="-1">3.1 YAML文件示例 <a class="header-anchor" href="#_3-1-yaml文件示例" aria-label="Permalink to &quot;3.1 YAML文件示例&quot;">​</a></h3><blockquote><p>YAML文件需要放在特定的文件夹，最好单独建立文件夹，容器启动时会以当前<code>目录的名称-服务名称-序号</code>命名。</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/wordpress</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/wordpress</span></span>
<span class="line"><span style="color:#B392F0;">vim</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker-compose.yaml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/wordpress</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/wordpress</span></span>
<span class="line"><span style="color:#6F42C1;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker-compose.yaml</span></span></code></pre></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;3.3&#39;</span></span>
<span class="line"><span style="color:#6A737D;"># 服务</span></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 数据库服务</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">db</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mysql:5.7</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">./db_data:/var/lib/mysql</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">always</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">MYSQL_ROOT_PASSWORD</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">wordpress</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">MYSQL_DATABASE</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">wordpress</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">MYSQL_USER</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">wordpress</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">MYSQL_PASSWORD</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">wordpress</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Redis缓存服务</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">cache</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">redis:latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">always</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#79B8FF;">6379</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># WordPress服务</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">wordpress</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">depends_on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">db</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">cache</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">wordpress:php8.2</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;8080:80&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">always</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">WORDPRESS_DB_HOST</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">db:3306</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">WORDPRESS_DB_USER</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">wordpress</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">WORDPRESS_DB_PASSWORD</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">wordpress</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">WORDPRESS_DB_NAME</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">wordpress</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">./wp_data:/var/www/html</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">./php_config/php.ini-production:/usr/local/etc/php/php.ini-production</span></span>
<span class="line"><span style="color:#6A737D;"># 网络划分</span></span>
<span class="line"><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">wordpress</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">driver</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">bridge</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">external</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">ipam</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">config</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                - </span><span style="color:#85E89D;">subnet</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">10.10.1.0/24</span></span>
<span class="line"><span style="color:#E1E4E8;">                - </span><span style="color:#85E89D;">gateway</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10.10.1.10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;3.3&#39;</span></span>
<span class="line"><span style="color:#6A737D;"># 服务</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 数据库服务</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">db</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mysql:5.7</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">./db_data:/var/lib/mysql</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">always</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">MYSQL_ROOT_PASSWORD</span><span style="color:#24292E;">: </span><span style="color:#032F62;">wordpress</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">MYSQL_DATABASE</span><span style="color:#24292E;">: </span><span style="color:#032F62;">wordpress</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">MYSQL_USER</span><span style="color:#24292E;">: </span><span style="color:#032F62;">wordpress</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">MYSQL_PASSWORD</span><span style="color:#24292E;">: </span><span style="color:#032F62;">wordpress</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Redis缓存服务</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">cache</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">redis:latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">always</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#005CC5;">6379</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># WordPress服务</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">wordpress</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">depends_on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">db</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">cache</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">wordpress:php8.2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;8080:80&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">always</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">WORDPRESS_DB_HOST</span><span style="color:#24292E;">: </span><span style="color:#032F62;">db:3306</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">WORDPRESS_DB_USER</span><span style="color:#24292E;">: </span><span style="color:#032F62;">wordpress</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">WORDPRESS_DB_PASSWORD</span><span style="color:#24292E;">: </span><span style="color:#032F62;">wordpress</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">WORDPRESS_DB_NAME</span><span style="color:#24292E;">: </span><span style="color:#032F62;">wordpress</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">./wp_data:/var/www/html</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">./php_config/php.ini-production:/usr/local/etc/php/php.ini-production</span></span>
<span class="line"><span style="color:#6A737D;"># 网络划分</span></span>
<span class="line"><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">wordpress</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">driver</span><span style="color:#24292E;">: </span><span style="color:#032F62;">bridge</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">external</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">ipam</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">config</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                - </span><span style="color:#22863A;">subnet</span><span style="color:#24292E;">: </span><span style="color:#032F62;">10.10.1.0/24</span></span>
<span class="line"><span style="color:#24292E;">                - </span><span style="color:#22863A;">gateway</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10.10.1.10</span></span></code></pre></div><p>在上面的示例中，规定了当前 <code>docker-compose.yaml</code>遵循3.3版本规范，共涉及三个服务：数据库、缓存以及WordPress。并使用了三个卷，将数据库文件、WordPress服务文件以及PHP配置文件挂载到本地。</p><p>在该文件编写完成后，可以在当前目录使用 <code>docker compose up</code> 命令安装，首次安装需要下载镜像，会比较慢，之后再安装则不需要。</p><p>安装完之后，你就可以在使用<code>ip:8080</code>的方式访问你的 WordPress 站点了。如果你需要配置域名访问，在Nginx中添加如下配置后再去安装你的 WordPress 。</p><blockquote><p>你需要将 <code>blog-wp.imufeng.cn</code> 替换为你自己的域名。至于泛域名证书的配置参见我的其他博客。</p></blockquote><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">             </span><span style="color:#79B8FF;">443</span><span style="color:#E1E4E8;"> ssl http2;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">             [::]:443 ssl http2;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;">        blog-wp.imufeng.cn;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># SSL</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> ssl_certificate </span><span style="color:#E1E4E8;">    /etc/nginx/ssl/imufeng.cn.cer;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> ssl_certificate_key </span><span style="color:#E1E4E8;">/etc/nginx/ssl/imufeng.cn.key;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># security</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> include </span><span style="color:#E1E4E8;">            nginxconfig.io/security.conf;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># logging</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> access_log </span><span style="color:#E1E4E8;">         /var/log/nginx/blog-wp.imufeng.cn.log combined buffer=512k flush=5m;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> error_log </span><span style="color:#E1E4E8;">          /var/log/nginx/blog-wp.imufeng.error.log</span><span style="color:#79B8FF;"> error</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://127.0.0.1:8080/;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> add_header </span><span style="color:#E1E4E8;">Content-Security-Policy </span><span style="color:#9ECBFF;">&quot;default-src &#39;self&#39; &#39;unsafe-inline&#39; &#39;unsafe-eval&#39; https: ws: wss: data: blob:&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> listen </span><span style="color:#24292E;">             </span><span style="color:#005CC5;">443</span><span style="color:#24292E;"> ssl http2;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> listen </span><span style="color:#24292E;">             [::]:443 ssl http2;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> server_name </span><span style="color:#24292E;">        blog-wp.imufeng.cn;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># SSL</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> ssl_certificate </span><span style="color:#24292E;">    /etc/nginx/ssl/imufeng.cn.cer;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> ssl_certificate_key </span><span style="color:#24292E;">/etc/nginx/ssl/imufeng.cn.key;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># security</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> include </span><span style="color:#24292E;">            nginxconfig.io/security.conf;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># logging</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> access_log </span><span style="color:#24292E;">         /var/log/nginx/blog-wp.imufeng.cn.log combined buffer=512k flush=5m;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> error_log </span><span style="color:#24292E;">          /var/log/nginx/blog-wp.imufeng.error.log</span><span style="color:#005CC5;"> error</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">/ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_pass </span><span style="color:#24292E;">http://127.0.0.1:8080/;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">Host $host;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> add_header </span><span style="color:#24292E;">Content-Security-Policy </span><span style="color:#032F62;">&quot;default-src &#39;self&#39; &#39;unsafe-inline&#39; &#39;unsafe-eval&#39; https: ws: wss: data: blob:&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>至此，一个简单的WordPress就搭建完成了。</p>`,22),e=[o];function c(r,t,E,y,i,d){return n(),a("div",null,e)}const D=s(l,[["render",c]]);export{m as __pageData,D as default};
