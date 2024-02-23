window.onload=function () {
    let name =[];
    let kor =[];
    let eng = []
    let sum = [] ;
    document.getElementById('btn').onclick = function () {

        name.push((document.getElementById('name').value));
       kor.push(Number(document.getElementById('kor').value));
        eng.push(Number(document.getElementById('eng').value));
        name.value = '';
        kor.value = '';
        eng.value = '';

    }
    document.getElementById('show').onclick = function () {
        for (let i = 0; i < name.length; i++) {
            sum[i]= kor[i] + eng[i];
            document.write(i+'.'+'이름 :'+name[i]+' 국어 점수 :'+kor[i]+' 영어 점수 :'+eng[i]+ ' 총점'+ (kor[i]+eng[i]) +' 평균 :'+ (sum[i]/2))
        }
    }
}