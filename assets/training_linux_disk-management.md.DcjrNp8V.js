import{_ as a,o as n,c as p,ac as e}from"./chunks/framework.qIWIjG7K.js";const u=JSON.parse('{"title":"Linux 磁盘管理 - 记一次分区格式化","description":"通过一次虚拟化平台服务器新加磁盘的操作，讨论 Linux 平台磁盘管理、分区格式化的操作。","frontmatter":{"title":"Linux 磁盘管理 - 记一次分区格式化","description":"通过一次虚拟化平台服务器新加磁盘的操作，讨论 Linux 平台磁盘管理、分区格式化的操作。","categories":["折腾日记"],"tags":["Linux","运维","磁盘管理"],"outline":[2,3],"date":"2025-04-25T17:20:00.000Z","cover":"https://cdn.imufeng.cn/mblog/2025/disk-management.png","head":[["meta",{"name":"keywords","content":"Linux, 运维, fdisk, parted, 磁盘管理, 磁盘工具, 分区格式化"}]]},"headers":[],"relativePath":"training/linux/disk-management.md","filePath":"training/linux/disk-management.md","lastUpdated":1745574200000}'),i={name:"training/linux/disk-management.md"};function l(t,s,c,d,o,r){return n(),p("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1745601600000"},[...s[0]||(s[0]=[e(`<h1 id="linux-磁盘管理-记一次分区格式化" tabindex="-1">Linux 磁盘管理 - 记一次分区格式化 <a class="header-anchor" href="#linux-磁盘管理-记一次分区格式化" aria-label="Permalink to &quot;Linux 磁盘管理 - 记一次分区格式化&quot;">​</a></h1><blockquote><p>注意：</p><ul><li>数据无价，谨慎操作！！！</li><li>具体业务敏感部分已做脱敏处理，示例服务器域为 <code>mufeng.dev</code></li></ul></blockquote><p>我们有个业务项目使用华为 <strong>FusionCompute</strong> 搭建了一套私有云平台，属于比较高的配置，该教程记录一次操作系统加磁盘后进行分区格式化的操作。</p><ul><li>虚拟化平台：华为 Fusion Compute</li><li>操作系统版本：AlmaLinux 9.5</li></ul><h2 id="一、准备工作" tabindex="-1">一、准备工作 <a class="header-anchor" href="#一、准备工作" aria-label="Permalink to &quot;一、准备工作&quot;">​</a></h2><h3 id="_1-1-简介" tabindex="-1">1.1 简介 <a class="header-anchor" href="#_1-1-简介" aria-label="Permalink to &quot;1.1 简介&quot;">​</a></h3><p>平台图形化界面新增磁盘，此处不再赘述，新增后进入系统，查看属性如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng /]# df -h</span></span>
<span class="line"><span>Filesystem                  Size  Used Avail Use% Mounted on</span></span>
<span class="line"><span>devtmpfs                    4.0M     0  4.0M   0% /dev</span></span>
<span class="line"><span>tmpfs                        16G     0   16G   0% /dev/shm</span></span>
<span class="line"><span>tmpfs                       6.3G   14M  6.3G   1% /run</span></span>
<span class="line"><span>/dev/mapper/almalinux-root   89G  3.2G   86G   4% /</span></span>
<span class="line"><span>/dev/vda1                   960M  233M  728M  25% /boot</span></span>
<span class="line"><span>tmpfs                       3.2G  4.0K  3.2G   1% /run/user/0</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng /]# fdisk -l</span></span>
<span class="line"><span>Disk /dev/vda: 100 GiB, 107374182400 bytes, 209715200 sectors</span></span>
<span class="line"><span>Units: sectors of 1 * 512 = 512 bytes</span></span>
<span class="line"><span>Sector size (logical/physical): 512 bytes / 512 bytes</span></span>
<span class="line"><span>I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span>
<span class="line"><span>Disklabel type: dos</span></span>
<span class="line"><span>Disk identifier: 0xa81ec275</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Device     Boot   Start       End   Sectors Size Id Type</span></span>
<span class="line"><span>/dev/vda1  *       2048   2099199   2097152   1G 83 Linux</span></span>
<span class="line"><span>/dev/vda2       2099200 209715199 207616000  99G 8e Linux LVM</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Disk /dev/vdb: 1000 GiB, 1073741824000 bytes, 2097152000 sectors</span></span>
<span class="line"><span>Units: sectors of 1 * 512 = 512 bytes</span></span>
<span class="line"><span>Sector size (logical/physical): 512 bytes / 512 bytes</span></span>
<span class="line"><span>I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Disk /dev/mapper/almalinux-root: 89 GiB, 95558828032 bytes, 186638336 sectors</span></span>
<span class="line"><span>Units: sectors of 1 * 512 = 512 bytes</span></span>
<span class="line"><span>Sector size (logical/physical): 512 bytes / 512 bytes</span></span>
<span class="line"><span>I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Disk /dev/mapper/almalinux-swap: 10 GiB, 10737418240 bytes, 20971520 sectors</span></span>
<span class="line"><span>Units: sectors of 1 * 512 = 512 bytes</span></span>
<span class="line"><span>Sector size (logical/physical): 512 bytes / 512 bytes</span></span>
<span class="line"><span>I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span></code></pre></div><p>可以看到，系统盘为 100Gb，我们现在新加了一块数据盘，大小 1000Gb，需要对该磁盘进行操作，其规划如下：</p><table tabindex="0"><thead><tr><th>分区</th><th>大小</th><th>内容</th><th>挂载点</th></tr></thead><tbody><tr><td>1</td><td>300Gb</td><td>服务</td><td>/mufeng/service</td></tr><tr><td>2</td><td>700Gb</td><td>数据</td><td>/mufeng/data</td></tr></tbody></table><h3 id="_1-2-fdisk-工具简介" tabindex="-1">1.2 fdisk 工具简介 <a class="header-anchor" href="#_1-2-fdisk-工具简介" aria-label="Permalink to &quot;1.2 fdisk 工具简介&quot;">​</a></h3><p><code>fdisk</code> 是一个老牌的磁盘管理工具，你可以经常在各个 Linux 相关教程中看到他的介绍，它功能强大，并且操作简单。但他它原本只支持 MBR 分区，对 GPT 分区的支持并不好，存在较大的局限性。</p><p>fdisk 显示磁盘分区情况：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng ~]# fdisk -lu /dev/vda</span></span>
<span class="line"><span>Disk /dev/vda: 100 GiB, 107374182400 bytes, 209715200 sectors</span></span>
<span class="line"><span>Units: sectors of 1 * 512 = 512 bytes</span></span>
<span class="line"><span>Sector size (logical/physical): 512 bytes / 512 bytes</span></span>
<span class="line"><span>I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span>
<span class="line"><span>Disklabel type: dos</span></span>
<span class="line"><span>Disk identifier: 0xa81ec275</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Device     Boot   Start       End   Sectors Size Id Type</span></span>
<span class="line"><span>/dev/vda1  *       2048   2099199   2097152   1G 83 Linux</span></span>
<span class="line"><span>/dev/vda2       2099200 209715199 207616000  99G 8e Linux LVM</span></span></code></pre></div><p>fdisk 磁盘操作：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng ~]# fdisk /dev/vdb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Welcome to fdisk (util-linux 2.37.4).</span></span>
<span class="line"><span>Changes will remain in memory only, until you decide to write them.</span></span>
<span class="line"><span>Be careful before using the write command.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Device does not contain a recognized partition table.</span></span>
<span class="line"><span>Created a new DOS disklabel with disk identifier 0x54ac059e.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Command (m for help):</span></span></code></pre></div><p>将需要操作的磁盘作为参数传递给 fdisk，即可操作磁盘进行分区。</p><p>键入 m 即可查看命令详解：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Command (m for help): m</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Help: </span></span>
<span class="line"><span>  DOS (MBR)  </span></span>
<span class="line"><span>   a   toggle a bootable flag          # 切换分区的可引导标志（设置或取消分区为可引导）  </span></span>
<span class="line"><span>   b   edit nested BSD disklabel       # 编辑嵌套的BSD磁盘标签（用于BSD系统分区）  </span></span>
<span class="line"><span>   c   toggle the dos compatibility flag  # 切换DOS兼容性标志（用于某些旧系统兼容性）  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Generic  </span></span>
<span class="line"><span>   d   delete a partition              # 删除一个分区  </span></span>
<span class="line"><span>   F   list free unpartitioned space   # 列出未分区的空闲空间  </span></span>
<span class="line"><span>   l   list known partition types      # 列出已知的分区类型  </span></span>
<span class="line"><span>   n   add a new partition             # 添加一个新分区  </span></span>
<span class="line"><span>   p   print the partition table       # 打印分区表  </span></span>
<span class="line"><span>   t   change a partition type         # 更改分区类型  </span></span>
<span class="line"><span>   v   verify the partition table      # 验证分区表的正确性  </span></span>
<span class="line"><span>   i   print information about a partition  # 打印关于某个分区的详细信息  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Misc  </span></span>
<span class="line"><span>   m   print this menu                 # 打印此帮助菜单  </span></span>
<span class="line"><span>   u   change display/entry units      # 改变显示/输入单位（如从扇区到MB等）  </span></span>
<span class="line"><span>   x   extra functionality (experts only)  # 额外功能（仅限专家使用）  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Script  </span></span>
<span class="line"><span>   I   load disk layout from sfdisk script file  # 从sfdisk脚本文件加载磁盘布局  </span></span>
<span class="line"><span>   O   dump disk layout to sfdisk script file    # 将磁盘布局导出到sfdisk脚本文件  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Save &amp; Exit  </span></span>
<span class="line"><span>   w   write table to disk and exit    # 将分区表写入磁盘并退出  </span></span>
<span class="line"><span>   q   quit without saving changes     # 退出而不保存更改  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Create a new label  </span></span>
<span class="line"><span>   g   create a new empty GPT partition table  # 创建一个新的空的GPT分区表  </span></span>
<span class="line"><span>   G   create a new empty SGI (IRIX) partition table  # 创建一个新的空的SGI（IRIX）分区表  </span></span>
<span class="line"><span>   o   create a new empty DOS partition table  # 创建一个新的空的DOS分区表  </span></span>
<span class="line"><span>   s   create a new empty Sun partition table  # 创建一个新的空的Sun分区表</span></span></code></pre></div><h3 id="_1-3-parted-工具简介" tabindex="-1">1.3 parted 工具简介 <a class="header-anchor" href="#_1-3-parted-工具简介" aria-label="Permalink to &quot;1.3 parted 工具简介&quot;">​</a></h3><p><code>parted</code> 是一个强大的分区工具，支持 MBR 和 GPT以及 SUN 等小众的分区表。相比于 fdisk，它更加现代化，除了分区的创建删除之外，它还支持更加复杂的操作。例如：调整分区大小、移动分区、备份分区表等。</p><p>parted 显示磁盘分区信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng ~]# parted -l</span></span>
<span class="line"><span>Error: /dev/vdb: unrecognised disk label</span></span>
<span class="line"><span>Model: Virtio Block Device (virtblk)                                      </span></span>
<span class="line"><span>Disk /dev/vdb: 1074GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: unknown</span></span>
<span class="line"><span>Disk Flags: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Warning: Unable to open /dev/sr0 read-write (Read-only file system).  /dev/sr0</span></span>
<span class="line"><span>has been opened read-only.</span></span>
<span class="line"><span>Model: QEMU QEMU DVD-ROM (scsi)                                           </span></span>
<span class="line"><span>Disk /dev/sr0: 2124MB</span></span>
<span class="line"><span>Sector size (logical/physical): 2048B/2048B</span></span>
<span class="line"><span>Partition Table: msdos</span></span>
<span class="line"><span>Disk Flags: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number  Start   End     Size    Type     File system  Flags</span></span>
<span class="line"><span> 2      28.8MB  58.0MB  29.2MB  primary               esp</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Model: Virtio Block Device (virtblk)</span></span>
<span class="line"><span>Disk /dev/vda: 107GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: msdos</span></span>
<span class="line"><span>Disk Flags: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number  Start   End     Size    Type     File system  Flags</span></span>
<span class="line"><span> 1      1049kB  1075MB  1074MB  primary  xfs          boot</span></span>
<span class="line"><span> 2      1075MB  107GB   106GB   primary               lvm</span></span></code></pre></div><p>parted 提供命令行模式以及交互模式，如下:</p><p>命令行模式下，parted 支持同时执行多个命令，但是不推荐这种方式操作磁盘：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mklabel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gpt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkpart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> P1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1MiB</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 200GB</span></span></code></pre></div><p>以上命令表示操作磁盘 <code>/dev/sda</code>，创建新的 GPT 分区表，然后创建一个 200GB 的分区。</p><p>交互模式：</p><p>与 fdisk 的交互模式类似，交互模式简化了分区过程，并自动将所有命令应用到指定的设备上，无需反复指定目标设备。</p><p>命令如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng ~]# parted</span></span>
<span class="line"><span>GNU Parted 3.5</span></span>
<span class="line"><span>Using /dev/vdb</span></span>
<span class="line"><span>Welcome to GNU Parted! Type &#39;help&#39; to view a list of commands.</span></span>
<span class="line"><span>(parted) help                                                             </span></span>
<span class="line"><span>  align-check TYPE N                       检查分区 N 是否符合 TYPE(min|opt) 对齐</span></span>
<span class="line"><span>  help [COMMAND]                           打印一般帮助信息，或指定 COMMAND 的帮助</span></span>
<span class="line"><span>  mklabel,mktable LABEL-TYPE               创建一个新的磁盘标签（分区表）</span></span>
<span class="line"><span>  mkpart PART-TYPE [FS-TYPE] START END     创建一个分区，可以指定分区格式</span></span>
<span class="line"><span>  name NUMBER NAME                         将分区 NUMBER 命名为 NAME</span></span>
<span class="line"><span>  print [devices|free|list,all]            显示分区表，或可用设备，或空闲空间，或所有找到的分区</span></span>
<span class="line"><span>  quit                                     退出程序</span></span>
<span class="line"><span>  rescue START END                         在 START 和 END 附近恢复丢失的分区</span></span>
<span class="line"><span>  resizepart NUMBER END                    调整分区 NUMBER 的大小</span></span>
<span class="line"><span>  rm NUMBER                                删除分区 NUMBER</span></span>
<span class="line"><span>  select DEVICE                            选择要编辑的设备</span></span>
<span class="line"><span>  disk_set FLAG STATE                      改变选定设备的 FLAG 状态</span></span>
<span class="line"><span>  disk_toggle [FLAG]                       切换选定设备的 FLAG 状态</span></span>
<span class="line"><span>  set NUMBER FLAG STATE                    改变分区 NUMBER 的 FLAG 状态</span></span>
<span class="line"><span>  toggle [NUMBER [FLAG]]                   切换分区 NUMBER 的 FLAG 状态</span></span>
<span class="line"><span>  type NUMBER TYPE-ID or TYPE-UUID         设置分区 NUMBER 的类型为 TYPE-ID 或 TYPE-UUID</span></span>
<span class="line"><span>  unit UNIT                                设置默认单位为 UNIT</span></span>
<span class="line"><span>  version                                  显示 GNU Parted 的版本号和版权信息</span></span>
<span class="line"><span>(parted)</span></span></code></pre></div><h3 id="_1-3-mkfs-磁盘格式化工具" tabindex="-1">1.3 mkfs 磁盘格式化工具 <a class="header-anchor" href="#_1-3-mkfs-磁盘格式化工具" aria-label="Permalink to &quot;1.3 mkfs 磁盘格式化工具&quot;">​</a></h3><p><code>fdisk</code> 和 <code>parted</code> 在创建分区时可以直接进行格式化，也可以使用 <code>mkfs</code> 专门对分区进行格式化。它支持多种文件系统，例如：</p><ul><li><p><strong>创建 <code>ext4</code> 文件系统</strong>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkfs.ext4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sda1</span></span></code></pre></div></li><li><p><strong>创建 <code>xfs</code> 文件系统</strong>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkfs.xfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sda1</span></span></code></pre></div></li><li><p><strong>创建 <code>ntfs</code> 文件系统</strong>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkfs.ntfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sda1</span></span></code></pre></div></li></ul><p>同理，我们还可以用它创建 fat32 等文件系统，此处不再一一列举，详见文档。</p><h3 id="_1-4-mount命令简介" tabindex="-1">1.4 mount命令简介 <a class="header-anchor" href="#_1-4-mount命令简介" aria-label="Permalink to &quot;1.4 mount命令简介&quot;">​</a></h3><p>在磁盘完成分区格式化操作之后，我们还需要将磁盘挂载到文件系统，与 Windows 可以多个逻辑盘不同的是，Linux 是一个树状结构，它需要将磁盘挂载到某个目录，以此生效，硬盘的一个分区被称为一个 <code>存储设备</code>，挂载到的目标目录叫做 <code>挂载点</code>。</p><p>我们可以通过 lsblk 命令查看当前文件系统的结构：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng ~]# lsblk</span></span>
<span class="line"><span>NAME               MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS</span></span>
<span class="line"><span>sr0                 11:0    1    2G  0 rom  </span></span>
<span class="line"><span>vda                252:0    0  100G  0 disk </span></span>
<span class="line"><span>├─vda1             252:1    0    1G  0 part /boot</span></span>
<span class="line"><span>└─vda2             252:2    0   99G  0 part </span></span>
<span class="line"><span>  ├─almalinux-root 253:0    0   89G  0 lvm  /</span></span>
<span class="line"><span>  └─almalinux-swap 253:1    0   10G  0 lvm  [SWAP]</span></span>
<span class="line"><span>vdb                252:16   0 1000G  0 disk</span></span></code></pre></div><p>我们可以看到，每个磁盘分出分区，分区又对应挂载点。其中 <code>sr0</code> 是光驱，是一种特殊的、只读的存储设备。</p><p>我们使用 <code>mount</code> 进行挂载操作：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sda1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /mnt/mydisk</span></span></code></pre></div><p>如果存储设备有文件系统（如 <code>ext4</code>），<code>mount</code> 命令会自动识别并挂载。如果需要指定文件系统类型，可以使用 <code>-t</code> 选项：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ext4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sda1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /mnt/mydisk</span></span></code></pre></div><p>使用 <code>df -h</code> 即可查看挂载情况。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng ~]# df -h</span></span>
<span class="line"><span>Filesystem                  Size  Used Avail Use% Mounted on</span></span>
<span class="line"><span>devtmpfs                    4.0M     0  4.0M   0% /dev</span></span>
<span class="line"><span>tmpfs                        16G     0   16G   0% /dev/shm</span></span>
<span class="line"><span>tmpfs                       6.3G   17M  6.3G   1% /run</span></span>
<span class="line"><span>/dev/mapper/almalinux-root   89G  3.2G   86G   4% /</span></span>
<span class="line"><span>/dev/vda1                   960M  233M  728M  25% /boot</span></span>
<span class="line"><span>tmpfs                       3.2G  4.0K  3.2G   1% /run/user/0</span></span></code></pre></div><p>上述直接 <code>mount [存储设备] [挂载点]</code> 的操作会在系统重启后消失，如果需要永久保留该挂载，需要将设备挂载信息写入 <code>/etc/fstab</code> 文件。该文件信息如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/dev/mapper/almalinux-root /                       xfs     defaults        0 0</span></span>
<span class="line"><span>UUID=f89a0677-c2ec-486e-9e68-808c14cc447e /boot    xfs     defaults        0 0</span></span>
<span class="line"><span>/dev/mapper/almalinux-swap none                    swap    defaults        0 0</span></span></code></pre></div><p>该文件格式为：<code>&lt;设备（或者其UUID）&gt; &lt;挂载点&gt; &lt;文件系统&gt; &lt;挂载选项&gt; &lt;备份频率&gt; &lt;检查顺序&gt;</code>，详见官方文档。</p><p>挂载光驱的写法示例：<code>/dev/cdrom /mnt/cdrom iso9660 defaults 0 0</code></p><p>挂载文件后，我们可以使用 <code>blkid</code> 命令查看磁盘对应 id。</p><p>编辑该文件后，执行 <code>mount -a</code> 即可将该文件规定的挂载点重新挂载。</p><h2 id="二、开始操作" tabindex="-1">二、开始操作 <a class="header-anchor" href="#二、开始操作" aria-label="Permalink to &quot;二、开始操作&quot;">​</a></h2><h3 id="_2-1-分区操作" tabindex="-1">2.1 分区操作 <a class="header-anchor" href="#_2-1-分区操作" aria-label="Permalink to &quot;2.1 分区操作&quot;">​</a></h3><ol><li><p>使用 parted 进行分区操作。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng ~]# parted /dev/vdb</span></span>
<span class="line"><span>GNU Parted 3.5</span></span>
<span class="line"><span>Using /dev/vdb</span></span>
<span class="line"><span>Welcome to GNU Parted! Type &#39;help&#39; to view a list of commands.</span></span></code></pre></div></li><li><p>创建分区表为 GPT</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(parted) mklabel</span></span>
<span class="line"><span>New disk label type? GPT</span></span></code></pre></div></li><li><p>创建第一个分区</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(parted) mkpart perimary 1MB 30%</span></span></code></pre></div></li><li><p>创建第二个分区</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(parted) mkpart perimary 30% 100%</span></span></code></pre></div></li><li><p>检查分区对齐</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(parted) align-check min </span></span>
<span class="line"><span>Partition number? 1                                                       </span></span>
<span class="line"><span>1 aligned</span></span>
<span class="line"><span>(parted) align-check min                                                  </span></span>
<span class="line"><span>Partition number? 2                                                       </span></span>
<span class="line"><span>2 aligned</span></span></code></pre></div></li><li><p>退出 parted</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(parted) quit                                                             </span></span>
<span class="line"><span>Information: You may need to update /etc/fstab.</span></span></code></pre></div></li></ol><h3 id="_2-2-分区格式化" tabindex="-1">2.2 分区格式化 <a class="header-anchor" href="#_2-2-分区格式化" aria-label="Permalink to &quot;2.2 分区格式化&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng mufeng]# mkfs.xfs /dev/vdb1 </span></span>
<span class="line"><span>meta-data=/dev/vdb1              isize=512    agcount=4, agsize=19660736 blks</span></span>
<span class="line"><span>         =                       sectsz=512   attr=2, projid32bit=1</span></span>
<span class="line"><span>         =                       crc=1        finobt=1, sparse=1, rmapbt=0</span></span>
<span class="line"><span>         =                       reflink=1    bigtime=1 inobtcount=1 nrext64=0</span></span>
<span class="line"><span>data     =                       bsize=4096   blocks=78642944, imaxpct=25</span></span>
<span class="line"><span>         =                       sunit=0      swidth=0 blks</span></span>
<span class="line"><span>naming   =version 2              bsize=4096   ascii-ci=0, ftype=1</span></span>
<span class="line"><span>log      =internal log           bsize=4096   blocks=38399, version=2</span></span>
<span class="line"><span>         =                       sectsz=512   sunit=0 blks, lazy-count=1</span></span>
<span class="line"><span>realtime =none                   extsz=4096   blocks=0, rtextents=0</span></span>
<span class="line"><span>Discarding blocks...Done.</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng mufeng]# mkfs.xfs /dev/vdb2</span></span>
<span class="line"><span>meta-data=/dev/vdb2              isize=512    agcount=4, agsize=45875136 blks</span></span>
<span class="line"><span>         =                       sectsz=512   attr=2, projid32bit=1</span></span>
<span class="line"><span>         =                       crc=1        finobt=1, sparse=1, rmapbt=0</span></span>
<span class="line"><span>         =                       reflink=1    bigtime=1 inobtcount=1 nrext64=0</span></span>
<span class="line"><span>data     =                       bsize=4096   blocks=183500544, imaxpct=25</span></span>
<span class="line"><span>         =                       sunit=0      swidth=0 blks</span></span>
<span class="line"><span>naming   =version 2              bsize=4096   ascii-ci=0, ftype=1</span></span>
<span class="line"><span>log      =internal log           bsize=4096   blocks=89599, version=2</span></span>
<span class="line"><span>         =                       sectsz=512   sunit=0 blks, lazy-count=1</span></span>
<span class="line"><span>realtime =none                   extsz=4096   blocks=0, rtextents=0</span></span>
<span class="line"><span>Discarding blocks...Done.</span></span></code></pre></div><h3 id="_2-3-挂载" tabindex="-1">2.3 挂载 <a class="header-anchor" href="#_2-3-挂载" aria-label="Permalink to &quot;2.3 挂载&quot;">​</a></h3><ol><li><p>挂载</p><p>创建挂载点：批量创建</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng ~]# mkdir -p /mufeng/{service,data}</span></span></code></pre></div><p>挂载：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng mufeng]# mount /dev/vdb1 /mufeng/service/</span></span>
<span class="line"><span>[root@mufeng mufeng]# mount /dev/vdb2 /mufeng/data/</span></span></code></pre></div></li><li><p>查看磁盘 UUID</p><div class="language-TEXT vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">TEXT</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng mufeng]# blkid </span></span>
<span class="line"><span>/dev/mapper/almalinux-swap: UUID=&quot;2fc87e59-234a-4f21-946c-5fd131d44a72&quot; TYPE=&quot;swap&quot;</span></span>
<span class="line"><span>/dev/sr0: UUID=&quot;2024-11-13-09-58-49-00&quot; LABEL=&quot;AlmaLinux-9-5-x86_64-dvd&quot; TYPE=&quot;iso9660&quot; PTUUID=&quot;096dfde5&quot; PTTYPE=&quot;dos&quot;</span></span>
<span class="line"><span>/dev/mapper/almalinux-root: UUID=&quot;48cef2c2-9723-477a-90de-08cfc56fe9e9&quot; TYPE=&quot;xfs&quot;</span></span>
<span class="line"><span>/dev/vda2: UUID=&quot;dbf4S2-DQJT-BjG5-UzCO-52Yl-S4Zq-heJHCW&quot; TYPE=&quot;LVM2_member&quot; PARTUUID=&quot;a81ec275-02&quot;</span></span>
<span class="line"><span>/dev/vda1: UUID=&quot;f89a0677-c2ec-486e-9e68-808c14cc447e&quot; TYPE=&quot;xfs&quot; PARTUUID=&quot;a81ec275-01&quot;</span></span>
<span class="line"><span>/dev/vdb2: UUID=&quot;71d3726a-61b8-4d2f-8be3-a3e0fe9f63da&quot; TYPE=&quot;xfs&quot; PARTLABEL=&quot;perimary&quot; PARTUUID=&quot;39e9c0f7-cde4-442c-a996-cc0f15e053f3&quot;</span></span>
<span class="line"><span>/dev/vdb1: UUID=&quot;5dc8d086-b972-4d86-93b9-7a5d8d45df26&quot; TYPE=&quot;xfs&quot; PARTLABEL=&quot;perimary&quot; PARTUUID=&quot;f7340660-3a9c-449e-acf0-7feafdb678be&quot;</span></span></code></pre></div></li><li><p>编辑挂载表</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng mufeng]# vim /etc/fstab</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/dev/mapper/almalinux-root                      /                       xfs     defaults        0 0</span></span>
<span class="line"><span>UUID=f89a0677-c2ec-486e-9e68-808c14cc447e       /boot                   xfs     defaults        0 0</span></span>
<span class="line"><span>/dev/mapper/almalinux-swap                      none                    swap    defaults        0 0</span></span>
<span class="line"><span>UUID=5dc8d086-b972-4d86-93b9-7a5d8d45df26       /mufeng/service         xfs     defaults        0 0</span></span>
<span class="line"><span>UUID=71d3726a-61b8-4d2f-8be3-a3e0fe9f63da       /mufeng/data         xfs     defaults        0 0</span></span></code></pre></div></li><li><p>执行挂载</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng mufeng]# mount -a</span></span></code></pre></div></li></ol><h3 id="_2-4-查看结果" tabindex="-1">2.4 查看结果 <a class="header-anchor" href="#_2-4-查看结果" aria-label="Permalink to &quot;2.4 查看结果&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@mufeng mufeng]# lsblk</span></span>
<span class="line"><span>NAME               MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS</span></span>
<span class="line"><span>sr0                 11:0    1    2G  0 rom  </span></span>
<span class="line"><span>vda                252:0    0  100G  0 disk </span></span>
<span class="line"><span>├─vda1             252:1    0    1G  0 part /boot</span></span>
<span class="line"><span>└─vda2             252:2    0   99G  0 part </span></span>
<span class="line"><span>  ├─almalinux-root 253:0    0   89G  0 lvm  /</span></span>
<span class="line"><span>  └─almalinux-swap 253:1    0   10G  0 lvm  [SWAP]</span></span>
<span class="line"><span>vdb                252:16   0 1000G  0 disk </span></span>
<span class="line"><span>├─vdb1             252:17   0  300G  0 part /mufeng/service</span></span>
<span class="line"><span>└─vdb2             252:18   0  700G  0 part /mufeng/data</span></span></code></pre></div><p>至此，该磁盘的新建以及分区挂载操作完成！</p>`,64)])])}const b=a(i,[["render",l]]);export{u as __pageData,b as default};
