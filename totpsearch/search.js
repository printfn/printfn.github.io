function calculate() {
	try {
		const secret = document.getElementById('secret').value;
		const code = document.getElementById('code').value;
		const maxOffset = Number.parseFloat(document.getElementById('maxDistance').value) * 3600 * 1000;
		const totp = new jsOTP.totp();
		const baseline = new Date().valueOf();
		let offset = 0;
		while (offset < maxOffset) {
			if (totp.getOtp(secret, baseline + offset) === code) {
				alert(new Date(baseline + offset));
				return;
			} else if (totp.getOtp(secret, baseline - offset) === code) {
				alert(new Date(baseline - offset));
				return;
			}
			offset += 30000;
		}
		alert('could not find match');
	} catch (e) {
		alert('Error: ' + e);
	}
}
