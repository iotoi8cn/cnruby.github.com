var store = [{
        "title": "crates!",
        "excerpt":"fn print_hi(name: &amp;str) {   println!(\"Hi, \", name);}println!(\"Tom\");","categories": ["crates"],
        "tags": [],
        "url": "http://localhost:4000/crates/2019-08-24-test/"
      },{
        "title": "crates!",
        "excerpt":"ttiel:news fn print_hi(name: &amp;str) {   println!(\"Hi, \", name);}println!(\"Tom\");fn print_hi(name: &amp;str) {   println!(\"Hi, \", name);}println!(\"Tom\");fn print_hi(name: &amp;str) {   println!(\"Hi, \", name);}println!(\"Tom\");fn print_hi(name: &amp;str) {   println!(\"Hi, \", name);}println!(\"Tom\");","categories": ["news"],
        "tags": ["content","css","edge case","lists","markup"],
        "url": "http://localhost:4000/news/2019-08-24-test/"
      },{
        "title": "How to create the folder in Jekyll!",
        "excerpt":"make a new foldermkdir _news create and edit a new listing file news.markdowntouch news.markdownvi news.markdown add the follow code to the file news.markdown---layout: pagetitle: 新闻报道permalink: /news/---&lt;ul&gt; {% for item in site.news %} &lt;li&gt; &lt;h2&gt;&lt;a href=\"{{ item.url }}\"&gt;{{ item.name }}&lt;/a&gt;&lt;/h2&gt; &lt;h3&gt;{{ item.position }}&lt;/h3&gt; &lt;p&gt;\\{\\{ item.content | markdownify \\}\\}&lt;/p&gt; &lt;/li&gt; {% endfor...","categories": ["posts"],
        "tags": [],
        "url": "http://localhost:4000/posts/2019/08/23/how-to-create-the-folder-in-jekyl.html"
      },{
        "title": "crates!",
        "excerpt":"fn print_hi(name: &amp;str) {   println!(\"Hi, \", name);}println!(\"Tom\");","categories": ["rust"],
        "tags": [],
        "url": "http://localhost:4000/rust/2019-08-24-test/"
      },{
        "title": "Develop the Markdown Code with VSCode Editor",
        "excerpt":"安装软件VSCode Editor   VSCode Editor是微软免费的开发程序代码编辑器安装软件VSCode Editor插件：Markdown All in One   Markdown All in One是基于VSCode Editor的Markdown代码的辅助工具。  打开VSCode Editor  点击左边第五个图标  输入：Markdown  点击：install  安装结果如下：参考资料   how-to-guide-markdown-in-visual-studio-code","categories": ["tools"],
        "tags": ["VSCode","Editor","Markdown"],
        "url": "http://localhost:4000/tools/2019-08-24-markdwon-vscode/"
      },{
        "title": "Develop the Rust Code with VSCode Editor",
        "excerpt":"安装软件VSCode Editor   VSCode Editor是微软免费的开发程序代码编辑器安装软件Rustup   Rustup是Rust语言版本管理工具  Rustup工具安装命令如下：    curl https://sh.rustup.rs -sSf | sh      安装软件VSCode Editor插件：Rust (rls)   Rust (rls)是基于VSCode Editor的Rust语言编程代码的辅助工具。  打开VSCode Editor  点击左边第五个图标  输入：Rust  点击：install  安装结果如下：参考资料   what-the-rls-can-do  how-to-debug-rust-with-visual-studio-code","categories": ["tools"],
        "tags": [],
        "url": "http://localhost:4000/tools/2019-08-24-rust-with-vscode/"
      }]
