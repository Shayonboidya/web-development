let scores = { math: 90, science: 85, art: 95 };

// log key valu using loop
for (let x in scores) {
    console.log(x + " : " + scores[x]);
}

// avg in vhalu
let sum = 0, cnt = 0;
for (let x in scores) {
    sum += scores[x];
    cnt++;
}
console.log("avarage: " + sum / cnt);