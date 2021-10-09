// fetch form submit
document.querySelector('form').addEventListener('submit', function(e)
{
    // prevent default
    e.preventDefault();
    // fetch all values
    let firstsub = document.getElementById('firstsub').value;
    let secondsub = document.getElementById('secondsub').value;
    let thirdsub = document.getElementById('thirdsub').value;
    let fourthsub = document.getElementById('fourthsub').value;
    let fifthsub = document.getElementById('fifthsub').value;
    let sixthsub = document.getElementById('sixthsub').value;

    let total = parseFloat(firstsub)+parseFloat(secondsub)+parseFloat(thirdsub)+parseFloat(fourthsub)+parseFloat(fifthsub)+parseFloat(secondsub);
    let grade = Math.round(total/6);
    // pass or fail
    if(total > 40)
    {
        res = "PASS";
    }else{
        res = "FAIL"
    }
    // show result
    document.getElementById('show').innerHTML ="YOUR TOTAL MARKS IS "+total+" OUT OF 600 GRADE IS "+grade+"% <br>YOU ARE "+res;
});