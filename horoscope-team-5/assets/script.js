// User Details
var inputEl = document.querySelector('#month1')
var input = inputEl.value
var datePicker = document.querySelector('#datepicker')

// Buttons
var submit = document.querySelector('#submit-date')

// User Details
var userDetailsUL = document.querySelector('#userDetails')
var userSign = document.querySelector('#sign')
var userColorLI = document.querySelector('#color')
var userCompLI = document.querySelector('#compatibility')
var userDescLI = document.querySelector('#description')
var luckyNumLI = document.querySelector('#lucky_number')
var luckyTimeLI = document.querySelector('#lucky_time')
var moodLi = document.querySelector('#mood')

// Celeb Details  
var celebSign = document.querySelector('#celeb-sign')
var celebColor = document.querySelector('#celeb-color')
var celebCompatibility = document.querySelector('#celeb-compatibility')
var celebLucky_number = document.querySelector('#celeb-lucky_number')
var celebLucky_time = document.querySelector('#celeb-lucky_time')
var celebMood = document.querySelector('#celeb-mood')
var celebDescription = document.querySelector('#celeb-description')
var celebName = document.querySelector('#name')
var celebAge = document.querySelector('#age')
var height = document.querySelector('#height')
var celebNetWorth = document.querySelector('#net_worth')
var occupation = document.querySelector('#occupation')

// Sign pictures
var userSymbol = document.querySelector('.userSymbol')
var celebSymbol = document.querySelector('.celebSymbol')

// Zodiac func var's
var zodiacArr =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];

// Empty celeb var's
var celebMonth;      
var celebDay;
var celebPic = document.querySelector('.celeb-pic')

// Celebrity Names
var name = 'Michael Jordan'
var Aries =["Emma Watson", "Paul Rudd"]
var Taurus =["Kelly Clarkson", "George Klooney"]
var Gemini =["Venus Williams", "Johnny Depp"]
var Cancer =["Selena Gomez", "Chris Pratt"]
var Leo =["Chris Hemsworth", "Jennifer Lawrence"]
var Virgo =["Beyonce", "Prince Harry"]
var Libra =["Kim Kardashian", "Lil Wayne"]
var Scorpio =["Leonardo DiCaprio", "Katy Perry"]
var Sagittarius =["Britney Spears", "Brad Pitt"]
var Capricorn =["Lin-Manuel Miranda", "Kate Middleton"]
var Aquarius =["Shakira", "Harry Styles"]
var Pisces =["Justin Bieber", "John Cena"]

// Spinner
// https://stackoverflow.com/questions/1853662/how-to-show-page-loading-div-until-the-page-has-finished-loading
$(window).load(function() {
    $('.spinner-border').hide();
  });

// Date Picker
$( function() {
    $( "#datepicker" ).datepicker({
        changeYear: false,
        dateFormat: 'mm-dd',
        changeMonth: true,
    })
  } );

// On page load
if (localStorage.getItem('date')) {
    datePicker.value = localStorage.getItem('date') 
}

function zodiac(day, month){
    // returns the zodiac sign according to day and month (https://coursesweb.net/javascript/zodiac-signs_cs)
    return (day > last_day[month]) ? zodiacArr[month*1 + 1] : zodiacArr[month];
}

// Evenlisteners
submit.addEventListener('click', function(){
    $( "div" ).removeClass( "hide" );
    localStorage.setItem('date', datepicker.value)
    var userBday = localStorage.getItem('date')
    var uBdayArr = userBday.split('/')
    var callZSign = zodiac(parseInt(uBdayArr[1]), parseInt(uBdayArr[0]))
    // Func that shows celeb details)
    dateToSign(callZSign)
})

function dateToSign (z_sign) {
    fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${z_sign}&day=today`, {
    "method": "POST",
    "headers": {
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "x-rapidapi-key": "e62a7796a3msh0623a8dce54fae1p10c5c9jsn4bfcafdb2b2b"
        }
    })
    .then(response => {
        return response.json();
    }).then(function (horoscopeData){
            // User details
            userSymbol.src = `./images/${z_sign}.jpg`
            userSign.innerHTML='Sign: ' + z_sign
            userColorLI.innerHTML="Color:  " + horoscopeData.color
            userCompLI.innerHTML="Compatibility:  " + horoscopeData.compatibility
            userDescLI.innerHTML=horoscopeData.description
            luckyNumLI.innerHTML="Lucky Number:  " + horoscopeData.lucky_number
            luckyTimeLI.innerHTML="Lucky Time:  " + horoscopeData.lucky_time
            moodLi.innerHTML="Mood:  " + horoscopeData.mood
            // Switch statement to check the compatibility
            switch (horoscopeData.compatibility) {
                case 'Sagittarius':
                    var userCelebrity = Sagittarius[Math.floor(Math.random()*Sagittarius.length)]
                    console.log(userCelebrity)
                    celebSymbol.src = './images/Sagittarius.jpg'
                    celebFunc('Sagittarius')
                    callCeleb(userCelebrity)
                    if (userCelebrity == 'Brad Pitt') {
                        celebPic.src = './assets/celeb/Brad-Pitt.png'
                    } else {
                        celebPic.src = './assets/celeb/Britney-Spears.jpg'  
                    }
                    break;
                case 'Aries':
                    var userCelebrity  = Aries[Math.floor(Math.random()*Aries.length)];
                    celebSymbol.src = './images/Aries.jpg'
                    console.log(userCelebrity);
                    celebFunc('Aries')
                    callCeleb(userCelebrity)
                    if (userCelebrity == 'Paul Rudd') {
                        celebPic.src = './assets/celeb/Paul-Rudd.jpg'
                    } else {
                        celebPic.src = './assets/celeb/Emma-Watson.jpg'  
                    }
                    break;
                case 'Aquarius':
                    var userCelebrity  = Aquarius[Math.floor(Math.random()*Aquarius.length)];
                    celebSymbol.src = './images/Aquarius.jpg'
                    console.log(userCelebrity);
                    celebFunc('Aquarius')
                    callCeleb(userCelebrity)
                    if (userCelebrity == 'Shakira') {
                        celebPic.src = './assets/celeb/Shakira.jpg'
                    } else {
                        celebPic.src = './assets/celeb/Harry-Styles.jpg'  
                    }
                    break;
                case 'Capricorn':
                    var userCelebrity  = Capricorn[Math.floor(Math.random()*Capricorn.length)];
                    celebSymbol.src = './images/Capricorn.jpg'
                    console.log(userCelebrity);
                    celebFunc('Capricorn')
                    callCeleb(userCelebrity)
                    if (userCelebrity == 'Kate Middleton') {
                        celebPic.src = './assets/celeb/Kate-Middleton.png'
                    } else {
                        celebPic.src = './assets/celeb/Lin-Manuel-Miranda.jpg'  
                    }
                    break;
                case 'Pisces':
                    var userCelebrity  = Pisces[Math.floor(Math.random()*Pisces.length)];
                    celebSymbol.src = './images/Pisces.jpg'
                    console.log(userCelebrity);
                    celebFunc('Pisces')
                    callCeleb(userCelebrity)
                    if (userCelebrity == 'John Cena') {
                        celebPic.src = './assets/celeb/John-Cena.jpg'
                    } else {
                        celebPic.src = './assets/celeb/Justin-Bieber.jpg'  
                    }
                    break;    
                case 'Gemini':
                    var userCelebrity  = Gemini[Math.floor(Math.random()*Gemini.length)];
                    celebSymbol.src = './images/Gemini.jpg'
                    console.log(userCelebrity);
                    celebSymbol.src = './images/Gemini.jpg'
                    celebFunc('Gemini')
                    callCeleb(userCelebrity)
                    if (userCelebrity == 'Venus Williams') {
                        celebPic.src = './assets/celeb/Venus-Williams.jpg'
                    } else {
                        celebPic.src = './assets/celeb/Johnny-Depp.jpg'  
                    }
                    break;
                case 'Cancer':
                    var userCelebrity  = Cancer[Math.floor(Math.random()*Cancer.length)];
                    celebSymbol.src = './images/Cancer.jpg'
                    console.log(userCelebrity);
                    celebSymbol.src = './images/Cancer.jpg'
                    celebFunc('Cancer')
                    callCeleb(userCelebrity)
                    if (userCelebrity == 'Selena Gomez') {
                        celebPic.src = './assets/celeb/Selena-Gomez.jpg'
                    } else {
                        celebPic.src = './assets/celeb/Chris-Pratt.jpg'  
                    }
                    break;
                case 'Leo':
                    var userCelebrity  = Leo[Math.floor(Math.random()*Leo.length)];
                    celebSymbol.src = './images/Leo.jpg'
                    console.log(userCelebrity);
                    celebFunc('Leo')
                    callCeleb(userCelebrity)
                    if (userCelebrity == 'Jennifer Lawrence') {
                        celebPic.src = './assets/celeb/Jennifer-Lawrence.png'
                    } else {
                        celebPic.src = './assets/celeb/Chris-Hemsworth.webp'  
                    }
                    break;
                case 'Virgo':
                    var userCelebrity  = Virgo[Math.floor(Math.random()*Virgo.length)];
                    celebSymbol.src = './images/Virgo.jpg'
                    console.log(userCelebrity);
                    celebFunc('Virgo')
                    callCeleb(userCelebrity)
                    if (userCelebrity == 'Beyonce') {
                        celebPic.src = './assets/celeb/Beyonce.png'
                    } else {
                        celebPic.src = './assets/celeb/Prince-Harry.jpg'  
                    }
                    break;
                case 'Libra':
                    var userCelebrity  = Libra[Math.floor(Math.random()*Libra.length)];
                    console.log(userCelebrity);
                    celebSymbol.src = './images/Libra.jpg'
                    celebFunc('Libra')
                    callCeleb(userCelebrity)
                    if (userCelebrity == 'Lil Wayne') {
                        celebPic.src = './assets/celeb/Lil-Wayne.jpg'
                    } else {
                        celebPic.src = './assets/celeb/Kim-Kardashian.jpg'  
                    }
                    break;
                case 'Taurus':
                    var userCelebrity  = Taurus[Math.floor(Math.random()*Taurus.length)];
                    celebSymbol.src = './images/Taurus.jpg'
                    console.log(userCelebrity);
                    celebFunc('Taurus')
                    callCeleb(userCelebrity)
                    if (userCelebrity == 'George Klooney') {
                        celebPic.src = './assets/celeb/George-Klooney.jpg'
                    } else {
                        celebPic.src = './assets/celeb/Johnny-Depp.jpg'  
                    }
                    break;
                    case 'Taurus':
                    var userCelebrity  = Taurus[Math.floor(Math.random()*Taurus.length)];
                    celebSymbol.src = './images/Taurus.jpg'
                    console.log(userCelebrity);
                    celebFunc('Taurus')
                    callCeleb(userCelebrity)
                    if (userCelebrity == 'Kelly Clarkson') {
                        celebPic.src = './assets/celeb/kelly-Clarkson.webp'
                    } else {
                        celebPic.src = './assets/celeb/George-Clooney.jpg'  
                    }
                    break;
                default:
                    // console.log('wrong')
                    break;   
            }
    })
    .catch(err => {
        console.error(err)
    });
};

function celebFunc (z_sign) {
    fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${z_sign}&day=today`, {
    "method": "POST",
    "headers": {
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "x-rapidapi-key": "e62a7796a3msh0623a8dce54fae1p10c5c9jsn4bfcafdb2b2b"
        }
    })
    .then(response => {
        return response.json();
    }).then(function (horoscopeData){
        celebSign.innerHTML = 'Sign: ' + z_sign
        celebColor.innerHTML="Color: " + horoscopeData.color
        celebLucky_number.innerHTML="Lucky Number: " + horoscopeData.lucky_number
        celebLucky_time.innerHTML="Lucky Time: " + horoscopeData.lucky_time
        celebMood.innerHTML="Mood: " + horoscopeData.mood
        celebDescription.innerHTML=+ horoscopeData.description
    })
    .catch(err => {
        // console.error(err);
    });
};

// Call Celeb
function callCeleb (name) {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/celebrity?name=' + name,
        headers: { 'X-Api-Key': 'mM3hOIKpYsVAmBopD3qVFA==mPctNJmaPTOScjRr'},
        contentType: 'application/json',
        
    }).then((res) => {
        console.log('callCeleb ' + name)
        celebName.textContent = res[0].name.toUpperCase();
        celebAge.textContent = 'Age: ' + res[0].age;
        // console.log(res[0].height + ' height in meters')
        function convertHeight () {
            var heightInInches = Math.floor(res[0].height* 39.37);
            var feet = Math.floor(heightInInches / 12);
            var inches = (heightInInches % 12)
            return 'Height: ' + feet + "'" + inches +'"' 
        }
        height.textContent = convertHeight();
        celebNetWorth.textContent ='Networth: $' + res[0].net_worth;
    })
};
