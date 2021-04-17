scorecode = (scorecode) => {
    let pr = document.getElementById('pr').value;
    let str = document.getElementById('str').value;

    str === 1 > alert("Golf code: Hole-in-one") ; console.log()
    str <= (pr -2) > alert("Golf code: Eagle") ; console.log()
    str  === (pr -1) > alert("Golf code: Birdie") ; console.log()
    str  === pr > alert("Golf code: Par") ; console.log()
    str  === (pr + 1) > alert("Golf code: Bogey") ; console.log()
    str  === (pr + 2) > alert("Golf code: Double Bogey") ; console.log()
    str  >= (pr + 3) > alert("Golf code: Go Home") ; console.log()
}