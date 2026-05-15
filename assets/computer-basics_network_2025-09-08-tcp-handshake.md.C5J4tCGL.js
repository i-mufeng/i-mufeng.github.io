import{c as a,S as n,h as p,l as e}from"./chunks/framework.CuiMOlaJ.js";const k=JSON.parse('{"title":"TCP 三次握手与四次挥手详解","description":"深入理解 TCP 连接建立与断开的过程，掌握常见面试考点","frontmatter":{"title":"TCP 三次握手与四次挥手详解","description":"深入理解 TCP 连接建立与断开的过程，掌握常见面试考点","categories":["技术笔记分享"],"tags":["TCP","网络协议","计算机网络","面试"],"outline":[2,3],"date":"2025-09-08T00:00:00.000Z"},"headers":[],"relativePath":"computer-basics/network/2025-09-08-tcp-handshake.md","filePath":"computer-basics/network/2025-09-08-tcp-handshake.md","lastUpdated":1778809699000}'),i={name:"computer-basics/network/2025-09-08-tcp-handshake.md"};function l(t,s,c,d,h,o){return n(),p("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1757289600000"},[...s[0]||(s[0]=[e(`<h1 id="tcp-三次握手与四次挥手详解" tabindex="-1">TCP 三次握手与四次挥手详解 <a class="header-anchor" href="#tcp-三次握手与四次挥手详解" aria-label="Permalink to &quot;TCP 三次握手与四次挥手详解&quot;">​</a></h1><blockquote><p>TCP 是面向连接的可靠传输协议，三次握手建立连接、四次挥手断开连接是网络面试的高频考点。</p></blockquote><h2 id="一、tcp-协议基础" tabindex="-1">一、TCP 协议基础 <a class="header-anchor" href="#一、tcp-协议基础" aria-label="Permalink to &quot;一、TCP 协议基础&quot;">​</a></h2><h3 id="_1-1-tcp-的特点" tabindex="-1">1.1 TCP 的特点 <a class="header-anchor" href="#_1-1-tcp-的特点" aria-label="Permalink to &quot;1.1 TCP 的特点&quot;">​</a></h3><table tabindex="0"><thead><tr><th>特点</th><th>说明</th></tr></thead><tbody><tr><td>面向连接</td><td>通信前需要建立连接</td></tr><tr><td>可靠传输</td><td>保证数据不丢失、不重复、按序到达</td></tr><tr><td>全双工</td><td>双方可以同时发送数据</td></tr><tr><td>面向字节流</td><td>以字节为单位传输</td></tr><tr><td>流量控制</td><td>滑动窗口机制</td></tr><tr><td>拥塞控制</td><td>慢启动、拥塞避免等</td></tr></tbody></table><h3 id="_1-2-tcp-报文段头部" tabindex="-1">1.2 TCP 报文段头部 <a class="header-anchor" href="#_1-2-tcp-报文段头部" aria-label="Permalink to &quot;1.2 TCP 报文段头部&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> 0                   1                   2                   3</span></span>
<span class="line"><span> 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1</span></span>
<span class="line"><span>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</span></span>
<span class="line"><span>|          Source Port          |       Destination Port        |</span></span>
<span class="line"><span>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</span></span>
<span class="line"><span>|                        Sequence Number                        |</span></span>
<span class="line"><span>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</span></span>
<span class="line"><span>|                    Acknowledgment Number                      |</span></span>
<span class="line"><span>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</span></span>
<span class="line"><span>|  Data |       |C|E|U|A|P|R|S|F|                               |</span></span>
<span class="line"><span>| Offset| Rsrvd |W|C|R|C|S|S|Y|I|            Window             |</span></span>
<span class="line"><span>|  (4)  |  (3)  |R|E|G|K|H|T|N|N|           (16)                |</span></span>
<span class="line"><span>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</span></span></code></pre></div><p><strong>关键字段：</strong></p><table tabindex="0"><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td>Sequence Number</td><td>序列号，标识发送的数据字节流位置</td></tr><tr><td>Acknowledgment Number</td><td>确认号，期望收到的下一个字节</td></tr><tr><td>SYN</td><td>同步序列号，用于建立连接</td></tr><tr><td>ACK</td><td>确认标志</td></tr><tr><td>FIN</td><td>结束标志，用于断开连接</td></tr><tr><td>RST</td><td>重置连接</td></tr><tr><td>Window</td><td>窗口大小，用于流量控制</td></tr></tbody></table><h2 id="二、三次握手过程详解" tabindex="-1">二、三次握手过程详解 <a class="header-anchor" href="#二、三次握手过程详解" aria-label="Permalink to &quot;二、三次握手过程详解&quot;">​</a></h2><h3 id="_2-1-连接建立过程" tabindex="-1">2.1 连接建立过程 <a class="header-anchor" href="#_2-1-连接建立过程" aria-label="Permalink to &quot;2.1 连接建立过程&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端                                服务器</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ---- SYN (seq=x) ----------------→ |  第一次握手</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ←--- SYN+ACK (seq=y, ack=x+1) --- |  第二次握手</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ---- ACK (ack=y+1) --------------→ |  第三次握手</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  |        连接建立，可以传输数据          |</span></span></code></pre></div><h3 id="_2-2-详细过程" tabindex="-1">2.2 详细过程 <a class="header-anchor" href="#_2-2-详细过程" aria-label="Permalink to &quot;2.2 详细过程&quot;">​</a></h3><p><strong>第一次握手：客户端 → 服务器</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端发送 SYN 报文：</span></span>
<span class="line"><span>- SYN = 1</span></span>
<span class="line"><span>- seq = x（客户端初始序列号）</span></span>
<span class="line"><span>- 进入 SYN_SENT 状态</span></span></code></pre></div><p><strong>第二次握手：服务器 → 客户端</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>服务器收到 SYN，发送 SYN+ACK：</span></span>
<span class="line"><span>- SYN = 1, ACK = 1</span></span>
<span class="line"><span>- seq = y（服务器初始序列号）</span></span>
<span class="line"><span>- ack = x + 1（确认客户端序列号）</span></span>
<span class="line"><span>- 进入 SYN_RCVD 状态</span></span></code></pre></div><p><strong>第三次握手：客户端 → 服务器</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端收到 SYN+ACK，发送 ACK：</span></span>
<span class="line"><span>- ACK = 1</span></span>
<span class="line"><span>- seq = x + 1</span></span>
<span class="line"><span>- ack = y + 1（确认服务器序列号）</span></span>
<span class="line"><span>- 进入 ESTABLISHED 状态</span></span>
<span class="line"><span>- 服务器收到后也进入 ESTABLISHED 状态</span></span></code></pre></div><h3 id="_2-3-状态转换图" tabindex="-1">2.3 状态转换图 <a class="header-anchor" href="#_2-3-状态转换图" aria-label="Permalink to &quot;2.3 状态转换图&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端状态变化:                服务器状态变化:</span></span>
<span class="line"><span>                              CLOSED</span></span>
<span class="line"><span>                                ↓ 收到 listen</span></span>
<span class="line"><span>                              LISTEN</span></span>
<span class="line"><span>CLOSED                        </span></span>
<span class="line"><span>  ↓ connect()                 </span></span>
<span class="line"><span>SYN_SENT ──── SYN ────→     SYN_RCVD</span></span>
<span class="line"><span>  ↓ 收到 SYN+ACK              ↓ 收到 ACK</span></span>
<span class="line"><span>ESTABLISHED ←── ACK ────  ESTABLISHED</span></span></code></pre></div><h2 id="三、为什么是三次而不是两次" tabindex="-1">三、为什么是三次而不是两次 <a class="header-anchor" href="#三、为什么是三次而不是两次" aria-label="Permalink to &quot;三、为什么是三次而不是两次&quot;">​</a></h2><h3 id="_3-1-历史连接问题" tabindex="-1">3.1 历史连接问题 <a class="header-anchor" href="#_3-1-历史连接问题" aria-label="Permalink to &quot;3.1 历史连接问题&quot;">​</a></h3><p>假设只有两次握手：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>场景：网络中存在延迟的旧 SYN 报文</span></span>
<span class="line"><span></span></span>
<span class="line"><span>客户端                                服务器</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ---- SYN (seq=100, 旧报文) -------→ |  ← 服务器以为是新连接</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ←--- SYN+ACK (seq=200) ----------- |  ← 服务器分配资源</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  |     客户端不知道这个连接，不会响应      |  ← 服务器资源浪费！</span></span>
<span class="line"><span></span></span>
<span class="line"><span>服务器误建立了连接，但客户端根本不知道</span></span></code></pre></div><p><strong>三次握手的解决：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端                                服务器</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ---- SYN (seq=100, 旧报文) -------→ |</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ←--- SYN+ACK (seq=200) ----------- |</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | 客户端发现这不是自己发起的连接，       |</span></span>
<span class="line"><span>  | 发送 RST 拒绝连接                    |</span></span>
<span class="line"><span>  | ---- RST ───────────────────────→ |</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | 服务器释放资源，不会建立无效连接        |</span></span></code></pre></div><h3 id="_3-2-同步序列号" tabindex="-1">3.2 同步序列号 <a class="header-anchor" href="#_3-2-同步序列号" aria-label="Permalink to &quot;3.2 同步序列号&quot;">​</a></h3><p>两次握手无法确认双方的接收能力：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>场景：服务器的 SYN+ACK 丢失</span></span>
<span class="line"><span></span></span>
<span class="line"><span>两次握手:</span></span>
<span class="line"><span>客户端 ──SYN──→ 服务器     ← SYN+ACK 丢失</span></span>
<span class="line"><span>                 ↓</span></span>
<span class="line"><span>         服务器以为连接建立了</span></span>
<span class="line"><span>         客户端不知道连接建立了</span></span>
<span class="line"><span>         双方状态不一致！</span></span>
<span class="line"><span></span></span>
<span class="line"><span>三次握手:</span></span>
<span class="line"><span>客户端 ──SYN──→ 服务器     ← SYN+ACK 丢失</span></span>
<span class="line"><span>         ↓ 超时重传 SYN</span></span>
<span class="line"><span>客户端 ──SYN──→ 服务器</span></span>
<span class="line"><span>         ↓ 收到 SYN+ACK</span></span>
<span class="line"><span>客户端 ──ACK──→ 服务器     ← 双方都确认连接建立</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">核心理解</p><p>三次握手的本质：确认双方的发送能力和接收能力都正常。</p><ul><li>第一次：服务器确认客户端能发、自己能收</li><li>第二次：客户端确认自己能发能收、服务器能发能收</li><li>第三次：服务器确认自己能发能收、客户端能发能收</li></ul></div><h2 id="四、四次挥手过程详解" tabindex="-1">四、四次挥手过程详解 <a class="header-anchor" href="#四、四次挥手过程详解" aria-label="Permalink to &quot;四、四次挥手过程详解&quot;">​</a></h2><h3 id="_4-1-连接断开过程" tabindex="-1">4.1 连接断开过程 <a class="header-anchor" href="#_4-1-连接断开过程" aria-label="Permalink to &quot;4.1 连接断开过程&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端                                服务器</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ---- FIN (seq=u) ----------------→ |  第一次挥手</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ←--- ACK (ack=u+1) -------------- |  第二次挥手</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  |        (服务器可能还有数据要发送)      |</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ←--- FIN (seq=w) ---------------- |  第三次挥手</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ---- ACK (ack=w+1) --------------→ |  第四次挥手</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  |        连接关闭                      |</span></span></code></pre></div><h3 id="_4-2-详细过程" tabindex="-1">4.2 详细过程 <a class="header-anchor" href="#_4-2-详细过程" aria-label="Permalink to &quot;4.2 详细过程&quot;">​</a></h3><p><strong>第一次挥手：客户端 → 服务器</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端发送 FIN：</span></span>
<span class="line"><span>- FIN = 1</span></span>
<span class="line"><span>- seq = u</span></span>
<span class="line"><span>- 表示&quot;我没有数据要发了&quot;</span></span>
<span class="line"><span>- 进入 FIN_WAIT_1 状态</span></span></code></pre></div><p><strong>第二次挥手：服务器 → 客户端</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>服务器收到 FIN，发送 ACK：</span></span>
<span class="line"><span>- ACK = 1</span></span>
<span class="line"><span>- ack = u + 1</span></span>
<span class="line"><span>- 表示&quot;我知道你没数据了&quot;</span></span>
<span class="line"><span>- 进入 CLOSE_WAIT 状态</span></span>
<span class="line"><span>- 客户端收到后进入 FIN_WAIT_2 状态</span></span></code></pre></div><p><strong>第三次挥手：服务器 → 客户端</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>服务器发送完剩余数据后，发送 FIN：</span></span>
<span class="line"><span>- FIN = 1</span></span>
<span class="line"><span>- seq = w</span></span>
<span class="line"><span>- 表示&quot;我也没数据要发了&quot;</span></span>
<span class="line"><span>- 进入 LAST_ACK 状态</span></span></code></pre></div><p><strong>第四次挥手：客户端 → 服务器</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端收到 FIN，发送 ACK：</span></span>
<span class="line"><span>- ACK = 1</span></span>
<span class="line"><span>- ack = w + 1</span></span>
<span class="line"><span>- 进入 TIME_WAIT 状态</span></span>
<span class="line"><span>- 等待 2MSL 后关闭</span></span>
<span class="line"><span>- 服务器收到后立即关闭</span></span></code></pre></div><h3 id="_4-3-状态转换图" tabindex="-1">4.3 状态转换图 <a class="header-anchor" href="#_4-3-状态转换图" aria-label="Permalink to &quot;4.3 状态转换图&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端状态变化:                    服务器状态变化:</span></span>
<span class="line"><span>ESTABLISHED                       ESTABLISHED</span></span>
<span class="line"><span>    ↓ 主动关闭                        ↓ 收到 FIN</span></span>
<span class="line"><span>FIN_WAIT_1                        CLOSE_WAIT</span></span>
<span class="line"><span>    ↓ 收到 ACK                        ↓ 被动关闭</span></span>
<span class="line"><span>FIN_WAIT_2                        LAST_ACK</span></span>
<span class="line"><span>    ↓ 收到 FIN                        ↓ 收到 ACK</span></span>
<span class="line"><span>TIME_WAIT                         CLOSED</span></span>
<span class="line"><span>    ↓ 2MSL 超时</span></span>
<span class="line"><span>CLOSED</span></span></code></pre></div><h2 id="五、为什么是四次而不是三次" tabindex="-1">五、为什么是四次而不是三次 <a class="header-anchor" href="#五、为什么是四次而不是三次" aria-label="Permalink to &quot;五、为什么是四次而不是三次&quot;">​</a></h2><h3 id="_5-1-全双工的特点" tabindex="-1">5.1 全双工的特点 <a class="header-anchor" href="#_5-1-全双工的特点" aria-label="Permalink to &quot;5.1 全双工的特点&quot;">​</a></h3><p>TCP 是全双工协议，数据可以在两个方向上同时传输：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端 ←──────────────────→ 服务器</span></span>
<span class="line"><span>      ←─ 数据流 A ─→</span></span>
<span class="line"><span>      ←─ 数据流 B ─→</span></span>
<span class="line"><span></span></span>
<span class="line"><span>关闭连接需要分别关闭两个方向的数据流</span></span></code></pre></div><h3 id="_5-2-被动方可能有数据要发送" tabindex="-1">5.2 被动方可能有数据要发送 <a class="header-anchor" href="#_5-2-被动方可能有数据要发送" aria-label="Permalink to &quot;5.2 被动方可能有数据要发送&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>场景：服务器收到 FIN 时还有数据没发完</span></span>
<span class="line"><span></span></span>
<span class="line"><span>客户端        服务器</span></span>
<span class="line"><span>  |   FIN →   |    ← 服务器收到 FIN</span></span>
<span class="line"><span>  |   ← ACK   |    ← 先确认，表示知道了</span></span>
<span class="line"><span>  |           |    ← 继续发送剩余数据</span></span>
<span class="line"><span>  |   ← DATA  |</span></span>
<span class="line"><span>  |   ← DATA  |</span></span>
<span class="line"><span>  |   ← FIN   |    ← 数据发完后，再发 FIN</span></span>
<span class="line"><span>  |   ACK →   |    ← 客户端确认</span></span></code></pre></div><h3 id="_5-3-为什么不能合并第二次和第三次挥手" tabindex="-1">5.3 为什么不能合并第二次和第三次挥手 <a class="header-anchor" href="#_5-3-为什么不能合并第二次和第三次挥手" aria-label="Permalink to &quot;5.3 为什么不能合并第二次和第三次挥手&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>如果服务器收到 FIN 时没有数据要发：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>理论上可以合并:</span></span>
<span class="line"><span>客户端        服务器</span></span>
<span class="line"><span>  |   FIN →   |</span></span>
<span class="line"><span>  |   ← FIN+ACK |  ← 合并挥手</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但大多数实现不合并:</span></span>
<span class="line"><span>- 服务器可能还有数据要发送</span></span>
<span class="line"><span>- 实现更简单、更通用</span></span>
<span class="line"><span>- 被动方的 ACK 和 FIN 之间可能有时间间隔</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">理解关键</p><p>四次挥手的原因：TCP 是全双工的，关闭连接需要两个方向分别关闭。收到 FIN 只表示对方没有数据发了，自己可能还有数据要发。</p></div><h2 id="六、time-wait-状态的作用" tabindex="-1">六、TIME_WAIT 状态的作用 <a class="header-anchor" href="#六、time-wait-状态的作用" aria-label="Permalink to &quot;六、TIME_WAIT 状态的作用&quot;">​</a></h2><h3 id="_6-1-time-wait-持续时间" tabindex="-1">6.1 TIME_WAIT 持续时间 <a class="header-anchor" href="#_6-1-time-wait-持续时间" aria-label="Permalink to &quot;6.1 TIME_WAIT 持续时间&quot;">​</a></h3><p>TIME_WAIT 持续 2MSL（Maximum Segment Lifetime）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MSL：报文最大生存时间</span></span>
<span class="line"><span>- Linux: MSL = 60秒</span></span>
<span class="line"><span>- Windows: MSL = 120秒</span></span>
<span class="line"><span>- 2MSL = 2 × MSL = 120-240秒</span></span></code></pre></div><h3 id="_6-2-为什么需要-time-wait" tabindex="-1">6.2 为什么需要 TIME_WAIT <a class="header-anchor" href="#_6-2-为什么需要-time-wait" aria-label="Permalink to &quot;6.2 为什么需要 TIME_WAIT&quot;">​</a></h3><p><strong>原因1：确保最后的 ACK 能到达</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端        服务器</span></span>
<span class="line"><span>  |   ACK →   |    ← 如果这个 ACK 丢失</span></span>
<span class="line"><span>  |           |</span></span>
<span class="line"><span>  | (TIME_WAIT)|    ← 服务器会重传 FIN</span></span>
<span class="line"><span>  |   ← FIN   |</span></span>
<span class="line"><span>  |   ACK →   |    ← 客户端重发 ACK</span></span>
<span class="line"><span>  |           |</span></span>
<span class="line"><span>  | (2MSL 后) |    ← 确保服务器收到了 ACK</span></span>
<span class="line"><span>  |   CLOSE   |</span></span></code></pre></div><p><strong>原因2：确保旧连接的数据完全消失</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>场景：如果没有 TIME_WAIT，立即建立新连接</span></span>
<span class="line"><span></span></span>
<span class="line"><span>旧连接: seq=100 的数据包在网络中延迟</span></span>
<span class="line"><span>新连接: 使用相同的四元组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>旧连接的数据包可能被新连接误收！</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TIME_WAIT = 2MSL 确保：</span></span>
<span class="line"><span>- 旧连接的所有数据包都已消失</span></span>
<span class="line"><span>- 新连接不会收到旧数据</span></span></code></pre></div><h3 id="_6-3-time-wait-过多的问题" tabindex="-1">6.3 TIME_WAIT 过多的问题 <a class="header-anchor" href="#_6-3-time-wait-过多的问题" aria-label="Permalink to &quot;6.3 TIME_WAIT 过多的问题&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 TIME_WAIT 数量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -an</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TIME_WAIT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> wc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 问题：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 占用端口资源</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 占用内存（少量）</span></span></code></pre></div><h3 id="_6-4-解决方案" tabindex="-1">6.4 解决方案 <a class="header-anchor" href="#_6-4-解决方案" aria-label="Permalink to &quot;6.4 解决方案&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 开启 TIME_WAIT 快速回收（Linux）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">net.ipv4.tcp_tw_reuse</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 允许复用 TIME_WAIT 连接</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 调整 MSL（不推荐）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 使用长连接代替短连接</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 使用连接池</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">tcp_tw_recycle</p><p>Linux 4.12 已移除 <code>tcp_tw_recycle</code>，因为它在 NAT 环境下会导致问题。</p></div><h2 id="七、常见面试问题与解答" tabindex="-1">七、常见面试问题与解答 <a class="header-anchor" href="#七、常见面试问题与解答" aria-label="Permalink to &quot;七、常见面试问题与解答&quot;">​</a></h2><h3 id="_7-1-为什么握手是三次-挥手是四次" tabindex="-1">7.1 为什么握手是三次，挥手是四次？ <a class="header-anchor" href="#_7-1-为什么握手是三次-挥手是四次" aria-label="Permalink to &quot;7.1 为什么握手是三次，挥手是四次？&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>握手：三次足够确认双方的发送和接收能力</span></span>
<span class="line"><span>- 服务器的 SYN 和 ACK 可以合并发送</span></span>
<span class="line"><span></span></span>
<span class="line"><span>挥手：需要四次</span></span>
<span class="line"><span>- 服务器收到 FIN 时可能还有数据要发</span></span>
<span class="line"><span>- ACK 和 FIN 通常分开发送</span></span>
<span class="line"><span>- TCP 全双工，两个方向需要分别关闭</span></span></code></pre></div><h3 id="_7-2-如果第三次握手丢失会怎样" tabindex="-1">7.2 如果第三次握手丢失会怎样？ <a class="header-anchor" href="#_7-2-如果第三次握手丢失会怎样" aria-label="Permalink to &quot;7.2 如果第三次握手丢失会怎样？&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端                                服务器</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ---- SYN ------------------------→ |</span></span>
<span class="line"><span>  | ←--- SYN+ACK --------------------- |</span></span>
<span class="line"><span>  | ---- ACK (丢失) ─────────────────→ |  ← ACK 丢失</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | 服务器: 没收到 ACK，超时重传 SYN+ACK  |</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ←--- SYN+ACK (重传) -------------- |</span></span>
<span class="line"><span>  | ---- ACK --------------------------→ |</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | 双方进入 ESTABLISHED 状态</span></span></code></pre></div><h3 id="_7-3-syn-flood-攻击是什么" tabindex="-1">7.3 SYN Flood 攻击是什么？ <a class="header-anchor" href="#_7-3-syn-flood-攻击是什么" aria-label="Permalink to &quot;7.3 SYN Flood 攻击是什么？&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>攻击者                                服务器</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ---- SYN (伪造源IP) --------------→ |  ← 服务器分配资源</span></span>
<span class="line"><span>  |                                     |     等待 ACK</span></span>
<span class="line"><span>  | ---- SYN (伪造源IP) --------------→ |  ← 再次分配资源</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | ... 大量 SYN ...                    |  ← 资源耗尽</span></span>
<span class="line"><span>  |                                     |</span></span>
<span class="line"><span>  | 无法响应正常用户的连接请求</span></span></code></pre></div><p><strong>防御方法：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. SYN Cookie：不分配资源，用 Cookie 验证</span></span>
<span class="line"><span>2. 增大半连接队列</span></span>
<span class="line"><span>3. 缩短 SYN_RCVD 超时时间</span></span>
<span class="line"><span>4. 防火墙限制 SYN 速率</span></span></code></pre></div><h3 id="_7-4-tcp-和-udp-的区别" tabindex="-1">7.4 TCP 和 UDP 的区别？ <a class="header-anchor" href="#_7-4-tcp-和-udp-的区别" aria-label="Permalink to &quot;7.4 TCP 和 UDP 的区别？&quot;">​</a></h3><table tabindex="0"><thead><tr><th>对比项</th><th>TCP</th><th>UDP</th></tr></thead><tbody><tr><td>连接</td><td>面向连接</td><td>无连接</td></tr><tr><td>可靠性</td><td>可靠</td><td>不可靠</td></tr><tr><td>传输方式</td><td>字节流</td><td>数据报</td></tr><tr><td>速度</td><td>较慢</td><td>较快</td></tr><tr><td>头部开销</td><td>20 字节</td><td>8 字节</td></tr><tr><td>流量控制</td><td>有</td><td>无</td></tr><tr><td>拥塞控制</td><td>有</td><td>无</td></tr><tr><td>应用场景</td><td>Web、文件传输</td><td>视频、游戏、DNS</td></tr></tbody></table><h3 id="_7-5-如果客户端突然断电会怎样" tabindex="-1">7.5 如果客户端突然断电会怎样？ <a class="header-anchor" href="#_7-5-如果客户端突然断电会怎样" aria-label="Permalink to &quot;7.5 如果客户端突然断电会怎样？&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>场景：客户端断电，没有发送 FIN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>服务器:</span></span>
<span class="line"><span>- 一直保持 ESTABLISHED 状态</span></span>
<span class="line"><span>- 开启 Keep-Alive 探测：</span></span>
<span class="line"><span>  - 定期发送探测报文</span></span>
<span class="line"><span>  - 多次无响应后关闭连接</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置:</span></span>
<span class="line"><span>- tcp_keepalive_time = 7200 (2小时)</span></span>
<span class="line"><span>- tcp_keepalive_intvl = 75 (75秒)</span></span>
<span class="line"><span>- tcp_keepalive_probes = 9 (9次)</span></span></code></pre></div><h2 id="八、wireshark-抓包分析" tabindex="-1">八、Wireshark 抓包分析 <a class="header-anchor" href="#八、wireshark-抓包分析" aria-label="Permalink to &quot;八、Wireshark 抓包分析&quot;">​</a></h2><h3 id="_8-1-抓包准备" tabindex="-1">8.1 抓包准备 <a class="header-anchor" href="#_8-1-抓包准备" aria-label="Permalink to &quot;8.1 抓包准备&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 Wireshark</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动抓包，选择网卡</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 过滤 TCP 流</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcp.stream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eq</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 过滤特定主机</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip.addr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 过滤 SYN 包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcp.flags.syn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 过滤三次握手</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcp.flags.syn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tcp.flags.fin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div><h3 id="_8-2-正常三次握手" tabindex="-1">8.2 正常三次握手 <a class="header-anchor" href="#_8-2-正常三次握手" aria-label="Permalink to &quot;8.2 正常三次握手&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>No.  Time    Source          Dest            Protocol  Info</span></span>
<span class="line"><span>1    0.000   192.168.1.100   93.184.216.34   TCP       SYN</span></span>
<span class="line"><span>2    0.023   93.184.216.34   192.168.1.100   TCP       SYN, ACK</span></span>
<span class="line"><span>3    0.023   192.168.1.100   93.184.216.34   TCP       ACK</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分析:</span></span>
<span class="line"><span>- 包1: seq=0, 客户端初始序列号</span></span>
<span class="line"><span>- 包2: seq=0, ack=1, 服务器初始序列号，确认客户端</span></span>
<span class="line"><span>- 包3: seq=1, ack=1, 确认服务器</span></span></code></pre></div><h3 id="_8-3-正常四次挥手" tabindex="-1">8.3 正常四次挥手 <a class="header-anchor" href="#_8-3-正常四次挥手" aria-label="Permalink to &quot;8.3 正常四次挥手&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>No.  Time    Source          Dest            Protocol  Info</span></span>
<span class="line"><span>10   5.000   192.168.1.100   93.184.216.34   TCP       FIN, ACK</span></span>
<span class="line"><span>11   5.023   93.184.216.34   192.168.1.100   TCP       ACK</span></span>
<span class="line"><span>12   5.100   93.184.216.34   192.168.1.100   TCP       FIN, ACK</span></span>
<span class="line"><span>13   5.100   192.168.1.100   93.184.216.34   TCP       ACK</span></span></code></pre></div><h2 id="九、总结" tabindex="-1">九、总结 <a class="header-anchor" href="#九、总结" aria-label="Permalink to &quot;九、总结&quot;">​</a></h2><h3 id="_9-1-三次握手" tabindex="-1">9.1 三次握手 <a class="header-anchor" href="#_9-1-三次握手" aria-label="Permalink to &quot;9.1 三次握手&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端 ──SYN──→ 服务器     第一次：客户端请求建立连接</span></span>
<span class="line"><span>客户端 ←─SYN+ACK─ 服务器   第二次：服务器确认并同步</span></span>
<span class="line"><span>客户端 ──ACK──→ 服务器     第三次：客户端确认</span></span></code></pre></div><h3 id="_9-2-四次挥手" tabindex="-1">9.2 四次挥手 <a class="header-anchor" href="#_9-2-四次挥手" aria-label="Permalink to &quot;9.2 四次挥手&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端 ──FIN──→ 服务器      第一次：客户端请求关闭</span></span>
<span class="line"><span>客户端 ←─ACK─── 服务器      第二次：服务器确认</span></span>
<span class="line"><span>客户端 ←─FIN─── 服务器      第三次：服务器请求关闭</span></span>
<span class="line"><span>客户端 ──ACK──→ 服务器      第四次：客户端确认</span></span></code></pre></div><h3 id="_9-3-核心要点" tabindex="-1">9.3 核心要点 <a class="header-anchor" href="#_9-3-核心要点" aria-label="Permalink to &quot;9.3 核心要点&quot;">​</a></h3><table tabindex="0"><thead><tr><th>问题</th><th>答案</th></tr></thead><tbody><tr><td>为什么三次握手</td><td>防止历史连接，同步双方序列号</td></tr><tr><td>为什么四次挥手</td><td>全双工，两个方向分别关闭</td></tr><tr><td>TIME_WAIT 的作用</td><td>确保 ACK 到达，防止旧数据干扰</td></tr><tr><td>TIME_WAIT 持续多久</td><td>2MSL (120-240秒)</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">面试准备</p><ol><li>能够画出三次握手和四次挥手的状态转换图</li><li>理解每个状态的含义和转换条件</li><li>能够解释为什么是三次/四次</li><li>了解 SYN Flood 攻击和防御</li><li>知道 TIME_WAIT 的作用和相关配置</li></ol></div>`,96)])])}const u=a(i,[["render",l]]);export{k as __pageData,u as default};
