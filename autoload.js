const sakana_path = "C:\\Users\\admin\\Desktop\\mycode\\aurora-master\\aurora-master\\aurora-vue\\aurora-blog\\public\\sakana\\";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
    return new Promise((resolve, reject) => {
        let tag;

        if (type === "css") {
            tag = document.createElement("link");
            tag.rel = "stylesheet";
            tag.href = url;
            tag.onload = () => resolve(url);
            tag.onerror = () => reject(url);
            document.head.appendChild(tag);
        } else if (type === "png") {
            tag = document.createElement("link");
            tag.rel = "apple-touch-icon";
            tag.href = url;
            tag.onload = () => resolve(url);
            tag.onerror = () => reject(url);
            document.head.appendChild(tag);
        } else if (type === "js") {
            tag = document.createElement("script");
            tag.src = url;
            tag.onload = () => resolve(url);
            tag.onerror = () => reject(url);
            document.body.appendChild(tag);
        }
    });
}

if (screen.width >= 768) {
    Promise.all([
        loadExternalResource(sakana_path + "document.css", "css"),
        loadExternalResource(sakana_path + "takina.png", "png"),
        // loadExternalResource(sakana_path + "sakana.min.js", "js"),
        loadExternalResource(sakana_path + "document.js", "js"),
        loadExternalResource(sakana_path + "locale.js", "js")
    ]);
}
