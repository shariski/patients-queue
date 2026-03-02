import { describe, it, expect } from "vitest";
import { Doctor, calculateWaitTime } from "./doc_queue.js";

describe("calculateWaitTime", () => {
	it("should calculate correct wait time for 2 doctors", () => {
		const doctors = [
			new Doctor("Budi", 3),
			new Doctor("Aleks", 4),
		];

		const result = calculateWaitTime(doctors, 7);
		expect(result).toBe(9);
	});

	it("should throw if no doctors", () => {
		expect(() => calculateWaitTime([], 3))
			.toThrow("No doctor available");
	});

	it("should throw if position < 1", () => {
		const doctors = [new Doctor("Budi", 3)];
		expect(() => calculateWaitTime(doctors, 0))
			.toThrow();
	});

	it("should not mutate original doctors (if pure version)", () => {
		const doctors = [new Doctor("Budi", 3)];
		calculateWaitTime(doctors, 3);

		expect(doctors[0].currentDuration).toBe(0);
	});
});
