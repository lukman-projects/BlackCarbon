

export const outNonEmptySocials = (userInfo) => {
    const {
        instagram,
        facebook,
        whatsapp,
        youtube,
        twitter,
        telegram,
        linkedin,
        behance,
    } = userInfo;
    const socials = {
        instagram,
        facebook,
        whatsapp,
        youtube,
        twitter,
        telegram,
        linkedin,
        behance,
    }
    const nonEmptySocials = {}
    for(let i in socials){
        if(socials[i]){
            nonEmptySocials[i] = socials[i];
        }
    }
    return nonEmptySocials;
}