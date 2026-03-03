export class Doctor {
	constructor(name, avgTime) {
		this.name = name;
		this.avgTime = avgTime;
		this.currentDuration = 0;
	}

	assignPatient() {
		this.currentDuration += this.avgTime;
	}
}

export function calculateWaitTime(doctors, position) {
	// Validate that array of Doctor(s) is not empty.
	if (doctors.length === 0) {
		throw new Error("No doctor available");
	}

	// Validate position should start from 1.
	if (position < 1) {
		throw new Error("Queue start at 1");
	}

	// Re-initiation, so operations don't update referenced objects.
	const states = doctors.map(o => new Doctor(o.name, o.avgTime));

	for (let i = 1; i <= position; i++) {

		// Linear scan to select doctor with minimum accumulated workload.
		// Doctor with lowest duration is chosen for current queue position.
		let selectedDoctor = states[0];
		for (let j = 1; j < states.length; j++) {
			const doctor = states[j];
			if (doctor.currentDuration < selectedDoctor.currentDuration) {
				selectedDoctor = doctor;
			}
		}

		// Stop condition, return the result, don't update doctor state.
		if (i === position) {
			return selectedDoctor.currentDuration;
		}

		selectedDoctor.assignPatient();
	}
}

const doctors = [new Doctor("John", 3), new Doctor("Ricky", 4)];
console.log("Waiting time:", calculateWaitTime(doctors, 6));
