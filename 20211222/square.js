function solution(w, h) {
    let long = w > h ? w : h;
    let short = w > h ? h : w;
    let g = short;
    
    while (long % short !== 0)
    {
        g = long % short;
        long = short;
        short = g;
    }
    return (w * h - (w + h - g));
}