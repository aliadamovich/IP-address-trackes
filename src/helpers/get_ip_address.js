export async function getIpAddress(ip) {
	const resp = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=69da52686a37480386cf16a8452f25bb&ip_address=${ip}`);
	return await resp.json();
}