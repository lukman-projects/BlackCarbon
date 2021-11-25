


const urls = {
    instagram: (username="") => "https://www.instagram.com/"+ username +"",
    linkedin: (username="") => "https://www.linkedin.com/in/"+ username +"",
    youtube: (username="") => "https://www.youtube.com/channel/"+username+"",
    whatsapp: (username="") => "https://wa.me/"+username+"",
    telegram: (username="") => "https://t.me/"+username+"",
    facebook: (username="") => "https://www.facebook.com/profile.php?id="+username+"",
    twitter: (username="") => "https://twitter.com/"+username+"",
    behance: (username="") => "https://www.behance.net/"+username+""
}

export const outSocialsNickname = (link, name) => {
    if(link && name){
        return link.replace(urls[name](), "");
    }
    return "";
}
export const buildSocialsLink = (data, name) => {
    return urls[name](data);
}