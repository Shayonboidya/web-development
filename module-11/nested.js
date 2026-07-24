const collage = {
    nameOfCollage : "SN collage",
    events : ["21 feb", "26 march", "independent day", "vectory day"],
    student : 900,
    pepole : {
        staf : 200,
        principle : {
            name : "SM. Khali",
            exprience : 28,
            deperment : "english"
        }
    }
}

console.log(collage.pepole.principle.name);//SM> Khali
console.log(collage["pepole"]["staf"])//200
console.log(collage["events"][2])//independent day
