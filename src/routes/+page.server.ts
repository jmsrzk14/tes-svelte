import { getCVs } from '$lib/server/cvs';

export function load() {
	return {
		cvs: getCVs()
	};
}
