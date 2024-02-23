window.onload=function () {
    document.getElementById('btn').onclick=function () {
        let su1 = Number(document.getElementById('first').value);
        let su2 = Number(document.getElementById('second').value);

        let add=function (su1,su2) {
            console.log('su1과 su2의 합은'+ (su1+su2))
            console.log('-------------');
        }
        add(su1,su2);
        let sub=function (su1,su2) {
            console.log('su1과 su2의 뺄셈값은'+(su1-su2));
            console.log('------------');
        }
        sub(su1,su2);
        let mul=function (su1,su2) {
            console.log('su1과 su2를 곱한 값은'+ (su1*su2));
        }
        mul(su1,su2);
        console.log('------------');
         let div = function (su1,su2){
             if (su2 ===0){
                 console.log('0으로 나눌 수 없습니다.')
             }else {console.log('su1과 su2 를 나눈 값은'+(su1/su2))}
         }; div(su1,su2);

    }
}