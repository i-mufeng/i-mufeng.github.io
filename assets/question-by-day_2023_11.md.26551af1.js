import{_ as a,o as e,c as t,Q as r}from"./chunks/framework.28ce59f9.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{"readingTime":false,"hidden":true},"headers":[],"relativePath":"question-by-day/2023/11.md","filePath":"question-by-day/2023/11.md","lastUpdated":1700216686000}'),o={name:"question-by-day/2023/11.md"},l=r('<h2 id="_11-17" tabindex="-1">11-17 <a class="header-anchor" href="#_11-17" aria-label="Permalink to &quot;11-17&quot;">​</a></h2><h3 id="threadlocal-内存泄漏原因-如何避免" tabindex="-1">ThreadLocal 内存泄漏原因，如何避免？ <a class="header-anchor" href="#threadlocal-内存泄漏原因-如何避免" aria-label="Permalink to &quot;ThreadLocal 内存泄漏原因，如何避免？&quot;">​</a></h3><p>如果在线程池中使用 ThreadLocal会造成内存泄漏，因为当 ThreadLocal对象使用完之后，应该要把设置的key，value也就是Entry对象进行回收， 但线程池中的线程不会回收，而线程对象是通过强引用指向 ThreadLocalMap， ThreadLocalMap也是通过强引用指向Entry对象，线程不被回收，Entry对象也就不会被回收，从而出现内存泄漏。</p><p><strong>解决方法：</strong></p><ul><li>在使用了 ThreadLocal对象之后，手动调用ThreadLocal的 remove方法，手动清除Entry对象。</li><li>将ThreadLocal变量定义成private static，这样就一直存在ThreadLocal的强引用，也就能保证任何时候都能将通过ThreadLocal的弱引用访问到Entry的value值，进而清除掉。</li></ul><h2 id="_11-16" tabindex="-1">11-16 <a class="header-anchor" href="#_11-16" aria-label="Permalink to &quot;11-16&quot;">​</a></h2><h3 id="线程之间如何进行通信" tabindex="-1">线程之间如何进行通信？ <a class="header-anchor" href="#线程之间如何进行通信" aria-label="Permalink to &quot;线程之间如何进行通信？&quot;">​</a></h3><ul><li>通过共享内存或基于网络通信</li><li>如果是基于共享内存进行通信，则需要考虑并发问题，什么时候阻塞，什么时候唤醒</li><li>想 Java 中的 wait()、notify() 就是阻塞唤醒</li><li>通过网络就比较简单，通过网络连接将数据发送给对方，当然也要考虑到并发问题，处理方式就是加锁等方式。</li></ul><h2 id="_11-15" tabindex="-1">11-15 <a class="header-anchor" href="#_11-15" aria-label="Permalink to &quot;11-15&quot;">​</a></h2><h3 id="什么是-threadlocal" tabindex="-1">什么是 ThreadLocal？ <a class="header-anchor" href="#什么是-threadlocal" aria-label="Permalink to &quot;什么是 ThreadLocal？&quot;">​</a></h3><p>ThreadLocal 是 Java 中所提供的线程本地存储机制，可以利用该机制将数据缓存在某个线程内部，该线程可以在任意时刻、任意方法中获取缓存的数据。</p><p>ThreadLocal 底层是通过 TreadLocalMap 来实现的，每个 Thread 对象中都存在一个 ThreadLocalMap，Map 的 key 为 ThreadLocal 对象，Ma p的 value 为需要缓存的值 。</p><h2 id="_11-14" tabindex="-1">11-14 <a class="header-anchor" href="#_11-14" aria-label="Permalink to &quot;11-14&quot;">​</a></h2><h3 id="synchronized-关键字的作用" tabindex="-1">synchronized 关键字的作用？ <a class="header-anchor" href="#synchronized-关键字的作用" aria-label="Permalink to &quot;synchronized 关键字的作用？&quot;">​</a></h3><p>synchronized 关键字可以用于修饰一段代码或一个方法，用于实现现成的同步，表示该段代码不能被多个线程同时执行。</p><p>当一个线程进入被 synchronized 关键字修饰的代码块或方法时，其他试图访问的线程将被阻塞。</p><p>synchronized 关键字的作用体现在两个方面：</p><ol><li>确保方法或代码块的互斥访问。（加锁与解锁）</li><li>确保内存可见性。（强制从缓存加载数据）</li></ol><h2 id="_11-13" tabindex="-1">11-13 <a class="header-anchor" href="#_11-13" aria-label="Permalink to &quot;11-13&quot;">​</a></h2><h3 id="线程池有几种创建方式" tabindex="-1">线程池有几种创建方式？ <a class="header-anchor" href="#线程池有几种创建方式" aria-label="Permalink to &quot;线程池有几种创建方式？&quot;">​</a></h3><ol><li>newCachedThreadPool 创建一个可缓存线程池</li><li>newFixedThreadPool 创建一个定长线程池，可控制线程最大并发数</li><li>newScheduledThreadPool 创建一个定长线程池，支持定时及周期性任务执行。</li><li>newSingleThreadExecutor 创建一个单线程化的线程池，它只会用唯一的工作线程来执行任务</li></ol><h2 id="_11-12" tabindex="-1">11-12 <a class="header-anchor" href="#_11-12" aria-label="Permalink to &quot;11-12&quot;">​</a></h2><h3 id="线程的-run-和-start-有什么区别" tabindex="-1">线程的 run()和 start()有什么区别？ <a class="header-anchor" href="#线程的-run-和-start-有什么区别" aria-label="Permalink to &quot;线程的 run()和 start()有什么区别？&quot;">​</a></h3><p>每个线程都是通过某个特定 Thread 对象所对应的方法 run()来完成其操作的，run()方法称为线程体。通过调用 Thread 类的 start()方法来启动一个线程。</p><p>start() 方法用于启动线程，run() 方法用于执行线程的运行时代码。run() 可以重复调用，而 start()只能调用一次。</p><p>start() 方法来启动一个线程，真正实现了多线程运行。调用start()方法无需等待run方法体代码执行完毕，可以直接继续执行其他的代码； 此时线程是处于就绪状态，并没有运行。 然后通过此Thread类调用方法run()来完成其运行状态， run()方法运行结束， 此线程终止。然后CPU再调度其它线程。</p><p>run()方法是在本线程里的，只是线程里的一个函数，而不是多线程的。 如果直接调用 run()，其实就相当于是调用了一个普通函数而已，直接待用run()方法必须等待run()方法执行完毕才能执行下面的代码， 所以执行路径还是只有一条，根本就没有线程的特征，所以在多线程执行时要使用 start()方法而不是 run()方法。</p><h2 id="_11-11" tabindex="-1">11-11 <a class="header-anchor" href="#_11-11" aria-label="Permalink to &quot;11-11&quot;">​</a></h2><h3 id="守护线程与用户线程有什么区别" tabindex="-1">守护线程与用户线程有什么区别？ <a class="header-anchor" href="#守护线程与用户线程有什么区别" aria-label="Permalink to &quot;守护线程与用户线程有什么区别？&quot;">​</a></h3><p><strong>守护线程：</strong> 运行在后台，为其他前台线程服务。也可以说守护线程是 JVM 中非守护线程的 “佣人”。一旦所有用户线程都结束运行，守护线程会随 JVM 一起结束工作。</p><p><strong>用户线程：</strong> 运行在前台，执行具体的任务，如程序的主线程、连接网络的子线程等都是用户线程。</p><h2 id="_11-10" tabindex="-1">11-10 <a class="header-anchor" href="#_11-10" aria-label="Permalink to &quot;11-10&quot;">​</a></h2><h3 id="主线程是不是守护线程" tabindex="-1">主线程是不是守护线程？ <a class="header-anchor" href="#主线程是不是守护线程" aria-label="Permalink to &quot;主线程是不是守护线程？&quot;">​</a></h3><p>主线程不是守护线程，它是一个用户线程，它的优先级是普通优先级，当所有的用户线程都结束了，主线程才会结束，如果主线程结束了，其他用户线程还在运行，那么程序也会继续运行。</p><h2 id="_11-9" tabindex="-1">11-9 <a class="header-anchor" href="#_11-9" aria-label="Permalink to &quot;11-9&quot;">​</a></h2><h3 id="什么是守护线程" tabindex="-1">什么是守护线程？ <a class="header-anchor" href="#什么是守护线程" aria-label="Permalink to &quot;什么是守护线程？&quot;">​</a></h3><p>守护线程是一种特殊的线程，它的优先级很低，通常用来做后台作业，比如垃圾回收线程就是一个很称职的守护者，并且它<strong>不能持有任何资源</strong>， 因为它会在任何时候被停止，如果它持有资源，那么其他线程就无法访问这些资源了。</p><h2 id="_11-8" tabindex="-1">11-8 <a class="header-anchor" href="#_11-8" aria-label="Permalink to &quot;11-8&quot;">​</a></h2><h3 id="线程的状态有哪些" tabindex="-1">线程的状态有哪些？ <a class="header-anchor" href="#线程的状态有哪些" aria-label="Permalink to &quot;线程的状态有哪些？&quot;">​</a></h3><ol><li>新建状态（New）：当线程对象对创建后，即进入了新建状态;</li><li>就绪状态（Runnable）：当调用线程对象的 <code>start()</code> 方法，线程即进入就绪状态。</li><li>运行状态（Running）：当CPU开始调度处于就绪状态的线程时，此时线程才得以真正执行，即进入到运行状态。</li><li>阻塞状态（Blocked）：处于运行状态中的线程由于某种原因，暂时放弃对 CPU 的使用权，停止执行，此时进入阻塞状态，直到其进入到就绪状态，才 有机会再次被 CPU 调用以进入到运行状态。 根据阻塞产生的原因不同，阻塞状态又可以分为三种： <ul><li>等待阻塞：运行状态中的线程执行 <code>wait()</code> 方法，使本线程进入到等待阻塞状态；</li><li>同步阻塞 — 线程在获取 synchronized 同步锁失败（因为锁被其它线程所占用），它会进入同步阻塞状态；</li><li>其他阻塞 — 通过调用线程的 <code>sleep()</code> 或 <code>join()</code> 或发出了I/O请求时，线程会进入到阻塞状态。当 <code>sleep()</code> 状态超时. <code>join()</code> 等待线程终止或者超时. 或者 I/O 处理完毕时，线程重新转入就绪状态。</li></ul></li><li>死亡状态（Dead）：线程执行完了或者因异常退出了 <code>run()</code> 方法，该线程结束生命周期。</li></ol><h2 id="_11-7" tabindex="-1">11-7 <a class="header-anchor" href="#_11-7" aria-label="Permalink to &quot;11-7&quot;">​</a></h2><h3 id="创建线程有哪几种方式" tabindex="-1">创建线程有哪几种方式？ <a class="header-anchor" href="#创建线程有哪几种方式" aria-label="Permalink to &quot;创建线程有哪几种方式？&quot;">​</a></h3><ol><li>继承 Thread 类，重写 run() 方法，调用 start() 方法启动线程。</li><li>实现 Runnable 接口，重写 run() 方法，创建 Thread 对象，调用 start() 方法启动线程。</li><li>实现 Callable 接口，重写 call() 方法，创建 FutureTask 对象，创建 Thread 对象，调用 start() 方法启动线程。</li><li>使用线程池创建线程。</li></ol><blockquote><p>使用线程池的方式创建是最优解，因为线程池可以有效的控制线程的数量，避免因为创建线程过多导致的内存溢出，提高了系统资源的利用率，同时线程池提供了更多更强大的功能。</p></blockquote><h2 id="_11-6" tabindex="-1">11-6 <a class="header-anchor" href="#_11-6" aria-label="Permalink to &quot;11-6&quot;">​</a></h2><h3 id="都有哪些原子类-请举例说明。" tabindex="-1">都有哪些原子类？请举例说明。 <a class="header-anchor" href="#都有哪些原子类-请举例说明。" aria-label="Permalink to &quot;都有哪些原子类？请举例说明。&quot;">​</a></h3><p><code>java.util.concurrent </code>这个包里面提供了一组原子类。其基本的特性就是在多线程环境下，当有多个线程同时执行这些类的实例包含的方法时，具有排他性。</p><ul><li>原子类：AtomicBoolean，AtomicInteger，AtomicLong，AtomicReference</li><li>原子数组：AtomicIntegerArray，AtomicLongArray，AtomicReferenceArray</li><li>原子属性更新器：AtomicLongFieldUpdater，AtomicIntegerFieldUpdater，AtomicReferenceFieldUpdater</li><li>解决ABA问题的原子类：AtomicMarkableReference（通过引入一个boolean来反映中间有没有变过），AtomicStampedReference（通过引入一个int来累加来反映中间有没有变过）</li></ul><h2 id="_11-5" tabindex="-1">11-5 <a class="header-anchor" href="#_11-5" aria-label="Permalink to &quot;11-5&quot;">​</a></h2><h3 id="什么是原子操作" tabindex="-1">什么是原子操作? <a class="header-anchor" href="#什么是原子操作" aria-label="Permalink to &quot;什么是原子操作?&quot;">​</a></h3><p>原子操作（atomic operation）意为”不可被中断的一个或一系列操作” 。处理器使用基于对缓存加锁或总线加锁的方式来实现多处理器之间的原子操作。 在Java中可以通过锁和循环CAS的方式来实现原子操作。CAS操作——Compare &amp; Set，或是 Compare &amp; Swap，现在几乎所有的CPU指令都支持CAS的原子操作。</p><p>原子操作是指一个不受其他操作影响的操作任务单元。原子操作是在多线程环境下避免数据不一致必须的手段。 <code>int++</code> 并不是一个原子操作，所以当一个线程读取它的值并加1时，另外一个线程有可能会读到之前的值，这就会引发错误。</p><p>为了解决这个问题，必须保证增加操作是原子的，在JDK1.5之前我们可以使用同步技术来做到这一点。 到JDK1.5，java.util.concurrent.atomic包提供了int和long类型的原子包装类，它们可以自动的保证对于他们的操作是原子的并且不需要使用同步。</p><h2 id="_11-4" tabindex="-1">11-4 <a class="header-anchor" href="#_11-4" aria-label="Permalink to &quot;11-4&quot;">​</a></h2><h3 id="execute-与-submit-的用法与区别。" tabindex="-1">execute 与 submit 的用法与区别。 <a class="header-anchor" href="#execute-与-submit-的用法与区别。" aria-label="Permalink to &quot;execute 与 submit 的用法与区别。&quot;">​</a></h3><p>execute 执行后<strong>没有返回结果</strong>，只有1种用法</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>void execute(Runnable command)</code></td><td>常规使用方法，用没有返回值的 execute 执行没有返回值的 Runnable 任务</td></tr></tbody></table><p>submit 执行后<strong>有返回结果</strong>，有3种用法</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>Future submit(Callable task)</code></td><td>常规使用方法，传入有返回值的 callable 任务，最终返回 task 的返回值</td></tr><tr><td><code>Future submit(Runnable task, T result)</code></td><td>由于 Runnable 没有返回值，但是可以自定义一个返回值用于返回</td></tr><tr><td><code>Future submit(Runnable task)</code></td><td>强行使用 submit 执行 Runnable 方法，忽略返回值</td></tr></tbody></table><h2 id="_11-3" tabindex="-1">11-3 <a class="header-anchor" href="#_11-3" aria-label="Permalink to &quot;11-3&quot;">​</a></h2><h3 id="runnable-与-callable-的区别。" tabindex="-1">Runnable 与 Callable 的区别。 <a class="header-anchor" href="#runnable-与-callable-的区别。" aria-label="Permalink to &quot;Runnable 与 Callable 的区别。&quot;">​</a></h3><p>Runnable 没有返回结果，即没有 return 语句；Callable 有返回结果。</p><p>可以通过 Executors 工厂类将 Runnable 封装为一个 Callable 对象。</p><h2 id="_11-2" tabindex="-1">11-2 <a class="header-anchor" href="#_11-2" aria-label="Permalink to &quot;11-2&quot;">​</a></h2><h3 id="请描述-executor-框架的执行过程。" tabindex="-1">请描述 Executor 框架的执行过程。 <a class="header-anchor" href="#请描述-executor-框架的执行过程。" aria-label="Permalink to &quot;请描述 Executor 框架的执行过程。&quot;">​</a></h3><p>1、通过实现 Runnable 接口或 Callable 接口创建任务。</p><p>2、通过Executors的工厂方法创建线程池。</p><p>3、通过 <code>ExecutorService.submit()</code> 提交一个有返回结果的任务，返回类型为一个实现Future接口的对象；或通过ExecutorService.execute()方法执行一个没有返回结果的任务。</p><p>4、通过 <code>FutureTask.get()</code> 获取返回结果（如果有）。</p><h2 id="_11-1" tabindex="-1">11-1 <a class="header-anchor" href="#_11-1" aria-label="Permalink to &quot;11-1&quot;">​</a></h2><h3 id="说一说你理解的-executor-框架。" tabindex="-1">说一说你理解的 Executor 框架。 <a class="header-anchor" href="#说一说你理解的-executor-框架。" aria-label="Permalink to &quot;说一说你理解的 Executor 框架。&quot;">​</a></h3><p>Executor 是线程池的调度工具，线程池是 Executor 的一部分。</p><p>Executor 框架由三大部分组成</p><p>1、<strong>任务</strong>：即被执行任务需要实现的接口：<strong>Runnable</strong> 接口或 <strong>Callable</strong> 接口。</p><p>2、<strong>线程池</strong>：主要通过 <strong>ExecutorService</strong> 接口调用线程池，有2个关键实现类 <strong>ThreadPoolExecutor</strong> 和 * <em>ScheduledThreadPoolExecutor</em>*。</p><p>3、<strong>异步计算的结果</strong>：<strong>Future</strong> 接口及其实现类 <strong>FutureTask</strong>。</p>',76),i=[l];function n(d,h,c,u,s,b){return e(),t("div",null,i)}const q=a(o,[["render",n]]);export{m as __pageData,q as default};
