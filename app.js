const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');


const workHs = document.getElementById('workHs');
const playHs = document.getElementById('playHs');
const studyHs = document.getElementById('studyHs');
const excerciseHs = document.getElementById('excerciseHs');
const socialHs = document.getElementById('socialHs');
const selfCareHs = document.getElementById('selfCareHs');


const workTimeframes = document.getElementById('workTimeframes');
const playTimeframes = document.getElementById('playTimeframes');
const studyTimeframes = document.getElementById('studyTimeframes');
const excerciseHsTimeframes = document.getElementById('excerciseTimeframes');
const socialTimeframes = document.getElementById('socialTimeframes');
const selfCareTimeframes = document.getElementById('selfCareTimeframes');

let selected;

const getData = () => {

    fetch('./data.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            // daily Statics
            let dailyWorkHs = data[0].timeframes.daily.current;
            let dailyPlayHs = data[1].timeframes.daily.current;
            let dailyStudyHs = data[2].timeframes.daily.current;
            let dailyExcerciseHs = data[3].timeframes.daily.current;
            let dailySocialHs = data[4].timeframes.daily.current;
            let dailySelfCareHs = data[5].timeframes.daily.current;

            let dailyWorkTimeframes = data[0].timeframes.daily.previous;
            let dailyPlayTimeframes = data[1].timeframes.daily.previous;
            let dailyStudyTimeframes = data[2].timeframes.daily.previous;
            let dailyExcerciseTimeframes = data[3].timeframes.daily.previous;
            let dailySocialTimeframes = data[4].timeframes.daily.previous;
            let dailySelfCareTimeframes = data[5].timeframes.daily.previous;

        
            
            daily.addEventListener('click' , function () {
                workHs.textContent = `${dailyWorkHs}hrs`
                playHs.textContent = `${dailyPlayHs}hrs`;
                studyHs.textContent = `${dailyStudyHs}hrs`;
                excerciseHs.textContent = `${dailyExcerciseHs}hrs`;
                socialHs.textContent = `${dailySocialHs}hrs`;
                selfCareHs.textContent = `${dailySelfCareHs}hrs`;

                workTimeframes.textContent = `Last Day - ${dailyWorkTimeframes}hrs`;
                playTimeframes.textContent = `Last Day - ${dailyPlayTimeframes}hrs`;
                studyTimeframes.textContent = `Last Day - ${dailyStudyTimeframes}hrs`;
                excerciseHsTimeframes.textContent = `Last Day - ${dailyExcerciseTimeframes}hrs`;
                socialTimeframes.textContent = `Last Day - ${dailySocialTimeframes}hrs`;
                selfCareTimeframes.textContent = `Last Day - ${dailySelfCareTimeframes}hrs`;
                
                daily.classList.add('selected');
                weekly.classList.remove('selected');
                monthly.classList.remove('selected');
            });
        
            // weekly Statics

            let weeklyWorkHs = data[0].timeframes.weekly.current;
            let weeklyPlayHs = data[1].timeframes.weekly.current;
            let weeklyStudyHs = data[2].timeframes.weekly.current;
            let weeklyExcerciseHs = data[3].timeframes.weekly.current;
            let weeklySocialHs = data[4].timeframes.weekly.current;
            let weeklySelfCareHs = data[5].timeframes.weekly.current;

            let weeklyWorkTimeframes = data[0].timeframes.weekly.previous;
            let weeklyPlayTimeframes = data[1].timeframes.weekly.previous;
            let weeklyStudyTimeframes = data[2].timeframes.weekly.previous;
            let weeklyExcerciseTimeframes = data[3].timeframes.weekly.previous;
            let weeklySocialTimeframes = data[4].timeframes.weekly.previous;
            let weeklySelfCareTimeframes = data[5].timeframes.weekly.previous;


            weekly.addEventListener('click' , function () {
                
                workHs.textContent = `${weeklyWorkHs}hrs`;
                playHs.textContent = `${weeklyPlayHs}hrs`;
                studyHs.textContent = `${weeklyStudyHs}hrs`;
                excerciseHs.textContent = `${weeklyExcerciseHs}hrs`;
                socialHs.textContent = `${weeklySocialHs}hrs`;
                selfCareHs.textContent = `${weeklySelfCareHs}hrs`;

                workTimeframes.textContent = `Last Week - ${weeklyWorkTimeframes}hrs`;
                playTimeframes.textContent = `Last Week - ${weeklyPlayTimeframes}hrs`;
                studyTimeframes.textContent = `Last Week - ${weeklyStudyTimeframes}hrs`;
                excerciseHsTimeframes.textContent = `Last Week - ${weeklyExcerciseTimeframes}hrs`;
                socialTimeframes.textContent = `Last Week - ${weeklySocialTimeframes}hrs`;
                selfCareTimeframes.textContent = `Last Week - ${weeklySelfCareTimeframes}hrs`;

                daily.classList.remove('selected');
                weekly.classList.add('selected');
                monthly.classList.remove('selected');

            });
        
        
        


            // monthly Statics
            let monthlyWorkHs = data[0].timeframes.monthly.current;
            let monthlyPlayHs = data[1].timeframes.monthly.current;
            let monthlyStudyHs = data[2].timeframes.monthly.current;
            let monthlyExcerciseHs = data[3].timeframes.monthly.current;
            let monthlySocialHs = data[4].timeframes.monthly.current;
            let monthlySelfCareHs = data[5].timeframes.monthly.current;

            let monthlyWorkTimeframes = data[0].timeframes.monthly.previous;
            let monthlyPlayTimeframes = data[1].timeframes.monthly.previous;
            let monthlyStudyTimeframes = data[2].timeframes.monthly.previous;
            let monthlyExcerciseTimeframes = data[3].timeframes.monthly.previous;
            let monthlySocialTimeframes = data[4].timeframes.monthly.previous;
            let monthlySelfCareTimeframes = data[5].timeframes.monthly.previous;


            monthly.addEventListener('click' , function () {
                
                workHs.textContent = `${monthlyWorkHs}hrs`;
                playHs.textContent = `${monthlyPlayHs}hrs`;
                studyHs.textContent = `${monthlyStudyHs}hrs`;
                excerciseHs.textContent = `${monthlyExcerciseHs}hrs`;
                socialHs.textContent = `${monthlySocialHs}hrs`;
                selfCareHs.textContent = `${monthlySelfCareHs}hrs`;

                workTimeframes.textContent = `Last Month - ${monthlyWorkTimeframes}hrs`;
                playTimeframes.textContent = `Last Month - ${monthlyPlayTimeframes}hrs`;
                studyTimeframes.textContent = `Last Month - ${monthlyStudyTimeframes}hrs`;
                excerciseHsTimeframes.textContent = `Last Month - ${monthlyExcerciseTimeframes}hrs`;
                socialTimeframes.textContent = `Last Month - ${monthlySocialTimeframes}hrs`;
                selfCareTimeframes.textContent = `Last Month - ${monthlySelfCareTimeframes}hrs`;

                daily.classList.remove('selected');
                weekly.classList.remove('selected');
                monthly.classList.add('selected');

            });
        
        });

};

getData();


