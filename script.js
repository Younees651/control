// Toggle les sous-sections
function toggleSub(id){
  let el = document.getElementById(id);
  el.style.display = (el.style.display==="block")?"none":"block";
}

// Afficher la section principale ou sous-section
function showSection(id){
  document.querySelectorAll("main section").forEach(sec=>sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// Charger les actualités et les afficher par section
function loadNews(){
  let news = JSON.parse(localStorage.getItem("news")) || [];

  // Nettoyer toutes les listes
  let sectionIds = [
    'homeNews','first1News','first2News','first3News','first4News',
    'second1News','second2News','second3News','second4News',
    'third1News','third2News',
    'bac1News','bac2News','bac3News','allNews',
  ];

  sectionIds.forEach(id=>{
    let el = document.getElementById(id);
    if(el) el.innerHTML="";
  });

  news.forEach(n=>{
    let targetId = (n.section=="home") ? "homeNews" : n.section+"News";

    let el = document.getElementById(targetId);
    if(el) {
      const newsItem = document.createElement('div');
      newsItem.className = 'news-item';
      newsItem.innerHTML = `<strong>${n.text}</strong><br><small><i class="far fa-calendar"></i> ${n.date}</small>`;
      el.appendChild(newsItem);
    }

    // Actualités générales pour toutes les sections
    let all = document.getElementById("allNews");
    if(all) {
      const allNewsItem = document.createElement('div');
      allNewsItem.className = 'news-item';
      allNewsItem.innerHTML = `<strong>${n.text}</strong><br><small><i class="far fa-calendar"></i> ${n.date}</small>`;
      all.appendChild(allNewsItem);
    }
  });
}

// Ajouter des styles supplémentaires pour les icônes
const style = document.createElement('style');
style.textContent = `
  .welcome-icons {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 40px 0;
  }
  
  .icon-box {
    text-align: center;
    padding: 20px;
    background: rgba(102, 126, 234, 0.1);
    border-radius: 15px;
    min-width: 150px;
    transition: all 0.3s ease;
  }
  
  .icon-box:hover {
    transform: translateY(-5px);
    background: rgba(102, 126, 234, 0.2);
  }
  
  .icon-box i {
    font-size: 40px;
    color: #667eea;
    margin-bottom: 10px;
  }
  
  .about-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .dev-team {
    margin-top: 40px;
  }
  
  .dev-card {
    display: inline-block;
    text-align: center;
    margin: 20px;
    padding: 20px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    border-radius: 15px;
    min-width: 150px;
  }
  
  .dev-card i {
    font-size: 50px;
    margin-bottom: 10px;
  }
`;
document.head.appendChild(style);