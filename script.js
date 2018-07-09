let alarmTimeInput =document.getElementById('alarmTime');
let alarmButton =document.getElementById('alarmButton');
let sound = document.getElementById('sound');
let snoozeBtn=document.getElementById('Snooze');
let stopBtn=document.getElementById('stop');
let alarmOptions=document.getElementById('alarmOptions');

const setAlarm = () => {
	let ms = alarmTimeInput.valueAsNumber;
	if(isNaN(ms)){
		alert('INVALID TIME! Try Again.\npress \'ok\' to continue...'); 
		return;
	}
	let alarm = new Date(ms);
	let alarmTime=new Date(alarm.getUTCFullYear(),
		alarm.getUTCMonth(),alarm.getUTCDate(),
		alarm.getHours(),alarm.getMinutes(),
		alarm.getSeconds()
	);
	let diffInMS = alarmTime.getTime() - (new Date()).getTime();
	if(diffInMS <0){
		alert("time reached");
		alarmTimeInput.value='';
		return;
	}
	else{
		console.log("alarm set!");
	}

	setTimeout(initAlarm,10000);
	alarmTimeInput.value='';
	return;
	

};

const stopAlarm =() => {
	sound.pause();
	sound.currentTime=0;
	alarmOptions.style.display="none";
}

const snoozeAlarm =()=> {
	stopAlarm();
	setTimeout(initAlarm,5*60*1000);
}

const initAlarm = () =>{
	sound.play();
	alarmOptions.style.display="flex";
};

alarmButton.addEventListener("click",setAlarm);

alarmTimeInput.addEventListener("keydown",function(event){
	if(event.which===13){
		setAlarm();
	}
});

stopBtn.addEventListener("click",stopAlarm);


snoozeBtn.addEventListener("click",snoozeAlarm);