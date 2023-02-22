
async function createLink() {
    const span = document.createElement("span");
    span.textContent = "Lire avec BNF";
    span.className = "sub-stamp-component etiquette ophirofox-europresse";

    const a = document.createElement("a");
    var newUrl = new URL(window.location);
    newUrl.host = "www-arretsurimages-net.bnf.idm.oclc.org";
    a.href = newUrl;

    a.appendChild(span);

    return a;
}
//https://bnf.idm.oclc.org/login?url=http://www.arretsurimages.net/autologin.php
//https://www-arretsurimages-net.bnf.idm.oclc.org/

function findPremiumBanner() {
    
    const articleContainer = document.querySelector(".article-content");
    if (!articleContainer) return null;
    
    const elems = articleContainer.querySelectorAll("span");
    
    return [...elems].find(d => d.textContent.includes("Réservé à nos abonné.e.s"))
}

async function onLoad() {
    
    const config = await ophirofox_config;
  
    if(config.name !== 'BNF'){
        return;
    }
    
    const reserve = findPremiumBanner();
    if (!reserve) return;

    reserve.parentElement.appendChild(await createLink());
}

setTimeout(function(){
    onLoad().catch(console.error);
}, 1000);