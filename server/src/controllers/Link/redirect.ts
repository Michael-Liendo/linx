import Services from '../../services';

import type { Reply, Request } from '../../types';

export default async function redirect(request: Request, reply: Reply) {
	const headers = request.headers;
	const sec_ch_ua_platform = Array.isArray(headers['sec-ch-ua-platform'])
		? headers['sec-ch-ua-platform'][0]
		: headers['sec-ch-ua-platform'];
	const shorter_name = (request.params as { shorter_name: string })
		.shorter_name;

	const link = await Services.link.getByShorterName(shorter_name);
	const redirect = await Services.redirect.create({
		link_id: link.id,
		ip: request.ip,
		accept_language: headers['accept-language'],
		user_agent: headers['user-agent'],
		sec_ch_ua_platform: sec_ch_ua_platform,
	});

	return reply.redirect(link.url);
}
