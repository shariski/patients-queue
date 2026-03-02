class Doctor {
	constructor(name, avgTime) {
		this.name = name;
		this.avgTime = avgTime;
		this.currentDuration = 0;
	}

	assignPatient() {
		this.currentDuration += this.avgTime;
	}
}

function calculateWaitTime(doctors, position) {
	let availDoctor;

	for (let i = 1; i <= position; i++) {

		availDoctor = doctors[0];
		for (let j = 1; j < doctors.length; j++) {
			const doctor = doctors[j];
			if (doctor.currentDuration < availDoctor.currentDuration) {
				availDoctor = doctor;
			}
			console.log({ availDoctor });
		}

		if (i == position) {
			return availDoctor;
		}

		availDoctor.assignPatient();
	}
}

const doctors = [new Doctor("Budi", 3), new Doctor("Aleks", 4)]

const doctor = calculateWaitTime(doctors, 7)

console.log({ doctor })
