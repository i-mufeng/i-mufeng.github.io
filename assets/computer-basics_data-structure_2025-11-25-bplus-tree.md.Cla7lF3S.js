import{c as a,S as n,h as i,l as p}from"./chunks/framework.CuiMOlaJ.js";const o=JSON.parse('{"title":"B+ 树原理与数据库索引","description":"深入理解 B+ 树的数据结构特点，以及它在数据库索引中的应用","frontmatter":{"title":"B+ 树原理与数据库索引","description":"深入理解 B+ 树的数据结构特点，以及它在数据库索引中的应用","categories":["技术笔记分享"],"tags":["数据结构","B+树","数据库索引","Mysql"],"outline":[2,3],"date":"2025-11-25T00:00:00.000Z"},"headers":[],"relativePath":"computer-basics/data-structure/2025-11-25-bplus-tree.md","filePath":"computer-basics/data-structure/2025-11-25-bplus-tree.md","lastUpdated":1778809700000}'),l={name:"computer-basics/data-structure/2025-11-25-bplus-tree.md"};function e(t,s,h,d,c,r){return n(),i("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1764028800000"},[...s[0]||(s[0]=[p(`<h1 id="b-树原理与数据库索引" tabindex="-1">B+ 树原理与数据库索引 <a class="header-anchor" href="#b-树原理与数据库索引" aria-label="Permalink to &quot;B+ 树原理与数据库索引&quot;">​</a></h1><blockquote><p>B+ 树是数据库索引的核心数据结构，理解它的原理对于数据库性能优化至关重要。</p></blockquote><h2 id="一、为什么数据库需要-b-树" tabindex="-1">一、为什么数据库需要 B+ 树 <a class="header-anchor" href="#一、为什么数据库需要-b-树" aria-label="Permalink to &quot;一、为什么数据库需要 B+ 树&quot;">​</a></h2><h3 id="_1-1-二叉树的问题" tabindex="-1">1.1 二叉树的问题 <a class="header-anchor" href="#_1-1-二叉树的问题" aria-label="Permalink to &quot;1.1 二叉树的问题&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>如果使用二叉搜索树:</span></span>
<span class="line"><span>         10</span></span>
<span class="line"><span>        /  \\</span></span>
<span class="line"><span>       5    15</span></span>
<span class="line"><span>      / \\   / \\</span></span>
<span class="line"><span>     3   7 12  20</span></span>
<span class="line"><span>    / \\</span></span>
<span class="line"><span>   1   4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>假设数据量 = 100万</span></span>
<span class="line"><span>树高度 ≈ log₂(1000000) ≈ 20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>问题:</span></span>
<span class="line"><span>- 每个节点只有 2 个子节点</span></span>
<span class="line"><span>- 树的高度较高</span></span>
<span class="line"><span>- 每次查询需要 20 次磁盘 I/O</span></span>
<span class="line"><span>- 磁盘 I/O 是性能瓶颈！</span></span></code></pre></div><h3 id="_1-2-磁盘-i-o-的特点" tabindex="-1">1.2 磁盘 I/O 的特点 <a class="header-anchor" href="#_1-2-磁盘-i-o-的特点" aria-label="Permalink to &quot;1.2 磁盘 I/O 的特点&quot;">​</a></h3><table tabindex="0"><thead><tr><th>操作</th><th>耗时</th></tr></thead><tbody><tr><td>内存访问</td><td>~100 纳秒</td></tr><tr><td>SSD 随机读</td><td>~100 微秒</td></tr><tr><td>HDD 随机读</td><td>~10 毫秒</td></tr></tbody></table><p><strong>内存 vs HDD：10万倍的差距！</strong></p><p>减少磁盘 I/O 次数是数据库索引设计的核心目标。</p><h3 id="_1-3-b-树的思路" tabindex="-1">1.3 B 树的思路 <a class="header-anchor" href="#_1-3-b-树的思路" aria-label="Permalink to &quot;1.3 B 树的思路&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>让每个节点存储多个键值，增加分支数：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>B 树 (阶数=3):</span></span>
<span class="line"><span>         [10 | 20]</span></span>
<span class="line"><span>        /    |    \\</span></span>
<span class="line"><span>   [1,5] [12,15] [25,30]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 每个节点最多 3 个子节点</span></span>
<span class="line"><span>- 树的高度大幅降低</span></span>
<span class="line"><span>- 同样 100万 数据，高度可能只有 3-4 层</span></span></code></pre></div><h2 id="二、b-树的基本概念" tabindex="-1">二、B 树的基本概念 <a class="header-anchor" href="#二、b-树的基本概念" aria-label="Permalink to &quot;二、B 树的基本概念&quot;">​</a></h2><h3 id="_2-1-b-树的定义" tabindex="-1">2.1 B 树的定义 <a class="header-anchor" href="#_2-1-b-树的定义" aria-label="Permalink to &quot;2.1 B 树的定义&quot;">​</a></h3><p>B 树（Balance Tree）是一种自平衡的多路搜索树，一个 m 阶 B 树满足：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 每个节点最多有 m 个子节点</span></span>
<span class="line"><span>2. 每个非根节点至少有 ⌈m/2⌉ 个子节点</span></span>
<span class="line"><span>3. 根节点至少有 2 个子节点（除非是叶子节点）</span></span>
<span class="line"><span>4. 所有叶子节点在同一层</span></span>
<span class="line"><span>5. 节点内的键值有序排列</span></span></code></pre></div><h3 id="_2-2-b-树结构示例-3阶" tabindex="-1">2.2 B 树结构示例（3阶） <a class="header-anchor" href="#_2-2-b-树结构示例-3阶" aria-label="Permalink to &quot;2.2 B 树结构示例（3阶）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>              [10 | 20]</span></span>
<span class="line"><span>             /    |    \\</span></span>
<span class="line"><span>    [1 | 5]   [12 | 15]  [25 | 30]</span></span>
<span class="line"><span>    / | \\      / | \\       / | \\</span></span>
<span class="line"><span>   ↓  ↓  ↓    ↓  ↓  ↓     ↓  ↓  ↓</span></span>
<span class="line"><span>  数据 数据 数据 数据 数据 数据 数据 数据 数据</span></span></code></pre></div><h3 id="_2-3-b-树的特点" tabindex="-1">2.3 B 树的特点 <a class="header-anchor" href="#_2-3-b-树的特点" aria-label="Permalink to &quot;2.3 B 树的特点&quot;">​</a></h3><table tabindex="0"><thead><tr><th>特点</th><th>说明</th></tr></thead><tbody><tr><td>多路平衡</td><td>每个节点可以有多个子节点</td></tr><tr><td>节点有序</td><td>节点内键值有序排列</td></tr><tr><td>叶子同层</td><td>所有叶子节点在同一层</td></tr><tr><td>数据分布</td><td>每个节点都存储数据</td></tr></tbody></table><h2 id="三、b-树的结构特点" tabindex="-1">三、B+ 树的结构特点 <a class="header-anchor" href="#三、b-树的结构特点" aria-label="Permalink to &quot;三、B+ 树的结构特点&quot;">​</a></h2><h3 id="_3-1-b-树-vs-b-树" tabindex="-1">3.1 B+ 树 vs B 树 <a class="header-anchor" href="#_3-1-b-树-vs-b-树" aria-label="Permalink to &quot;3.1 B+ 树 vs B 树&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>B 树:</span></span>
<span class="line"><span>              [10 | 20]</span></span>
<span class="line"><span>             /    |    \\</span></span>
<span class="line"><span>    [1 | 5]   [12 | 15]  [25 | 30]</span></span>
<span class="line"><span>    ↓   ↓      ↓    ↓      ↓    ↓</span></span>
<span class="line"><span>   数据 数据  数据  数据   数据  数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>B+ 树:</span></span>
<span class="line"><span>         [10 | 20]              ← 非叶子节点只存索引</span></span>
<span class="line"><span>        /    |    \\</span></span>
<span class="line"><span>   [1|5|10]→[12|15|20]→[25|30] ← 叶子节点存数据，且链表连接</span></span></code></pre></div><h3 id="_3-2-b-树的核心特点" tabindex="-1">3.2 B+ 树的核心特点 <a class="header-anchor" href="#_3-2-b-树的核心特点" aria-label="Permalink to &quot;3.2 B+ 树的核心特点&quot;">​</a></h3><p><strong>特点1：非叶子节点只存索引</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>B 树节点:  [键值 | 数据 | 指针 | 指针 | 指针]</span></span>
<span class="line"><span>B+ 树节点: [键值 | 指针 | 指针 | 指针]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>好处:</span></span>
<span class="line"><span>- 同样的节点大小可以存更多键值</span></span>
<span class="line"><span>- 树更矮，I/O 次数更少</span></span></code></pre></div><p><strong>特点2：叶子节点存储所有数据</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>所有数据都在叶子节点</span></span>
<span class="line"><span>非叶子节点只是索引，用于路由</span></span>
<span class="line"><span></span></span>
<span class="line"><span>好处:</span></span>
<span class="line"><span>- 查询性能稳定，所有查询都走到叶子</span></span>
<span class="line"><span>- 范围查询高效</span></span></code></pre></div><p><strong>特点3：叶子节点用链表连接</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[1|5|10] ⇄ [12|15|20] ⇄ [25|30]</span></span>
<span class="line"><span>   ↑              ↑            ↑</span></span>
<span class="line"><span> 双向链表      双向链表      双向链表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>好处:</span></span>
<span class="line"><span>- 范围查询只需遍历链表</span></span>
<span class="line"><span>- 排序查询高效</span></span>
<span class="line"><span>- 支持反向遍历</span></span></code></pre></div><h3 id="_3-3-b-树结构图示" tabindex="-1">3.3 B+ 树结构图示 <a class="header-anchor" href="#_3-3-b-树结构图示" aria-label="Permalink to &quot;3.3 B+ 树结构图示&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>                    [30 | 60]                     ← 根节点 (索引)</span></span>
<span class="line"><span>                   /    |    \\</span></span>
<span class="line"><span>          [10|20|30] [40|50|60] [70|80|90]        ← 内部节点 (索引)</span></span>
<span class="line"><span>          / | | \\    / | | \\    / | | \\</span></span>
<span class="line"><span>         ↓  ↓ ↓ ↓   ↓  ↓ ↓ ↓   ↓  ↓ ↓ ↓</span></span>
<span class="line"><span>        [1|5]→[10|15]→[20|25]→[30|35]→[40|45]→... ← 叶子节点 (数据)</span></span>
<span class="line"><span>          ↕     ↕      ↕      ↕      ↕</span></span>
<span class="line"><span>        双向链表连接所有叶子节点</span></span></code></pre></div><h2 id="四、b-树的插入操作" tabindex="-1">四、B+ 树的插入操作 <a class="header-anchor" href="#四、b-树的插入操作" aria-label="Permalink to &quot;四、B+ 树的插入操作&quot;">​</a></h2><h3 id="_4-1-插入规则" tabindex="-1">4.1 插入规则 <a class="header-anchor" href="#_4-1-插入规则" aria-label="Permalink to &quot;4.1 插入规则&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 找到合适的叶子节点</span></span>
<span class="line"><span>2. 如果叶子节点未满，直接插入</span></span>
<span class="line"><span>3. 如果叶子节点已满，分裂：</span></span>
<span class="line"><span>   a. 叶子节点分裂成两个</span></span>
<span class="line"><span>   b. 中间键值提升到父节点</span></span>
<span class="line"><span>   c. 如果父节点也满，继续分裂</span></span></code></pre></div><h3 id="_4-2-插入示例-3阶b-树" tabindex="-1">4.2 插入示例（3阶B+树） <a class="header-anchor" href="#_4-2-插入示例-3阶b-树" aria-label="Permalink to &quot;4.2 插入示例（3阶B+树）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>初始状态:</span></span>
<span class="line"><span>    [10 | 20]</span></span>
<span class="line"><span>   /    |    \\</span></span>
<span class="line"><span> [1|5] [12|15] [25|30]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>插入 8:</span></span>
<span class="line"><span>找到叶子节点 [1|5]，未满，直接插入</span></span>
<span class="line"><span>    [10 | 20]</span></span>
<span class="line"><span>   /    |    \\</span></span>
<span class="line"><span> [1|5|8] [12|15] [25|30]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>插入 3:</span></span>
<span class="line"><span>叶子节点 [1|5|8] 已满，需要分裂</span></span>
<span class="line"><span>分裂: [1|3] 和 [5|8]，中间值 5 提升</span></span>
<span class="line"><span>      [5 | 10 | 20]</span></span>
<span class="line"><span>     /    |    |    \\</span></span>
<span class="line"><span>  [1|3] [5|8] [12|15] [25|30]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果父节点也满，继续分裂...</span></span></code></pre></div><h3 id="_4-3-插入操作代码思路" tabindex="-1">4.3 插入操作代码思路 <a class="header-anchor" href="#_4-3-插入操作代码思路" aria-label="Permalink to &quot;4.3 插入操作代码思路&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> insert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(node, key, value):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.is_leaf:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.is_full:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 分裂叶子节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            new_node </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.split()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 将中间键提升到父节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            parent.insert_key(new_node.min_key, new_node)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            node.insert(key, value)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 找到合适的子节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        child </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.find_child(key)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        insert(child, key, value)</span></span></code></pre></div><h2 id="五、b-树的删除操作" tabindex="-1">五、B+ 树的删除操作 <a class="header-anchor" href="#五、b-树的删除操作" aria-label="Permalink to &quot;五、B+ 树的删除操作&quot;">​</a></h2><h3 id="_5-1-删除规则" tabindex="-1">5.1 删除规则 <a class="header-anchor" href="#_5-1-删除规则" aria-label="Permalink to &quot;5.1 删除规则&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 找到包含该键的叶子节点</span></span>
<span class="line"><span>2. 删除该键</span></span>
<span class="line"><span>3. 如果叶子节点太小（少于 ⌈m/2⌉-1 个键）：</span></span>
<span class="line"><span>   a. 尝试从兄弟节点借一个键</span></span>
<span class="line"><span>   b. 如果兄弟也小，合并节点</span></span>
<span class="line"><span>4. 更新父节点的索引</span></span></code></pre></div><h3 id="_5-2-删除示例" tabindex="-1">5.2 删除示例 <a class="header-anchor" href="#_5-2-删除示例" aria-label="Permalink to &quot;5.2 删除示例&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>初始状态:</span></span>
<span class="line"><span>    [5 | 10 | 20]</span></span>
<span class="line"><span>   /   |    |    \\</span></span>
<span class="line"><span> [1|3] [5|8] [12|15] [25|30]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>删除 8:</span></span>
<span class="line"><span>叶子节点 [5|8] 变成 [5]，键数 = 1 &lt; ⌈3/2⌉-1 = 1</span></span>
<span class="line"><span>从兄弟借: 兄弟 [12|15] 有多余的键</span></span>
<span class="line"><span>借 12: [5] → [5|12]，父节点索引更新</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [5 | 12 | 20]</span></span>
<span class="line"><span>   /   |    |    \\</span></span>
<span class="line"><span> [1|3] [5|12] [15] [25|30]</span></span></code></pre></div><h3 id="_5-3-合并节点" tabindex="-1">5.3 合并节点 <a class="header-anchor" href="#_5-3-合并节点" aria-label="Permalink to &quot;5.3 合并节点&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>如果兄弟也没有多余的键:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>删除前:</span></span>
<span class="line"><span>    [10]</span></span>
<span class="line"><span>   /    \\</span></span>
<span class="line"><span> [1|5]  [12|15]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>删除 5:</span></span>
<span class="line"><span>[1|5] → [1]，兄弟 [12|15] 也小</span></span>
<span class="line"><span>合并: [1] + [12|15] = [1|12|15]</span></span>
<span class="line"><span>父节点删除键 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>结果:</span></span>
<span class="line"><span>    [1|12|15]</span></span></code></pre></div><h2 id="六、b-树的优势分析" tabindex="-1">六、B+ 树的优势分析 <a class="header-anchor" href="#六、b-树的优势分析" aria-label="Permalink to &quot;六、B+ 树的优势分析&quot;">​</a></h2><h3 id="_6-1-查询性能稳定" tabindex="-1">6.1 查询性能稳定 <a class="header-anchor" href="#_6-1-查询性能稳定" aria-label="Permalink to &quot;6.1 查询性能稳定&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>B 树:</span></span>
<span class="line"><span>- 最好情况: 查到根节点 = 1 次 I/O</span></span>
<span class="line"><span>- 最坏情况: 查到叶子节点 = h 次 I/O</span></span>
<span class="line"><span>- 性能不稳定</span></span>
<span class="line"><span></span></span>
<span class="line"><span>B+ 树:</span></span>
<span class="line"><span>- 所有查询都走到叶子节点 = h 次 I/O</span></span>
<span class="line"><span>- 性能稳定，可预测</span></span></code></pre></div><h3 id="_6-2-范围查询高效" tabindex="-1">6.2 范围查询高效 <a class="header-anchor" href="#_6-2-范围查询高效" aria-label="Permalink to &quot;6.2 范围查询高效&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 查询 id 在 10-100 之间的记录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BETWEEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> AND</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>B 树:</span></span>
<span class="line"><span>- 需要中序遍历整棵树</span></span>
<span class="line"><span>- 可能需要多次回溯父节点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>B+ 树:</span></span>
<span class="line"><span>- 找到 id=10 的叶子节点</span></span>
<span class="line"><span>- 沿着链表遍历到 id=100</span></span>
<span class="line"><span>- 非常高效！</span></span></code></pre></div><h3 id="_6-3-磁盘-i-o-更少" tabindex="-1">6.3 磁盘 I/O 更少 <a class="header-anchor" href="#_6-3-磁盘-i-o-更少" aria-label="Permalink to &quot;6.3 磁盘 I/O 更少&quot;">​</a></h3><table tabindex="0"><thead><tr><th>对比项</th><th>B 树</th><th>B+ 树</th></tr></thead><tbody><tr><td>节点存储</td><td>键值+数据</td><td>只存键值</td></tr><tr><td>单节点容量</td><td>较小</td><td>较大</td></tr><tr><td>树高度</td><td>较高</td><td>较矮</td></tr><tr><td>I/O 次数</td><td>较多</td><td>较少</td></tr></tbody></table><h3 id="_6-4-完整对比" tabindex="-1">6.4 完整对比 <a class="header-anchor" href="#_6-4-完整对比" aria-label="Permalink to &quot;6.4 完整对比&quot;">​</a></h3><table tabindex="0"><thead><tr><th>特性</th><th>B 树</th><th>B+ 树</th></tr></thead><tbody><tr><td>数据位置</td><td>所有节点</td><td>只在叶子</td></tr><tr><td>叶子链表</td><td>无</td><td>有</td></tr><tr><td>范围查询</td><td>效率低</td><td>效率高</td></tr><tr><td>查询稳定性</td><td>不稳定</td><td>稳定</td></tr><tr><td>空间利用</td><td>较低</td><td>较高</td></tr><tr><td>适用场景</td><td>文件系统</td><td>数据库索引</td></tr></tbody></table><h2 id="七、mysql-innodb-中的应用" tabindex="-1">七、MySQL InnoDB 中的应用 <a class="header-anchor" href="#七、mysql-innodb-中的应用" aria-label="Permalink to &quot;七、MySQL InnoDB 中的应用&quot;">​</a></h2><h3 id="_7-1-聚簇索引-clustered-index" tabindex="-1">7.1 聚簇索引（Clustered Index） <a class="header-anchor" href="#_7-1-聚簇索引-clustered-index" aria-label="Permalink to &quot;7.1 聚簇索引（Clustered Index）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>InnoDB 的主键索引就是 B+ 树结构:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>叶子节点存储: 完整的行数据</span></span>
<span class="line"><span>非叶子节点: 主键值 + 指针</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [10 | 20]                    ← 主键索引</span></span>
<span class="line"><span>       /    |    \\</span></span>
<span class="line"><span>   [1|5]  [12|15]  [25|30]           ← 叶子节点存储完整行</span></span>
<span class="line"><span>   ↓      ↓        ↓</span></span>
<span class="line"><span>  行数据  行数据   行数据</span></span></code></pre></div><p><strong>特点：</strong></p><ul><li>每个表只能有一个聚簇索引（通常是主键）</li><li>数据按主键顺序物理存储</li><li>主键查询非常快</li></ul><h3 id="_7-2-二级索引-secondary-index" tabindex="-1">7.2 二级索引（Secondary Index） <a class="header-anchor" href="#_7-2-二级索引-secondary-index" aria-label="Permalink to &quot;7.2 二级索引（Secondary Index）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>非主键索引（如 name 索引）:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>叶子节点存储: 主键值（不是完整行）</span></span>
<span class="line"><span>非叶子节点: 索引列值 + 指针</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [&quot;Alice&quot; | &quot;Bob&quot;]            ← name 索引</span></span>
<span class="line"><span>       /        |         \\</span></span>
<span class="line"><span>   [&quot;Amy&quot;]  [&quot;Alice&quot;]  [&quot;Bob&quot;]       ← 叶子节点存主键值</span></span>
<span class="line"><span>   ↓         ↓          ↓</span></span>
<span class="line"><span>   10        20         30           ← 回表查主键索引获取完整数据</span></span></code></pre></div><p><strong>回表查询：</strong></p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 使用二级索引查询</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 步骤:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 1. 在 name 索引中找到 Alice，得到主键 id=20</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 2. 用 id=20 去主键索引查完整行数据（回表）</span></span></code></pre></div><h3 id="_7-3-覆盖索引" tabindex="-1">7.3 覆盖索引 <a class="header-anchor" href="#_7-3-覆盖索引" aria-label="Permalink to &quot;7.3 覆盖索引&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 如果查询的列都在索引中，不需要回表</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- name 索引的叶子节点已经存储了 id 和 name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 直接返回，无需回表</span></span></code></pre></div><h3 id="_7-4-联合索引与最左前缀" tabindex="-1">7.4 联合索引与最左前缀 <a class="header-anchor" href="#_7-4-联合索引与最左前缀" aria-label="Permalink to &quot;7.4 联合索引与最左前缀&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 联合索引 (name, age)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> INDEX</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> idx_name_age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, age);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>索引结构:</span></span>
<span class="line"><span>        [(&quot;Alice&quot;,20) | (&quot;Bob&quot;,25)]</span></span>
<span class="line"><span>       /        |              \\</span></span>
<span class="line"><span>  [(&quot;Alice&quot;,20)] [(&quot;Amy&quot;,30)]  [(&quot;Bob&quot;,25)]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可以使用索引的查询:</span></span>
<span class="line"><span>- WHERE name = &#39;Alice&#39;              ✓</span></span>
<span class="line"><span>- WHERE name = &#39;Alice&#39; AND age = 20 ✓</span></span>
<span class="line"><span>- WHERE age = 20                    ✗ (不满足最左前缀)</span></span></code></pre></div><h2 id="八、索引设计最佳实践" tabindex="-1">八、索引设计最佳实践 <a class="header-anchor" href="#八、索引设计最佳实践" aria-label="Permalink to &quot;八、索引设计最佳实践&quot;">​</a></h2><h3 id="_8-1-选择合适的索引列" tabindex="-1">8.1 选择合适的索引列 <a class="header-anchor" href="#_8-1-选择合适的索引列" aria-label="Permalink to &quot;8.1 选择合适的索引列&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 适合建索引的列:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 1. WHERE 条件频繁使用的列</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 2. JOIN 连接的列</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 3. ORDER BY 排序的列</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 4. 高选择性的列（不同值多）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 不适合建索引的列:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 1. 频繁更新的列</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 2. 选择性低的列（如性别）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 3. 数据量小的表</span></span></code></pre></div><h3 id="_8-2-索引列顺序" tabindex="-1">8.2 索引列顺序 <a class="header-anchor" href="#_8-2-索引列顺序" aria-label="Permalink to &quot;8.2 索引列顺序&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 联合索引的列顺序很重要</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 规则: 选择性高的列放前面</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 例如: users 表</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- name 选择性: 0.9 (几乎不重复)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- age  选择性: 0.01 (很多重复)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- gender 选择性: 0.001 (只有几个值)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 推荐: (name, age, gender)</span></span></code></pre></div><h3 id="_8-3-避免索引失效" tabindex="-1">8.3 避免索引失效 <a class="header-anchor" href="#_8-3-避免索引失效" aria-label="Permalink to &quot;8.3 避免索引失效&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- ❌ 在索引列上使用函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YEAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(create_time) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2025</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- ✅ 改为范围查询</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> create_time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2025-01-01&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> AND</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> create_time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2026-01-01&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- ❌ 隐式类型转换</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> phone </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 13800138000</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  -- phone 是 VARCHAR</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- ✅ 使用正确类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> phone </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;13800138000&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- ❌ LIKE 左模糊</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> LIKE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;%风&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- ✅ 右模糊可以使用索引</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> LIKE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;沐%&#39;</span></span></code></pre></div><h3 id="_8-4-覆盖索引优化" tabindex="-1">8.4 覆盖索引优化 <a class="header-anchor" href="#_8-4-覆盖索引优化" aria-label="Permalink to &quot;8.4 覆盖索引优化&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 创建覆盖索引</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> INDEX</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> idx_covering</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> orders(user_id, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, create_time);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 查询只访问索引，无需回表</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user_id, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, create_time </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> orders </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1001</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> AND</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> status</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="九、总结" tabindex="-1">九、总结 <a class="header-anchor" href="#九、总结" aria-label="Permalink to &quot;九、总结&quot;">​</a></h2><h3 id="_9-1-b-树的核心优势" tabindex="-1">9.1 B+ 树的核心优势 <a class="header-anchor" href="#_9-1-b-树的核心优势" aria-label="Permalink to &quot;9.1 B+ 树的核心优势&quot;">​</a></h3><table tabindex="0"><thead><tr><th>优势</th><th>说明</th></tr></thead><tbody><tr><td>树高度低</td><td>多路平衡，减少磁盘 I/O</td></tr><tr><td>查询稳定</td><td>所有查询都走到叶子节点</td></tr><tr><td>范围查询高效</td><td>叶子节点链表连接</td></tr><tr><td>空间利用率高</td><td>非叶子节点只存索引</td></tr></tbody></table><h3 id="_9-2-b-树在数据库中的应用" tabindex="-1">9.2 B+ 树在数据库中的应用 <a class="header-anchor" href="#_9-2-b-树在数据库中的应用" aria-label="Permalink to &quot;9.2 B+ 树在数据库中的应用&quot;">​</a></h3><table tabindex="0"><thead><tr><th>应用</th><th>说明</th></tr></thead><tbody><tr><td>聚簇索引</td><td>叶子存完整行数据</td></tr><tr><td>二级索引</td><td>叶子存主键值</td></tr><tr><td>联合索引</td><td>多列组合索引</td></tr><tr><td>覆盖索引</td><td>避免回表查询</td></tr></tbody></table><h3 id="_9-3-索引设计原则" tabindex="-1">9.3 索引设计原则 <a class="header-anchor" href="#_9-3-索引设计原则" aria-label="Permalink to &quot;9.3 索引设计原则&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 选择高选择性的列建索引</span></span>
<span class="line"><span>2. 联合索引注意最左前缀</span></span>
<span class="line"><span>3. 避免索引失效的写法</span></span>
<span class="line"><span>4. 使用覆盖索引减少回表</span></span>
<span class="line"><span>5. 控制索引数量，避免过度索引</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">学习建议</p><ol><li>理解 B 树到 B+ 树的演进原因</li><li>掌握 B+ 树的插入删除过程</li><li>理解聚簇索引和二级索引的区别</li><li>结合 MySQL 实际使用理解索引优化</li><li>通过 EXPLAIN 验证索引使用情况</li></ol></div>`,86)])])}const g=a(l,[["render",e]]);export{o as __pageData,g as default};
