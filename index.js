class Doctor {
	constructor(name, avgTime) {
		this.name = name;
		this.avgTime = avgTime;
		this.currentDuration = 0;
	}

	asssignPatient() {
		this.currentDuration += this.avgTime;
	}
}

function calculateWaitTime(doctors, position) {
	let availDoctor;
	let currentDuration = 0;
	for (let i = 0; i < doctors.length; i++) {
		const doctor = doctors[i];
		if (doctor.currentDuration <= currentDuration) {
			availDoctor = doctor;
		}
	}
}
