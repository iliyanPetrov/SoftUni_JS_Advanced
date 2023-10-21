function getArticleGenerator(articles) {
    
    const output = document.getElementById('content');


    return function showNextArticle(){
        if (articles.length){
            const article = document.createElement('article');
            article.textContent = articles.shift();
            output.appendChild(article)
        }
    }
}
